/* eslint-disable @next/next/no-img-element */
"use client";
import { MainLayout } from "../layouts";
import { useRouter } from 'next/navigation';
import React from "react";
import GoogleTranslate from '../components/GoogleTranslate';


export default function Home() {
  const router = useRouter();
  return (
    
    <MainLayout>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b bg-white text-black">
        
        <GoogleTranslate /> 
        
        <h1 className="text-4xl font-bold mb-8">
          <span className="text-blue-600">Bienvenido </span>
          <span className="text-black">al sistema </span>
          <span className="text-red-600">ISUCI</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Cuadro Azul */}
          <div className="border-blue-600 border-4 rounded-lg p-4">
            <img src="https://u-static.fotor.com/images/text-to-image/result/PRO-d5a23a5d891247da89b1192031443d7c.jpg" alt="Ejemplo Azul" className="w-full h-auto rounded-lg" />
          </div>
          
          {/* Cuadro Negro */}
          <div className="border-black border-4 rounded-lg p-4">
            <img src="https://u-static.fotor.com/images/text-to-image/result/PRO-696bdb4bb00140f3851e933d2e7f40eb.jpg" alt="Ejemplo Verde" className="w-full h-auto rounded-lg" />
          </div>
              
          {/* Cuadro Negro */}
          <div className="border-black border-4 rounded-lg p-4">
            <img src="https://u-static.fotor.com/images/text-to-image/result/PRO-238ffe8f881d41e9b2f034e908a10b96.jpg" alt="Ejemplo Rojo" className="w-full h-auto rounded-lg" />
          </div>
          
          {/* Cuadro Rojo */}
          <div className="border-red-600 border-4 rounded-lg p-4">
            <img src="https://u-static.fotor.com/images/text-to-image/result/PRO-96a463ad7ecf41db8563c30173abc740.jpg" alt="Ejemplo Amarillo" className="w-full h-auto rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col items-center space-y-8 mt-8">
          <p className="text-lg text-center font-bold mb-2">Aquí puedes encontrar todo sobre el mundo del ciclismo.</p>
          <button
          className="border-2 border-blue-600 rounded-full px-12 py-2 inline-block font-bold hover:bg-blue-600 hover:text-white"
          onClick={() => router.push('/Login')}
          
          >
          Iniciar Sesión
          </button>
        </div>
      </div>
    </MainLayout>
  );
}  
