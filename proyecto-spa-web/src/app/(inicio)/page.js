import Image from "next/image";
import "../../styles/Home.module.css";
import { Corinthia } from "@next/font/google";

const corinthia = Corinthia({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <div className="">
      <div className="hero">
        <Image
          src="/portada.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute text-9xl -translate-y-60">
          <Image
            src="/logo.svg"
            alt="Descripción de la imagen"
            width={400}
            height={400}
          />
          <h1 className={corinthia.className}>Sentirse Bien</h1>
        </div>
      </div>
    </div>

      <div className="Somos">
        <div className ="item">
            <Image
              src= "/fotopiedras.svg"
              alt = "fotos de persona recibiendo masaje"
              width = {400}
              height={600}
            />
        </div>
        <div className = "item">
          <h2>Quienes Somos</h2>
          <p>Buscamos atraer la atención de nuestros clientes a través de experiencias inspiradas en la seducción de los sentidos. Adaptamos las propuestas con el objetivo de que logre desconectarse completamente de la rutina y disfrute de un momento de bienestar, en total armonía con la naturaleza.</p>
        </div>
        <div className = "item i2">
            <Image
              src= "/fotomasaje.svg"
              alt = "fotod de persona recibiendo masaje"
              width = {400}
              height={600}
            />
        </div>
    </div>

    <div className="cta-section">
      <div className="cta-content">
        <h2>Pedí tu turno!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. 
           Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis finibus justo 
           quam at nibh. Vestibulum ipsum tortor, suscipit non enim vitae. Tincidunt scelerisque augue. 
           Nunc quis fringilla magna, vel sollicitudin quam.
        </p>
        <button className="cta-button">Contactanos</button>
      </div>
      <div className="cta-image">
        <Image
        src="ctabata.svg"
        alt="Descripción de la imagen"
        width={600}
        height={400}
        />
      </div>
    </div>

      <div className="Encuentranos">
        <div className="item">
          <Image
            src="/silla.svg"
            alt="Imagen decorativa"
            width={400}
            height={300}
          />
        </div>
        <div className="item i2">
          <h2 className={corinthia.className}>¡Encuéntranos!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies.</p>
        </div>
        <div className="item">
          <Image
            src="/pileta.svg"
            alt="Imagen decorativa"
            width={400}
            height={300}
          />
        </div>
      </div>

      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581361.0577490767!2d-64.4921250948583!3d-28.76664233563793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329977b18b6df7%3A0x8f9c10933bb46db8!2sSENTIRSE%20BIEN%20SPA!5e0!3m2!1ses-419!2sar!4v1725247558743!5m2!1ses-419!2sar"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
