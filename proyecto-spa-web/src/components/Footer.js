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
                        <h3>Productos</h3>
                        <Link href="/skincare">Skincare</Link>
                        <Link href="/makeup">Make Up</Link>
                        <Link href="/shampoo">Shampoo</Link>
                    </div>
                    <div>
                        <h3>About Us</h3>
                        <Link href="/our-shop">Our Shop</Link>
                        <Link href="/career">Career</Link>
                        <Link href="/specialists">Specialists</Link>
                    </div>
                    <div>
                        <h3>Support</h3>
                        <Link href="/blog">Blog</Link>
                        <Link href="/help">Help</Link>
                        <Link href="/faqs">FAQs</Link>
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