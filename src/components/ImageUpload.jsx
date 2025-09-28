import React from 'react'

const ImageUpload = (props) => {
const ShowImageHandler=(event)=>{
    event.preventDefault();
   const file= event.target.files[0];
   if (file) {
    props.UploadImageHandler(file);
   }
}

  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 w-90'>
        <label htmlFor="fileInput" className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all'>
            <input type="file" name="" id="fileInput" className='hidden' onChange={ShowImageHandler}/>
            <span className='text-lg font-medium text-gray-600'>Click and drag to upload your image</span>
        </label>
    </div>
  )
}

export default ImageUpload