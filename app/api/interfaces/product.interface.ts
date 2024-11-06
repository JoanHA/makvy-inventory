export type Product ={
    name:string;
    reference:string;
    description?: string;
    price?: string;
    boughtPrice?: string;
    status?:string;
    images?:unknown;
    categoryId?:string;
}
export interface Image {
    name:string;
    type:string;
    url?:string;
    lastModified?:string;
}

export interface Products {
    id: number;
    reference: string;
    name: string;
    price: number;
    boughtPrice: number;
    description: string;
    categoryId: number;
    status: number;
    createdAt: Date;
    updatedAt: Date;
    imageUrl: string;
    categoryname: string;
  }