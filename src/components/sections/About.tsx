"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, Code2, BrainCircuit, Bot, BarChartBig, 
  Cloud, DatabaseZap, Target, Briefcase
} from "lucide-react";
import { useState } from "react";

const skills = [
  {
    category: "Data Engineering & Processing",
    items: ["Apache Spark", "MLlib", "Big Data Processing", "Feature Engineering", "Data Preprocessing", "Class Imbalance Handling"],
    icon: DatabaseZap,
  },
  {
    category: "Machine Learning & AI",
    items: ["Machine Learning", "BERT", "Neural Networks", "TensorFlow", "PyTorch", "Gradient Boosting", "Random Forest", "Deep Learning", "Model Optimization", "A/B Testing"],
    icon: BrainCircuit,
  },
  {
    category: "Programming & Development",
    items: ["Python", "SQL", "PL-SQL", "Java", "Scikit-learn", "Pandas", "NumPy", "GitHub"],
    icon: Code2,
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Microsoft Azure", "Google Colab", "Scalable ML Pipelines", "Real-time Processing", "Deployment Strategies"],
    icon: Cloud,
  },
  {
    category: "Data Visualization & Analytics",
    items: ["Tableau", "Excel", "Matplotlib", "Data Storytelling", "PowerPoint", "Dashboard Design", "Seaborn", "Plotly", "Statistical Analysis", "@Risk"],
    icon: BarChartBig,
  },
  {
    category: "Natural Language Processing",
    items: ["NLP", "Text Analytics", "SentenceTransformer", "LLM Integration", "Claude", "GPT-4", "LlamaParse", "Prompt Engineering"],
    icon: Bot,
  },  
  {
    category: "Business Intelligence & Strategy",
    items: ["Customer Segmentation", "ARIMA", "Predictive Analytics", "Forecasting", "Risk Analysis", "Fraud Detection", "ROI Optimization"],
    icon: Target,
  },
  {
    category: "Project Management & Consulting",
    items: ["Agile/Scrum", "JIRA", "Cross-functional Team Leadership", "Stakeholder Management", "Technical-to-Business Translation"],
    icon: Briefcase,
  },
];

const education = [
  {
    degree: "Master of Science in Business Analytics and Information Management",
    school: "Purdue University, Daniels School of Business",
    location: "West Lafayette, IN",
    duration: "August 2024 - Present",
    highlights: [
      "Awarded a competitive, merit-based tuition scholarship for international business students."
    ],
    coursework: [
      "Data Mining",
      "Business Analytics",
      "Data and AI Driven Marketing",
      "AI for Business Decision Making",
      "Emerging Technologies and Businesses",
    ],
  },
  {
    degree: "Bachelor of Technology in Metallurgical and Materials Engineering",
    school: "National Institute of Technology, Warangal",
    location: "Warangal, India",
    duration: "August 2016 - August 2020",
    highlights: [
      "Organized and led campus-wide events as Additional Secretary of the Painting Club.",
      "Directed and supervised all event activities as a core management team member for Technozion 2019, the annual technical festival."
    ],
    coursework: [
      "New Venture Creation",
      "Industrial Management",
      "Automotive Mechanics",
      "Nano Science and Nano Technology",
    ],
  },
];

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold gradient-text md:text-4xl">
            About Me
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-single-col mx-auto max-w-2xl text-base md:text-lg text-left text-muted-foreground space-y-6 px-4 md:px-0 border-l-4 border-blue-400/30 md:border-l-8 md:pl-8"
          >
            <p>
              I'm an analytics professional pursuing my Master's in Business Analytics and Information Management at Purdue University. With over 4 years of experience in technology consulting and data science, I specialize in applying machine learning and AI techniques to solve complex business problems. My work spans from developing fraud detection systems and bankruptcy prediction models to implementing NLP solutions for real-world applications.
            </p>
            <p>
              During my time at Capgemini, I led cross-functional teams to deliver enterprise solutions that generated significant business value, including a $10M+ revenue-driving insurance platform. More recently, I've focused on the intersection of AI and business strategy through roles at Prediction Guard and CorpusKey, where I've worked on AI safety benchmarking and advanced text analytics using clustering and dimensionality reduction techniques.
            </p>
            <p>
              I'm passionate about leveraging data to drive strategic decisions and building scalable solutions that create measurable impact. My technical toolkit includes Python, SQL, machine learning frameworks, and cloud platforms, complemented by strong business acumen developed through coursework in data-driven marketing, business analytics, and emerging technologies. I'm actively seeking opportunities where I can apply my analytical expertise to help organizations unlock the value in their data.
            </p>
          </motion.div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <span className="skills-pill">Skills</span>
            <h3 className="mt-4 mb-2 text-3xl md:text-4xl font-bold gradient-text">Technical Skills & Expertise</h3>
            <p className="text-lg text-muted-foreground">My professional toolkit and technical capabilities.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card p-6 h-full flex flex-col"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className={`icon-background-small icon-bg-gradient-${index + 1}`}>
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className={`text-lg font-semibold gradient-skill-header-${index + 1}`}>{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="skill-tag-glassy">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            {/* <span className="skills-pill">Education</span> */}
            <h3 className="mt-4 mb-2 text-3xl md:text-4xl font-bold gradient-text">Education</h3>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {education.map((edu, idx) => (
              <div key={edu.degree} className="glass-card p-6 flex flex-col h-full">
                <div className="mb-2 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-lg font-semibold gradient-skill-header-1">{edu.degree}</span>
                </div>
                <div className="text-neutral-300 text-sm mb-1">{edu.school}</div>
                <div className="text-xs text-neutral-400 mb-4">{edu.location} • {edu.duration}</div>
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="mb-3">
                    <div className="text-xs text-neutral-200 font-medium mb-1">Highlights:</div>
                    <ul className="list-disc list-inside text-xs text-neutral-300 space-y-1">
                      {edu.highlights.map((hl, i) => (
                        <li key={i}>{hl}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {edu.coursework && (
                  <div className="mt-auto">
                    <div className="text-xs text-neutral-200 font-medium mb-1">Relevant Coursework:</div>
                    <ul className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <li key={course} className="skill-tag-glassy text-xs">{course}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 