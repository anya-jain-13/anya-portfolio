
import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "PredictAgent",
    category: "MULTI-AGENT AI / PREDICTIVE MAINTENANCE",
    description:
      "A multi-agent predictive maintenance system exploring sensor time-series analysis, machine learning, LSTM models, and operational decision support.",
    tags: ["Python", "LSTM", "Machine Learning"],
    status: "IN DEVELOPMENT",
  },
  {
    number: "02",
    title: "Maritime Vessel Detection",
    category: "PCA / SATELLITE IMAGERY",
    description:
      "A proposed satellite-image analysis system using PCA and multi-temporal imagery to study vessel activity and boundary monitoring.",
    tags: ["PCA", "Image Analysis", "Python"],
    status: "CONCEPT",
  },
  {
    number: "03",
    title: "EV Charging Forecasting",
    category: "TIME SERIES / ENERGY ANALYTICS",
    description:
      "A forecasting concept focused on charging-station congestion, energy demand, and usage patterns.",
    tags: ["Time Series", "Forecasting", "Analytics"],
    status: "CONCEPT",
  },
  {
    number: "04",
    title: "HR Compendium Chatbot",
    category: "NLP / RETRIEVAL-AUGMENTED GENERATION",
    description:
      "A question-answering chatbot developed during my DMRC internship to retrieve information from a 582-page HR compendium.",
    tags: ["Python", "RAG", "NLP"],
    status: "COMPLETED",
  },
  {
    number: "05",
    title: "QR-Ticketing Analytics",
    category: "SQL / BUSINESS INTELLIGENCE",
    description:
      "Analysis of metro QR-ticketing transactions, including station-wise revenue, origin-destination patterns, and average ticket value.",
    tags: ["SQL", "Tableau", "Analytics"],
    status: "COMPLETED",
  },
  {
    number: "06",
    title: "Accident Severity Analysis",
    category: "STATISTICS / REGRESSION",
    description:
      "Statistical analysis of road accident severity using ANOVA and regression to explore contributing factors.",
    tags: ["Python", "ANOVA", "Regression"],
    status: "COMPLETED",
  },
  {
    number: "07",
    title: "Recipe Discovery Dashboard",
    category: "REACT / API INTEGRATION",
    description:
      "A recipe-discovery dashboard using an external meals API, search functionality, and interactive React components.",
    tags: ["React", "API", "Dashboard"],
    status: "PROJECT",
  },
  {
    number: "08",
    title: "Brand Switching Analysis",
    category: "MARKOV CHAINS / STATISTICS",
    description:
      "A study of brand-switching behaviour using transition probability matrices and steady-state analysis.",
    tags: ["Markov Chains", "Python", "Statistics"],
    status: "COMPLETED",
  },
  {
    number: "09",
    title: "Spotify Wrapped Dashboard",
    category: "POWER BI / DATA VISUALIZATION",
    description:
      "An interactive dashboard exploring listening habits, favourite artists, and music trends.",
    tags: ["Power BI", "Visualization", "Analytics"],
    status: "COMPLETED",
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <div>
          <span className="projects-eyebrow">
            02 / SELECTED WORK
          </span>

          <h2>
            The Project
            <br />
            <em>Archive.</em>
          </h2>
        </div>

        <p className="projects-intro">
          A collection of ideas, experiments, and
          projects at the intersection of data,
          intelligence, and problem-solving.
        </p>
      </div>

      <div className="projects-layout">
        <div className="projects-list">
          {projects.map((project, index) => (
            <button
              key={project.number}
              type="button"
              className={`project-row ${
                activeProject === index ? "active" : ""
              }`}
              onMouseEnter={() => setActiveProject(index)}
              onFocus={() => setActiveProject(index)}
              onClick={() => setActiveProject(index)}
              aria-pressed={activeProject === index}
            >
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-row-content">
                <span className="project-title">
                  {project.title}
                </span>
                <span className="project-category">
                  {project.category}
                </span>
              </span>

              <ArrowUpRight
                size={22}
                strokeWidth={1.4}
              />
            </button>
          ))}
        </div>

        <aside className="project-preview">
          <div className="preview-top">
            <span>PROJECT DETAILS</span>
            <span>{projects[activeProject].number} / 09</span>
          </div>

          <div className="preview-art">
            <span className="preview-decoration">✳</span>
            <span className="preview-initial">
              {projects[activeProject].number}
            </span>
          </div>

          <div className="preview-content">
            <span className="preview-status">
              {projects[activeProject].status}
            </span>

            <h3>{projects[activeProject].title}</h3>

            <p>{projects[activeProject].description}</p>

            <div className="preview-tags">
              {projects[activeProject].tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="preview-bottom">
            <span>EXPLORE THE ARCHIVE</span>
            <ArrowRight size={20} strokeWidth={1.4} />
          </div>
        </aside>
      </div>

      <div className="projects-footer">
        <span>CURIOUS MINDS CREATE.</span>
        <span>✦</span>
      </div>
    </section>
  );
}

export default Projects;
