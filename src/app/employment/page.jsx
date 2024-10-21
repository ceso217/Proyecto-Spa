import { corinthia, cormorant, montserrat } from "@/app/ui/fonts";

 const EmploymentPage = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <section className="pb-20 relative block bg-orange-100">
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-7xl font-bold from-current mb-8 text-green-services-300 text-center" style={cormorant.style}>
              Únete a Nuestro Equipo 
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Descubre tu potencial en un entorno dedicado al bienestar y al crecimiento personal.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-lightBlue-300 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-medal text-xl" />
              </div>
              <h6 className="text-xl mt-5 font-semibold text-green-services-300">
              Atención Excepcional
              </h6>
              <p className="mt-2 mb-4 text-blueGray-500">
              Sumérgete en nuestra filosofía de nutrir el talento y proporcionar servicios sobresalientes que aseguren que nuestros clientes se sientan rejuvenecidos.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-poll text-xl" />
              </div>
              <h5 className="text-xl mt-5 font-semibold text-green-services-300">
              Expande Tus Habilidades
              </h5>
              <p className="mt-2 mb-4 text-blueGray-500">
              Aprovecha las oportunidades de desarrollo profesional mientras contribuyes a nuestra misión de bienestar holístico.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-lightbulb text-xl" />
              </div>
              <h5 className="text-xl mt-5 font-semibold text-green-services-300">
              Comienza Tu Viaje
              </h5>
              <p className="mt-2 mb-4 text-blueGray-500">
              Inicia una carrera donde cada día se trata de promover la salud, el equilibrio y la relajación para quienes buscan tranquilidad.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative block pt-24 lg:pt-0 bg-orange-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-services-100">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-3xl font-semibold text-center text-crema" style={cormorant.style}>
                    ¿Te gustaría trabajar con nostros?
                  </h4>
                  <p className="leading-relaxed mt-1 mb-4 text-crema text-center pt-4">
                    Completa este formulario y dinos por qué te gustaría unirte a nuestro equipo. ¡Esperamos con interés conocerte!
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-crema text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-crema text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-crema text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      cols={80}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Type a message..."
                      defaultValue={""}
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-green-services-300 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Enviar Mensaje
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="relative green-services-200 pt-8 pb-6 mt-1">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">  
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default EmploymentPage;