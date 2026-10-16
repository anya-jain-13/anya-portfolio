
import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";

import About from "../sections/About";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Chapters from "../sections/Chapters";
import Contact from "../sections/Contact";

import "./PortfolioIndex.css";

const chapters = [
  {
    number: "01",
    title: "About Me",
    subtitle: "THE PERSON BEHIND THE PORTFOLIO",
    id: "about",
    Component: About,
  },
  {
    number: "02",
    title: "Selected Projects",
    subtitle: "IDEAS, EXPERIMENTS & INNOVATION",
    id: "projects",
    Component: Projects,
  },
  {
    number: "03",
    title: "Experience & Education",
    subtitle: "MY JOURNEY SO FAR",
    id: "experience",
    Component: Experience,
  },
  {
    number: "04",
    title: "Skills & Expertise",
    subtitle: "THE TECHNICAL TOOLKIT",
    id: "skills",
    Component: Skills,
  },
  {
    number: "05",
    title: "Beyond the Resume",
    subtitle: "LEADERSHIP, ACHIEVEMENTS & INTERESTS",
    id: "chapters",
    Component: Chapters,
  },
  {
    number: "06",
    title: "Let's Connect",
    subtitle: "THE FINAL PAGE",
    id: "contact",
    Component: Contact,
  },
];

function PortfolioIndex() {
  const [activeChapter, setActiveChapter] = useState(null);

  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash.replace("#", "");

      const chapterIndex = chapters.findIndex(
        (chapter) => chapter.id === hash
      );

      if (chapterIndex !== -1) {
        setActiveChapter(chapterIndex);

        requestAnimationFrame(() => {
          document
            .getElementById(`chapter-${hash}`)
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
        });
      } else if (hash === "home" || hash === "explore") {
        setActiveChapter(null);

        requestAnimationFrame(() => {
          document
            .getElementById(hash)
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
        });
      }
    };

    window.addEventListener("hashchange", handleNavigation);

    handleNavigation();

    return () => {
      window.removeEventListener(
        "hashchange",
        handleNavigation
      );
    };
  }, []);

  function toggleChapter(index) {
    setActiveChapter((current) =>
      current === index ? null : index
    );
  }

  return (
    <main className="portfolio-index" id="explore">

      {/* INDEX HEADING */}
      <div className="portfolio-index-heading">
        <span className="portfolio-index-label">
          THE PORTFOLIO / CONTENTS
        </span>

        <h2>
          Explore my <em>world.</em>
        </h2>

        <p>
          A collection of my work, experiences,
          interests, and everything in between.
          Choose a chapter to explore.
        </p>
      </div>

      {/* CHAPTERS */}
      <div className="portfolio-chapter-list">
        {chapters.map((chapter, index) => {
          const isOpen = activeChapter === index;
          const Section = chapter.Component;

          return (
            <div
              id={`chapter-${chapter.id}`}
              className={`portfolio-chapter ${
                isOpen ? "is-open" : ""
              }`}
              key={chapter.number}
            >
              <button
                type="button"
                className="portfolio-chapter-button"
                onClick={() => toggleChapter(index)}
                aria-expanded={isOpen}
                aria-controls={`panel-${chapter.id}`}
              >
                <span className="portfolio-chapter-number">
                  {chapter.number}
                </span>

                <span className="portfolio-chapter-name">
                  <span className="portfolio-chapter-subtitle">
                    {chapter.subtitle}
                  </span>

                  <span className="portfolio-chapter-title">
                    {chapter.title}
                  </span>
                </span>

                <span className="portfolio-chapter-icon">
                  {isOpen ? (
                    <Minus size={25} strokeWidth={1.3} />
                  ) : (
                    <Plus size={25} strokeWidth={1.3} />
                  )}
                </span>
              </button>

              {isOpen && (
                <div
                  id={`panel-${chapter.id}`}
                  className="portfolio-chapter-panel"
                >
                  <Section />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* BOTTOM LABEL */}
      <div className="portfolio-index-footer">
        <span>CLICK A CHAPTER TO DISCOVER MORE</span>
        <span>✦</span>
      </div>

    </main>
  );
}

export default PortfolioIndex;
