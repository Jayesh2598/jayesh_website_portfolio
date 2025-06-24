"use client";

import { useState } from "react";

// Certification images should be placed in public/images/certifications/
const certifications = [
  {
    title: "Microsoft Azure Certifications",
    organization: "Microsoft",
    image: "/images/certifications/azure_logo.png",
    date: "2025",
    description: "• AI-900: Azure AI Fundamentals - Validated foundational knowledge of AI and machine learning on Azure platform\n• AZ-900: Azure Fundamentals - Demonstrated foundational knowledge of cloud services and Azure platform"
  },
  {
    title: "Tableau Desktop Specialist",
    organization: "Tableau",
    image: "/images/certifications/tableau_logo.webp",
    date: "2025",
    description: "Demonstrated skills in data visualization and dashboard design."
  },
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    image: "/images/certifications/aws_logo.png",
    date: "2025",
    description: "Proved understanding of AWS Cloud concepts and best practices."
  },
  {
    title: "Management Consulting",
    organization: "WisdomHatch",
    image: "/images/certifications/wisdomhatch_logo.jpeg",
    date: "2024",
    description: "Completed comprehensive management consulting mentorship program."
  },
];

const achievements = [
  {
    title: "Merit Scholarship",
    organization: "Purdue University",
    date: "2024",
    description: "Awarded a competitive, merit-based tuition scholarship for academic excellence.",
    image: "/images/certifications/purdue_logo.jpg"
  },
  {
    title: "Highest Employee Rating & 'Going Above and Beyond' Award",
    organization: "Capgemini",
    date: "2023",
    description: "Received highest employee rating and 'Going above and beyond' award at Capgemini.",
    image: "/images/certifications/capgemini_logo.png"
  },
  {
    title: "Project Team Success Story & Event Host",
    organization: "Capgemini",
    date: "2022",
    description: "Represented project team as a success story and hosted a Business Unit event.",
    image: "/images/certifications/capgemini_logo.png"
  },
];

export default function Certifications() {
  const [show, setShow] = useState<'certifications' | 'achievements'>('certifications');

  const data = show === 'certifications' ? certifications : achievements;

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">Certifications & Achievements</h2>
          <p className="text-lg text-muted-foreground">Recognitions, awards, and credentials that highlight my professional journey.</p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              className={`px-6 py-2 rounded-full font-semibold transition-all border backdrop-blur-md bg-white/10 border-white/20 text-white/90 hover:bg-primary/20 ${show === 'certifications' ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setShow('certifications')}
            >
              Certifications
            </button>
            <button
              className={`px-6 py-2 rounded-full font-semibold transition-all border backdrop-blur-md bg-white/10 border-white/20 text-white/90 hover:bg-primary/20 ${show === 'achievements' ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setShow('achievements')}
            >
              Achievements
            </button>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {data.map((item, idx) => (
            <div key={item.title} className="glass-card p-6 flex flex-col items-center text-center h-full w-full max-w-xs">
              <div className="mb-4 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-contain rounded-xl shadow-lg bg-white/10 border border-white/20"
                  loading="lazy"
                />
              </div>
              <div className="text-lg font-semibold gradient-skill-header-1 mb-1">{item.title}</div>
              <div className="text-sm text-neutral-300 mb-1">{item.organization}</div>
              {item.date && <div className="text-xs text-neutral-400 mb-2">{item.date}</div>}
              {item.description && (
                <div className="text-xs text-neutral-200 mb-2 whitespace-pre-line">
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 