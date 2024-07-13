// services/Ciclistas.ts
import axios from "axios";
import { Ciclista } from "@/types/ciclista";

export async function getCiclistas(): Promise<Ciclista[]> {
    try {
        const response = await axios.get(`https://isuci-back.onrender.com/ciclistas`);
        if (response.data) {
            return response.data;
        } else {
            throw new Error("Respuesta vacía de la API");
        }
    } catch (error) {
        throw new Error("Error al obtener la lista de ciclistas");
    }
}

export async function getCiclista(id: string): Promise<Ciclista> {
    try {
        const response = await axios.get(`https://isuci-back.onrender.com/perfil`);
        if (response.data) {
            return response.data;
        } else {
            throw new Error("Respuesta vacía de la API");
        }
    } catch (error) {   
        throw new Error(`Error al obtener el ciclista con ID ${id}`);
    }
}
