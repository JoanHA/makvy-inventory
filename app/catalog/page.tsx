import React from "react";
import Header from "../components/Header";

export default function Page() {
  return (
    <div className="w-full">
      {/* Buscador */}
      <Header></Header>
      {/* Cuerpo */}
      <div>
        {/* Categorias - ordenar por .*/}
        <div>Categorias</div>
        {/* Productos */}
        <div>Todos los productos</div>
      </div>
    </div>
  );
}
