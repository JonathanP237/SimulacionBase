/* eslint-disable @next/next/no-img-element */
'use client';

import { MainLayout } from "../../../layouts";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from "../../../components/Button";
import Image from 'next/image';
import axios from 'axios'; // Importar axios para hacer la llamada a la API
import React from "react";
import GoogleTranslate from '../../../components/GoogleTranslate';

interface Administrador {
    iddocumento: string;
    nombreusuario: string;
    apellidousuario: string;
    correousuario: string;
    idpais: string; 
    idescuadra: string;
    anosexperiencia: number | null;
}

export default function AdministradorDetalle() {
    const searchParams = useSearchParams();
    let iddocumento = searchParams.get('iddocumento'); // Obtener el ID del documento de los parámetros de búsqueda

    // Establecer un valor predeterminado si no se proporciona iddocumento en la URL
    const defaultIddocumento = '10022'; // Aquí debes establecer el ID predeterminado que desees

    if (!iddocumento) {
        iddocumento = defaultIddocumento;
    }

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [administrador, setAdministrador] = useState<Administrador | null>(null);
    const [error, setError] = useState<string | null>(null); // Definir el tipo explícitamente como string | null

    useEffect(() => {
        // Función asincrónica para obtener datos del administrador desde la API
        const fetchAdministrador = async () => {
            try {
                const response = await axios.get<Administrador>(`https://isuci-back.onrender.com/perfil`);
                setAdministrador(response.data);
                setIsLoading(false);
            } catch (error: any) { // Capturar el error de cualquier tipo
                setError(error.message ?? 'Error desconocido'); // Establecer un mensaje de error predeterminado si no hay mensaje
                setIsLoading(false);
            }
        };

        fetchAdministrador(); // Llamar a la función para obtener los datos del administrador
    }, []);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <MainLayout>
            {administrador && (
                <div className="grid grid-cols-2 gap-10 m-4">
                    <div className="relative w-full h-full md:w-[520px] md:h-[560px] rounded-lg overflow-hidden">
                        <img
                            src={`https://cdn.pixabay.com/photo/2013/07/13/13/38/man-161282_640.png`}
                            alt={`${administrador.nombreusuario} ${administrador.apellidousuario}`}
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center text-black tracking-[1px] space-y-4">
                        <GoogleTranslate/>
                        <h1 className="text-[30px] font-bold text-red-500">{administrador.nombreusuario} {administrador.apellidousuario}</h1>
                        <div className="border border-red-500 p-2 rounded-lg w-full">
                            <h1>ID: {administrador.iddocumento}</h1>
                        </div>
                        <div className="border border-red-500 p-2 rounded-lg w-full">
                            <h1>Correo: {administrador.correousuario}</h1>
                        </div>
                        <div className="border border-red-500 p-2 rounded-lg w-full">
                            <h1>País: {administrador.idpais}</h1>
                        </div>
                        <div className="border border-red-500 p-2 rounded-lg w-full">
                            <h1>Escuadra: {administrador.idescuadra}</h1>
                        </div>
                        <div className="border border-red-500 p-2 rounded-lg w-full">
                            <h1>Años de Experiencia: {administrador.anosexperiencia ?? 'N/A'}</h1>
                        </div>
                    </div>
                </div>
            )}
        </MainLayout>
    );
}
   