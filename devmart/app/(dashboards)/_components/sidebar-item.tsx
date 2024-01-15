"use client";

import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import path from "path";

interface SidebarItemProps{
  icon:LucideIcon;
  label:string;
  href: string;
}; 

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
  (pathname === "/" && href === "/") ||
  pathname === href ||
  pathname?.startsWith(`${href}/`)

  return ( 
    <div>
      sidebar
    </div>
   );
}
 
export default SidebarItem;