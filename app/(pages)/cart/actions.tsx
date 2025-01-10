"use server"

import { useAuth } from "@/app/_context/ContextProvider";
import { verifySession } from "@/app/_lib/session";
import { Product } from "@/app/api/interfaces/product.interface";
import { useAddCart } from "./_utils/helper";



export async function  AddToCart(product:Product){
    const user =   await verifySession(false);
    console.log(user);
 const isAdded =    useAddCart({item:product})
console.log("added:", isAdded)
 return isAdded;
 

}