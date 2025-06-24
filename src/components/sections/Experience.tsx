"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, Users, TrendingUp, Code2 } from "lucide-react";

const experiences = [
  {
    company: "Prediction Guard",
    role: "AI Researcher",
    location: "West Lafayette, IN",
    duration: "January 2024 - April 2024",
    icon: Code2,
    achievements: [
      "Designed an AI risk benchmarking framework for open-source LLMs (LLaMA-3, Hermes), evaluating prompt injection, PII leaks, toxicity, and factual drift using custom adversarial pipelines and real-world datasets",
      "Engineered novel evaluation metrics (e.g., Hijack Success Rate, Prompt Deviation) and built an enterprise-grade leaderboard, guiding secure model selection and supporting product risk-mitigation strategies",
    ],
  },
  {
    company: "CorpusKey Inc.",
    role: "Data Scientist",
    location: "West Lafayette, IN",
    duration: "August 2023 - December 2023",
    icon: TrendingUp,
    achievements: [
      "Applied dimensionality reduction (PCA, t-SNE) and clustering (K-Means, DBSCAN, GMM) on high-dimensional text embeddings and delivered interactive perceptual maps to identify strategic content gaps",
      "Built automated semantic labeling pipelines using SentenceTransformer, GPT-3.5 API to enhance corpus data interpretation, improving labeling consistency and analysis efficiency",
    ],
  },
  {
    company: "Capgemini Technology Services India Limited",
    role: "Associate Consultant",
    location: "Mumbai, India",
    duration: "April 2022 - August 2023",
    icon: Users,
    achievements: [
      "Developed applications for a multi-line insurance client entering the U.S. market, streamlining the backend for drafting policies and contributing $10M+ in annual revenue",
      "Led daily standup meetings for a 37-member team, resulting in a 15% improvement in delivery efficiency",
      "Reduced delivery delays by 10% through strategic sequencing of project milestones in close collaboration with multiple teams across 3 countries",
      "Collaborated with business analysts to convert $100,000+ worth of business requirements into implementable technical solutions, refining development processes and minimizing rework",
    ],
  },
  {
    company: "Capgemini Technology Services India Limited",
    role: "Senior Software Engineer",
    location: "Mumbai, India",
    duration: "September 2020 - March 2022",
    icon: Award,
    achievements: [
      "Led a 9-member team, delivering a $300,000 module 40% ahead of schedule through optimized workflows",
      "Implemented quality checks through structured processes that reduced rework by 60%, saving $20,000 in costs",
      "Coordinated cross-functional efforts between development and testing teams, enhancing collaboration and ensuring seamless execution of project phases",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold gradient-text md:text-4xl">
            Professional Experience
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A journey through my professional roles and achievements in the field of
            technology and analytics.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 h-full w-px bg-border md:left-1/2 z-10" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col gap-8 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } z-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-0 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-background md:left-1/2" />

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="glass-card experience-glass-card p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <exp.icon className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-lg text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {exp.location} • {exp.duration}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 