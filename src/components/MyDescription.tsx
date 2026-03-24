import React from "react";
import { Github, Linkedin, ArrowRight, Sparkles, Briefcase, Code, Award } from "lucide-react";
import TypewriterComponent from "typewriter-effect";
import { motion, Variants } from "framer-motion";
import profilePic from "../assets/S.jpeg";

const MyDescription: React.FC<{ startNotation: boolean }> = ({ startNotation: _startNotation }) => {
  const greetings = [
    "Hello", "سلام", "हैलो", "Merhaba", "Hola", "Bonjour", "Hallo", "Ciao", "こんにちは", "안녕하세요", "Olá"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl px-4 py-12 lg:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[minmax(180px,auto)]">
        {/* Main Title & Bio Card */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-4 lg:col-span-4 lg:row-span-2 glass p-8 sm:p-12 rounded-[2.5rem] flex flex-col justify-center space-y-6 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -mr-40 -mt-40 group-hover:bg-primary/10 transition-colors duration-700" />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold w-fit border border-primary/20">
            <Sparkles className="size-3.5 fill-current" />
            Available for new opportunities
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-medium text-muted-foreground flex items-center gap-2">
              <TypewriterComponent
                options={{
                  strings: greetings,
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
              <span className="animate-bounce">👋</span>
            </h2>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-foreground">
              Sonam Tsering
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-primary text-glow">
              Crafting digital experiences
            </p>
          </div>
          
          <div className="space-y-4 max-w-2xl">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-bold italic">Full Stack Developer</span> focused on building fast, scalable web applications using modern technologies like 
              <span className="text-primary font-semibold"> React, Node.js, and Java.</span> I prioritize clean code, performance, and intuitive user experiences.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed hidden sm:block">
              I have hands-on experience through training in Android and full-stack development, where I've built practical solutions and improved my problem-solving skills.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 text-sm font-bold text-muted-foreground uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="text-primary"><Briefcase className="size-4" /></span>
              1+ Training
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary"><Code className="size-4" /></span>
              10+ Projects
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary"><Award className="size-4" /></span>
              4+ Certifications
            </div>
          </div>
        </motion.div>

        {/* Profile Illustration/Image Card */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-2 lg:col-span-2 lg:row-span-2 glass rounded-[2.5rem] overflow-hidden group relative flex items-center justify-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5"
        >
          <div className="absolute inset-0 bg-secondary/10 opacity-30 group-hover:opacity-60 transition-opacity" />
          <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden border-2 border-white/20 shadow-2xl transition-all duration-700 group-hover:scale-[1.05] group-hover:rotate-1">
            <img
              src={profilePic}
              alt="Sonam Tsering"
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div className="absolute top-10 right-10 flex flex-col gap-2">
             <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-white/20 shadow-lg group-hover:bg-primary/20 transition-colors">
                <Code className="size-6 text-primary" />
             </div>
          </div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-8 right-8 glass px-5 py-3 rounded-2xl border border-white/20 text-center shadow-2xl backdrop-blur-2xl"
          >
            <span className="text-xs sm:text-sm font-black tracking-tighter uppercase block">📍 Based in LPU Punjab, India</span>
          </motion.div>
        </motion.div>

        {/* Action Card */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-4 lg:col-span-3 glass p-10 rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
           <div className="space-y-2">
              <h4 className="text-2xl font-black">Let's build something <span className="text-primary">extraordinary</span>.</h4>
              <p className="text-muted-foreground text-sm font-medium">Available for freelance and full-time roles.</p>
           </div>
           <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="mailto:sontseofficial@gmail.com"
                className="px-8 py-4 rounded-2xl bg-primary text-white font-black hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 text-center"
              >
                Let's Talk <ArrowRight className="size-4" />
              </a>
              <a
                href="/Sonam GEN CV final.pdf"
                download
                className="px-8 py-4 rounded-2xl glass border border-white/20 text-foreground font-black hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 text-center shadow-lg"
              >
                Download CV <ArrowRight className="rotate-90 size-4" />
              </a>
           </div>
        </motion.div>

        {/* Social Card */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-2 lg:col-span-3 glass p-8 rounded-[2.5rem] flex items-center justify-center gap-8 group"
        >
          <div className="flex gap-6">
            {[
              { icon: <Github className="size-7" />, href: "https://github.com/Sonamtsering12057", label: "GitHub" },
              { icon: <Linkedin className="size-7" />, href: "https://www.linkedin.com/in/SonamTsering", label: "LinkedIn" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-[1.5rem] glass hover:bg-primary/20 hover:text-primary transition-all border border-white/10 hover:scale-110 active:scale-90 shadow-lg group-hover:border-primary/30"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em]">Social Connect</p>
            <p className="text-sm font-bold text-foreground/80">Follow my journey</p>
          </div>
        </motion.div>

        {/* About Me Card */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-4 lg:col-span-6 glass p-10 sm:p-14 rounded-[2.5rem] relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mb-48 group-hover:bg-primary/10 transition-colors duration-700" />

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-10 bg-primary rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-black text-foreground">About Me</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hi! I'm <span className="text-foreground font-bold">Sonam Tsering</span>, a passionate
                  <span className="text-primary font-semibold"> Full Stack Developer</span> with a strong
                  foundation in building fast, scalable web and mobile applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I've gone through hands-on training in <span className="text-foreground font-semibold">Android Development</span> and
                  <span className="text-foreground font-semibold"> Full Stack Development</span>, where I honed
                  my ability to deliver practical, real-world solutions from the ground up.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My tech stack includes <span className="text-primary font-semibold">React, Node.js, Java,
                  TypeScript</span>, and more. I care deeply about clean code,
                  performance, and creating intuitive user experiences that make a difference.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {["React", "Node.js", "Java", "TypeScript", "Android", "Full Stack"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20"
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
  );
};

export default MyDescription;
