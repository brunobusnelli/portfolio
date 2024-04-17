import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import LAM from "../../Image/LAM.png";
import tateti from "../../Image/TaTeTi.png";
import RCautos from "../../Image/RCautos.png";
import blogIA from "../../Image/blogIA.png";

const items = [
  {
    id: 1,
    title: "LAM Music Store",
    img: LAM,
    desc: "Es una aplicación web desarrollada utilizando React, un framework popular de JavaScript, y algunas librerías clave para la interfaz de usuario. La plataforma ofrece una amplia gama de instrumentos musicales para músicos de todos los niveles y gustos. Este proyecto utiliza React Bootstrap y Bootstrap para la interfaz, React Hook Form para el manejo de formularios y React Icons para la integración de íconos. Además, se utiliza Sass como preprocesador de CSS para una gestión eficiente del estilo.",
    link: "https://lam-music.netlify.app",
  },
  {
    id: 2,
    title: "RC Autos",
    img: RCautos,
    desc: "Videojuego en 2D con múltiples niveles, en el que al desviarte del camino designado, comienzas de nuevo y pierdes una vida. Además, cuentas con un cronómetro que registra tu tiempo récord y te desafía a superarlo en cada intento.",
    link: "https://rcautos.netlify.app/",
  },
  {
    id: 3,
    title: "TaTeTi",
    img: tateti,
    desc: "El juego clásico de Tateti, conocido también como Tres en Línea, es un juego de estrategia donde dos jugadores se enfrentan en un tablero de 3x3.  Es un juego sencillo pero desafiante que requiere planificación y anticipación para ganar a tu oponente",
    link: "https://tatetibylgr.netlify.app",
  },
  {
    id: 4,
    title: "Blog IA",
    img: blogIA,
    desc: "Somos un equipo de aprendices de programadores apasionados por la tecnología y la innovación. Estamos comprometidos en aprender juntos y superar desafíos que nos permitan crecer en nuestras habilidades de programación, tanto individualmente como en equipo. Nos enfocamos en proyectos que no solo nos permitan aprender, sino también en los que podamos aplicar nuestros conocimientos para crear soluciones creativas y efectivas. ¡Estamos emocionados por lo que el futuro nos depara!",
    link: "https://brunobusnelli.github.io/blog-ia/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>
              <button>Ver web</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Proyectos destacados</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
