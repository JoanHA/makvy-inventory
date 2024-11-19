"use server";
import db from "@/app/api/lib/prisma";
import { Category } from "../interfaces/category.interface";
import { categories } from "@prisma/client";
import { User } from "../interfaces/user.interface";
import bcrypt from "bcrypt";
//Categorias
export async function createCategory(data: Category) {
  try {
    const res = await db.categories.create({
      data: {
        name: data.name,
        status: data.status,
      },
    });
    return {
      status: 200,
      msg: "Categoría creada correctamente",
      category: res,
    };
  } catch (error) {
    return {
      status: 500,
      msg: "Hubo un error inesperado, intenta más tarde",
      error,
    };
  }
}

export async function getCategories() {
  try {
    const categories = await db.categories.findMany();
    if (categories.length > 0) {
      return {
        status: 200,
        categories,
      };
    }
    return {
      status: 404,
      msg: "No hay categorías disponibles",
      categories: [],
    };
  } catch (error) {
    return {
      status: 500,
      msg: "Hubo un error inesperado, intenta más tarde",
      error,
    };
  }
}
export async function deleteCategories(categoryId: number) {
  try {
    await db.categories.delete({
      where: {
        id: categoryId,
      },
    });
    return {
      status: 200,
      msg: "Categoría eliminada correctamente",
    };
  } catch (error) {
    return {
      status: 500,
      msg: "Hubo un error inesperado, intenta más tarde",
      error,
    };
  }
}

export async function editCategories(category: categories) {
  try {
    await db.categories.update({
      where: {
        id: category.id,
      },
      data: {
        name: category.name,
        status: category.status,
      },
    });
    return {
      status: 200,
      msg: "Categoría actualizada correctamente",
      category,
    };
  } catch (error) {
    return {
      status: 500,
      msg: "Hubo un error inesperado, intenta más tarde",
      error,
    };
  }
}

//usuarios

export async function createUser(data: User) {
  try {
    let role = "11";
    //Verfify is there is already a admin user
    const existAdmin = await db.users.findFirst({
      where: {
        role: "10",
      },
    });
    if (!existAdmin) {
      role = "10";
    }
    const userFound = await db.users.findUnique({
      where: {
        username: data.username,
      },
    });
    if (userFound) {
      return {
        status: 409,
        msg: "El usuario ya existe ",
      };
    }

    const hashedPasswod = await bcrypt.hash(data.password, 10);

    const res = await db.users.create({
      data: {
        username: data.username,
        role,
        password: hashedPasswod,
        status: 1,
      },
    });

    const {password:_, ...user}= res;
    return {
      status: 200,
      msg: "Usuario creado correctamente",
      user: user,
    };
  } catch (error) {
    return {
      status: 500,
      msg: "Hubo un error inesperado, intenta más tarde",
      error,
    };
  }
}
