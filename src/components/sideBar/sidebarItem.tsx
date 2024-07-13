"use client";

import { ReactElement, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  title: React.ReactNode;
  icon: React.ReactNode;
}

export const SidebarItem: React.FC<Props> = ({
  title,
  path,
  icon,
}: Props): ReactElement => {
  const pathName = usePathname() ?? "";
  const isActiveItem = useMemo(
    () =>
      (path: string): boolean => {
        return path != "/"
          ? pathName.includes(path.replace("/", ""))
          : pathName == path;
      },
    [pathName]
  );

  return (
    <Link
      className={`flex justify-center h-[49px] rounded-lg bg-transparent pl-5 ${
        isActiveItem(path) ? "border-b-[0.5px] bg-red-500" : ""
      }`}
      href={path}
    >
      <div className="flex justify-start w-full items-center gap-4">
        <div className={`w-5 h-5 ${isActiveItem(path) ? "text-white font-bold" : "text-white"}`}>
          {icon}
        </div>
        <h1 className={`text-xs ${isActiveItem(path) ? "text-white font-bold" : "text-white"}`}>
          {title}
        </h1>
      </div>
    </Link>
  );
};
