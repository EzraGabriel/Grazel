import { profile } from "../data/portfolio.js";
import SectionLabel from "./SectionLabel.jsx";

export default function AboutSection() {
  return (
    <section
      className="intro section wrap"
      id="about"
      aria-labelledby="about-title"
    >
      <SectionLabel number="01">TENTANG SAYA</SectionLabel>
      <div className="intro-content">
        <h2 id="about-title">
          Saya berpikir sistematis.
          <br />Saya memperhatikan <em>detail.</em>
        </h2>
        <div className="intro-bottom">
          <p>{profile.bio}</p>
          <div className="about-stamp">
            <span>{profile.brand}</span>
            <small>
              STUDIO PRIBADI
              <br />
              {profile.name.toUpperCase()}
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
