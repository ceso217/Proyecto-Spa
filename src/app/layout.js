import "./globals.css";
import Navbar from "../components/Navbar";
import SideBar from "@/components/SideBar";
import Footer from "../components/Footer";
import Providers from "./Providers";

export const metadata = {
  title: "Sentirse Bien Spa",
  description: "El Spa donde venís, a sentirte bien :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <SideBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
