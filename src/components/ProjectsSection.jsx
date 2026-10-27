import { projects } from "../data/portfolio.js";
import SectionLabel from "./SectionLabel.jsx";
import Arrow from "./Arrow.jsx";

function ProjectArtwork({ image, imageAlt }) {
  if (!image) return null;

  return (
    <div className="project-visual">
      <img className="project-image" src={image} alt={imageAlt || ""} loading="lazy" />
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectArtwork image={project.image} imageAlt={project.imageAlt} />
      <div className="project-info">
        <div className="project-kicker"><span>{project.type}</span>{project.status && <span>{project.status}</span>}</div>
        <h3>{project.title}</h3>
        <p>{project.note}</p>
        <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {(project.liveUrl || project.repoUrl) && <div className="project-links">
          {project.liveUrl && <a href={project.liveUrl}>Demo langsung <span aria-hidden="true">↗</span></a>}
          {project.repoUrl && <a href={project.repoUrl}>Repositori GitHub <span aria-hidden="true">↗</span></a>}
        </div>}
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section className="projects section wrap" id="projects" aria-labelledby="projects-title">
      <SectionLabel number="03">KARYA PILIHAN</SectionLabel>
      <div className="section-heading project-heading">
        <h2 id="projects-title">Dibuat dengan tujuan.</h2>
      </div>
      {projects.length > 0 ? (
        <div className="project-grid">
          {projects.map((project) => <ProjectCard project={project} key={project.number} />)}
        </div>
      ) : (
        <div className="projects-empty">
          <h3>Belum ada studi kasus yang dipublikasikan.</h3>
          <a className="projects-empty-link" href="#contact">
            Hubungi saya <Arrow diagonal />
          </a>
        </div>
      )}
    </section>
  );
}
