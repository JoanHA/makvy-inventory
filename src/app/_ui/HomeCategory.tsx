import React from 'react'
import ProductCarrusel from './components/ProductCarrusel'

function HomeCategory() {
  return (
    <div className='w-full '>
            <div className="flex flex-col">
                    <div className='flex justify-center'>
                        <div className='w-1/2 flex flex-col gap-5'>
                            <h1 className='text-center text-6xl font-bold tracking-wide'>Categoria</h1>
                            <p className='m-0 text-wrap text-center '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nisi exercitationem sunt. Rerum commodi  Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className='flex  justify-center mt-5'>
                        <div className=' '>
                            <ul className='flex justify-center  flex-row gap-6'>
                                <li className='hover:bg-blue-500 rounded hover:text-white  px-4 py-1 border border-dashed border-purple-400 '>Bolsos</li>
                                <li  className='hover:bg-blue-500 rounded hover:text-white  px-4 py-1  border border-dashed border-purple-400'>  Cateras</li>
                                <li  className='hover:bg-blue-500 rounded hover:text-white  px-4 py-1  border border-dashed border-purple-400'>Blusas</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ProductCarrusel></ProductCarrusel>
                    </div>
            </div>
    </div>
  )
}

export default HomeCategory