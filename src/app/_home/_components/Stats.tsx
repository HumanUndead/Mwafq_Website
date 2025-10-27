"use client";
import React, { useState, useEffect, useRef } from "react";

function Stats() {
  const [counts, setCounts] = useState({ centers: 0, cities: 0, exams: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = { centers: 100, cities: 21, exams: 8 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        centers: Math.floor(targets.centers * progress),
        cities: Math.floor(targets.cities * progress),
        exams: Math.floor(targets.exams * progress),
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section className="container_main" ref={sectionRef}>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-custom-darkBlue cursor-pointer text-white p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-5xl font-bold mb-2">{counts.centers}+</div>
          <p className="text-indigo-200">Medical Centers</p>
        </div>
        <div className="bg-custom-darkBlue cursor-pointer text-white p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-5xl font-bold mb-2">{counts.cities}+</div>
          <p className="text-indigo-200">Cities</p>
        </div>
        <div className="bg-custom-darkBlue cursor-pointer text-white p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-5xl font-bold mb-2">{counts.exams}+</div>
          <p className="text-indigo-200">Mandatory medical examinations</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
