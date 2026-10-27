import { jsPDF } from "jspdf";
import { profile, skillGroups } from "../data/portfolio.js";

export default function downloadCV() {
  const pdf = new jsPDF({ unit: "mm", format: "a4" });
  pdf.setFillColor(25, 54, 43);
  pdf.rect(0, 0, 210, 68, "F");
  pdf.setTextColor(182, 238, 120);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(10);
  pdf.text("PORTOFOLIO / DAFTAR RIWAYAT HIDUP", 20, 21);
  pdf.setTextColor(255, 255, 248);
  pdf.setFontSize(31);
  pdf.text(profile.name, 20, 40);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(12);
  pdf.text(profile.role, 20, 53);
  pdf.setFontSize(10);
  pdf.text(`${profile.email} · ${profile.location}`, 20, 61);
  pdf.setTextColor(29, 41, 36);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(11);
  pdf.text("PROFIL", 20, 88);
  pdf.setFont("helvetica", "normal");
  pdf.text(pdf.splitTextToSize(profile.cvProfile, 165), 20, 98);
  pdf.setFont("helvetica", "bold");
  pdf.text("PENDIDIKAN", 20, 135);
  pdf.setFont("helvetica", "normal");
  pdf.text(profile.education.degree, 20, 145);
  pdf.text(`${profile.education.institution} (${profile.education.location})`, 20, 152);
  pdf.setFont("helvetica", "bold");
  pdf.text("FOKUS SAAT INI", 20, 180);
  pdf.setFont("helvetica", "normal");
  skillGroups.forEach((group, index) => {
    pdf.text(`${group.label}: ${group.items.join(", ")}`, 20, 190 + index * 7);
  });
  pdf.setDrawColor(217, 222, 214);
  pdf.line(20, 266, 190, 266);
  pdf.setTextColor(104, 115, 108);
  pdf.setFontSize(8);
  pdf.text(`${profile.name} · ${profile.email}`, 20, 274);
  pdf.save(`${profile.name.replaceAll(" ", "-")}-CV.pdf`);
}
