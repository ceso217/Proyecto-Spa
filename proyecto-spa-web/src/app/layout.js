import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Providers from "./Providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SideBar from "@/components/SideBar.";

export const metadata = {
  title: "Sentirse Bien Spa",
  description: "El Spa donde venís, a sentirte bien :)",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
  themeColor: "#3C634A",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="es">
      <body>
        <Providers>
          {session ? <SideBar /> : <Navbar />}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
