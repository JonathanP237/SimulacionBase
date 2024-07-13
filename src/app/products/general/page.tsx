"use client"

import { Button } from '@/components/Button'
import { Table, TableTr } from '@/components/Table'
import { MainLayout } from '@/layouts'
import { deleteProduct, getProducts } from '@/services/products'
import { FakeProduct } from '@/types/fakeProduct'
import React, { useEffect, useState } from 'react'

export default function Products() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<FakeProduct[]>([]);

  const headers = ["id", "Nombre", "Precio", "Categoría", "Rating", "Acciones"]

  function getProductsFunc() {
    getProducts().then((res) => {
      console.log(res.data); // Aquí agregamos el console.log
      setProducts(res.data.products) // Aquí cambiamos 'res.data' por 'res.data.products'
      setIsLoading(false)
    }).catch((err) => {
      console.log(err)
      setIsLoading(false)
    })
  }   

  useEffect(() => {
    getProductsFunc()
  }, [])

  function handleDelete(id: string) {
    deleteProduct(id)
      .then((res) => {
        console.log(res);
        //Reflejamos la eliminacion del producto
        setProducts(products.filter((product) => product.id.toString() !== id));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <MainLayout>
      <div>
        <h1 className="text-[30px] font-bold text-white">Nombreciclista</h1>
        <Table headers={headers} isLoading={isLoading}>
          {products.map((product: FakeProduct) => (
            <TableTr key={product.id.toString()}>
              <td className="text-white text-[15px]">{product.id}</td>
              <td className="max-w-[100px] overflow-hidden text-ellipsis text-white text-[15px]">
                {product.title}
              </td>
              
              <td className="text-white text-[15px]">{product.price}</td>
              <td className="text-white text-[15px]">{product.category}</td>
              <td className="text-white text-[15px]">{product.rating}</td>
              <td>
                <Button
                  className="text-white bg-custom-blue rounded-md px-4 py-0.1"
                  href={`/products/detail/${product.id}`}
                >
                  Ver
                </Button>

                <Button
                  className="text-white bg-custom-red rounded-md px-3 py-0.1 ml-2"
                  onClick={() => handleDelete(product.id.toString())}
                >
                  Eliminar
                </Button>

              </td>
            </TableTr>
          ))}
        </Table>
      </div>
    </MainLayout>
  );
  
}
