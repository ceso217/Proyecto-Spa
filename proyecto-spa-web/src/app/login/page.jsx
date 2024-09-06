"use client"

import React from "react";
import Image from "next/image";
import { corinthia } from "../ui/fonts";
import { montserrat } from "@/app/ui/fonts";
import { useForm } from "react-hook-form";
import Login from "../../components/Login";

export default function page() {
  return (
    <>
      <Login />
    </>
  );
}
