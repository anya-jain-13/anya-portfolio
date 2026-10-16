
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import PortfolioIndex from "./components/PortfolioIndex";
import CherryCursor from "./components/CherryCursor";

import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* ANIMATED CHERRY CURSOR */}
      <CherryCursor />

      {/* FULL-SCREEN HOMEPAGE */}
      <section className="hero" id="home">

        {/* BACKGROUND PHOTOGRAPH */}
        <div className="hero-image">
          <img
            src="/images/anya-photo.jpg"
            alt="Anya Jain"
          />
        </div>

        {/* PHOTO OVERLAY */}
        <div className="hero-overlay"></div>

        {/* NAVIGATION */}
        <header className="top-bar">

          <a href="#home" className="aj-logo">
            AJ<span className="logo-sparkle">✦</span>
          </a>

          <nav className="floating-nav">
            <a href="#home">Home</a>
            <a href="#explore">Explore</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

        </header>

        {/* HERO CONTENT */}
        <div className="hero-content">

          <div className="hero-side-content">

            <div className="hero-location">
              <span className="small-label">
                A LITTLE ABOUT ME
              </span>

              <p>
                Data, design,
                <br />
                and everything in between.
              </p>
            </div>

            <div className="hero-role">
              <ArrowDownRight
                size={32}
                strokeWidth={1.3}
              />

              <p>
                Data Science
                <br />
                &amp; Creative Design
              </p>
            </div>

          </div>

          {/* LARGE NAME */}
          <div className="hero-name-container">
            <h1 className="hero-name">
              ANYA JAIN
            </h1>
          </div>

          <div className="hero-bottom">
            <span>PERSONAL PORTFOLIO</span>

            <a href="#explore" className="explore-link">
              EXPLORE MY WORLD
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>

        {/* SCROLL INDICATOR */}
        <a href="#explore" className="scroll-indicator">
          <ArrowDownRight
            size={24}
            strokeWidth={1.5}
          />
        </a>

      </section>

      {/* INTERACTIVE CHAPTER INDEX */}
      <PortfolioIndex />

    </div>
  );
}

export default App;
