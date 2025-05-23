import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const achievements = [
  { id: 1, name: "DEF CON CTF 2024", description: "Deez", date: "August 2024" },
  { id: 2, name: "CSAW CTF Finals", description:"Deez", date: "November 2024" },
  { id: 3, name: "HackTheBox Pro Labs", description: "Deez", date: "March 2025" },
  { id: 4, name: "Google CTF", description: "Deez", date: "July 2024" },
];

export const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-8 text-center">
        <motion.h1 
          className="text-4xl font-bold terminal-text"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ type: "spring" }}
        >
          Our Greatest Hacks
        </motion.h1>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link 
            to="/" 
            className="px-4 py-2 rounded-md bg-surface-dark border border-green-800"
          >
            Back to Base
          </Link>
        </motion.div>
      </div>

      <div className="space-y-6 w-full text-center">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            className="p-6 rounded-lg shadow-lg bg-surface-dark border border-green-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
              <h2 className="text-2xl font-bold">{achievement.name}</h2>
              <span className="text-sm text-green-400">{achievement.date}</span>
            </div>
            <p className="mt-2">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements;
