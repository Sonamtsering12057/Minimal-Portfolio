import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Palette, Database, Hammer, Layers } from "lucide-react";

const SkillsPage: React.FC = () => {
  const skills = [
    {
      category: "Languages",
      icon: <Terminal className="size-6 text-indigo-400" />,
      items: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
        { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
        { name: "C", icon: "https://cdn.simpleicons.org/c/A8B9CC" },
      ],
      className: "lg:col-span-2",
    },
    {
      category: "Frontend",
      icon: <Palette className="size-6 text-pink-400" />,
      items: [
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
        { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      ],
      className: "lg:col-span-2",
    },
    {
      category: "Backend",
      icon: <Cpu className="size-6 text-emerald-400" />,
      items: [
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "Spring", icon: "https://cdn.simpleicons.org/springboot/6DB33F" },
        { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" },
        { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
      ],
      className: "lg:col-span-2",
    },
    {
      category: "Database",
      icon: <Database className="size-6 text-blue-400" />,
      items: [
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      ],
      className: "lg:col-span-3",
    },
    {
      category: "DevOps & Tools",
      icon: <Hammer className="size-6 text-orange-400" />,
      items: [
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/232F3E" },
        { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
        { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
      ],
      className: "lg:col-span-3",
    },
  ];

  return (
    <section className="py-24" id="SkillsScreen">
      <div className="space-y-16">
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-black uppercase tracking-widest border border-indigo-500/20"
          >
            Technical Stack
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-black flex items-center gap-4">
            <Layers className="size-10 text-primary" />
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A precise overview of the tools, languages, and frameworks I use to build 
            <span className="text-foreground font-bold"> high-performance digital solutions.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {skills.map((section, index) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${section.className} glass rounded-[2.5rem] p-10 border border-white/10 hover:border-indigo-500/30 transition-all group relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-3xl group-hover:bg-indigo-500/5 transition-colors" />
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 rounded-2xl bg-[#0a0a1a] border border-white/10 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-500">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-black tracking-tight group-hover:text-indigo-400 transition-colors">
                  {section.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl group/skill"
                  >
                    <div className="p-2 rounded-xl group-hover/skill:scale-110 transition-transform duration-500">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="size-8 sm:size-10 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                        title={item.name}
                      />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover/skill:text-indigo-400 transition-colors text-center w-full truncate">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;