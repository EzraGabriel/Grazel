import { profile } from "../data/portfolio.js";
import Arrow from "./Arrow.jsx";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label={`${profile.brand}, studio milik ${profile.name}, beranda`}>
        {profile.brand}<span>.</span>
      </a>
      <nav aria-label="Navigasi utama" className="nav-links">
        <a href="#about">Tentang</a>
        <a href="#skills">Keahlian</a>
        <a href="#projects">Proyek</a>
      </nav>
      <a className="header-contact" href="#contact">
        Mari terhubung <Arrow diagonal />
      </a>
    </header>
  );
}
