export interface Product{
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