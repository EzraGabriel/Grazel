import { profile } from "../data/portfolio.js";
import downloadCV from "../utils/downloadCV.js";
import Arrow from "./Arrow.jsx";

export default function HeroSection() {
  return (
    <section className="hero wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> {profile.role.toUpperCase()} ·{" "}
          {profile.location.toUpperCase()}
        </p>
        <h1 id="hero-title">
          Dari UI
          <br />
          <span>ke API.</span>
        </h1>
        <p className="hero-description">
          Saya Ezra. Saya sedang membangun karier full-stack dengan fondasi Ilmu
          Komputer dari BINUS. Fokus saya saat ini: React, Tailwind CSS,
          Node.js, dan REST API.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#skills">
            Lihat teknologi <Arrow />
          </a>
          <button
            className="text-link cv-link"
            type="button"
            onClick={downloadCV}
          >
            Unduh CV <Arrow diagonal />
          </button>
        </div>
        <div className="hero-meta">
          <span>01 / 04</span>
          <span>MERANCANG · MEMBANGUN · BERKEMBANG</span>
        </div>
      </div>
      <figure className="hero-portrait">
        <img src="/Profile%20Picture.jpg" alt="Ezra Gabriel" />
      </figure>
      <div className="hero-footnote">
        <span>GULIR UNTUK MENJELAJAH</span>
        <span className="foot-line" />
      </div>
    </section>
  );
}
