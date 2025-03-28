"use client";
import AuthProvider from "@/app/context/AuthProvider";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    setTimeout(() => setLoading(false), 100);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <div className="dark:bg-boxdark-2 dark:text-bodydark">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
