"use client";

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Starfield Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Small stars */}
        <div className="stars-small"></div>
        {/* Medium stars */}
        <div className="stars-medium"></div>
        {/* Large stars */}
        <div className="stars-large"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 