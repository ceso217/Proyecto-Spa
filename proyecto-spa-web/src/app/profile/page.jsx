"use client";
import { corinthia, montserrat, cormorant } from "@/app/ui/fonts";
import ExpandableSection from "@/components/ExpandableSection";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import axios from "axios";
import DateCard from "@/components/DateCard";

function ProfilePage() {
  const { data: session, status } = useSession();
  const user = session?.user;
  const isAdmin = user?.admin || false;

  const [collection, setCollection] = useState([]);

  // Fetch de la colección al cargar la página usando axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/dates");
        setCollection(response.data);
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    };
    fetchData();
  }, []);

  // Función para eliminar un elemento
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/dates/${id}`);
      setCollection((prevCollection) =>
        prevCollection.filter((item) => item._id !== id)
      );
    } catch (error) {
      console.error("Error deleting element:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center bg-orange-100 items-center py-20">
      <div
        className="flex flex-col w-[900px] min-h-[1000px] mx-auto p-12 bg-orange-50 rounded-xl"
        style={montserrat.style}
      >
        <h1
          className="text-8xl text-green-services-300 text-center mb-16"
          style={cormorant.style}
        >
          Mi Perfil
        </h1>
        <ExpandableSection
          titulo={"Mis datos"}
          datos={
            <>
              {user && (
                <ul>
                  <li>
                    <span className="font-bold">Nombre de usuario:</span>{" "}
                    {user.username}
                  </li>
                  <li>
                    <span className="font-bold">Nombre completo:</span>{" "}
                    {user.fullname}
                  </li>
                  <li>
                    <span className="font-bold">Email:</span> {user.email}
                  </li>
                  <li>
                    <span className="font-bold">Fecha de Nacimiento:</span>{" "}
                    {user.birthdate}
                  </li>
                </ul>
              )}
            </>
          }
        />
        <ExpandableSection
          titulo={"Mis turnos"}
          datos={
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {collection
                .filter((item) => item.client === user.fullname) // Filtra los elementos que cumplen la condición
                .map((item) => (
                  <div key={item._id} className="p-4 bg-white shadow rounded ">
                    <DateCard date={item} onDelete={handleDelete} />
                  </div>
                ))}
            </div>
          }
        />
        {isAdmin ? (
          <ExpandableSection
            titulo={"Admin"}
            datos={
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {collection.map((item) => (
                  <div key={item._id} className="p-4 bg-white shadow rounded">
                    <DateCard date={item} onDelete={handleDelete} />
                  </div>
                ))}
              </div>
            }
          />
        ) : null}
      </div>
    </div>
  );
}

export default ProfilePage;
