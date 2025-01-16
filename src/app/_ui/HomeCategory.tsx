import React from 'react'
import ProductCarrusel from './components/ProductCarrusel'

function HomeCategory() {
  return (
    <div className='w-full '>
            <div className="flex flex-col">
                    <div className='flex justify-center'>
                        <div className='w-1/2'>
                            <h1 className='text-center text-6xl'>Categoria</h1>
                            <p className='m-0 text-wrap text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nisi exercitationem sunt. Rerum commodi </p>
                        </div>
                    </div>
                    <div className='flex  justify-center mt-5'>
                        <div className=' '>
                            <ul className='flex justify-center  flex-row gap-6'>
                                <li>Bolsos</li>
                                <li>Cateras</li>
                                <li>Blusas</li>
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