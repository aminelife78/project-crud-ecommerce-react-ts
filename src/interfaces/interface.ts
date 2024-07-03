import { ProductNameTypes } from "../types/types" 


export interface IProduct{
  id?:string | undefined,
  title:string,
  description:string,
  imageURL:string,
  price:string,
  colors:string[],
  category:{
    name:string,
    imageURL:string
  }

}


export interface ICategory{
  id:string,
  name:string,
  imageURL:string
}



export interface IFormInput{
    id: string,
    name: ProductNameTypes,
    label: string,
    type: string,
}

