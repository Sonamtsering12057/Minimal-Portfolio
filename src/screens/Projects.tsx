import { Github, ExternalLink, Code2 } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  category: "Full Stack" | "Frontend" | "Backend" | "Mobile";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sarang Korean Restaurant",
    description:
      "A high-performance full-stack restaurant platform featuring dynamic menu management, table bookings, and a seamless administrative dashboard.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    liveLink: "https://github.com/Sonamtsering12057/Sarang-Korean-Restaurant",
    githubLink: "https://github.com/Sonamtsering12057/Sarang-Korean-Restaurant",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Library Management System",
    description:
      "A robust Java-based enterprise application for automating library workflows, tracking book circulation, and managing member databases with high reliability.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop",
    techStack: ["Java", "JDBC", "MySQL", "Swing"],
    liveLink: "https://github.com/Sonamtsering12057/Library-Management-System",
    githubLink: "https://github.com/Sonamtsering12057/Library-Management-System",
    category: "Backend",
  },
  {
    id: 3,
    title: "Eco Wellness Connection",
    description:
      "A premium health-focused landing page with advanced animations, magnetic UI elements, and a high-performance responsive layout.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop",
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
    liveLink: "https://github.com/Sonamtsering12057/Health-and-Wellness-Project",
    githubLink: "https://github.com/Sonamtsering12057/Health-and-Wellness-Project",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Social Media API",
    description:
      "A scalable backend infrastructure supporting user authentication, real-time social interactions, and high-concurrency data processing.",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2066&auto=format&fit=crop",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    liveLink: "https://github.com/Sonamtsering12057/social-media-be",
    githubLink: "https://github.com/Sonamtsering12057/social-media-be",
    category: "Backend",
  },
  {
    id: 5,
    title: "Android Training App",
    description:
      "A feature-rich native Android application developed during professional training, implementing modern MVVM architecture and Material Design 3.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    techStack: ["Kotlin", "Android SDK", "Firebase"],
    liveLink: "https://github.com/Sonamtsering12057/Android-CA1",
    githubLink: "https://github.com/Sonamtsering12057/Android-CA1",
    category: "Mobile",
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"];

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-24" id="ProjectsScreen">
      <div className="space-y-16">
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-black uppercase tracking-widest border border-indigo-500/20"
          >
            My Portfolio
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-black flex items-center gap-4">
            <Code2 className="size-10 text-primary" />
            Selected Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A curated collection of my recent work, showcasing expertise across 
            <span className="text-foreground font-bold"> Full Stack development, Backend engineering, and Mobile apps.</span>
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-2xl text-sm font-black transition-all duration-300 border ${
                selectedCategory === cat
                  ? "bg-primary text-white border-primary shadow-xl shadow-primary/25"
                  : "glass hover:bg-primary/10 hover:text-primary border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="group relative glass rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity flex items-end p-10">
                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-black rounded-xl font-black text-sm hover:bg-primary hover:text-white transition-all flex items-center gap-2"
                      >
                        <ExternalLink className="size-4" /> Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-xl text-white rounded-xl hover:bg-white/20 transition-all border border-white/20"
                        aria-label="GitHub Repository"
                      >
                        <Github className="size-5" />
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-white">
                    {project.category}
                  </div>
                </div>

                <div className="p-10 space-y-6">
                  <h3 className="text-3xl font-black group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 glass text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;
