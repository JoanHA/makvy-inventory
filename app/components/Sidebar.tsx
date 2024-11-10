import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h2 className="m-0">Categorias</h2>
        <div>
          <ul className="flex flex-col gap-3">
              <Link className="hover:bg-gray-50 p-1 rounded-sm font-medium " href={""}>
              <li>Todos</li>
            </Link>
              <Link className="hover:bg-gray-50 p-1 rounded-sm font-medium " href={""}>
              <li>Ropa</li>
            </Link>
              <Link className="hover:bg-gray-50 p-1 rounded-sm font-medium " href={""}>
              <li>Calzado</li>
            </Link>
              <Link className="hover:bg-gray-50 p-1 rounded-sm font-medium " href={""}>
              <li>Accesorios</li>
            </Link>
              <Link className="hover:bg-gray-50 p-1 rounded-sm font-medium " href={""}>
              <li>Muebles</li>
            </Link>
              <Link className="hover:bg-gray-50 p-1 rounded-sm font-medium " href={""}>
              <li>Cuidado personal</li>
            </Link>
              <Link className="hover:bg-gray-50 p-1 rounded-sm font-medium " href={""}>
              <li>Mas vendidos</li>
            </Link>
              <Link className="hover:bg-gray-50 p-1 rounded-sm font-medium " href={""}>
              <li>Nuevos llegan</li>
            </Link>
              <Link className="hover:bg-gray-50 p-1 rounded-sm font-medium " href={""}>
              <li>Destacados</li>
            </Link>
              <Link className="hover:bg-gray-50 p-1 rounded-sm font-medium " href={""}>
              <li>Ofertas especiales</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="m-0">Ordenar por</h2>
        <div>
          <ul className="flex flex-col gap-3">
            <li>Categorias</li>
            <li>Menor precio</li>
            <li>A-Z</li>
            <li>Z-A</li>
          </ul>
        </div>
      </div>
      {/* <div className='flex flex-col gap-1'>
        <h2  className='m-0'>Modo de vista</h2>
        <div>
          <ul className='flex flex-col gap-3'>
            <li>Cuadrado</li>
            <li>Lista</li>
          </ul>
        </div>
      </div> */}
      <div>
        <ul className="flex flex-col gap-3 border-t-[#d9dce2] border-1">
          <li>Numero 1</li>
          <li>Numero 2</li>
          <li>Numero 3</li>
        </ul>
      </div>
    </div>
  );
}
