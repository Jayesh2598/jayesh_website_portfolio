"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 }
};

export default function Hero() {
  return (
    <section className="section flex flex-col justify-center items-center min-h-[80vh] bg-gradient-to-br from-primary-50 via-white to-secondary-100">
      <div className="container-custom text-center">
        <motion.h1 
          className="heading-1 gradient-text" 
          initial="initial" 
          animate="animate" 
          variants={fadeIn}
        >
          Jayesh Chaudhari
        </motion.h1>
        <motion.p 
          className="text-2xl md:text-3xl text-secondary-700 font-medium mb-8" 
          initial="initial" 
          animate="animate" 
          variants={fadeIn} 
          transition={{ delay: 0.2 }}
        >
          Business Analytics & Software Engineering Professional
        </motion.p>
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-8" 
          initial="initial" 
          animate="animate" 
          variants={fadeIn} 
          transition={{ delay: 0.4 }}
        >
          <a 
            href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} 
            className="btn-primary flex items-center gap-2"
          >
            <FaPhone /> {process.env.NEXT_PUBLIC_PHONE_NUMBER}
          </a>
          <a 
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} 
            className="btn-primary flex items-center gap-2"
          >
            <FaEnvelope /> Email
          </a>
          <a 
            href={process.env.NEXT_PUBLIC_LINKEDIN_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary flex items-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </motion.div>
        <motion.p 
          className="max-w-2xl mx-auto text-lg text-secondary-600" 
          initial="initial" 
          animate="animate" 
          variants={fadeIn} 
          transition={{ delay: 0.6 }}
        >
          Results-driven professional with a Master's in Business Analytics and Information Management 
          and 3+ years of experience in software engineering, leveraging advanced machine learning, 
          NLP, and data visualization to solve complex business challenges and bridge technical 
          execution with business strategy.
        </motion.p>
      </div>
    </section>
  );
} 