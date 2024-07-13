"use client";

import { MainLayout } from '@/layouts'
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import React from 'react'
import { Product } from '@/types/product';
import { yupResolver } from "@hookform/resolvers/yup";
import { createProduct } from '@/helper/SchemaValidate';
import { Button } from '@/components/Button';
import { addProduct } from '@/services/products';


export default function CreateProduct() {
    const methods = useForm<Product>({
        resolver: yupResolver(createProduct),
    });

    const { register, handleSubmit, formState: { errors }, reset } = methods;

    const onSubmit: SubmitHandler<Product> = async (data) => {
        try {
          const response = await addProduct(data);
          console.log(response);
          reset(); // Limpia los campos del formulario
        } catch (error) {
          console.error(error);
        }
    }

    return (
        <MainLayout >
            <div>
                <h1 className='text-white pb-5 text-[30px] font-bold'>
                    Crear producto
                </h1>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-2 gap-5'>
                            <div className='flex flex-col gap-3'>
                                <label className='text-white font-bold text-[20px]'>Nombre</label>
                                <input className='text-custom-dark-gray rounded h-8' {...register("title")} />
                                {errors.title && <p className='text-black'>{errors.title.message}</p>}
    
                                <label className='text-white font-bold text-[20px]'>Precio</label>
                                <input className='text-custom-dark-gray rounded h-8' type="number" {...register("price")} />
                                {errors.price && <p className='text-black'>{errors.price.message}</p>}
    
                                <label className='text-white font-bold text-[20px]'>Descripción</label>
                                <input className='text-custom-dark-gray rounded h-8' {...register("description")} />
                                {errors.description && <p className='text-black'>{errors.description.message}</p>}
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-white font-bold text-[20px]'>Categoría </label>
                                <input className='text-custom-dark-gray rounded h-8' {...register("category")} />
                                {errors.category && <p className='text-black'>{errors.category.message}</p>}
    
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
