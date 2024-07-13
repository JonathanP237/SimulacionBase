// src/app/Ciclista/pruebaCiclista/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { MainLayout } from "@/layouts";
import { Button } from "@/components/Button";

export default function BuscarCiclista() {
    const [iddocumento, setIddocumento] = useState<string>(''); // Estado para almacenar el ID del documento
    const searchParams = useSearchParams(); // Hook para manejar los parámetros de búsqueda

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (iddocumento) {
            // Redirige a la página de detalle del ciclista con el ID proporcionado
            window.location.href = `/Ciclista/Home/${iddocumento}`;
        }
    };

    return (
        <MainLayout>
            <div className="flex justify-center items-center h-screen">
                <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
                    <label className="block text-white mb-2">
                        Ingresa el ID del documento del ciclista:
                    </label>
                    <input
                        type="text"
                        value={iddocumento}
                        onChange={(e) => setIddocumento(e.target.value)}
                        className="block w-full p-2 mb-4 rounded-md"
                        placeholder="ID del documento"
                    />
                    <button type="submit" className="bg-custom-green text-white px-4 py-2 rounded-md">
                        Ver Ciclista
                    </button>
                </form>
            </div>
        </MainLayout>
    );
}
