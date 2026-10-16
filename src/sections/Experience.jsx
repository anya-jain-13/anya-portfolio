
import { useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import "./Experience.css";

const experiences = [
  {
    date: "MAY — JUL 2026",
    title: "IT Intern — AI & Data Science",
    organization: "Delhi Metro Rail Corporation (DMRC)",
    location: "New Delhi",
    details:
      "Developed an HR policy question-answering chatbot using a 582-page compendium. Worked with QR-ticketing transaction data using SQL and created Tableau visualizations for station revenue, origin-destination patterns, and ticket analytics.",
    tags: ["AI / ML", "RAG", "SQL", "Tableau"],
  },
  {
    date: "MAY — JUN 2025",
    title: "AI & Data Science Intern",
    organization: "NIELIT, Government of India",
    location: "New Delhi",
    details:
      "Worked with Python-based data preprocessing, exploratory data analysis, classification, regression, statistical methods, and data visualization.",
    tags: ["Python", "Machine Learning", "EDA"],
  },
  {
    date: "MAY — JUL 2025",
    title: "Data Science Intern",
    organization: "Vayam Technologies Ltd.",
    location: "New Delhi",
    details:
      "Explored data preprocessing, exploratory analysis, visualization, and foundational statistical and machine learning techniques.",
    tags: ["Data Analysis", "Python", "Statistics"],
  },
  {
    date: "DEC 2024 — FEB 2025",
    title: "Social Media Marketing Intern",
    organization: "Aqvino",
    location: "Remote / Hybrid",
    details:
      "Contributed to social media marketing initiatives, campaign planning, and digital content activities.",
    tags: ["Marketing", "Content", "Creativity"],
  },
];

const education = [
  {
    date: "2024 — 2028",
    title: "B.Tech in Data Science",
    organization:
      "Mukesh Patel School of Technology Management & Engineering, NMIMS",
    location: "Mumbai",
    details:
      "Coursework includes Machine Learning, Data Structures & Algorithms, DBMS, Probability & Statistics, Regression Analysis, Artificial Intelligence, Data Visualization, Applied Time Series, and Cloud Computing.",
    tags: ["Data Science", "Machine Learning", "Analytics"],
  },
  {
    date: "2024",
    title: "CBSE — Class XII",
    organization: "Delhi Public School, Mathura Road",
    location: "New Delhi",
    details:
      "Studied Computer Science, Mathematics, Sciences, and Arts.",
    tags: ["Computer Science", "Mathematics"],
  },
  {
    date: "GRADES 7 — 10",
    title: "Secondary School Education",
    organization: "Hopetown Girls' School",
    location: "Dehradun",
    details:
      "Participated in fine arts, district-level basketball, folk dance, percussion, and elocution.",
    tags: ["Fine Arts", "Basketball", "Performing Arts"],
  },
];

function Experience() {
  const [activeTab, setActiveTab] = useState("experience");

  const items =
    activeTab === "experience" ? experiences : education;

  return (
    <section className="experience-section" id="experience">
      <div className="experience-heading">
        <span className="experience-label">
          03 / THE JOURNEY
        </span>

        <h2>
          Chapters of
          <br />
          <em>my journey.</em>
        </h2>

        <p>
          Experiences that have shaped how I think,
          create, learn, and approach new challenges.
        </p>
      </div>

      <div className="experience-tabs">
        <button
          type="button"
          className={activeTab === "experience" ? "selected" : ""}
          onClick={() => setActiveTab("experience")}
          aria-pressed={activeTab === "experience"}
        >
          <BriefcaseBusiness size={17} />
          Experience
        </button>

        <button
          type="button"
          className={activeTab === "education" ? "selected" : ""}
          onClick={() => setActiveTab("education")}
          aria-pressed={activeTab === "education"}
        >
          <GraduationCap size={18} />
          Education
        </button>
      </div>

      <div className="editorial-timeline">
        {items.map((item, index) => (
          <article
            className="timeline-entry"
            key={`${activeTab}-${index}`}
          >
            <div className="timeline-date">
              <span className="timeline-dot"></span>
              {item.date}
            </div>

            <div className="timeline-content">
              <div className="timeline-title-row">
                <h3>{item.title}</h3>
                <ArrowUpRight size={23} strokeWidth={1.2} />
              </div>

              <p className="timeline-organization">
                {item.organization}
              </p>

              <span className="timeline-location">
                {item.location}
              </span>

              <p className="timeline-details">
                {item.details}
              </p>

              <div className="timeline-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="experience-footer">
        <span>ALWAYS LEARNING. ALWAYS EVOLVING.</span>
        <span>✦</span>
      </div>
    </section>
  );
}

export default Experience;
