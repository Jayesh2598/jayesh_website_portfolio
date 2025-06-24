"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Github, Mail, ChevronDown } from "lucide-react";
import siteConfig, { firstName, lastName } from "@/siteConfig";

// 'Seattle, Washington' and all location references have been removed as per user request.

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jayesh2598/", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/Jayesh2598", icon: Github },
  { name: "Email", url: "mailto:jayesh2598@gmail.com", icon: Mail },
];

const AnimatedBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(147, 187, 237, 0.64)" />
          <stop offset="100%" stopColor="rgba(96, 165, 250, 0)" />
        </radialGradient>
      </defs>
      <motion.circle
        cx="10%"
        cy="20%"
        r="200"
        fill="url(#g)"
        animate={{ cx: [ "10%", "90%", "10%" ], cy: [ "20%", "80%", "20%" ] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="80%"
        cy="70%"
        r="250"
        fill="url(#g)"
        animate={{ cx: [ "80%", "20%", "80%" ], cy: [ "70%", "30%", "70%" ] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </svg>
  </div>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-start text-left">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold vibrant-gradient-text mb-6 leading-tight"
            style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
          >
            {firstName} {lastName}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-xl"
          >
            Data Analytics professional specializing in predictive modeling, business intelligence, and translating data insights into measurable business impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-row gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-xl text-lg font-semibold min-w-[160px] justify-center text-white hero-glass-button"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <link.icon className="h-6 w-6" />
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-80 w-80 md:h-96 md:w-96"
          >
            <div className="glassy-image-ring">
              <div className="inner-image">
                <Image
                  src="/images/officialpic/officialpic.jpeg"
                  alt={`${firstName} ${lastName}`}
                  width={384}
                  height={384}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center group">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="transition-transform group-hover:scale-110"
        >
          <ChevronDown className="h-10 w-10 text-white/50 animate-bounce" />
        </motion.div>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-2 text-sm text-white/50"
        >
          Scroll to explore
        </motion.span>
      </a>
    </section>
  );
} 