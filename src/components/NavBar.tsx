import React, { useState, useEffect } from "react";
import { Home, Mail, User, Briefcase, Code, Cpu, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { id: "AboutMeScreen", icon: <User className="size-4" />, label: "About" },
  { id: "ExperienceScreen", icon: <Briefcase className="size-4" />, label: "Experience" },
  { id: "ProjectsScreen", icon: <Code className="size-4" />, label: "Projects" },
  { id: "SkillsScreen", icon: <Cpu className="size-4" />, label: "Skills" },
];

const NavBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("AboutMeScreen");
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark") ? "dark" : "light";
    }
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => {
      // Determine active section
      const sections = ["AboutMeScreen", "ExperienceScreen", "ProjectsScreen", "SkillsScreen", "ContactMeScreen"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass rounded-full px-4 py-2 flex items-center gap-2 shadow-lg shadow-black/5 dark:shadow-white/5 border border-white/20 dark:border-white/10"
      >
        <button
          onClick={() => scrollTo("AboutMeScreen")}
          className={`p-2 rounded-full transition-all duration-300 ${activeSection === "AboutMeScreen" ? "bg-primary text-white" : "hover:bg-primary/10 text-muted-foreground hover:text-primary"}`}
          aria-label="Go to Home"
        >
          <Home className="size-5" />
        </button>

        <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-800 mx-1" />

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeSection === item.id 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:text-primary hover:bg-primary/5"
            }`}
          >
            <span className="hidden sm:inline">{item.label}</span>
            <span className="sm:hidden">{item.icon}</span>
          </button>
        ))}

        <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-800 mx-1" />

        <button
          onClick={() => scrollTo("ContactMeScreen")}
          className={`p-2 rounded-full transition-all duration-300 mr-1 ${activeSection === "ContactMeScreen" ? "bg-primary text-white shadow-lg shadow-primary/20" : "hover:bg-primary/10 text-muted-foreground hover:text-primary"}`}
          aria-label="Contact Me"
        >
          <Mail className="size-5" />
        </button>

        <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-800 mx-2" />

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-primary/10 text-primary transition-all active:scale-95 flex items-center justify-center"
          aria-label="Toggle Theme"
        >
          <motion.div
            initial={false}
            animate={{ rotate: theme === "dark" ? 0 : 180 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </motion.div>
        </button>
      </motion.div>
    </nav>
  );
};

export { NavBar };
