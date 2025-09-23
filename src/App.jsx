import React from "react";
import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Mail, Linkedin, ArrowUpRight, Download, BookOpen, Briefcase, GraduationCap, Cpu, Code2, Newspaper, Phone } from "lucide-react";

// --- THEME TOKENS ----------------------------------------------------------
const brand = {
  bg: "bg-[#0b0d10]",
  card: "bg-[#12151b]",
  txt: "text-zinc-200",
  sub: "text-zinc-400",
  accent: "from-cyan-400/30 via-blue-400/20 to-fuchsia-400/20",
  ring: "ring-1 ring-white/10",
};

// --- LAYOUT ----------------------------------------------------------------
function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 ${className}`}>{children}</div>;
}

function Section({ id, title, icon: Icon, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-24 ${className}`}>
      <Container>
        <div className="mb-8 flex items-center gap-3">
          {Icon && (
            <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
              <Icon className="h-5 w-5 text-white/80" />
            </div>
          )}
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
        </div>
        {children}
      </Container>
    </section>
  );
}

// --- DATA (filled from your resume) ----------------------------------------
const ABOUT = {
  name: "Saif Jawaid",
  title: "Senior Machine Learning Scientist",
  blurb:
    "Full‑stack ML scientist shipping end‑to‑end systems across search, ranking, recommendations, and parsing — with agentic orchestration, observability, and advanced PDF/text extraction.",
  email: "saif.jawaid@gmail.com",
  phone: "+91 89613 90226",
  linkedin: "https://linkedin.com/in/saifjawaid",
};

const EDUCATION = [
  { school: "Indian Statistical Institute (ISI) Kolkata", degree: "MTech — Operations Research", years: "2017–2019", location: "Kolkata, India" },
  { school: "Jadavpur University", degree: "BTech — Engineering", years: "2012–2016", location: "Kolkata, India" },
];

const EXPERIENCE = [
  {
    role: "Senior Machine Learning Scientist",
    company: "Indeed",
    location: "Bangalore, India",
    years: "Feb 2025 – Present",
    bullets: [
      "Revamped resume parsing into a multi‑agent, self‑optimizing pipeline with intelligent routing.",
      "Designed agentic observability for field‑level evaluation and feedback loops.",
      "Built state‑of‑the‑art PDF text extraction modules to uplift downstream accuracy.",
    ],
  },
  {
    role: "Lead Machine Learning Scientist",
    company: "Myntra",
    location: "Bangalore, India",
    years: "Jul 2019 – Jan 2025",
    bullets: [
      "Led semantic search, query rewriting, multi‑layered ranking (FAISS, Transformers, GPT‑4, RLHF, XGBoost).",
      "Optimized PySpark cohort sort (14h → <45m). Helped drive 26% YoY RPU; CEO Hall of Fame & multiple awards.",
      "Payments CTR +12% (Word2Vec+XGBoost), in‑session intent GRU; notification CTR +7%.",
    ],
  },
  { role: "Data Science Intern", company: "AB InBev", location: "Bangalore, India", years: "Jan 2019 – Jun 2019", bullets: [] },
  { role: "Engineer", company: "Shapoorji Pallonji", location: "Kolkata, India", years: "Aug 2016 – Jun 2017", bullets: [] },
];

const SKILLS = {
  Languages: ["Python", "SQL", "PySpark", "Go", "Rust", "R"],
  Infra: ["Airflow", "Databricks", "Docker", "Kubernetes", "Ray", "MLflow", "CUDA", "NUMBA", "Git"],
  ML: ["PyTorch", "NumPy", "Pandas", "Keras", "JAX", "Hugging Face", "Transformers", "XGBoost", "FAISS", "ONNX", "MLOps"],
};

const PUBLICATIONS = [
  {
    title: "Diversify and Conquer: Bandits and Diversity for an Enhanced E‑commerce Homepage Experience",
    venue: "FashionxRecSys Workshop @ RecSys'23",
    link: "https://arxiv.org/abs/2309.14046",
    date: "Sep 25, 2023",
  },
  {
    title: "Fine‑Grained Session Recommendations in E‑commerce using Deep Reinforcement Learning",
    venue: "KDD Workshop — End‑to‑End Customer Journey Optimization",
    link: "https://arxiv.org/abs/2210.15451",
    date: "Oct 20, 2022",
  },
  {
    title: "Multi‑Asset Portfolio Optimization with Stochastic Sharpe Ratio under Drawdown Constraint",
    venue: "Annals of Financial Economics",
    link: "https://www.worldscientific.com/doi/abs/10.1142/S2010495220800019",
    date: "May 20, 2020",
  },
  {
    title: "Application of Feature Selection and Extraction techniques on Indian Stock Market",
    venue: "Statistical Methods in Finance 2018",
    link: "https://statfin.cmi.ac.in/2018/abstract/Saif_Jawid.html",
    date: "Dec 18, 2018",
  },
];

// --- BLOGS: load from posts.json if present; fallback to sample --------------
const SAMPLE_BLOGS = [
  {
    title: "LLMs & Life: Are We Prompted?",
    href: "posts/llms-and-life.html",
    excerpt: "A playful thought experiment: what if each day is the output of a self‑tuning cosmic prompt?",
  },
  {
    title: "Agentic Observability for Parsers",
    href: "posts/argus-observability.html",
    excerpt: "Field‑level judgments, feedback loops, and traffic reshaping for resilient parsing systems.",
  },
  {
    title: "Search & Ranking at Scale",
    href: "posts/search-ranking-scale.html",
    excerpt: "From FAISS to Transformers to bandits — notes from the trenches.",
  },
];

// --- COMPONENTS -------------------------------------------------------------
function Nav() {
  const links = [
    ["about", "About"],
    ["education", "Education"],
    ["experience", "Work"],
    ["skills", "Skills"],
    ["publications", "Publications"],
    ["blogs", "Blogs"],
    ["contact", "Contact"],
  ];
  return (
    <div className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <Container className="flex items-center justify-between py-4">
        <a href="#top" className="font-semibold tracking-tight text-white">Saif<span className="text-white/60">·</span>Jawaid</a>
        <nav className="hidden gap-6 md:flex">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="text-sm text-white/80 hover:text-white transition">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="mailto:saif.jawaid@gmail.com" className="group inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-sm text-white/90 ring-1 ring-white/10 hover:ring-white/30">
            <Mail className="h-4 w-4 opacity-80 group-hover:opacity-100" />
            <span>Email</span>
          </a>
          <a href="https://linkedin.com/in/saifjawaid" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-sm text-white/90 ring-1 ring-white/10 hover:ring-white/30">
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </Container>
      <div className={`pointer-events-none h-px w-full bg-gradient-to-r ${brand.accent}`} />
    </div>
  );
}

function Hero() {
  return (
    <div id="top" className={`relative ${brand.bg} pb-20 pt-28 sm:pt-36`}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-20%] -z-10 h-[60vh] bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,.25),transparent_60%)]" />
      </div>
      <Container>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/60">Machine Learning — Systems — Agents</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">{ABOUT.name}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{ABOUT.blurb}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#blogs" className="group inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-black">
              <BookOpen className="h-4 w-4" />
              <span>Read Blogs</span>
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#experience" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 ring-1 ring-white/20 text-white/90">
              <Briefcase className="h-4 w-4" />
              <span>Experience</span>
            </a>
          </div>
        </motion.div>
      </Container>
      <Marquee />
    </div>
  );
}

function Marquee() {
  const items = [
    ...SKILLS.Languages,
    ...SKILLS.ML.slice(0, 6),
    ...SKILLS.Infra.slice(0, 6),
  ];
  return (
    <div className="mt-12 overflow-hidden py-4">
      <div className="animate-[scroll_30s_linear_infinite] whitespace-nowrap text-white/70 will-change-transform">
        {items.concat(items).map((t, i) => (
          <span key={i} className="mx-6 text-sm">{t}</span>
        ))}
      </div>
      <style>{`@keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

function Pill({ children }) {
  return <span className="rounded-xl bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">{children}</span>;
}

function Card({ children, className = "" }) {
  return <div className={`${brand.card} ${brand.ring} rounded-3xl p-6 shadow-2xl shadow-black/40 ${className}`}>{children}</div>;
}

function Experience() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {EXPERIENCE.map((job, idx) => (
        <motion.div key={idx} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
          <Card>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{job.role} <span className="text-white/60">— {job.company}</span></h3>
              <Pill>{job.years}</Pill>
            </div>
            <p className="text-sm text-white/60">{job.location}</p>
            {job.bullets?.length > 0 && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

function Education() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {EDUCATION.map((ed, i) => (
        <Card key={i}>
          <h3 className="text-lg font-semibold text-white">{ed.school}</h3>
          <p className="text-white/80">{ed.degree}</p>
          <div className="mt-2 flex items-center gap-3 text-sm text-white/60">
            <Pill>{ed.years}</Pill>
            <span>•</span>
            <span>{ed.location}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {Object.entries(SKILLS).map(([k, arr]) => (
        <Card key={k}>
          <div className="mb-3 flex items-center gap-2 text-white">
            {k === "Languages" && <Code2 className="h-5 w-5" />}
            {k === "Infra" && <Cpu className="h-5 w-5" />}
            {k === "ML" && <BookOpen className="h-5 w-5" />}
            <h3 className="font-semibold">{k}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {arr.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

function Publications() {
  return (
    <div className="grid gap-6">
      {PUBLICATIONS.map((p, i) => (
        <Card key={i}>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <a href={p.link} target="_blank" rel="noreferrer" className="text-lg font-medium text-white hover:underline">
                {p.title}
              </a>
              <p className="text-sm text-white/60">{p.venue} · {p.date}</p>
            </div>
            <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-sm text-white/90 ring-1 ring-white/10 hover:ring-white/30">
              <span>Read</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
}

function Blogs() {
  const [q, setQ] = useState("");
  const [posts, setPosts] = useState(SAMPLE_BLOGS);

  // Try to fetch posts.json if present in /posts
  useEffect(() => {
    fetch("/posts/posts.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (Array.isArray(data)) setPosts(data);
      })
      .catch(() => {});
  }, []);

  const filtered = useMemo(() => {
    if (!q) return posts;
    const s = q.toLowerCase();
    return posts.filter((p) => (p.title + " " + (p.excerpt || "")).toLowerCase().includes(s));
  }, [q, posts]);

  return (
    <div>
      <div className={`${brand.card} ${brand.ring} mb-6 grid grid-cols-1 items-center gap-3 rounded-3xl p-4 sm:grid-cols-[1fr_auto]`}>
        <div className="flex items-center gap-2">
          <Search className="h-5 w-5 text-white/70" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search posts by title or summary..."
            className="w-full bg-transparent text-white placeholder-white/50 outline-none"
          />
        </div>
        <span className="hidden text-sm text-white/60 sm:block">{filtered.length} results</span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <motion.a
            key={i}
            href={p.href}
            className={`${brand.card} ${brand.ring} group block rounded-3xl p-6`}
            whileHover={{ y: -3 }}
          >
            <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-white group-hover:underline">{p.title}</h3>
            <p className="line-clamp-3 text-sm text-white/70">{p.excerpt}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm text-white/80">
              <span>Read</span>
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.a>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-6 text-white/60">No posts found. Try a different search.</p>
      )}
    </div>
  );
}

function Contact() {
  return (
    <Card>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-white">Get in touch</h3>
          <p className="mt-1 text-white/70">
            Open to collaborations, research, and building ML systems with real‑world impact.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a href={`mailto:${ABOUT.email}`} className="inline-flex items-center gap-2 text-white/90 hover:underline">
            <Mail className="h-4 w-4" /> {ABOUT.email}
          </a>
          <div className="inline-flex items-center gap-2 text-white/90">
            <Phone className="h-4 w-4" /> {ABOUT.phone}
          </div>
          <a href={ABOUT.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/90 hover:underline">
            <Linkedin className="h-4 w-4" /> {ABOUT.linkedin}
          </a>
        </div>
      </div>
    </Card>
  );
}

// --- APP -------------------------------------------------------------------
export default function App() {
  return (
    <div className={`${brand.bg} min-h-screen ${brand.txt}`}> 
      <Nav />
      <Hero />

      <Section id="about" title="About" icon={Newspaper}>
        <Card>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">{ABOUT.title}</h3>
              <p className="mt-2 max-w-2xl text-white/80">{ABOUT.blurb}</p>
            </div>
            <div className="flex gap-2">
              <Pill>Bangalore, India</Pill>
              <Pill>Open to Collab</Pill>
            </div>
          </div>
        </Card>
      </Section>

      <Section id="education" title="Education" icon={GraduationCap}>
        <Education />
      </Section>

      <Section id="experience" title="Work Experience" icon={Briefcase}>
        <Experience />
      </Section>

      <Section id="skills" title="Skills" icon={Code2}>
        <Skills />
      </Section>

      <Section id="publications" title="Publications" icon={BookOpen}>
        <Publications />
      </Section>

      <Section id="blogs" title="Blogs" icon={Newspaper}>
        <Blogs />
      </Section>

      <Section id="contact" title="Contact" icon={Mail} className="pb-24">
        <Contact />
      </Section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/50">
        <Container>
          © {new Date().getFullYear()} {ABOUT.name}. All rights reserved.
        </Container>
      </footer>
    </div>
  );
}