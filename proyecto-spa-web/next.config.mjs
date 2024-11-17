const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
});
module.exports = withPWA({
  // Configuración adicional
});
