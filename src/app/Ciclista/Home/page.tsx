/* eslint-disable @next/next/no-img-element */
'use client';

import { MainLayout } from "@/layouts";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios'; // Importar axios para hacer la llamada a la API
import React from "react";
import GoogleTranslate from "@/components/GoogleTranslate";

interface Ciclista {
    idtipousuario: string;
    nombreusuario: string;
    apellidousuario: string;
    iddocumento: string;
    correousuario: string;
    idpais: string;
    nombreEscuadra: string;
    idtipocontextura: string; // Nuevo campo agregado
    nombreEspecialidad: string; // Nuevo campo agregado
    generousuario: string;
    pesousuario: string;
    potenciausuario: string;
    acelaracionusuario: string;
    velocidadpromediousuario: string;
    velocidadmaximausuario: string;
    tiempociclista: string;
    anosexperiencia: string;
    gradorampa: string;
}

export default function CiclistaDetalle() {
    const searchParams = useSearchParams();
    let iddocumento = searchParams.get('iddocumento');

    const defaultIddocumento = '10006';

    if (!iddocumento) {
        iddocumento = defaultIddocumento;
    }

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [ciclista, setCiclista] = useState<Ciclista | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCiclista = async () => {
            try {
                const response = await axios.get<Ciclista>(`https://isuci-back.onrender.com/perfil`);
                setCiclista(response.data);
                setIsLoading(false);
            } catch (error: any) {
                setError(error.message ?? 'Error desconocido');
                setIsLoading(false);
            }
        };

        fetchCiclista();
    }, [iddocumento]);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <MainLayout>
            {ciclista && (
                <div className="grid grid-cols-2 gap-10 m-4">
                    <div className="relative w-full h-full md:w-[520px] md:h-[560px] rounded-lg overflow-hidden">
                        <img
                            src={`https://preview.free3d.com/img/2020/09/2408259515821590396/igsvg45w.jpg`}
                            alt={`${ciclista.nombreusuario} ${ciclista.apellidousuario}`}
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-black tracking-[1px]">
                        <div className="col-span-2">
                            <GoogleTranslate/>
                            <h1 className="text-[30px] font-bold text-red-600">{ciclista.nombreusuario} {ciclista.apellidousuario}</h1>
                        </div>
                        <div className="border border-red-600 p-2 rounded-lg">
                            <h1>ID: {ciclista.iddocumento}</h1>
                        </div>
                        <div className="border border-red-600 p-2 rounded-lg">
                            <h1>Correo: {ciclista.correousuario}</h1>
                        </div>
                        <div className="border border-red-600 p-2 rounded-lg">
                            <h1>País: {ciclista.idpais}</h1>
                        </div>
                        <div className="border border-red-600 p-2 rounded-lg">
                            <h1>Escuadra: {ciclista.nombreEscuadra}</h1>
                        </div>
                        <div className="border border-red-600 p-2 rounded-lg">
                            <h1>Género: {ciclista.generousuario}</h1>
                        </div>
                        <div className="border border-red-600 p-2 rounded-lg">
                            <h1>Peso: {ciclista.pesousuario}</h1>
                        </div>
                        <div className="border border-red-600 p-2 rounded-lg">
                            <h1>Potencia: {ciclista.potenciausuario}</h1>
                        </div>
                        <div className="border border-red-600 p-2 rounded-lg">
                            <h1>Aceleración: {ciclista.acelaracionusuario}</h1>
                        </div>
                        <div className="border border-red-600 p-2 rounded-lg">
                            <h1>Velocidad Promedio: {ciclista.velocidadpromediousuario}</h1>
                        </div>
                        <div className="border border-red-600 p-2 rounded-lg">
                            <h1>Velocidad Máxima: {ciclista.velocidadmaximausuario}</h1>
                        </div>
                        <div className="border border-red-600 p-2 rounded-lg">
                            <h1>Tiempo Ciclista: {ciclista.tiempociclista}</h1>
                        </div>
                        <div className="border border-red-600 p-2 rounded-lg">
                            <h1>Años de Experiencia: {ciclista.anosexperiencia}</h1>
                        </div>
                        <div className="border border-red-600 p-2 rounded-lg">
                            <h1>Grado de Rampa: {ciclista.gradorampa}</h1>
                        </div>
                        <div className="border border-red-600 p-2 rounded-lg">
                            <h1>Tipo Contextura: {ciclista.idtipocontextura}</h1>
                        </div>
                        <div className="border border-red-600 p-2 rounded-lg">
                            <h1>Especialidad: {ciclista.nombreEspecialidad}</h1>
                        </div>
                    </div>
                </div>
            )}
        </MainLayout>
    );
}
