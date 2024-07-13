import axios, { AxiosResponse } from "axios";

export type LoginResponse = string;

export interface LoginRequest {
  usuario: string;
  password: string;
  recaptchaToken: string;
}

export async function login(request: LoginRequest): Promise<LoginResponse> {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post("https://isuci-back.onrender.com/login", request);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios errors (e.g., network error, timeout)
      throw new Error(`Error al iniciar sesión: ${error.message}`);
    } else {
      // Handle other types of errors (e.g., unexpected response format)
      throw new Error(`Error al iniciar sesión: ${error}`);
    }
  }
}


