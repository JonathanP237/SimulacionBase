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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-300 text-black p-8">
        <GoogleTranslate /> 
        
        <h1 className="text-4xl font-bold mb-8 text-center">
          <span className="text-blue-600">Bienvenido </span>
          <span className="text-black">al sistema </span>
          <span className="text-red-600">ISUCI</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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

        <section className="w-full bg-black text-white flex flex-col md:flex-row items-center justify-center p-8">
  <img src="https://tse2.mm.bing.net/th?id=OIG2.ywPkSS5gGvzyaNXR1UiQ&pid=ImgGn" alt="Cycling Image" className="w-full md:w-1/3 h-auto md:h-auto rounded-lg" />
  <div className="md:w-2/3 p-8">
    <h2 className="text-3xl font-bold mb-4">VISIÓN</h2>
    <div className="border-t-2 border-blue-600 mb-4 w-16"></div>
    <p className="text-lg mb-4">
      Unir a las personas a través del ciclismo y convertirlo en la actividad inclusiva y universal del mañana. Para el deporte, para la diversión, para una vida mejor.
    </p>
  </div>
</section>

<section className="w-full bg-white text-black flex flex-col md:flex-row items-center justify-center p-8">
  <div className="md:w-2/3 p-8">
    <h2 className="text-3xl font-bold mb-4">MISIÓN</h2>
    <div className="border-t-2 border-blue-600 mb-4 w-16"></div>
    <p className="text-lg mb-4">
      ISUCI es la máxima autoridad del ciclismo a nivel mundial. Nuestra misión es promover y supervisar el desarrollo del ciclismo en todas sus formas y para todas las personas, fomentando la inclusión y la accesibilidad. Organizamos competiciones de ciclismo a nivel global, estableciendo estándares de excelencia y ética deportiva que inspiran a ciclistas de todos los niveles a alcanzar su máximo potencial. A través de nuestras actividades, buscamos fortalecer el deporte del ciclismo y mejorar la calidad de vida, promoviendo un estilo de vida activo y saludable a nivel global.
    </p>
  </div>
  <img src="https://tse1.mm.bing.net/th?id=OIG3.fpf7BFEI3UcMceSrSJt3&w=270&h=270&c=6&r=0&o=5&pid=ImgGn" alt="Cycling Image" className="w-full md:w-1/3 h-auto md:h-auto rounded-lg" />
</section>

<section className="w-full bg-black text-white flex flex-col md:flex-row items-center justify-center p-8">
  <img src="https://tse4.mm.bing.net/th?id=OIG3.VR3KOMfAs7t0Ij2HmlH2&pid=ImgGn" alt="Cycling Image" className="w-full md:w-1/3 h-auto md:h-auto rounded-lg" />
  <div className="md:w-2/3 p-8">
    <h2 className="text-3xl font-bold mb-4">VALORES</h2>
    <div className="border-t-2 border-blue-600 mb-4 w-16"></div>
    <p className="text-lg mb-4">
      Nuestros valores fundamentales incluyen:
    </p>
    <ul className="list-disc list-inside mb-4">
      <li>Integridad y ética en todas nuestras acciones.</li>
      <li>Compromiso con la excelencia y la innovación.</li>
      <li>Respeto por los ciclistas, los aficionados y todas las partes interesadas.</li>
      <li>Sostenibilidad ambiental y social en el desarrollo del ciclismo.</li>
    </ul>
  </div>
</section>

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
