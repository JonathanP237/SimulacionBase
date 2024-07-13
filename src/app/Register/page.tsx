"use client";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';
import { registerS, RegisterRequest } from '../../services/registerService';
import GoogleTranslate from '../../components/GoogleTranslate';

const RegistrarPagina = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterRequest>();
  const [tipoUsuario, setTipoUsuario] = useState('');
  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterRequest> = async (data) => {
    const registerRequest: RegisterRequest = {
      nombreusuario: data.nombreusuario,
      apellidousuario: data.apellidousuario,
      correousuario: data.correousuario,
      contrasenausuario: data.contrasenausuario,
      confirmPassword: data.confirmPassword,
      documentousuario: data.documentousuario,
      iddocumento: Number(data.iddocumento),
      fechanacimiento: new Date(data.fechanacimiento),
      generousuario: data.generousuario,
      nacionalidad: data.nacionalidad,
      tipousuario: tipoUsuario,
      fechainiciocarrera: new Date(data.fechainiciocarrera),
    };
    if (data.contrasenausuario !== data.confirmPassword) {
      return alert("Las contraseñas no coinciden");
    }
    try {
      const response: string = await registerS(registerRequest);
      console.log('Respuesta de registro:', response);
    } catch (error: any) {
      if (typeof error === 'string') {
        console.error('Error al registrar:', error);
      } else {
        console.error('Error al registrar:', error.message);
      }
    }
    console.log(registerRequest);
  };

  const tiposUsuario = [
    { value: 'Masajista', label: 'Masajista' },
    { value: 'Director de escuadra', label: 'Director de escuadra' },
    { value: 'Ciclista', label: 'Ciclista' },
  ];

  const tiposDocumento = [
    { value: 'Pasaporte', label: 'Pasaporte' },
  ];

  const generos = [
    { value: 'Masculino', label: 'Masculino' },
    { value: 'Femenino', label: 'Femenino' },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-300">
      <div className="flex w-full max-w-4xl mx-auto bg-white shadow-md">       
        <div className="w-1/2 bg-red-600 p-6 flex flex-col justify-center items-center text-white">
          <div className="text-2xl font-bold mb-4">¿Ya tienes cuenta?</div>
          <p className="mb-4">Inicia sesión para continuar</p>
          <button
            onClick={() => router.push('/Login')}
            className="border-2 border-white text-white rounded-full px-12 py-2 inline-block font-bold hover:bg-white hover:text-red-600"
          >
            Iniciar Sesión
          </button>
        </div>

        <div className="w-1/2 p-6 flex flex-col justify-center">
          <GoogleTranslate />
          <div className="text-blue-600 font-bold text-center mb-4">
            <div className="font-bold">
              <span className="text-blue-600">IS</span>
              <span className="text-black">UC</span>
              <span className="text-red-600">I</span>
            </div>
            <h1 className="text-2xl font-bold mb-4">Registrar</h1>
            <div className="border-2 w-10 border-blue-600 mx-auto mb-4"></div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="Nombre" className="text-blue-600 font-bold mb-1 block text-sm text-left">Nombre</label>
              <input type="text" {...register('nombreusuario', { required: true })} placeholder="Nombre" className="p-2 rounded block mb-1 w-full bg-gray-100 text-black font-bold" />
              {errors.nombreusuario && <span className="text-red-600 text-xs">Nombre es requerido</span>}
            </div>

            <div>
              <label htmlFor="Apellido" className="text-blue-600 font-bold mb-1 block text-sm text-left">Apellido</label>
              <input type="text" {...register('apellidousuario', { required: true })} placeholder="Apellido" className="p-2 rounded block mb-1 w-full bg-gray-100 text-black font-bold" />
              {errors.apellidousuario && <span className="text-red-600 text-xs">Apellido es requerido</span>}
            </div>

            <div>
              <label htmlFor="Correo" className="text-blue-600 font-bold mb-1 block text-sm text-left">Correo</label>
              <input type="email" {...register('correousuario', { required: true })} placeholder="Correo@gmail.com" className="p-2 rounded block mb-1 w-full bg-gray-100 text-black font-bold" />
              {errors.correousuario && <span className="text-red-600 text-xs">Correo es requerido</span>}
            </div>

            <div>
              <label htmlFor="Contraseña" className="text-blue-600 font-bold mb-1 block text-sm text-left">Contraseña</label>
              <input type="password" {...register('contrasenausuario', { required: true })} placeholder="Contraseña" className="p-2 rounded block mb-1 w-full bg-gray-100 text-black font-bold" />
              {errors.contrasenausuario && <span className="text-red-600 text-xs">Contraseña es requerida</span>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="text-blue-600 font-bold mb-1 block text-sm text-left">Confirmar Contraseña</label>
              <input type="password" {...register('confirmPassword', { required: true })} placeholder="Confirmar Contraseña" className="p-2 rounded block mb-1 w-full bg-gray-100 text-black font-bold" />
              {errors.confirmPassword && <span className="text-red-600 text-xs">Confirmar Contraseña es requerido</span>}
            </div>

            <div>
              <label htmlFor="TipoDocumento" className="text-blue-600 font-bold mb-1 block text-sm text-left">Tipo de Documento</label>
              <select className="p-2 rounded block mb-1 w-full bg-gray-100 text-black font-bold" {...register('documentousuario', { required: true })}>
                <option value="">Selecciona el tipo de documento</option>
                {tiposDocumento.map((tipo) => (
                  <option key={tipo.value} value={tipo.value}>{tipo.label}</option>
                ))}
              </select>
              {errors.documentousuario && <span className="text-red-600 text-xs">Tipo de Documento es requerido</span>}
            </div>

            <div>
              <label htmlFor="Documento" className="text-blue-600 font-bold mb-1 block text-sm text-left">Número de Documento</label>
              <input type="text" {...register('iddocumento', { required: true })} placeholder="Documento" className="p-2 rounded block mb-1 w-full bg-gray-100 text-black font-bold" />
              {errors.iddocumento && <span className="text-red-600 text-xs">Número de Documento es requerido</span>}
            </div>

            <div>
              <label htmlFor="FechaNacimiento" className="text-blue-600 font-bold mb-1 block text-sm text-left">Fecha de Nacimiento</label>
              <input type="date" {...register('fechanacimiento', { required: true })} className="p-2 rounded block mb-1 w-full bg-gray-100 text-black font-bold" />
              {errors.fechanacimiento && <span className="text-red-600 text-xs">Fecha de Nacimiento es requerida</span>}
            </div>

            <div>
              <label htmlFor="Genero" className="text-blue-600 font-bold mb-1 block text-sm text-left">Género</label>
              <select className="p-2 rounded block mb-1 w-full bg-gray-100 text-black font-bold" {...register('generousuario', { required: true })}>
                <option value="">Selecciona tu género</option>
                {generos.map((genero) => (
                  <option key={genero.value} value={genero.value}>{genero.label}</option>
                ))}
              </select>
              {errors.generousuario && <span className="text-red-600 text-xs">Género es requerido</span>}
            </div>

            <div>
              <label htmlFor="Nacionalidad" className="text-blue-600 font-bold mb-1 block text-sm text-left">Nacionalidad</label>
              <input type="text" {...register('nacionalidad', { required: true })} placeholder="Nacionalidad" className="p-2 rounded block mb-1 w-full bg-gray-100 text-black font-bold" />
              {errors.nacionalidad && <span className="text-red-600 text-xs">Nacionalidad es requerida</span>}
            </div>

            <div>
              <label htmlFor="TipoUsuario" className="text-blue-600 font-bold mb-1 block text-sm text-left">Tipo de Usuario</label>
              <select className="p-2 rounded block mb-1 w-full bg-gray-100 text-black font-bold" {...register('tipousuario', { required: true })} onChange={(e) => setTipoUsuario(e.target.value)}>
                <option value="">Selecciona el tipo de usuario</option>
                {tiposUsuario.map((tipo) => (
                  <option key={tipo.value} value={tipo.value}>{tipo.label}</option>
                ))}
              </select>
              {errors.tipousuario && <span className="text-red-600 text-xs">Tipo de Usuario es requerido</span>}
            </div>

            <div>
              <label htmlFor="FechaInicioCarrera" className="text-blue-600 font-bold mb-1 block text-sm text-left">Fecha de Inicio de Carrera</label>
              <input type="date" {...register('fechainiciocarrera', { required: true })} className="p-2 rounded block mb-1 w-full bg-gray-100 text-black font-bold" />
              {errors.fechainiciocarrera && <span className="text-red-600 text-xs">Fecha de Inicio de Carrera es requerida</span>}
            </div>

            <div className="col-span-2">
              <button type="submit" className="w-full py-2 border-2 border-blue-600 text-blue-600 rounded-full inline-block font-bold hover:bg-blue-600 hover:text-white">Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrarPagina;
