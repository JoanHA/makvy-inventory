import React from 'react'

export default function Sidebar() {
  return (
    <div className='p-4 flex flex-col gap-4'>
      <div className='flex flex-col gap-3'>
        <h2 className='m-0'>Categorias</h2>
        <div >
          <ul className='flex flex-col gap-3'>
            <li>Todos</li>
            <li>Ropa</li>
            <li>Calzado</li>
            <li>Accesorios</li>
            <li>Muebles</li>
            <li>Cuidado personal</li>
            <li>Mas vendidos</li>
            <li>Nuevos llegan</li>
            <li>Destacados</li>
            <li>Ofertas especiales</li>
          </ul>
        </div>
      </div>
      <div  className='flex flex-col gap-1'>
        <h2  className='m-0'>Ordenar por</h2>
        <div>
          <ul className='flex flex-col gap-3'>
            <li>Categorias</li>
            <li>Menor precio</li>
            <li>A-Z</li>
            <li>Z-A</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <h2  className='m-0'>Modo de vista</h2>
        <div>
          <ul className='flex flex-col gap-3'>
            <li>Cuadrado</li>
            <li>Lista</li>
          </ul>
        </div>
      </div>
      <div >
        <ul className='flex flex-col gap-3 border-t-[#d9dce2] border-1'>
          <li>Numero 1</li>
          <li>Numero 2</li>
          <li>Numero 3</li>
        </ul>
      </div>
    </div>
  )
}
