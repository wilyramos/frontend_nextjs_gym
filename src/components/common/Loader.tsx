// src/components/common/Loader.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CgGym } from 'react-icons/cg';

export default function Loader({ show = true }: { show?: boolean }) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    key="loader"
                    className="flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="text-black text-4xl"
                        animate={{
                            y: [0, -20, 0],   // rebote vertical
                            rotate: [0, 10, -10, 0], // pequeño giro para dinamismo
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'easeInOut',
                        }}
                    >
                        <CgGym />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
