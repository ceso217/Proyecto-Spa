"use client";

import { useSession } from "next-auth/react";
import SideBar from "@/components/SideBar.";
import Navbar from "@/components/Navbar";

const AuthWrapper = ({ children }) => {
  const { data: session, status } = useSession();

  return (
    <>
      {session ? <SideBar /> : <Navbar />}
      {children}
    </>
  );
};

export default AuthWrapper;