import axios, { AxiosResponse } from "axios";

export type RegisterResponse = string;

export interface RegisterRequest {
    nombreusuario: string;
    apellidousuario: string;
    correousuario: string;
    contrasenausuario: string;
    confirmPassword: string;
    documentousuario: string;
    iddocumento: number;
    fechanacimiento: Date;
    generousuario: string;
    nacionalidad: string;
    tipousuario: string;
    fechainiciocarrera: Date;
}

export async function registerS(request: RegisterRequest): Promise<RegisterResponse> {
    try {
        const response: AxiosResponse<RegisterResponse> = await axios.post("https://isuci-back.onrender.com/registro", request);

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Handle Axios errors (e.g., network error, timeout)
            throw new Error(`Error al registrar: ${error.message}`);
        } else {
            // Handle other types of errors (e.g., unexpected response format)
            throw new Error(`Error al registrar: ${error}`);
        }
    }
}