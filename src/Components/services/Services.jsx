import "./Services.scss";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import people from "../../Image/people.png"

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Me concentro en ayudarte a que tu
          <br /> empresa crezca y avance.
        </p>
        <hr />
      </motion.div>
      <motion.div className="tittleContainer" variants={variants}>
        <div className="tittle">
          <img src={people} alt="" />
          <h1>
            <motion.b whileHover={{ color: "rebeccapurple" }}>Soluciones</motion.b>{" "}
            únicas
          </h1>
        </div>
        <div className="tittle">
          <h1>
            <motion.b whileHover={{ color: "rebeccapurple" }}>Para tu</motion.b>{" "}
            negocio.
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Diseño</h2>
          <p>
            Creatividad y experiencia en diseño web se unen para dar vida a tus
            ideas. Interfaces que cautivan a tus visitantes desde el
            primer momento.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Desarrollo</h2>
          <p>
            Con un enfoque en la programación y la tecnología, creao sitios web
            sólidos, eficientes que se adaptan a tus necesidades y objetivos.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Orientado al cliente</h2>
          <p>
            Trabajando codo a codo contigo para garantizar que tu visión se
            convierta en un sitio web excepcional. Ser un socio confiable.
          </p>
        </motion.div>
        <motion.div
          className="box mantenimiento"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Mantenimiento</h2>
          <p>
            Servicios de mantenimiento continuo para asegurarnos de
            que tu sitio web esté siempre en su mejor forma, con
            actualizaciones.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
