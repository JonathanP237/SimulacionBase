// types/ciclista.ts
export interface Coordinate {
  lat: number;
  lng: number;
}

export interface Track {
  name: string;
  coordinates: Coordinate[];
}

export interface Ciclista {
    idtipousuario: string;
    name: string;
    apellidousuario: string;
    iddocumento: string;
    correousuario: string;
    telefonousuario: string;
    direccionusuario: string;
    idpais: string;
    idescuadra: string;
    idtipocontextura?: string;
    idespecialidad?: string;
    generousuario?: string;
    pesousuario?: string;
    potenciausuario?: string;
    acelaracionusuario?: string;
    velocidadpromediousuario?: string;
    velocidadmaximausuario?: string;
    tiempociclista?: string;
    anosexperiencia?: string;
    gradorampa?: string;
    position: Coordinate;
    nombreEspecialidad: string;
    nombreEscuadra: string;
}

export interface Team {
  name: string;
  cyclists: Ciclista[];
}
