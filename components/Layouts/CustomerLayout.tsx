"use client";
import React, { useState, ReactNode } from "react";
import Header from "@/components/Header";
import CustomerSidebar from "../Sidebar/customer";

export default function CustomerLayout({
  children, notifications }: {
    children: React.ReactNode;
    notifications: any[]
  }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <CustomerSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden mt-5">
          {/* <!-- ===== Header Start ===== --> */}
          <div className="top-0 mb-15 relative w-full flex items-center justify-center  mt-2 h-20">
            <Header notifications={notifications} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </div>
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className="">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
