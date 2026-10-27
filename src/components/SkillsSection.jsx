import { achievements, profile, skillGroups } from "../data/portfolio.js";
import SectionLabel from "./SectionLabel.jsx";

function SkillCard({ group }) {
  return (
    <article className="skill-card">
      <h3>{group.label}</h3>
      <ul>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <span className="skill-mark" aria-hidden="true">
        ↗
      </span>
    </article>
  );
}

function EducationEntry() {
  const { education } = profile;
  return (
    <div className="education">
      <div className="education-year">PENDIDIKAN</div>
      <div>
        <h3>{education.degree}</h3>
        <p>
          {education.institution} <span>·</span> {education.location}
        </p>
      </div>
      <span className="education-note">
        Fondasi cara berpikir
        <br />
        dan memecahkan masalah.
      </span>
    </div>
  );
}

function AchievementEntry({ achievement }) {
  return (
    <div className="education achievement-row">
      <div className="education-year">{achievement.category}</div>
      <div>
        <h3>{achievement.title}</h3>
        <p>{achievement.description}</p>
      </div>
      <span className="education-note">{achievement.note}</span>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      className="skills section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="wrap">
        <SectionLabel number="02">TEKNOLOGI</SectionLabel>
        <div className="section-heading">
          <h2 id="skills-title">Perangkat & teknologi.</h2>
          <p>
            Teknologi yang sedang saya pelajari dan gunakan untuk membangun produk full-stack.
          </p>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <SkillCard group={group} key={group.label} />
          ))}
        </div>
        <div className="credentials">
          <h3 className="credentials-title">Pendidikan & pencapaian</h3>
          <EducationEntry />
          {achievements.map((achievement) => (
            <AchievementEntry
              achievement={achievement}
              key={achievement.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
