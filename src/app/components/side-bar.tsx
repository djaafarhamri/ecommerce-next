"use client";

import { useState, useEffect } from "react";
import SideBarItem from "./side-bar-item";
import { usePathname } from "next/navigation";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons/faGaugeHigh";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons/faCartArrowDown";


interface SideBarProps {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (isSideBarOpen: boolean) => void;
}

export default function SideBar({
  isSideBarOpen,
  setIsSideBarOpen,
}: SideBarProps) {
  
  const pathname = usePathname();

  const handleMouseEnter = () => {
    setIsSideBarOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSideBarOpen(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="left w-14 h-full overflow-x-hidden overflow-y-auto bg-darkgrayblue fixed transition-all duration-500 hover:w-52"
    >
      <ul className="pl-0">
        <SideBarItem
          text="Overview"
          isActive={pathname === "/dashboard/overview"}
          href="/dashboard/overview"
          icon={faGaugeHigh}
          />
        <SideBarItem
          text="Users"
          isActive={pathname === "/dashboard/users"}
          href="/dashboard/users"
          icon={faUser}
          />
        <SideBarItem
          text="Products"
          isActive={pathname === "/dashboard/products"}
          href="/dashboard/products"
          icon={faProductHunt}
          />
        <SideBarItem
          text="Orders"
          isActive={pathname === "/dashboard/orders"}
          href="/dashboard/orders"
          icon={faCartArrowDown}
        />
      </ul>
    </div>
  );
}
