
import {
  ArrowUpRight,
  ArrowUp,
  GitBranch,
  BriefcaseBusiness,
  Mail,
  MapPin,
} from "lucide-react";

import "./Contact.css";

function Contact() {
  return (
    <footer className="contact-section" id="contact">

      {/* TOP LABEL */}
      <div className="contact-top">
        <span className="contact-eyebrow">
          06 / THE FINAL PAGE
        </span>

        <span className="contact-decoration">
          ✦
        </span>
      </div>

      {/* MAIN CONTACT HEADING */}
      <div className="contact-main">
        <p className="contact-pretitle">
          HAVE AN IDEA? A QUESTION? OR JUST WANT TO SAY HELLO?
        </p>

        <h2>
          Let's make
          <br />
          <em>something</em>
          <br />
          wonderful.
        </h2>

        <p className="contact-description">
          I'm always open to interesting conversations,
          creative collaborations, and opportunities
          to learn, build, and explore something new.
        </p>
      </div>

      {/* CONTACT LINKS */}
      <div className="contact-links">

        {/* EMAIL */}
        <a
          href="mailto:anya2006jain@gmail.com"
          className="contact-link"
        >
          <span className="contact-link-icon">
            <Mail size={21} strokeWidth={1.4} />
          </span>

          <span>Email me</span>

          <ArrowUpRight size={22} strokeWidth={1.4} />
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/anya-jain-13"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="contact-link-icon">
            <GitBranch size={21} strokeWidth={1.4} />
          </span>

          <span>GitHub</span>

          <ArrowUpRight size={22} strokeWidth={1.4} />
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/anya-jain-592703235/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="contact-link-icon">
            <BriefcaseBusiness size={21} strokeWidth={1.4} />
          </span>

          <span>LinkedIn</span>

          <ArrowUpRight size={22} strokeWidth={1.4} />
        </a>

      </div>

      {/* LOCATION */}
      <div className="contact-location">
        <MapPin size={16} strokeWidth={1.4} />
        <span>Delhi &amp; Mumbai, India</span>
      </div>

      {/* SIGNATURE */}
      <div className="contact-signature">
        <span>WITH CURIOSITY &amp; CREATIVITY</span>

        <h3>ANYA JAIN</h3>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="contact-bottom">

        <span>
          © {new Date().getFullYear()} ANYA JAIN
        </span>

        <span>
          DESIGNED WITH INTENTION ✦
        </span>

        <a href="#home" className="back-to-top">
          BACK TO TOP
          <ArrowUp size={16} />
        </a>

      </div>

    </footer>
  );
}

export default Contact;

