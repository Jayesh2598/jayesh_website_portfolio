"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

// Project images are now SVG files in public/images/projects/
// No location references to Seattle, Washington. (Job/education/project locations remain.)

const categories = [
  "All",
  "Machine Learning",
  "NLP",
  "Data Analytics",
  "GenAI",
];

const projects = [
  {
    id: "1",
    title: "Bankruptcy Prediction Model",
    shortDescription: "Built an ensemble model combining logistic regression, neural nets, and gradient boosting to predict bankruptcy risk with 94.15% accuracy.",
    fullDescription: `Built an ensemble model combining logistic regression, neural nets, and gradient boosting to predict bankruptcy risk with 94.15% accuracy.
    Performed iterative model tuning and cross-validation to address overfitting while improving leaderboard performance.
    Gained hands-on experience with financial data modeling, feature engineering, and risk stratification strategies.`,
    image: "/images/projects/bankruptcy-prediction.png",
    tags: ["Machine Learning", "Python", "Finance"],
    github: "https://github.com/Jayesh2598/Bankruptcy-Prediction-Model",
    category: "Machine Learning",
  },
  {
    id: "2",
    title: "NLP with Disaster Tweets",
    shortDescription: "Compared traditional ML with deep learning to classify tweets as disaster-related or not, achieving 83%+ accuracy with DistilBERT.",
    fullDescription: `Compared traditional ML (SVM, Random Forest) with deep learning (BERT, DistilBERT) to classify tweets as disaster-related or not.
    Achieved 83%+ accuracy with DistilBERT, balancing training time, precision, and interpretability.
    Tackled real-world problems in misinformation filtering during disasters, emphasizing data preprocessing and model selection trade-offs.`,
    image: "/images/projects/nlp-disaster-tweets.png",
    tags: ["NLP", "Python", "Deep Learning"],
    github: "https://github.com/Jayesh2598/Natural-Language-Processing-with-Disaster-Tweets",
    category: "NLP",
  },
  {
    id: "3",
    title: "Bank Transaction Fraud Detection",
    shortDescription: "Developed a scalable fraud detection pipeline on Spark using Gradient Boosting and Random Forest, achieving strong AUC and recall metrics.",
    fullDescription: `Developed a scalable fraud detection pipeline on Spark using Gradient Boosting and Random Forest, achieving strong AUC and recall metrics.
    Engineered features like transaction velocity, night-time indicators, and device-type risk profiles to boost model robustness.
    Addressed class imbalance, optimized model generalization, and proposed real-time fraud alert deployment using Apache Spark.`,
    image: "/images/projects/fraud-detection.png",
    tags: ["Machine Learning", "Apache Spark", "MLOps"],
    github: "https://github.com/Jayesh2598/Bank-Transaction-Fraud-Detection-using-Apache-Spark-MLlib",
    category: "Machine Learning",
  },
  {
    id: "4",
    title: "SmartSlideGen",
    shortDescription: "Built an AI-powered system using LlamaParse, Claude, and GPT-4o to transform Word documents into clean, visual PowerPoint slides.",
    fullDescription: `Built an AI-powered system using LlamaParse, Claude, and GPT-4o to transform Word documents into clean, visual PowerPoint slides.
    Engineered prompt templates, Markdown table conversions, and fallback logic to handle layout inconsistencies and LLM unpredictability.
    Delivered a generalizable, user-focused automation tool capable of supporting academic, research, and business use cases.`,
    image: "/images/projects/smartslide-gen.png",
    tags: ["GenAI", "Python", "Document AI"],
    github: "https://github.com/Jayesh2598/SmartSlideGen",
    category: "GenAI",
  },
  {
    id: "5",
    title: "Optimal Drugstore Location",
    shortDescription: "Analyzed hospital proximity, foot traffic, and demographics to identify ideal U.S. locations for drugstore chains.",
    fullDescription: `Analyzed hospital proximity, foot traffic, age demographics, and brand expansion trends to identify ideal U.S. locations for drugstore chains.
    Recommended King County, WA, for expansion of Safeway Pharmacy based on healthcare demand and competition gaps.
    Leveraged SafeGraph datasets and SQL queries to derive high-ROI, data-backed location decisions for retail strategy.`,
    image: "/images/projects/drugstore-location.png",
    tags: ["Data Analytics", "SQL", "Geospatial"],
    github: "https://github.com/Jayesh2598/Bridging-Gaps-in-U.S.-Healthcare-Data-Driven-Strategy-for-Pharmacy-Expansion",
    category: "Data Analytics",
  },
  {
    id: "6",
    title: "Renewable Energy Impact",
    shortDescription: "Visualized U.S. energy transition trends using IRENA and EIA data, highlighting the link between renewable adoption and carbon reduction.",
    fullDescription: `Visualized U.S. energy transition trends using IRENA and EIA data, highlighting the link between renewable adoption and carbon reduction.
    Built dashboards comparing energy sources, job growth, and CO₂ intensity across states using Tableau.
    Offered actionable insights into policy and environmental impact, supporting advocacy for clean energy adoption.`,
    image: "/images/projects/renewable-energy.png",
    tags: ["Data Analytics", "Tableau", "Visualization"],
    github: "https://github.com/Jayesh2598/Renewable-Energy-Carbon-Emissions-Dashboard",
    category: "Data Analytics",
  },
  {
    id: "7",
    title: "Dunnhumby Customer Engagement",
    shortDescription: "Performed customer segmentation using K-Means and built churn prediction models using Random Forests.",
    fullDescription: `Performed customer segmentation using K-Means and built churn prediction models using Random Forests.
    Identified coupon-sensitive and brand-loyal clusters, advising targeted marketing strategies for Baby Food manufacturer 177.
    Forecasted sales using ARIMA models and provided data-driven recommendations for personalized retention campaigns.`,
    image: "/images/projects/dunnhumby-customer.png",
    tags: ["Machine Learning", "Python", "Retail Analytics"],
    github: "https://github.com/Jayesh2598/Customer-Engagement-Strategy-for-Dunnhumby",
    category: "Machine Learning",
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold gradient-text md:text-4xl">
            Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A collection of my work in machine learning, data analytics, and
            artificial intelligence.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-primary/10"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="project-card"
              >
                <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.shortDescription}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    View Details
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('GitHub button clicked for:', project.title, 'URL:', project.github);
                      
                      // Add visual feedback
                      const button = e.currentTarget;
                      button.style.transform = 'scale(0.95)';
                      button.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
                      
                      setTimeout(() => {
                        button.style.transform = '';
                        button.style.backgroundColor = '';
                        try {
                          window.open(project.github, '_blank', 'noopener,noreferrer');
                        } catch (error) {
                          console.error('Error opening GitHub link:', error);
                          // Fallback to direct navigation
                          window.location.href = project.github;
                        }
                      }, 150);
                    }}
                    className="flex items-center justify-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-all duration-150 hover:bg-primary/10 hover:border-primary/50 cursor-pointer z-10 relative"
                    title="View on GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project details dialog */}
        <Dialog.Root open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" />
            <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-card p-6 shadow-lg">
              {selectedProject && (
                <>
                  <div className="mb-4 flex items-start justify-between">
                    <Dialog.Title className="text-2xl font-semibold">
                      {selectedProject.title}
                    </Dialog.Title>
                    <Dialog.Close className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-primary/10">
                      <X className="h-5 w-5" />
                    </Dialog.Close>
                  </div>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="skill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="prose prose-invert max-w-none">
                    {selectedProject.fullDescription.split("\n").map((paragraph, i) => (
                      <p key={i} className="mb-4 text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-end gap-4">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('GitHub button clicked in dialog for:', selectedProject.title, 'URL:', selectedProject.github);
                        
                        // Add visual feedback
                        const button = e.currentTarget;
                        button.style.transform = 'scale(0.95)';
                        button.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
                        
                        setTimeout(() => {
                          button.style.transform = '';
                          button.style.backgroundColor = '';
                          try {
                            window.open(selectedProject.github, '_blank', 'noopener,noreferrer');
                          } catch (error) {
                            console.error('Error opening GitHub link:', error);
                            // Fallback to direct navigation
                            window.location.href = selectedProject.github;
                          }
                        }, 150);
                      }}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-all duration-150 hover:bg-primary/10"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </button>
                  </div>
                </>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
} 