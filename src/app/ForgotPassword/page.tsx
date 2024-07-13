"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { sendResetPasswordEmail } from '../../services/passwordService';
import React from 'react';
import GoogleTranslate from '@/components/GoogleTranslate';

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    try {
      await sendResetPasswordEmail(email);
      setMessage('Correo de restablecimiento de contraseña enviado. Por favor, revisa tu bandeja de entrada.');
    } catch (error: any) {
      if (typeof error === 'string') {
        console.error('Error al enviar el correo:', error);
        setError('Error al enviar el correo. Por favor, inténtalo de nuevo.');
      } else {
        console.error('Error al enviar el correo:', error.message);
        setError('Error al enviar el correo. Por favor, inténtalo de nuevo.');
      }
    }
  };

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center min-h-screen py-2 bg-gray-300">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-4xl">
          <div className="w-full p-5 text-black">
            <div className="text-left font-bold">
              <span className="text-blue-600">IS</span>
              <span className="text-black">UC</span>
              <span className="text-red-600">I</span>
              <GoogleTranslate/>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold mb-2 text-blue-600">Restablecer Contraseña</h2>
              <div className="border-2 w-10 border-blue-600 inline-block mb-2"></div>
              <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-100 outline-none text-sm flex-1"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="border-2 border-blue-600 text-blue-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 hover:text-white"
                >
                  Enviar
                </button>
              </form>
              {message && <div className="text-green-500 mt-4">{message}</div>}
              {error && <div className="text-red-500 mt-4">{error}</div>}
              <button
                className="mt-4 text-blue-600 underline"
                onClick={() => router.push('/Login')}
              >
                Volver a Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ForgotPassword;
