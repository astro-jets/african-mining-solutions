"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const pages = [
    "home", "deposits", "companies", "minerals", "services", "about", "contacts"
];

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activePage, setActivePage] = useState('home');
    return (
        <>
            <header>
                <nav className="bg-white text-black relative h-20 z-1000 darkk:bg-gray-900">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                        <a href="/" className="text-3xl text-black">AMS</a>
                        <div className="flex items-center lg:order-2">
                            <div className="hidden mt-2 mr-4 sm:inline-block">
                                <span></span>
                            </div>

                            <button data-collapse-toggle="mobile-menu-2" type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-900 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2" aria-expanded="true"
                                onClick={() => { setShowMenu(!showMenu) }}>
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Large screen menu */}
                        <div className="ml-auto hidden items-center justify-between w-full h-20  lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium md:items-center  h-full md:flex-row lg:space-x-8 lg:mt-0">
                                {
                                    pages.map((page, index) => (
                                        <li key={index}>
                                            <Link href={page === 'home' ? '/' : `/${page}`}
                                                className="capitalize block py-2 pl-3 pr-4 text-gray-900  bg-red-700 rounded lg:bg-transparent lg:text-red-700 lg:p-0 dark:text-gray-900 " aria-current="page">
                                                {page}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Mobile menu */}
                        {showMenu &&
                            <div className="items-center h-screen z-1000 justify-between w-full md:hidden" id="mobile-menu-2">
                                <ul className="flex flex-col space-y-7 mt-6 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                    {
                                        pages.map(page => (
                                            <li key={page} onClick={() => {
                                                setActivePage(page);
                                                setShowMenu(!showMenu);
                                            }}>
                                                <Link
                                                    href={page === 'home' ? '/' : `/${page}`}
                                                    className={`block py-2 pl-3 pr-4 text-gray-900   rounded=2xl lg:bg-transparent lg:text-red-700 lg:p-0 dark:text-gray-900  
                                                        ${page === activePage ? "bg-red-700" : null}
                                                    `}>
                                                    {page.toUpperCase()}
                                                </Link>
                                            </li>

                                        ))
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;