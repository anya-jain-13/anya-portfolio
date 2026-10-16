
import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Award,
  Users,
  Palette,
} from "lucide-react";
import "./Chapters.css";

const chapters = [
  {
    number: "01",
    title: "Leading & Creating",
    subtitle: "LEADERSHIP & INVOLVEMENT",
    icon: Users,
    entries: [
      {
        title: "Head of Digital Media & Content",
        organization: "IEEE Computer Society — MPSTME",
        date: "2025 — 2026",
        description:
          "Leading digital media, creative communication, visual design, and content initiatives.",
      },
      {
        title: "Team Leader — Marketing & Outreach",
        organization: "BITS Pilani Entrepreneurship Cell",
        date: "Leadership",
        description:
          "Contributing to marketing, outreach, and entrepreneurial community initiatives.",
      },
      {
        title: "Member",
        organization: "Enactus — MPSTME",
        date: "2024 — 2025",
        description:
          "Participated in a student community focused on entrepreneurship and social impact.",
      },
      {
        title: "Social Media Volunteer",
        organization: "Gully Classes Foundation",
        date: "MAY — JUL 2025",
        description:
          "Created posters, reels, interviews, blog content, and contributions to the foundation's annual report.",
      },
    ],
  },
  {
    number: "02",
    title: "Milestones & Recognition",
    subtitle: "ACHIEVEMENTS & CERTIFICATIONS",
    icon: Award,
    entries: [
      {
        title: "Winner — Adapt 3.0 Ideathon",
        organization: "Smart Construction Domain",
        date: "ACHIEVEMENT",
        description:
          "Recognized for an innovative idea in the smart construction domain.",
      },
      {
        title: "RAG Systems & Agentic Workflows",
        organization: "Pinecone and LangGraph",
        date: "CERTIFICATION",
        description:
          "Learning retrieval-augmented generation and agentic AI workflows.",
      },
      {
        title: "Deep Learning Specialization",
        organization: "Professional Learning",
        date: "CERTIFICATION",
        description:
          "Studied neural networks and deep learning methods.",
      },
      {
        title: "Mathematics for Machine Learning",
        organization: "Imperial College London / Coursera",
        date: "CERTIFICATION",
        description:
          "Explored the mathematical foundations of machine learning.",
      },
      {
        title: "Data Science Using Python",
        organization: "NIELIT, Government of India",
        date: "CERTIFICATION",
        description:
          "Applied Python to data science and analytics concepts.",
      },
      {
        title: "Generative AI for All",
        organization: "IUCEE",
        date: "CERTIFICATION",
        description:
          "Explored foundational concepts and applications of generative AI.",
      },
    ],
  },
  {
    number: "03",
    title: "Beyond the Screen",
    subtitle: "INTERESTS & CREATIVE PURSUITS",
    icon: Palette,
    entries: [
      {
        title: "Fine Arts & Graphic Design",
        organization: "VISUAL CREATIVITY",
        date: "INTEREST",
        description:
          "Exploring ideas through visual composition, artwork, and graphic design.",
      },
      {
        title: "Photography, Editing & Storytelling",
        organization: "DIGITAL CONTENT",
        date: "INTEREST",
        description:
          "Creating visual narratives through photography, video editing, and digital content.",
      },
      {
        title: "Folk Dance & Percussion",
        organization: "PERFORMING ARTS",
        date: "INTEREST",
        description:
          "Experience with folk dance, congo drums, and creative performance.",
      },
      {
        title: "Basketball",
        organization: "SPORTS",
        date: "DISTRICT LEVEL",
        description:
          "Participated in basketball at the district level during school.",
      },
      {
        title: "Elocution & Communication",
        organization: "PUBLIC SPEAKING",
        date: "INTEREST",
        description:
          "An interest in expression, communication, and presenting ideas.",
      },
    ],
  },
];

function Chapters() {
  const [openChapter, setOpenChapter] = useState(0);

  function toggleChapter(index) {
    setOpenChapter(openChapter === index ? null : index);
  }

  return (
    <section className="chapters-section" id="chapters">
      <div className="chapters-header">
        <span className="chapters-label">
          05 / BEYOND THE RESUME
        </span>

        <h2>
          More than
          <br />
          <em>just data.</em>
        </h2>

        <p>
          The communities, accomplishments, and creative
          pursuits that make up the other chapters of my story.
        </p>
      </div>

      <div className="chapters-collection">
        {chapters.map((chapter, index) => {
          const Icon = chapter.icon;
          const isOpen = openChapter === index;

          return (
            <article
              className={`chapter-card ${isOpen ? "expanded" : ""}`}
              key={chapter.number}
            >
              <button
                type="button"
                className="chapter-trigger"
                onClick={() => toggleChapter(index)}
                aria-expanded={isOpen}
              >
                <span className="chapter-number">
                  CHAPTER {chapter.number}
                </span>

                <div className="chapter-heading">
                  <span className="chapter-subtitle">
                    {chapter.subtitle}
                  </span>

                  <h3>{chapter.title}</h3>
                </div>

                <span className="chapter-icon">
                  <Icon size={28} strokeWidth={1.3} />
                </span>

                <span className="chapter-chevron">
                  <ChevronDown size={23} strokeWidth={1.5} />
                </span>
              </button>

              {isOpen && (
                <div className="chapter-content">
                  <div className="chapter-entry-grid">
                    {chapter.entries.map((entry) => (
                      <div
                        className="chapter-entry"
                        key={entry.title}
                      >
                        <div className="chapter-entry-top">
                          <span>{entry.date}</span>
                          <ArrowUpRight
                            size={17}
                            strokeWidth={1.3}
                          />
                        </div>

                        <h4>{entry.title}</h4>

                        <span className="chapter-organization">
                          {entry.organization}
                        </span>

                        <p>{entry.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="chapters-footer">
        <span>THERE IS ALWAYS MORE TO THE STORY.</span>
        <span>✦</span>
      </div>
    </section>
  );
}

export default Chapters;
