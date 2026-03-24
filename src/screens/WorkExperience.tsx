import React from "react";
import { motion, Variants } from "framer-motion";
import { Briefcase, GraduationCap, Award, CheckCircle2, Calendar, MapPin } from "lucide-react";

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-24" id="ExperienceScreen">
      <div className="space-y-20">
        <div className="space-y-6">
           <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-black uppercase tracking-widest border border-indigo-500/20"
          >
            My Journey
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-black flex items-center gap-4">
            <Briefcase className="size-10 text-primary" />
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A comprehensive look at my professional training, academic milestones, and technical achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Timeline */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-12"
          >
            <div className="relative pl-10 border-l-4 border-indigo-500/20 space-y-16">
              {/* Android Training */}
              <motion.div variants={itemVariants} className="relative">
                <div className="absolute -left-[54px] top-0 p-3 rounded-2xl bg-primary text-white shadow-2xl shadow-primary/40 ring-4 ring-[#030712]">
                  <Briefcase className="size-6" />
                </div>
                <div className="glass p-10 rounded-[2.5rem] border border-white/10 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 group">
                  <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
                    <div className="space-y-1">
                      <h3 className="text-3xl font-black group-hover:text-primary transition-colors">Android App Development</h3>
                      <p className="text-indigo-400 font-bold flex items-center gap-2">
                        <MapPin className="size-4" /> Lovely Professional University
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-black px-5 py-2 rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <Calendar className="size-4" /> Jun '25 - Jul '25
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Intensive professional training focusing on state-of-the-art Android architectures and enterprise-level application development.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Modern MVVM Architecture",
                      "Jetpack Compose & UI Design",
                      "Firebase Realtime Ecosystem",
                      "Room Database & Persistence",
                      "RESTful API Integration",
                      "Performance Optimization"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm font-bold text-muted-foreground">
                        <div className="size-2 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div variants={itemVariants} className="relative">
                <div className="absolute -left-[54px] top-0 p-3 rounded-2xl bg-indigo-500/80 text-white shadow-2xl shadow-indigo-500/40 ring-4 ring-[#030712]">
                  <GraduationCap className="size-6" />
                </div>
                <div className="glass p-10 rounded-[2.5rem] border border-white/10 hover:border-indigo-400/40 transition-all duration-500 group">
                  <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
                    <div className="space-y-1">
                      <h3 className="text-3xl font-black group-hover:text-indigo-400 transition-colors">Lovely Professional University</h3>
                      <p className="text-indigo-400 font-bold">Punjab, India</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-black px-5 py-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      <Calendar className="size-4" /> 2022 - Present
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-black text-foreground">B.Tech in Computer Science & Engineering</p>
                    <p className="text-indigo-400 font-black tracking-widest uppercase text-xs">Current CGPA: 6.3 / 10.0</p>
                  </div>
                  <p className="mt-6 text-muted-foreground text-lg italic uppercase tracking-tighter opacity-50 font-black">Building a strong foundation in CS fundamentals, DSA, and Web Tech.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Side Panels */}
          <div className="lg:col-span-4 space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl group-hover:bg-indigo-500/10 transition-colors" />
              <div className="flex items-center gap-3 mb-10">
                <Award className="size-8 text-primary" />
                <h3 className="text-2xl font-black">Certifications</h3>
              </div>
              <ul className="space-y-6">
                {[
                  { title: "Android Development Pro", school: "LPU Training", date: "Jul '25" },
                  { title: "Privacy & Security", school: "NPTEL", date: "Apr '25" },
                  { title: "Responsive Web Design", school: "FreeCodeCamp", date: "Nov '23" }
                ].map((cert) => (
                  <li key={cert.title} className="space-y-1 group/item">
                    <p className="text-lg font-black group-hover/item:text-primary transition-colors">{cert.title}</p>
                    <p className="text-sm font-bold text-muted-foreground flex items-center justify-between uppercase tracking-tighter">
                      {cert.school} <span>{cert.date}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-10 rounded-[2.5rem] border border-white/10 bg-primary/5 hover:bg-primary/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="size-8 text-indigo-400" />
                <h3 className="text-2xl font-black">Impact & Achievements</h3>
              </div>
              <ul className="space-y-6 text-muted-foreground font-black tracking-tight">
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <span>Solved <span className="text-foreground">150+ DSA problems</span> on LeetCode & Codeforces.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <span>Led front-end development for <span className="text-foreground">Sarang Korean Restaurant</span> project.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <span>Successfully completed <span className="text-foreground">Industry-certified Android</span> immersion.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
