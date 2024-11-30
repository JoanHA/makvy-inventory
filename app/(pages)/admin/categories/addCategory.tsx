"use client";
import { createCategory, editCategories } from "@/app/api/actions/actions";
import { Category } from "@/app/api/interfaces/category.interface";
import { Label } from "@/app/components/ui";
import { categories } from "@prisma/client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AiOutlineClose } from "react-icons/ai";

function AddCategory({
  callback,
  edit,
}: {
  callback: () => Promise<void>;
  edit: categories | null;
}) {
  const { register, handleSubmit, reset, watch } = useForm();

  useEffect(() => {
    reset({
      name: edit?.name || "",
      status: String(edit?.status) || "1",
    });
  }, [edit, reset]);
  const closeModal = async () => {
    const modal = document.querySelector("#CreateCategoryModal");
    modal?.classList.toggle("hidden");
    modal?.classList.toggle("flex");
    await callback();
  };
  const editCategory = async () => {
   try {
    const [name, status] = watch(["name", "status"]);

    edit!.name = name;
    edit!.status = Number(status);
    const newValues :categories= {
      name: edit!.name,
      status: Number(edit!.status),
      id: edit!.id,
      createdAt: edit!.createdAt,
      updatedAt: edit!.updatedAt,

    }
    const response = await editCategories(newValues);

    if (response.status === 200) {
      Swal.fire(response.msg, "", "success").then(async () => {
        reset();
        closeModal();
        await callback();
      });
    } else {
      Swal.fire(response.msg, "", "success").then(async () => {
        reset();
        closeModal();
        await callback();
      });
    }
   } catch (error) {
    console.error(error);
    Swal.fire("Lo sentimos tuvimos un error", "", "error");
   }
  };
  const onSubmit = handleSubmit(async (data) => {
    try {
      const datos: Category = {
        name: data.name,
        status: Number(data.status),
      };

      const response = await createCategory(datos);
      if (response.status === 200) {
        Swal.fire(response.msg, "", "success").then(async () => {
          reset();
          closeModal();
          await callback();
        });
      } else {
        Swal.fire(response.msg, "", "success").then(async () => {
          reset();
          closeModal();
          await callback();
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Lo sentimos tuvimos un error", "", "error");
    }
  });

  return (
    <div
      className="fixed z-50 hidden items-center justify-center text-black w-full h-full bg-[#00000066]  "
      id="CreateCategoryModal"
    >
      <div className=" w-2/4 max-sm:w-3/4  mr-10">
        <form
          onSubmit={onSubmit}
          className="mx-auto bg-white p-6 px-10 text-black flex-1 rounded-md max-sm:w-full"
        >
          <div className="w-full flex justify-end">
            <button
              type="button"
              onClick={() => {
                closeModal();
              }}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="mb-5">
            <h2>Nueva categoria</h2>
            <Label htmlFor="name">Nombre de categoria</Label>
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Nombre de la categoria."
              required
            />
          </div>
          <div className="mb-5">
            <Label htmlFor="countries">Estado</Label>
            <select
              id="countries"
              {...register("status", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue={"1"}
            >
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </select>
          </div>
          <div className="flex gap-1">
            {edit ? (
              <button
                type="button"
                className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-yellow-900"
                onClick={() => {
                  editCategory();
                }}
              >
                Editar
              </button>
            ) : (
              ""
            )}
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCategory;
