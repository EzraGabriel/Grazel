import { profile } from "../data/portfolio.js";
import downloadCV from "../utils/downloadCV.js";
import Arrow from "./Arrow.jsx";
import SectionLabel from "./SectionLabel.jsx";

function SiteFooter() {
  return (
    <div className="contact-bottom">
      <span>{profile.name.toUpperCase()} · 2026</span>
      <span>DIBUAT DENGAN RASA INGIN TAHU <b>✳</b></span>
      <a href="#home">KEMBALI KE ATAS ↑</a>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-inner">
        <SectionLabel number="04">KONTAK</SectionLabel>
        <p className="contact-kicker">PUNYA IDE YANG BISA KITA BANGUN BERSAMA?</p>
        <h2 id="contact-title">Mari buat<br /><em>sesuatu yang berarti.</em></h2>
        <p className="contact-note">Saya terbuka untuk percakapan seputar proyek, kolaborasi, dan kesempatan baru.</p>
        <a className="button button-light" href={`mailto:${profile.email}`}>Kirim email <Arrow diagonal /></a>
        <p className="contact-hint">Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
        <button className="footer-cv" type="button" onClick={downloadCV}>Unduh CV <Arrow /></button>
        <SiteFooter />
      </div>
    </section>
  );
}
