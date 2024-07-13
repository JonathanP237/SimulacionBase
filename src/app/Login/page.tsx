"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login, LoginRequest } from '../../services/loginService'; // Importa el servicio de login
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import React from "react";
import GoogleTranslate from '../../components/GoogleTranslate';
import RecaptchaComponent from '../../components/RecaptchaComponent'; // Importa el componente de reCAPTCHA

const Login = () => {
  const [usuario, setUsuario] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const request: LoginRequest = { usuario, password, recaptchaToken };

    try {
      const response: string = await login(request);
      // Manejar la respuesta del servicio de login
      console.log('Respuesta de inicio de sesión:', response);

      // Guardar el tipo de usuario en localStorage para ser usado en sideBar
      localStorage.setItem('userType', response);
      switch (response) {
        case 'Director':
          router.push('/Director/Home');
          break;
        case 'Masajista':
          router.push('/Masajista/Home');
          break;
        case 'Ciclista':
          router.push('/Ciclista/Home');
          break;
        case 'Administrador':
          router.push('/Admin/Home');
          break;
        default:
          setError('Tipo de usuario no reconocido. Por favor, contacta al soporte.');
          break;
      }
    } catch (error: any) {
      if (typeof error === 'string') {
        console.error('Error al iniciar sesión:', error);
        setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      } else {
        console.error('Error al iniciar sesión:', error.message);
        setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      }
    }
  };

  return (
      <div className=" flex flex-col w-full h-screen items-center justify-center min-h-screen py-2 bg-gray-300">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-4xl">
            {/* Iniciar Sesión */}
            <div className="w-3/5 p-5 text-black">
              <div className="text-left font-bold"> 
                <span className="text-blue-600">IS</span><span className="text-black">UC</span><span className="text-red-600">I</span>
                <GoogleTranslate/> 
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold mb-2 text-blue-600">Iniciar Sesión</h2>
                <div className="border-2 w-10 border-blue-600 inline-block mb-2"></div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                    <FaRegCircleUser className="text-gray-400 mr-2" />
                    <input
                      type="text"
                      placeholder="Usuario"
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                      className="bg-gray-100 outline-none text-sm flex-1"
                      required
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                    <MdLockOutline className="text-gray-400 mr-2" />
                    <input
                      type="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-100 outline-none text-sm flex-1"
                      required
                    />
                  </div>
                  <RecaptchaComponent onVerify={setRecaptchaToken} /> {/* Añadir reCAPTCHA */}
                  <div className="flex justify-between w-64 mb-5">
                    <label className="flex items-center text-xs">
                      <input type="checkbox" name="remember" className="mr-1" />
                      Recordar contraseña
                    </label>
                    <a href="#" className="text-xs font-bold text-blue-600" onClick={() => router.push('/ForgotPassword')}>Olvidó su contraseña?</a>
                  </div>
                  <button
                    type="submit"
                    className="border-2 border-blue-600 text-blue-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 hover:text-white"
                  >
                    Ingresar {/* Botón de Ingresar */}
                  </button>
                </form>
                {error && <div className="text-red-500 mt-4">{error}</div>}
              </div>
            </div>
            {/* Registro */}
            <div className="w-2/5 bg-red-600 text-white rounded-tr-2xl rounded-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2">Registrar</h2>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className="mb-10">¿No tienes cuenta? ¡Hazlo ahora fácil y rápido!</p>
              {/* Botón de registrar */}
              <button
                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-red-600"
                onClick={() => router.push('/Register')}
              >
                Registrar
              </button>
            </div>
          </div>
        </main>
      </div>
  );
}

export default Login;
