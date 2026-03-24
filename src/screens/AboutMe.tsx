import React, { useState, useEffect } from "react";
import MyDescription from "../components/MyDescription";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  const [startNotation, setStartNotation] = useState(false);

  useEffect(() => {
    setStartNotation(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative py-20 lg:py-32"
      id="AboutMeScreen"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl px-4"
      >
        <div className="space-y-12">
           <MyDescription startNotation={startNotation} />

           <motion.div
            variants={itemVariants}
            className="glass p-10 sm:p-14 rounded-[3rem] relative overflow-hidden group border border-white/10"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mb-48 group-hover:bg-primary/10 transition-colors duration-700" />

            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-12 bg-primary rounded-full" />
                <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">About Me</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Hi! I'm <span className="text-foreground font-bold">Sonam Tsering</span>, a passionate
                    <span className="text-primary font-semibold"> Full Stack Developer</span> with a strong
                    foundation in building fast, scalable web and mobile applications.
                  </p>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    I've gone through hands-on training in <span className="text-foreground font-semibold">Android Development</span> and
                    <span className="text-foreground font-semibold"> Full Stack Development</span>, where I honed
                    my ability to deliver practical, real-world solutions from the ground up.
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    My tech stack includes <span className="text-primary font-semibold">React, Node.js, Java,
                    TypeScript</span>, and more. I care deeply about clean code,
                    performance, and creating intuitive user experiences that make a difference.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    {["React", "Node.js", "Java", "TypeScript", "Android", "Full Stack", "Kotlin", "Firebase", "MongoDB", "PostgreSQL"].map((tag) => (
                      <span
                        key={tag}
                        className="px-5 py-2 rounded-2xl text-sm font-bold bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-20" />
    </div>
  );
};

export { AboutMe };