"use client";
import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
function Page() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    Swal.fire({
      title: "Estas segura de guardar este producto??",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, guardar!",
      cancelButtonText: "Cancelar",
    }).then( async (result) => {
      if (result.isConfirmed) {
        const { images, ...products } = data;
        const ProductContent = new FormData();

        // Añadir propiedades del producto a FormData
        Object.keys(products).forEach((key) => {
          ProductContent.append(key, (products )[key]);
        });

        // Añadir imágenes a FormData
        let index = 0;
        ProductContent.append("qty", images.length);

        for (const element of images) {
          ProductContent.append(`images${index}`, element);
          index++;
        }

        // Enviar FormData al backend
        const res = await axios.post("/api/products", ProductContent, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (res.data.status == 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: res.data.msg,
            showConfirmButton: false,
            timer: 1500
          }).then(()=>reset());
        }else{
          Swal.fire({
            icon: "error",
            title: "Oops.. Lo sentimos!.",
            text: res.data.msg,
          });
        }
      }
    });
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
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-bold text-gray-900 "
              >
                Nombre del producto:
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                {...register("name", {
                  required: true,
                })}
                placeholder="Nombre del producto..."
              />
              {errors.name?.type == "required" && (
                <p className="text-red-500 text-sm">
                  Este campo es obligatorio{" "}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="reference"
                className="block mb-2 text-sm font-bold text-gray-900 "
              >
                Referencia:
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                {...register("reference")}
                placeholder="Referencia..."
              />
            </div>
            <div>
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-bold text-gray-900 "
              >
                Estado:
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white  focus:border-purple-500"
                id="grid-state "
                {...register("status")}
              >
                <option value=""> Selecciona un estado</option>
                <option value="1"> Visible </option>
                <option value="2"> Inactivo</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="boughtPrice"
                className="block mb-2 text-sm font-bold text-gray-900 "
              >
                Precio al por mayor:
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="number"
                {...register("boughtPrice")}
                placeholder="Precio al por mayor..."
              />
            </div>
            <div>
              <label
                htmlFor="categoryId"
                className="block mb-2 text-sm font-bold text-gray-900 "
              >
                Categoria:
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white  focus:border-purple-500"
                id="grid-state "
                {...register("categoryId")}
              >
                <option value=""> Selecciona una categoria</option>
                <option value="1"> Bolsos </option>
                <option value="2"> Bodys</option>
                <option value="3">Carteras</option>
                <option value="4"> Blusas</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-bold text-gray-900 "
              >
                Descripcion:
              </label>
              <textarea
                {...register("description")}
                id=""
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Descripcion"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-bold text-gray-900 "
              >
                Precio:
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                {...register("price", {
                  required: true,
                })}
                type="number"
                placeholder="$0000.00"
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-bold text-gray-900 "
                htmlFor="images"
              >
                Imagenes
              </label>

              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer  focus:outline-none  focus:border-purple-500 bg-gray-200 p-2  dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                multiple
                {...register("images")}
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

export default Page;
