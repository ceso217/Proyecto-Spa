"use client";

import { corinthia, montserrat, cormorant } from "@/app/ui/fonts";
import ExpandableSection from "@/components/ExpandableSection";
import { useSession } from "next-auth/react";
import { useState } from "react";

function ProfilePage() {
  const { data: session, status } = useSession();

  // Guardar session.user en una variable
  const user = session?.user;

  console.log(session, status);

  const [isOpen, setIsOpen] = useState(false);

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
          Perfil
        </h1>
        {/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/}
        <ExpandableSection
          titulo={"Mis datos"}
          datos={
            <>
              {user && (
                <>
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
                    <li></li>
                  </ul>
                </>
              )}
            </>
          }
        />
        <ExpandableSection titulo={"Mis turnos"} datos={"mis turnos"} />
      </div>
    </div>
  );
}

export default ProfilePage;
