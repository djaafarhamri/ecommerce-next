"use client";

import SideBar from "../components/side-bar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
  return (
    <div className="flex">
      <SideBar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
      <div className={`${isSideBarOpen? 'ml-56': ''} ml-20 transition-all duration-500`}>{children}</div>
    </div>
  );
}
