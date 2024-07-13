/* eslint-disable @next/next/no-img-element */
'use client';

import { MainLayout } from "../../../layouts";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios'; // Importar axios para hacer la llamada a la API
import React from "react";
import GoogleTranslate from '../../../components/GoogleTranslate';

interface Director {
    idtipousuario: string;
    nombreusuario: string;
    apellidousuario: string;
    iddocumento: string;
    correousuario: string;
    idpais: string;
    idescuadra: string;
    anosexperiencia: number | null;
    nombreEscuadra: string;
}

export default function DirectorDetalle() {
    const searchParams = useSearchParams();
    let iddocumento = searchParams.get('iddocumento'); // Obtener el ID del documento de los parámetros de búsqueda

    // Establecer un valor predeterminado si no se proporciona iddocumento en la URL
    const defaultIddocumento = '10021'; // Aquí debes establecer el ID predeterminado que desees

    if (!iddocumento) {
        iddocumento = defaultIddocumento;
    }

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [director, setDirector] = useState<Director | null>(null);
    const [error, setError] = useState<string | null>(null); // Definir el tipo explícitamente como string | null

    useEffect(() => {
        // Función asincrónica para obtener datos del director desde la API
        const fetchDirector = async () => {
            try {
                const response = await axios.get<Director>(`https://isuci-back.onrender.com/perfil`);
                setDirector(response.data);
                setIsLoading(false);
            } catch (error: any) { // Capturar el error de cualquier tipo
                setError(error.message ?? 'Error desconocido'); // Establecer un mensaje de error predeterminado si no hay mensaje
                setIsLoading(false);
            }
        };

        fetchDirector(); // Llamar a la función para obtener los datos del director
    }, []);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <MainLayout>
            {director && (
                <div className="grid grid-cols-2 gap-10 m-4">
                    <div className="relative w-full h-full md:w-[520px] md:h-[560px] rounded-lg overflow-hidden">
                        <img
                            src={`https://thumbs.dreamstime.com/b/trener-z-mask%C4%85-sportowy-w-szkole-karykatury-trzyma-schowek-i-nosi-mask%C4%99-twarzy-211494544.jpg`}
                            alt={`${director.nombreusuario} ${director.apellidousuario}`}
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center text-black tracking-[1px] space-y-4">
                        <GoogleTranslate/>
                        <h1 className="text-[30px] font-bold text-red-500">{director.nombreusuario} {director.apellidousuario}</h1>
                        <div className="border border-red-500 p-2 rounded-lg w-full">
                            <h1>ID: {director.iddocumento}</h1>
                        </div>
                        <div className="border border-red-500 p-2 rounded-lg w-full">
                            <h1>Correo: {director.correousuario}</h1>
                        </div>
                        <div className="border border-red-500 p-2 rounded-lg w-full">
                            <h1>País: {director.idpais}</h1>
                        </div>
                        <div className="border border-red-500 p-2 rounded-lg w-full">
                            <h1>Escuadra: {director.idescuadra}</h1>
                        </div>
                        <div className="border border-red-500 p-2 rounded-lg w-full">
                            <h1>Años de Experiencia: {director.anosexperiencia ?? 'N/A'}</h1>
                        </div>
                        <div className="border border-red-500 p-2 rounded-lg w-full">
                            <h1>Nombre Escuadra: {director.nombreEscuadra}</h1>
                        </div>
                    </div>
                </div>
            )}
        </MainLayout>
    );
}
