"use client";
import React from "react";
import { cormorant, montserrat } from "@/app/ui/fonts";
import { useState, useEffect } from "react";
import axios from "axios";
import CheckoutButton from "@/components/CheckoutButton";

export default function Clientes() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/users");
        setCollection(response.data);
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-screen bg-orange-50 p-2" style={montserrat.style}>
      <div className="m-4 flex flex-col items-center">
        <h1 className="text-7xl mt-10" style={cormorant.style}>
          Clientes
        </h1>
        <div className="flex items-center justify-center bg-gray-100">
          <CheckoutButton />
        </div>
        <div className="w-full py-16">
          <div className="flex p-4 bg-orange-100 shadow rounded-t text-center">
            <div className="w-1/4">
              <p>Nombre de usuario</p>
            </div>
            <div className="w-1/4">
              <p>Nombre Completo</p>
            </div>
            <div className="w-1/4">
              <p>Email</p>
            </div>
            <div className="w-1/4">
              <p>Fecha de nacimiento</p>
            </div>
          </div>
          {collection.map((item) => (
            <div
              key={item._id}
              className="flex p-4 bg-white shadow text-center"
            >
              <div className="w-1/4">
                <p>{item.username}</p>
              </div>
              <div className="w-1/4">
                <p>{item.fullname}</p>
              </div>
              <div className="w-1/4">
                <p>{item.email}</p>
              </div>
              <div className="w-1/4">
                <p>{item.birthdate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
