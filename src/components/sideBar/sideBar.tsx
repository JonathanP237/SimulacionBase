"use client";

import React, { useEffect, useState } from "react";
import { sideBarData } from "./sideBarData";
import { SidebarItem } from "./sidebarItem";
import { usePathname } from "next/navigation";

export const Sidebar: React.FC = () => {
  const [userType, setUserType] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    setUserType(storedUserType);
  }, []);

  // Mostrar solo el ítem de "Home" si el usuario está en la página de inicio
  const filteredSideBarData = pathname === "/" 
    ? sideBarData.filter(item => item.title === "Home")
    : sideBarData.filter(item => userType && item.userTypes.includes(userType));

  return (
    <div
      className={`bg-custom-dark-gray rounded-2xl my-[12px] ml-4 flex-col justify-between items-center 
        text-center shadow relative w-44 xl:w-52 h-[96%] hidden lg:flex`}
    >
      <section className="flex flex-col gap-4 w-full h-[50vh] max-h-96">
        {filteredSideBarData.map((item, index) => (
          <SidebarItem
            key={index}
            title={item.title}
            path={item.path}
            icon={item.icon}
          />
        ))}
      </section>
    </div>
  );
};
