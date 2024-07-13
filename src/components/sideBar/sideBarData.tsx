import {
  ArchiveBoxIcon,
  DocumentTextIcon,
  HomeIcon,
  LightBulbIcon
} from "@heroicons/react/24/outline";

export interface SidebarItemData {
  title: string;
  path: string;
  icon: JSX.Element;
  userTypes: string[];
}

export const sideBarData: SidebarItemData[] = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon className="text-white" />,
    userTypes: ["Director", "Masajista", "Ciclista", "Administrador"],
  },
  {
    title: "Agregar Ciclista a Escuadra",
    path: "/agregar-ciclista",
    icon: <ArchiveBoxIcon className="text-white" />,
    userTypes: ["Director"],
  },
  {
    title: "Masajear",
    path: "/masajear",
    icon: <LightBulbIcon className="text-white" />,
    userTypes: ["Masajista"],
  },
  {
    title: "Labores",
    path: "/labores",
    icon: <LightBulbIcon className="text-white" />,
    userTypes: ["Ciclista"],
  },
  {
    title: "Eliminar usuarios",
    path: "/eliminar-usuarios",
    icon: <LightBulbIcon className="text-white" />,
    userTypes: ["Administrador"],
  },
  {
    title: "Iniciar nueva carrera",
    path: "/Simulacion",
    icon: <LightBulbIcon className="text-white" />,
    userTypes: ["Administrador"],
  },
  
//   {
//     title: <span className="text-white">Home Masajista</span>,
//     path: "/Masajista/Home",
//     icon: <HomeIcon className="text-white" />,
//   },
//   {
//     title: <span className="text-white">Home Director</span>,
//     path: "/Director/Home",
//     icon: <HomeIcon className="text-white" />,
//   },
//   {
//     title: <span className="text-white">Home Admin</span>,
//     path: "/Admin/Home",
//     icon: <HomeIcon className="text-white" />,
//   },
//   /*{
//     title: <span className="text-white">Historial Escuadra</span>,
//     path: "/products/general",
//     icon: <ArchiveBoxIcon className="text-white" />,
//   },
//   {
//     title: <span className="text-white">Crear Producto</span>,
//     path: "/products/create",
//     icon: <LightBulbIcon className="text-white" />,
//   },*/
//   {
//     title: <span className="text-white">login</span>,
//     path: "/Login",
//     icon: <LightBulbIcon className="text-white" />,
//   },/*
//   {
//     title: <span className="text-white">pruebaCiclista</span>,
//     path: "/Ciclista/pruebaCiclista",
//     icon: <ArchiveBoxIcon className="text-white" />,
//   }*/
];
