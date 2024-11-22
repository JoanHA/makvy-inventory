"use client";

import React, { useEffect, useState } from "react";

import AddCategory from "./addCategory";
import { deleteCategories, getCategories } from "@/app/api/actions/actions";
import { categories } from "@prisma/client";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";

function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<Array<categories> | undefined>(
    []
  );
  const [edit, setEdit] = useState<categories | null>(null);
  const openModal = () => {
    const modal = document.querySelector("#CreateCategoryModal");
    modal?.classList.toggle("hidden");
    modal?.classList.toggle("flex");
  };
  const editCategory = (category: categories) => {
    setEdit(category);
    openModal();
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setIsLoading(false);
      if (response.status === 200) {
        setCategories(response.categories);
      } else {
        Swal.fire("Lo sentimos...", response.msg, "error");
      }
      setEdit(null);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteCategory = async (categoryId: number) => {
    try {
      Swal.fire({
        title: "Estas segura?",
        text: "No podras revertir esta acción!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!",
        cancelButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await deleteCategories(categoryId);
          if (response.status === 200) {
            Swal.fire("Exito!", response.msg, "success");
            fetchCategories();
          } else {
            Swal.fire("Lo sentimos...", response.msg, "error");
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      <AddCategory callback={fetchCategories} edit={edit}></AddCategory>

      <div className="">
        <div className="w-full flex justify-center">
          <h1>Categorias</h1>
        </div>
        <div>
          <div>
            <div className="w-full flex justify-end px-4 ">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => {
                  openModal();
                }}
              >
                Nuevo
              </button>
            </div>
            <div className="relative overflow-x-auto -md sm:rounded-lg px-4 rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Categoria
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Estado
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr className="bg-white border-b  hover:bg-gray-100 ">
                      <td>Cargando...</td>
                    </tr>
                  ) : categories!.length > 0 ? (
                    categories?.map((category) => (
                      <tr
                        className="bg-white border-b  hover:bg-gray-100 "
                        key={category.id}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          {category.name}
                        </th>
                        <td className="px-6 py-4">
                          {category.status == 1 ? "Activo" : "Inactivo"}
                        </td>
                        <td
                          className="px-6 py-4 flex gap-2 justify-center "
                          colSpan={1}
                        >
                          <button
                            type="button"
                            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-yellow-900"
                            onClick={() => {
                              editCategory(category);
                            }}
                          >
                            <BiSolidEdit />
                          </button>

                          <button
                            type="button"
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            onClick={() => {
                              deleteCategory(category.id);
                            }}
                          >
                            <MdDelete />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="bg-white border-b  hover:bg-gray-100 ">
                      <td
                        className="px-6 py-4 flex gap-2 justify-center "
                        colSpan={3}
                      >
                        No hay categorias disponibles...
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
