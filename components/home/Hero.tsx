"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Code, Database, Server, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.div 
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-background to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-400/5 rounded-full filter blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="px-3 py-1 mb-6 bg-background/80 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              <span>New MERN Stack Course Launching Soon</span>
            </Badge>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Master the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MERN Stack</span> & Build Modern Web Apps
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Learn MongoDB, Express.js, React.js, and Node.js from industry experts. Transform your career with our comprehensive courses and project-based learning.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href="/courses">
              <Button size="lg" className="font-medium">
                Explore Courses
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="font-medium">
                Contact Us
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center p-4 rounded-lg bg-background/80 backdrop-blur-sm border">
              <Database className="h-8 w-8 text-blue-500 mb-2" />
              <h3 className="font-medium">MongoDB</h3>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-background/80 backdrop-blur-sm border">
              <Server className="h-8 w-8 text-green-500 mb-2" />
              <h3 className="font-medium">Express.js</h3>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-background/80 backdrop-blur-sm border">
              <Code className="h-8 w-8 text-blue-500 mb-2" />
              <h3 className="font-medium">React.js</h3>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-background/80 backdrop-blur-sm border">
              <Server className="h-8 w-8 text-green-600 mb-2" />
              <h3 className="font-medium">Node.js</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}