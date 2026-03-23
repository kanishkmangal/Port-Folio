'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: "easeOut" as const },
    },
};

interface Props {
    children: ReactNode;
    className?: string;
}

export const ScrollReveal = ({ children, className = '' }: Props) => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={`w-full ${className}`}
        >
            {children}
        </motion.div>
    );
};

interface ItemProps extends Props {
    hoverEffect?: boolean;
}

export const ScrollItem = ({ children, className = '', hoverEffect = false }: ItemProps) => {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={hoverEffect ? { scale: 1.03, boxShadow: "0px 10px 30px rgba(0,0,0,0.15)" } : undefined}
            className={`${hoverEffect ? 'transition-all duration-300' : ''} ${className}`}
        >
            {children}
        </motion.div>
    );
};
