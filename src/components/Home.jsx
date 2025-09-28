import React,{useState} from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhancedImageApi } from './utils/enhancedImageApi'

const Home = () => {
     const [uploadImage,setUploadImage] = useState(null)
     const [enhancedImage,setEnhancedImage] = useState(null)
     const[loading,setloading]=useState(false)

//as we cant save image we will convert the image to URL i.e making the object and save that URL to get that file using URL.createObjectURL(file_name) 
const UploadImageHandler = async (file) =>{
setUploadImage(URL.createObjectURL(file))
setloading(true)
//calling the API to enhance the image 

try {
  const enhancedURL = await enhancedImageApi(file);
   setEnhancedImage(enhancedURL);
   setloading(false)
} catch (error) {
  console.log(error)
}

console.log(enhancedImage)

}

  return (
   
    <>
<ImageUpload UploadImageHandler={UploadImageHandler}/>
<ImagePreview loading={loading} uploaded = {uploadImage} enhanced ={enhancedImage?.image}  />

    </>
  )
}

export default Home