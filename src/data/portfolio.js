// Edit the content here to update the portfolio without changing its layout.
export const profile = {
  name: "Ezra Gabriel",
  brand: "Grazel",
  role: "Pengembang full-stack",
  location: "Jakarta, Indonesia",
  email: "ezragabrielm@gmail.com",
  education: {
    degree: "Ilmu Komputer",
    institution: "Universitas Bina Nusantara",
    location: "Indonesia",
  },
  bio: "Saya sedang membangun karier di bidang full-stack developer. Saya senang memahami masalah, menyusun alur yang jelas, lalu menerjemahkannya menjadi produk digital yang berguna.",
  cvProfile:
    "Lulusan Ilmu Komputer dari BINUS (Universitas Bina Nusantara) yang sedang meniti karier sebagai pengembang full-stack. Tertarik memahami produk dari antarmuka hingga sistem di baliknya.",
};

export const skillGroups = [
  { label: "Frontend", items: ["React", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express.js", "REST API"] },
  { label: "Data & alat", items: ["Dasar basis data", "JSON", "Git"] },
];

export const achievements = [
  {
    category: "PELATIHAN & PENGHARGAAN",
    title: "Bootcamp HariSenin",
    description: "Online, 2026",
    note: "Pembelajaran dasar hingga advanced React dan node.js.",
  },
];

// Add only projects with verified details that are ready to share publicly.
// Optional fields: image, imageAlt, liveUrl, and repoUrl.
// Use a compressed image (preferably WebP) and meaningful alt text.
export const projects = [
  {
    number: 1,
    type: "Personal",
    title: "Inventory System",
    note: "A personal portfolio for tracking Inventory System",
    tags: ["React", "Vite", "Node.js", "Express.js", "REST API", "Mysql"],
    image: "inventory.png",
    imageAlt: "Inventory System",
    liveUrl: "https://inventory-system-rljc.vercel.app/",
    repoUrl: "https://github.com/EzraGabriel/InventorySystem",
  },
];
