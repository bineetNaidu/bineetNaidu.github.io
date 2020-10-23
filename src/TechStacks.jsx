import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { techs } from './data/tech.data';

// Statics
import './TechStacks.css';

const containerVariant = {
  initial: {
    x: '-100vh',
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const imgVariants = {
  initial: {
    x: '-100vh',
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
};

const TechStacks = () => {
  return (
    <motion.div
      className="techs"
      variants={containerVariant}
      initial="initial"
      animate="animate"
    >
      <h3>#Techs that I Use</h3>

      <div className="techs__lists">
        {techs.map((t) => (
          <motion.img
            variants={imgVariants}
            className="techs__img"
            alt={t.name}
            title={t.name}
            src={t.src}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default memo(TechStacks);
