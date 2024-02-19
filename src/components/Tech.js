import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mb-7 `}>Skills</p>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <motion.div
            className="w-28 h-28 rounded-full flex items-center justify-center shadow-card border-2 border-solid border-custom-blue p-9"
            key={index}
            whileHover={{ scale: 1.1 }}
          >
            <motion.img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-cover filter invert "
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
