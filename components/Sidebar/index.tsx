"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// import SidebarLinkGroup from "./SidebarLinkGroup";
import { BsBarChartLine, BsBuilding, BsBuildings, BsDoorOpen, BsEnvelopeArrowUp, BsGear, BsTools } from "react-icons/bs";
import { IoFolderOpenOutline, IoHammerOutline } from "react-icons/io5";
import { FaMountain } from "react-icons/fa";
import { signOut } from "next-auth/react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <>
      {sidebarOpen &&
        <aside
          ref={sidebar}
          className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#ff7525] duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* <!-- SIDEBAR HEADER --> */}
          <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
            <Link href="/admin/" className="w-[176px] h-[32px]">

              <h1 className="text-white text-5xl text-center w-full font-bold">AMS</h1>
            </Link>
            <button
              ref={trigger}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              className="block lg:hidden"
            >
              <svg
                className="fill-current"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                  fill=""
                />
              </svg>
            </button>
          </div>
          {/* <!-- SIDEBAR HEADER --> */}

          <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
            {/* <!-- Sidebar Menu --> */}
            <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
              {/* <!-- Menu Group --> */}
              <div className="py-10">
                <ul className="mb-6 flex flex-col gap-7.5">

                  <li>
                    <Link
                      href="/admin/dashboard"
                      className={`group relative flex items-center gap-2.5  px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out rounded-2xl hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("dashboard") &&
                        "bg-white text-primary dark:bg-meta-4"
                        }`}
                    >
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                          fill=""
                        />
                        <path
                          d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                          fill=""
                        />
                        <path
                          d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                          fill=""
                        />
                        <path
                          d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                          fill=""
                        />
                      </svg>
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/admin/deposits"
                      className={`group relative flex items-center gap-2.5  px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out rounded-2xl hover:bg-graydark dark:hover:bg-meta-4 
                    ${pathname.includes("deposits") && "bg-white text-primary dark:bg-meta-4"
                        }`}
                    >
                      <IoHammerOutline size={20} className={`${pathname.includes("deposits") ? 'fill-orange-600' : 'fill-white'}`} />
                      Deposits
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/admin/minerals"
                      className={`group relative flex items-center gap-2.5  px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out rounded-2xl hover:bg-graydark dark:hover:bg-meta-4 
                    ${pathname.includes("minerals") && "bg-white text-primary dark:bg-meta-4"
                        }`}
                    >
                      <FaMountain size={20} className={`${pathname.includes("minerals") ? 'fill-orange-600' : 'fill-white'}`} />
                      Minerals
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/admin/companies"
                      className={`group relative flex items-center gap-2.5  px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out rounded-2xl hover:bg-graydark dark:hover:bg-meta-4 
                    ${pathname.includes("companies") && "bg-white text-primary dark:bg-meta-4"
                        }`}
                    >
                      <BsBuildings size={20} className={`${pathname.includes("companies") ? 'fill-orange-600' : 'fill-white'}`} />
                      Companies
                    </Link>
                  </li>


                  <li>
                    <Link
                      href="/admin/applications"
                      className={`group relative flex items-center gap-2.5  px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out rounded-2xl hover:bg-graydark dark:hover:bg-meta-4 
                    ${pathname.includes("applications") && "bg-white text-primary dark:bg-meta-4"
                        }`}
                    >
                      <BsEnvelopeArrowUp size={20} className={`${pathname.includes("applications") ? 'fill-orange-600' : 'fill-white'}`} />
                      Applications
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/admin/reports"
                      className={`group relative flex items-center gap-2.5  px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out rounded-2xl hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("reports") &&
                        "bg-white text-primary dark:bg-meta-4"
                        }`}
                    >
                      <BsBarChartLine size={20} className={`${pathname.includes("reports") ? 'fill-orange-600' : 'fill-white'}`} />
                      Reports
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={() => signOut({ callbackUrl: "/signin" })}
                      className={`group relative flex items-center gap-2.5  px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out rounded-2xl hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("signout") &&
                        "bg-graydark dark:bg-meta-4"
                        }`}
                    >
                      <BsDoorOpen size={20} color={'#fff'} />
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
            {/* <!-- Sidebar Menu --> */}
          </div>
        </aside>}
    </>
  );
};

export default Sidebar;
