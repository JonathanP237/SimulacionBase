"use client";
import { MainLayout } from '@/layouts'
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react'
import { Product } from '@/types/product';
import { yupResolver } from "@hookform/resolvers/yup";
import { createProduct } from '@/helper/SchemaValidate';
import { Button } from '@/components/Button';
import { updateProduct, getProduct } from '@/services/products';
import { useRouter } from 'next/navigation';

export default function UpdateProduct() {

    const router = useRouter();
    const [id_product, setUpdateString] = useState('');

    const methods = useForm<Product>({
        resolver: yupResolver(createProduct),
    });

    const { register, handleSubmit, formState: { errors }, reset, setValue } = methods;

    const onSubmit: SubmitHandler<Product> = async (data) => {
        try {
          const response = await updateProduct(id_product, data);
          console.log(response);
          reset(); // Limpia los campos del formulario
          setUpdateString('');
        } catch (error) {
          console.error(error);
        }
    }

    return (
        <MainLayout >
            <div>
                <h1 className='text-white pb-2 text-[30px] font-bold'>
                    Actualizar producto
                </h1>
                <h1 className='pb-5 text-custom-light-gray'>*Introduzca el ID del producto para actualizar y sus nuevos valores</h1>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-2 gap-5'>
                            <div className='flex flex-col gap-3'>

                                <label className='text-white font-bold text-[20px]'>ID producto</label>
                                <input className='text-custom-dark-gray rounded h-8' value={id_product} onChange={(e) => setUpdateString(e.target.value)} />

                                <label className='text-white font-bold text-[20px]'>Categoría </label>
                                <input className='text-custom-dark-gray rounded h-8' {...register("category")} />
                                {errors.category && <p className='text-black'>{errors.category.message}</p>}
    
                                <label className='text-white font-bold text-[20px]'>Precio</label>
                                <input className='text-custom-dark-gray rounded h-8' type="number" {...register("price")} />
                                {errors.price && <p className='text-black'>{errors.price.message}</p>}
    
                                
                            </div>
                            <div className='flex flex-col gap-3'>

                                <label className='text-white font-bold text-[20px]'>Nombre</label>
                                <input className='text-custom-dark-gray rounded h-8' {...register("title")} />
                                {errors.title && <p className='text-black'>{errors.title.message}</p>}

                                <label className='text-white font-bold text-[20px]'>Descripción</label>
                                <input className='text-custom-dark-gray rounded h-8' {...register("description")} />
                                {errors.description && <p className='text-black'>{errors.description.message}</p>}                  
    
                                <label className='text-white font-bold text-[20px]'>Calificación</label>
                                <input className='text-custom-dark-gray rounded h-8' type="number" {...register("rating")} />
                                {errors.rating && <p className='text-black'>{errors.rating.message}</p>}
                                
                                
                            </div>
                            <Button
                                type="submit"
                                className="bg-custom-green"
                                size="lg"
                                isLoading={false}>
                                Guardar
                            </Button>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </MainLayout>
    )    
}
