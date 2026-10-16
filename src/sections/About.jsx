
import { BrainCircuit, Palette, ArrowUpRight } from "lucide-react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-heading">
        <span className="about-label">
          01 / GET TO KNOW ME
        </span>

        <h2>
          A little bit of
          <br />
          <em>both worlds.</em>
        </h2>

        <p className="about-intro">
          I'm a Data Science undergraduate at NMIMS,
          Mumbai, with a passion for solving problems
          through technology and expressing ideas
          through creativity.
        </p>
      </div>

      <div className="about-worlds">

        <article className="world-card analytical">
          <div className="world-card-top">
            <BrainCircuit size={34} strokeWidth={1.3} />
            <ArrowUpRight size={24} strokeWidth={1.3} />
          </div>

          <div>
            <span className="world-number">WORLD 01</span>
            <h3>The Analytical Side</h3>
            <p>
              Exploring data, building machine learning
              models, and turning complex information
              into meaningful insights.
            </p>
          </div>
        </article>

        <article className="world-card creative">
          <div className="world-card-top">
            <Palette size={34} strokeWidth={1.3} />
            <ArrowUpRight size={24} strokeWidth={1.3} />
          </div>

          <div>
            <span className="world-number">WORLD 02</span>
            <h3>The Creative Side</h3>
            <p>
              Finding inspiration in fine arts, graphic
              design, digital storytelling, and the
              details that make an idea memorable.
            </p>
          </div>
        </article>

      </div>

      <div className="about-footer">
        <span>LOGIC MEETS IMAGINATION</span>
        <span>✦</span>
      </div>
    </section>
  );
}

export default About;
