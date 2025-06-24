"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { firstName, lastName } from "@/siteConfig";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "glass-morphism py-2" : "py-4"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <NavigationMenu.Root className="relative">
          <NavigationMenu.List className="flex items-center justify-between">
            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="#home"
                className="text-xl font-bold gradient-text"
              >
                {firstName.charAt(0)}{lastName.charAt(0)}
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.List className="flex items-center space-x-8">
                <div className="hidden md:flex items-center gap-6">
                  {navItems.map((item) => (
                    <NavigationMenu.Item key={item.name}>
                      <NavigationMenu.Link
                        href={item.href}
                        className={cn(
                          "nav-link",
                          activeSection === item.href.slice(1) && "active"
                        )}
                      >
                        {item.name}
                      </NavigationMenu.Link>
                    </NavigationMenu.Item>
                  ))}
                </div>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glassy-resume-btn flex items-center gap-2 px-6 py-3 rounded-2xl text-lg font-semibold shadow-xl"
                  whileHover={{
                    scale: 1.07,
                    y: -3,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="h-5 w-5" />
                  Resume
                </motion.a>
              </NavigationMenu.List>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </motion.header>
  );
} 