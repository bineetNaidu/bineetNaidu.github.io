import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useStateValue } from './contexts/state.context';
// Statics
import './Footer.css';

const Footer = () => {
  // Contexts
  const [{ footer }] = useStateValue();

  return (
    <motion.div
      initial={{ x: '200vw', opacity: 0 }}
      animate={{ x: '0', opacity: 1, transition: { delay: 2.8 } }}
      className="footer"
      style={{ background: footer }}
    >
      <p>© 2020 Bineet Naidu</p>
    </motion.div>
  );
};

export default memo(Footer);
