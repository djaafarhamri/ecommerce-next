"use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SideBarItemProps {
  text: string;
  isActive: boolean;
  href: string;
  icon: IconProp;
}


export default function SideBarItem({
  text,
  isActive,
  href,
  icon,
}: SideBarItemProps) {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <li onMouseEnter={() => {setIsHover(true)}} onMouseLeave={() => {setIsHover(false)}}>
      <Link
        className={`flex items-center ${isActive ? 'bg-green-600':'bg-darkgrayblue'} text-white px-4 py-3 text-sm border-b border-darkgrayblue-5 hover:bg-darkgrayblue-5`}
        data-toggle="tab"
        href={href}
      >
        <FontAwesomeIcon
          icon={icon}
          size="2xl"
          className={`text-center pr-4 transition-all duration-1000 ${isHover ? 'text-green-500' : ''}`}
        />{" "}
        <div className="w-28 ml-auto">{text}</div>
      </Link>
    </li>
  );
}
