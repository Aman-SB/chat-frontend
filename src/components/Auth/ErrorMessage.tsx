'use client'

import { motion } from 'framer-motion';

export default function ErrorMessage({ error }: { error: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="text-red-500 text-sm text-center mb-4"
    >
      {error}
    </motion.div>
  );
}
