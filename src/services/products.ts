import { Product } from "@/types/product";
import axios from "axios";

//GET
  export async function getProducts(): Promise<any> {
    const response = await axios.get("https://dummyjson.com/products");
    return response;
  }

  export async function getProduct(id: String): Promise<any> {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response;
  }

//POST
  export async function addProduct(product: Product): Promise<any> {
    const response = await axios({
      method: 'post',
      url: 'https://dummyjson.com/products/add',
      headers: { 'Content-Type': 'application/json' },
      data: product
    });
    return response;
  }

//DELETE
  export async function deleteProduct(id: string): Promise<any> {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  }
  
//PUT
  export async function updateProduct(id: string, product: Product): Promise<any> {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
    return response.json();
  }