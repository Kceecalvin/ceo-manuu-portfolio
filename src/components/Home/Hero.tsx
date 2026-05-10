'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`${styles.container} container`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className={styles.content}
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className={styles.eyebrow}
          >
            CEO MANUU
          </motion.span>
          <h1 className={styles.title}>
            Building Africa&apos;s<br />
            <span className={styles.gradientText}>Next Business Empire</span>
          </h1>
          <p className={styles.subtitle}>
            A diversified multi-industry ecosystem built for <br />
            <strong>scalability, integration, and global expansion.</strong>
          </p>
          
          <div className={styles.actions}>
            <Link href="/ventures" className={styles.primaryBtn}>
              Explore Empire
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Partner With Me
            </Link>
          </div>
        </motion.div>
      </div>
      
      <div className={styles.backgroundWrapper}>
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          className={styles.background}
        />
        <div className={styles.vignette} />
      </div>
    </section>
  );
};

export default Hero;
