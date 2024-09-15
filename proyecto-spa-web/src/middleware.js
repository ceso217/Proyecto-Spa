import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      console.log("Verificando autenticación:", token);
      return !!token; // Autenticado si hay token
    },
  },
});

export const config = {
  matcher: ["/dashboard/:path*"], // Rutas protegidas
};
