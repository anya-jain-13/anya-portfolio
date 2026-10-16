
import { useState } from "react";
import {
  ArrowUpRight,
  Plus,
  Minus,
  BrainCircuit,
  ChartNoAxesCombined,
  Database,
  Code2,
  Wrench,
} from "lucide-react";
import "./Skills.css";

const skillCategories = [
  {
    number: "01",
    title: "Programming & Libraries",
    subtitle: "THE FOUNDATION",
    icon: Code2,
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow / Keras",
      "OpenCV",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    number: "02",
    title: "Machine Learning & AI",
    subtitle: "BUILDING INTELLIGENCE",
    icon: BrainCircuit,
    skills: [
      "Classification",
      "Regression",
      "Deep Learning",
      "Neural Networks",
      "LSTM",
      "Natural Language Processing",
      "Retrieval-Augmented Generation",
      "Principal Component Analysis",
      "Time Series Forecasting",
      "Multi-Agent AI Systems",
      "Model Evaluation",
    ],
  },
  {
    number: "03",
    title: "Statistics & Analytics",
    subtitle: "FINDING THE STORY IN DATA",
    icon: ChartNoAxesCombined,
    skills: [
      "Exploratory Data Analysis",
      "Hypothesis Testing",
      "ANOVA",
      "Regression Analysis",
      "Statistical Modelling",
      "Probability Distributions",
      "Markov Chains",
      "Data Wrangling",
      "Feature Engineering",
      "Data Cleaning",
    ],
  },
  {
    number: "04",
    title: "Data Visualization",
    subtitle: "MAKING DATA MEANINGFUL",
    icon: Database,
    skills: [
      "Tableau",
      "Power BI",
      "Matplotlib",
      "Seaborn",
      "Data Storytelling",
    ],
  },
  {
    number: "05",
    title: "Platforms & Tools",
    subtitle: "THE WORKSPACE",
    icon: Wrench,
    skills: [
      "MySQL",
      "Jupyter Notebook",
      "Google Colab",
      "AWS EC2",
      "AWS IAM",
      "AWS Load Balancing",
      "AWS Auto Scaling",
      "Git / GitHub",
      "VS Code",
    ],
  },
];

function Skills() {
  const [openCategory, setOpenCategory] = useState(0);

  function toggleCategory(index) {
    setOpenCategory(openCategory === index ? null : index);
  }

  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <div>
          <span className="skills-label">
            04 / THE TOOLKIT
          </span>

          <h2>
            Inside my
            <br />
            <em>skill cabinet.</em>
          </h2>
        </div>

        <p>
          A growing collection of technical skills,
          analytical methods, and tools that help me
          transform ideas into meaningful work.
        </p>
      </div>

      <div className="skills-cabinet">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          const isOpen = openCategory === index;

          return (
            <div
              className={`skill-drawer ${isOpen ? "open" : ""}`}
              key={category.number}
            >
              <button
                className="skill-drawer-trigger"
                type="button"
                onClick={() => toggleCategory(index)}
                aria-expanded={isOpen}
              >
                <span className="skill-drawer-number">
                  {category.number}
                </span>

                <span className="skill-drawer-icon">
                  <Icon size={27} strokeWidth={1.3} />
                </span>

                <span className="skill-drawer-heading">
                  <span className="skill-drawer-subtitle">
                    {category.subtitle}
                  </span>

                  <span className="skill-drawer-title">
                    {category.title}
                  </span>
                </span>

                <span className="skill-drawer-toggle">
                  {isOpen ? (
                    <Minus size={22} strokeWidth={1.5} />
                  ) : (
                    <Plus size={22} strokeWidth={1.5} />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="skill-drawer-content">
                  <div className="skill-tags">
                    {category.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>

                  <div className="skill-drawer-decoration">
                    <ArrowUpRight size={24} strokeWidth={1.2} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="skills-footer">
        <span>THE LEARNING NEVER STOPS.</span>
        <span>✦</span>
      </div>
    </section>
  );
}

export default Skills;
