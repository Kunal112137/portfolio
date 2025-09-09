
import React from "react";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/kunal-chavhan-493296258/",
  githubBrainTumor: "https://github.com/Kunal112137/Brain-Tumor-Detection",
  githubBlockSure: "https://github.com/Kunal112137/BlockSure",
  leetcode: "https://leetcode.com/u/Kunal__Chavhan/",
  geeksforgeeks: "https://www.geeksforgeeks.org/user/kunalchazcf8/",
};


function Navbar() {
  return (
    <header className="bg-gray-800/90 backdrop-blur sticky top-0 z-30 shadow-sm text-white">

      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-xl font-semibold">Kunal Chavhan</div>
        <nav className="space-x-4 hidden md:flex">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#internship" className="hover:underline">Internship</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="md:hidden">{/* mobile menu placeholder */}</div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gray-1000">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold">Hi, I am Kunal — Artificial Inteligence & Data Science student</h1>
          <p className="mt-4 text-gray-700">
            B.Tech in Artificial Intelligence & Data Science (Vishwakarma Institute of Technology).
            I build ML solutions and full-stack projects — currently working on brain tumor detection using CNNs.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              className="px-4 py-2 bg-sky-600 text-white rounded-md shadow-sm hover:opacity-95"
              href={socialLinks.githubBrainTumor}
              target="_blank"
              rel="noreferrer"
            >
              View Brain Tumor Project
            </a>
            <a
              className="px-4 py-2 border border-slate-200 rounded-md hover:bg-slate-50"
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <ul className="mt-6 text-sm text-gray-600 space-y-1">
            <li>📍 Pune, Maharashtra</li>
            <li>📧 kunalchavhan49@gmail.com</li>
            <li>📞 +91 9657823474</li>
          </ul>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-56 h-56 rounded-xl overflow-hidden shadow-lg bg-slate-100 flex items-center justify-center">
            {/* Replace with personal photo in /public/profile.jpg */}
           
            <img
  src="/profile.jpg"
  alt="Kunal Chavhan"
  className="w-56 h-56 rounded-xl shadow-lg object-cover"
/>

          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-4 text-gray-900"> 
          I'm pursuing a B.Tech in Artificial Intelligence and Data Science (Nov 2022 - June 2026) at Vishwakarma Institute of Technology.
          I have hands-on experience building machine learning models (CNNs), and full-stack applications using Node.js and MongoDB.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold">Education</h3>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>Vishwakarma Institute of Technology — B.Tech (AI & DS) — CGPA: 7.7</li>
              <li>Smt. Durgabai Raghuvanshi High School & Jr College — HSC — 73.83%</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold">Certifications & Achievements</h3>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>Python Programming Fundamentals — IIT Kharagpur</li>
              <li>Meta Front End Developer Professional Certificate — Coursera</li>
              <li>Solving 200+ problems across coding platforms</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 inline-block text-sm text-sky-600 hover:underline"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        View repository
      </a>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Brain Tumor Detection",
      description:
        "CNN-based model to classify MRI images as tumor / non-tumor. Includes training pipeline and evaluation.",
      link: socialLinks.githubBrainTumor,
    },
    {
      title: "Insurance Blockchain Management System (BlockSure)",
      description: "Full-stack project using Node.js, Express, MongoDB and vanilla frontend to manage campgrounds/users.",
      link: socialLinks.githubBlockSure,
    },
    {
      title: "Practice: LeetCode / DSA Problems",
      description: "200+ problems solved across platforms to strengthen algorithmic problem solving.",
      link: socialLinks.leetcode,
    },
  ];

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "Python",
    "Java",
    "HTML/CSS/JS",
    "Machine Learning",
    "CNNs (Computer Vision)",
    "MongoDB",
    "Node.js",
    "Tableau / Power BI",
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="px-3 py-1 bg-white rounded-full shadow-sm text-sm">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Internship() {
  return (
    <section id="internship" className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Internship / Experience</h2>
        <div className="mt-4 text-gray-700">
          <p>
            Add details of any internships or part-time roles here. If you haven't done internships yet, list
            relevant course projects and roles (for example, team lead on XYZ, dataset cleaning, model deployment).
          </p>

          <ul className="mt-4 text-sm text-gray-600 space-y-1">
            <li>• Brain Tumor Detection — model research, data preprocessing, training & evaluation.</li>
            <li>• BlockSure — backend API development using Node.js + MongoDB.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-gray-700">I’m open to internships and collaboration. Reach out via email or LinkedIn.</p>

        <div className="mt-4 flex flex-col md:flex-row gap-3 items-center justify-center">
          <a className="px-4 py-2 bg-sky-600 text-white rounded-md" href="mailto:kunalchavhan49@gmail.com">
            Email Me
          </a>
          <a className="px-4 py-2 border rounded-md" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <div className="mt-6 text-sm text-gray-600">
          <div>Phone: +91 96578 23474</div>
          <div className="mt-2">Profiles: <a className="text-sky-600 hover:underline" href={socialLinks.leetcode} target="_blank" rel="noreferrer">LeetCode</a> • <a className="text-sky-600 hover:underline" href={socialLinks.geeksforgeeks} target="_blank" rel="noreferrer">GfG</a></div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="font-sans text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Internship />
        <Contact />
      </main>

      <footer className="border-t py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Kunal Chavhan — Built with React + Tailwind
        </div>
      </footer>
    </div>
  );
}
