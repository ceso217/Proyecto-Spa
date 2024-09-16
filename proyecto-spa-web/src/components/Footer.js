import React from 'react';
import Link from 'next/link';
import styles from "../styles/Footer.module.css"; // Importamos un archivo de estilos CSS

const Footer = () => {
    return (
        <div className= {styles.footer}>
            <div className= {styles.container}>
                <div className={styles.logo}>
                    {/* Aquí puedes colocar tu imagen de la flor de loto */}
                    <img src="/logo.svg" alt="Logotipo Sentirse Bien" />
                </div>
                <div className={styles.links}>
                    <div>
                        <h3>Contamos con</h3>
                        <Link href="/about">Cosmetologa</Link>
                        <Link href="/about">Especialista</Link>
                        <Link href="/about">Masajista</Link>
                    </div>
                    <div>
                        <h3>Desarrolladores</h3>
                        <Link href="https://github.com/ceso217">Cecilio Baroni</Link>
                        <Link href="https://github.com/LeonardoBrabo">Brabo Leonardo</Link>
                        <Link href="https://github.com/frankito48">Romero Franco</Link>
                    </div>
                    <div>
                        <h3>Support</h3>
                        <Link href="/comingsoon">Blog</Link>
                        <Link href="/comingsoon">Help</Link>
                        <Link href="/comingsoon">FAQs</Link>
                    </div>
                </div>
                <div className={styles.social}>
                    {/* Aquí colocarás tus iconos de redes sociales */}
                    <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                </div>   
            </div>
            <p className={styles.copyrigth}>Copyright © 2024 Infinite Loops</p>
      </div>
  );
};

export default Footer;