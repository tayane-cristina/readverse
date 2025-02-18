import { motion } from "framer-motion";

export default function WobbleImage ({imageAdress, nameClass}) {
    return (
      <motion.img
        className={nameClass}
        src={imageAdress}
        alt="Imagem oscilante"
        animate={{ y: [0, -10, 0], rotate: 0 }} 
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", rotate: 2 }} 

      />
    );
  }