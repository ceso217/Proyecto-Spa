import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "unsplash.com",
      "images.unsplash.com",
      "media.istockphoto.com",
      "plus.unsplash.com",
      "www.f1latam.com",
      "shawellness.com",
      "img2.rtve.es",
    ],
  },
};

export default withPWA({
  dest: "public", // Configuración específica para PWA
})(nextConfig); // Aplica únicamente sobre la configuración base
