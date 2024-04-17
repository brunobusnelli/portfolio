import { motion } from "framer-motion";

const Links = () => {
  const varianst = {
    open: {
      transition: {
        staggeredChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggeChildren: 0.5,
        staggeDirection: -1,
      },
    },
  };

  const ItemVarianst = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const items = ["Inicio", "Servicios", "Portafolio", "Contacto"];

  return (
    <motion.div className="links" varianst={varianst}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          varianst={ItemVarianst}
          whileHover={{ scale: 1.1 }}
          whileTap={{scale:0.95}}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
