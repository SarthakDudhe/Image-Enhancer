import axios from "axios";

const API_KEY="wx0dmjosk83qbabae"
const BASE_URL="https://techhk.aoscdn.com/"



export const enhancedImageApi = async (file) => {
    //code to call api and get enhanced image

try {
 const Taskid =await uploadImage(file)   
console.log(Taskid)

const EnhancedImageData = await PollingForEnhanced(Taskid)
console.log(EnhancedImageData)
return EnhancedImageData


 
} catch (error) {
    console.log('Error enhancing Image : ',error)
}



}



const uploadImage = async(file)=>{
//upload image
//
const formData = new FormData()
formData.append("image_file",file);

const {data} = await axios.post(`${BASE_URL}/api/tasks/visual/scale`,formData,
    {
        headers:{
            "Content-Type":"multipart/form-data",
            "X-API-KEY":API_KEY,
        },
    }
);


if (!data?.data?.task_id) {
    throw new Error("Failed to Upload Image ! Task Id Not Found");
    
    
}


return data.data.task_id;
}


const fetchEnhancedImage = async (Taskid)=>{
//get enhanced image
///api/tasks/visual/scale/{task_id}

const {data} = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${Taskid}`,
    {
        headers:{
            "X-API-KEY":API_KEY,
        }
    }
)

if (!data?.data) {
    throw new Error("Failed to Fetch enhanced Image ! Task Id Not Found");
    
    
}

return data.data;

}


const PollingForEnhanced = async(Taskid,retries = 0)=>{
    const result = await fetchEnhancedImage(Taskid);

    if (result.state ===4) {
        console.log(`Processing...  ${retries}/20 `)
    

    if (retries>=20) {
        throw new Error("Max retries Reached. PLease try again later");
        
    }

    //wait for 2 seconds
    await new Promise((resolve)=>setTimeout(resolve,2000)); 
    return PollingForEnhanced(Taskid,retries+1);
    
    }

console.log(result)
return result
}