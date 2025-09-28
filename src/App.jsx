import { useState } from 'react'
import Home from './components/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-800'>AI Image Enhancer {" "}</h1>
        <p className='mt-5 text-lg text-gray-600'>Upload your Image and let AI enhance it for You!!</p>
      </div>
 <Home/>

<div className='text-lg text-gray-500'>
<h2 className='mt-6'>Powered by AI</h2>
</div>

    </div>
  )
}

export default App
