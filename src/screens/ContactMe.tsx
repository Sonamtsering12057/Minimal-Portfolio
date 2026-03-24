import { Copy, Mail, Phone, Linkedin, Github, MessageSquare, ExternalLink, Check } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactMe: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "sontseofficial@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const contactMethods = [
    {
      label: "Email",
      value: email,
      icon: <Mail className="size-5 text-primary" />,
      link: `mailto:${email}`,
      actionIcon: copied ? <Check className="size-4 text-green-500" /> : <Copy className="size-4" />,
      onAction: copyToClipboard,
    },
    {
      label: "WhatsApp / Call",
      value: "+91 9073558448",
      icon: <Phone className="size-5 text-secondary" />,
      link: "tel:+919073558448",
    },
    {
      label: "LinkedIn",
      value: "Sonam Tsering",
      icon: <Linkedin className="size-5 text-accent" />,
      link: "https://www.linkedin.com/in/SonamTsering",
    },
  ];

  const socialLinks = [
    { name: "GitHub", icon: <Github />, href: "https://github.com/SonamTsering", color: "hover:text-primary" },
    { name: "LeetCode", icon: <ExternalLink />, href: "https://leetcode.com/", color: "hover:text-orange-500" },
    { name: "Codeforces", icon: <ExternalLink />, href: "https://codeforces.com/", color: "hover:text-blue-500" },
  ];

  return (
    <section className="py-20" id="ContactMeScreen">
      <div className="space-y-16">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl font-bold flex items-center gap-3">
            <MessageSquare className="size-8 text-primary" />
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have a project in mind or just want to chat? Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group glass p-6 rounded-2xl border border-white/20 dark:border-white/10 hover:border-primary/30 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-muted dark:bg-muted-dark group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{method.label}</p>
                    <a href={method.link} className="text-lg font-bold hover:text-primary transition-colors">
                      {method.value}
                    </a>
                  </div>
                </div>
                {method.onAction && (
                  <button
                    onClick={method.onAction}
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    aria-label={`Copy ${method.label}`}
                  >
                    {method.actionIcon}
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="glass p-8 rounded-3xl border border-white/20 dark:border-white/10 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Connect Elsewhere</h3>
              <p className="text-muted-foreground">
                Follow my journey and check out my latest contributions on other platforms.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-2xl glass border border-white/10 ${social.color} transition-all hover:scale-110 hover:-translate-y-1`}
                    title={social.name}
                  >
                    {React.cloneElement(social.icon as React.ReactElement, { className: "size-6" })}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-auto">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center animate-bounce">
                  <Mail className="size-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold">Ready to start?</h4>
                <a
                  href={`mailto:${email}`}
                  className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  Send a Message <MessageSquare className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactMe };