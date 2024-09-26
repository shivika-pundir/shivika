import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainPage from "./Pages/MainPage";
import Profile from "./Components/Profile/Profile";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = {
    about: useRef(null),
    education: useRef(null),
    technicalSkills: useRef(null),
    publications: useRef(null),
    researchExperience: useRef(null),
    journalPapers: useRef(null),
    conferences: useRef(null),
    researchProjects: useRef(null),
    contact: useRef(null),
    achievements: useRef(null),
    courses: useRef(null),
    teachingMentorshipExperience: useRef(null),
    extraCurricular: useRef(null),
    references: useRef(null),
    curriculum: useRef(null),
  };
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);
  return (
    <div className="flex min-h-screen p-5 bg-gray-200 h-screen gap-5">
      <Sidebar activeSection={activeSection} />
      <MainPage sectionRefs={sectionRefs} />
      <Profile />
    </div>
  );
};

export default App;
