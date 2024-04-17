import "./Bruno.scss";
import { motion } from "framer-motion";
import scroll from "../../Image/scroll.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const scrollToSection = () => {
  const section = document.getElementById("Contacto");
  section.scrollIntoView({ behavior: "smooth" });
};

const Lautaro = () => {
  return (
    <div className="lautaro">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>Bruno Busnelli</motion.h1>
          <motion.h2 variants={textVariants}>
            Desarrollador & Diseñador Web creativo y entusiasta, especializado
            en experiencia de usuario e interfaces web.
          </motion.h2>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={scroll}
          />
        </motion.div>
      </div>
      <motion.div
        className="slindingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Front-End Developer
      </motion.div>
      <div className="imageContainer">
      </div>
    </div>
  );
};

export default Lautaro;
