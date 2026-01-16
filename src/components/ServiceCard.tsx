"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300"
    >
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <div className="text-primary group-hover:text-white transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted leading-relaxed">{description}</p>
    </motion.div>
  );
}
