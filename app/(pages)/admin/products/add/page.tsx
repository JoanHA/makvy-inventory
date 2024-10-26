"use client";
import React from "react";
import { useForm } from "react-hook-form";
function page() {
const {handleSubmit, register, formState:{errors}} = useForm();
interface Product{
  name: string;
  reference: string;
  description: string;
  price: number;
  quantity: number;
}
const onSubmit = handleSubmit((data)=>{
  console.log(data);
  
});
  return (
    <div className="container self-center">
      <div className="w-full items-center justify-center flex flex-col">
        <div>
          <h1>Agrega tus nuevos exitos</h1>
        </div>

        <form className="w-2/3 mx-auto px-4" onSubmit={onSubmit}>
          {" "}
          <div className="flex w-full justify-between flex-col gap-2 ">
            <div>
              <label htmlFor=""  className="block mb-2 text-sm font-bold text-gray-900 ">Nombre del producto:</label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                {...register("name",{
                 required: true
                })}
                placeholder="Nombre del producto..."
              />
              {errors.name?.type == "required" && (
                <p className="text-red-500 text-sm">Este campo es obligatorio </p>
              )}
            </div>
            <div>
              <label htmlFor=""   className="block mb-2 text-sm font-bold text-gray-900 ">Referencia:</label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                {...register("reference",{
        
                 })}
                placeholder="Referencia..."
              />
            </div>
            <div>
              <label htmlFor=""   className="block mb-2 text-sm font-bold text-gray-900 ">Precio al por mayor:</label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                {...register("boughtPrice",{
                 })}
                placeholder="Precio al por mayor..."
              />
            </div>
            <div>
              <label htmlFor=""   className="block mb-2 text-sm font-bold text-gray-900 ">Categoria:</label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white  focus:border-purple-500"
                id="grid-state "
              >
                <option value=""> Selecciona una categoria</option>
                <option value=""> Bolsos </option>
                <option value=""> Bodys</option>
                <option value="">Carteras</option>
                <option value=""> Blusas</option>
              </select>
            </div>
            <div>
              <label htmlFor=""   className="block mb-2 text-sm font-bold text-gray-900 ">Descripcion:</label>
              <textarea
              {...register("description")}
                id=""
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Descripcion"
                
              ></textarea>
            
            </div>
            <div>
              <label htmlFor=""   className="block mb-2 text-sm font-bold text-gray-900 ">Precio:</label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                {...register("price",{
                  required: true, 
                 })}
                type="number"
                placeholder="$0000.00"
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-bold text-gray-900 "
                htmlFor="multiple_files"
                {...register("images",{
                  required: true, 
                 })}
              >
                Imagenes
              </label>

              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer  focus:outline-none  focus:border-purple-500 bg-gray-200 p-2  dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                multiple
              />
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
            <div>
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
                type="submit"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
