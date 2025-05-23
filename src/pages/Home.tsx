import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-4xl mx-auto"
    >
      <motion.div 
        className="text-center mb-12 w-full"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h1 className="text-5xl font-bold mb-4 glitch-text">SHAq256</h1>
        <p className="text-xl text-green-400">
          H4ck3rs Extr40rd1n41re
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="p-6 rounded-lg shadow-lg bg-surface-dark border border-green-800">
          <h2 className="text-2xl font-bold mb-4 terminal-text">Who We Are</h2>
          <p>Nerds who love breaking stuff</p>
        </div>

        <div className="p-6 rounded-lg shadow-lg bg-surface-dark border border-green-800">
          <h2 className="text-2xl font-bold mb-4 terminal-text">Our Stats</h2>
          <div className="flex justify-between items-center mb-2">
            <span>CTFs Pwned</span>
            <span className="font-mono">?</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span>Flags Snagged</span>
            <span className="font-mono">?</span>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center w-full">
            <span>Energy Drinks</span>
            <span className="font-mono">?</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link 
          to="/achievements" 
          className="inline-block px-6 py-3 rounded-md bg-primary-dark hover:bg-primary-dark/80 text-white"
        >
          Check Out Our Hacks
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;
