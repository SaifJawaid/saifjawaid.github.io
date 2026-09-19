import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Cpu,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Search,
  ShieldCheck,
} from "lucide-react";

const SITE = {
  name: "Saif Jawaid",
  role: "Senior Machine Learning Engineer",
  company: "Indeed",
  email: "saif.jawaid@gmail.com",
  blurb:
    "Senior Machine Learning Engineer building production ML and LLM systems across evaluation, search, ranking, recommendations, and document understanding.",
  detail:
    "I work across applied research, evaluation design, architecture, and large-scale production systems, with a focus on reliable AI products that hold up under real traffic.",
};

const CORE_LINKS = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=WCpVTPEAAAAJ",
    icon: BookOpen,
  },
  { label: "GitHub", href: "https://github.com/SaifJawaid", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/saifjawaid", icon: Linkedin },
  { label: "Email", href: `mailto:${SITE.email}`, icon: Mail },
];

const OPTIONAL_PROFILE_LINKS = [
  { label: "ORCID", href: null },
  { label: "Semantic Scholar", href: null },
];

const PROFILE_LINKS = [
  ...CORE_LINKS,
  ...OPTIONAL_PROFILE_LINKS.filter((link) => Boolean(link.href)),
];

const IMPACT = [
  {
    title: "Resume parsing & LLM evaluation",
    text: "Designed the orchestrator-based resume parsing architecture at Indeed and helped take LLM parsing from prototype to production across multiple markets.",
  },
  {
    title: "Argus",
    text: "Architected and built an LLM-as-a-Judge evaluation and observability platform used across multiple markets, processing roughly 400K daily verdicts and eliminating approximately $180K in annotation costs.",
  },
  {
    title: "Application intelligence",
    text: "Data Science / ML lead for question understanding and answer auto-fill systems operating across a surface covering 53.3M employer screening questions per day.",
  },
  {
    title: "LLM guardrails",
    text: "Built output validation guardrails evaluated on 22K+ real production questions with ~29ms p99 CPU latency and 0% false rejection on the held-out set.",
  },
  {
    title: "Search & recommendations",
    text: "Previously led ML initiatives at Myntra across semantic search, ranking, and recommendations, including systems contributing to substantial product and business improvements.",
  },
];

const EXPERIENCE = [
  {
    role: "Senior Machine Learning Engineer",
    company: "Indeed",
    location: "India",
    years: "February 2025 - Present",
    summary:
      "Building production ML and LLM systems for document understanding, application intelligence, evaluation, and reliability.",
    bullets: [
      "Designed orchestrator-based resume parsing architecture and production rollout patterns across multiple markets.",
      "Architected Argus, an LLM-as-a-Judge evaluation and observability platform for high-volume parsing verdicts.",
      "Led automated question understanding and answer auto-fill work across large-scale employer screening surfaces.",
      "Built low-latency validation guardrails for generated outputs using production question distributions.",
      "Provided cross-market and cross-team technical leadership across applied ML, evaluation, and productionization.",
    ],
  },
  {
    role: "Lead Machine Learning Scientist",
    company: "Myntra",
    location: "Bangalore, India",
    years: "July 2019 - January 2025",
    summary:
      "Led applied ML initiatives across semantic search, retrieval, ranking, recommendations, bandits, and production experimentation.",
    bullets: [
      "Worked on semantic search, query rewriting, retrieval, and multi-stage ranking systems for e-commerce discovery.",
      "Built recommendation and bandit systems for homepage, session, notification, and payments experiences.",
      "Delivered production ML improvements tied to measurable product and business impact.",
      "Received CEO Hall of Fame recognition and multiple quarterly awards.",
    ],
  },
];

const EARLIER_EXPERIENCE = [
  {
    role: "Data Science Intern",
    company: "AB InBev",
    location: "Bangalore, India",
    years: "January 2019 - June 2019",
  },
  {
    role: "Engineer",
    company: "Shapoorji Pallonji",
    location: "Kolkata, India",
    years: "August 2016 - June 2017",
  },
];

const PUBLICATIONS = [
  {
    title:
      "Defending Job Platforms from Non-Genuine Applications Using Layered Detection and Anomaly Modeling",
    venue: "PRISM Workshop, NDSS Symposium",
    year: "2026",
    link: "https://www.ndss-symposium.org/ndss-paper/auto-draft-673/",
    authors: [
      "Rama Rohit Reddy Gangula",
      "Vijay Vardhan Alluri",
      "Saif Jawaid",
      "Dhwaj Raj",
      "Udit Jindal",
    ],
  },
  {
    title:
      "Diversify and Conquer: Bandits and Diversity for an Enhanced E-commerce Homepage Experience",
    venue: "RecSys 2023 Workshop",
    year: "2023",
    link: "https://arxiv.org/abs/2309.14046",
    authors: ["Sangeet Jaiswal", "Korah T Malayil", "Saif Jawaid", "Sreekanth Vempati"],
  },
  {
    title:
      "Fine-Grained Session Recommendations in E-commerce using Deep Reinforcement Learning",
    venue: "KDD 2022 Workshop",
    year: "2022",
    link: "https://arxiv.org/abs/2210.15451",
    authors: [
      "Diddigi Raghu Ram Bharadwaj",
      "Lakshya Kumar",
      "Saif Jawaid",
      "Sreekanth Vempati",
    ],
  },
  {
    title:
      "Multi-Asset Portfolio Optimization with Stochastic Sharpe Ratio under Drawdown Constraint",
    venue: "Annals of Financial Economics",
    year: "2020",
    link: "https://www.worldscientific.com/doi/abs/10.1142/S2010495220800019",
    authors: ["Subhojit Biswas", "Saif Jawaid", "Diganta Mukherjee"],
  },
  {
    title:
      "Application of Feature Selection and Extraction Techniques on Indian Stock Market",
    venue: "Statistical Methods in Finance",
    year: "2018",
    link: "https://statfin.cmi.ac.in/2018/abstract/Saif_Jawid.html",
    authors: ["Saif Jawaid"],
  },
];

const FOCUS_AREAS = [
  "LLM Evaluation & Reliability",
  "Production ML Systems",
  "Search & Ranking",
  "Recommendation Systems",
  "LLM Applications",
  "ML Observability & Guardrails",
];

const CORE_TECH = [
  "Python",
  "PyTorch",
  "PySpark",
  "Hugging Face",
  "Transformers",
  "XGBoost",
  "FAISS",
  "SQL",
];

const EDUCATION = [
  {
    school: "Indian Statistical Institute, Kolkata",
    degree: "MTech, Operations Research",
    years: "2017-2019",
  },
  {
    school: "Jadavpur University",
    degree: "BTech, Engineering",
    years: "2012-2016",
  },
];

const RECOGNITION = ["CEO Hall of Fame - Myntra", "Multiple quarterly awards - Myntra"];

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 ${className}`}>{children}</div>;
}

function Section({ id, eyebrow, title, intro, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 border-t border-white/10 py-14 sm:py-20 ${className}`}>
      <Container>
        <motion.div {...fadeUp} className="mb-8 max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/70">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
          {intro && <p className="mt-3 text-base leading-7 text-zinc-400">{intro}</p>}
        </motion.div>
        {children}
      </Container>
    </section>
  );
}

function ExternalAnchor({ href, children, className = "", ariaLabel }) {
  const external = href?.startsWith("http");
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {children}
    </a>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-zinc-300">
      {children}
    </span>
  );
}

function Nav() {
  const links = [
    ["impact", "Impact"],
    ["experience", "Experience"],
    ["research", "Research"],
    ["focus", "Work"],
    ["writing", "Writing"],
    ["contact", "Contact"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08090b]/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="text-sm font-semibold tracking-tight text-white">
          Saif Jawaid
        </a>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary navigation">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="text-sm text-zinc-400 transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <ExternalAnchor
          href={`mailto:${SITE.email}`}
          className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-zinc-200 transition hover:border-white/30 hover:text-white"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Email</span>
        </ExternalAnchor>
      </Container>
    </header>
  );
}

function HeroLink({ link }) {
  const Icon = link.icon;
  return (
    <ExternalAnchor
      href={link.href}
      ariaLabel={link.label}
      className="inline-flex min-h-11 max-w-full items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-medium text-zinc-200 transition hover:border-cyan-200/40 hover:bg-cyan-200/[0.06] hover:text-white"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      <span>{link.label}</span>
      {link.href.startsWith("http") && <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}
    </ExternalAnchor>
  );
}

function HeroSignal() {
  const rows = [
    ["Systems", "Production ML and LLM architecture"],
    ["Evaluation", "LLM-as-a-Judge, observability, guardrails"],
    ["Discovery", "Search, ranking, recommendations"],
    ["Research", "5 publications across security, recsys, RL, finance"],
  ];

  return (
    <motion.div
      {...fadeUp}
      className="relative min-w-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/30"
      aria-label="Profile focus summary"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(103,232,249,0.08),transparent_38%,rgba(244,244,245,0.04))]" />
      <div className="relative">
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Profile signal</p>
            <p className="mt-1 text-sm font-medium text-white">Applied ML at scale</p>
          </div>
          <Cpu className="h-5 w-5 text-cyan-200/70" aria-hidden="true" />
        </div>
        <div className="space-y-3">
          {rows.map(([label, value]) => (
            <div key={label} className="grid grid-cols-[86px_minmax(0,1fr)] gap-3 text-sm sm:grid-cols-[92px_minmax(0,1fr)]">
              <span className="text-zinc-500">{label}</span>
              <span className="min-w-0 text-zinc-200">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function HeroPortrait() {
  return (
    <motion.div {...fadeUp} className="mx-auto w-full max-w-[340px] lg:ml-auto lg:mr-0">
      <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.025] shadow-2xl shadow-black/30">
        <img
          src="/profile-placeholder.svg"
          alt="Saif Jawaid"
          className="aspect-[4/5] w-full object-cover"
          width="680"
          height="850"
        />
      </div>
    </motion.div>
  );
}

function HeroVisual() {
  return (
    <div className="grid min-w-0 gap-5 lg:justify-items-end">
      <HeroPortrait />
      <HeroSignal />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#08090b,#0b0c0f_54%,#08090b)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:56px_56px]" />
      <Container className="grid min-w-0 gap-10 pb-16 sm:pb-20 lg:grid-cols-[minmax(0,1.06fr)_minmax(320px,0.82fr)] lg:items-center">
        <motion.div {...fadeUp} className="min-w-0">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/75">
            Production ML / LLM Systems
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {SITE.name}
          </h1>
          <p className="mt-4 max-w-full text-xl font-medium leading-snug text-zinc-200 sm:text-2xl">
            {SITE.role} @ {SITE.company}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{SITE.blurb}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">{SITE.detail}</p>
          <div className="mt-8 flex max-w-full flex-wrap gap-3">
            {PROFILE_LINKS.map((link) => (
              <HeroLink key={link.label} link={link} />
            ))}
          </div>
        </motion.div>
        <HeroVisual />
      </Container>
    </section>
  );
}

function SelectedImpact() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {IMPACT.map((item, index) => (
        <motion.article
          key={item.title}
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: index * 0.04 }}
          className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
        >
          <h3 className="text-base font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{item.text}</p>
        </motion.article>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <div className="space-y-5">
      {EXPERIENCE.map((job, index) => (
        <motion.article
          key={`${job.company}-${job.role}`}
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: index * 0.05 }}
          className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.025] p-5 sm:p-6 lg:grid-cols-[250px_1fr]"
        >
          <div>
            <p className="text-sm font-medium text-cyan-200/80">{job.years}</p>
            <p className="mt-2 text-sm text-zinc-500">{job.location}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {job.role} <span className="text-zinc-500">- {job.company}</span>
            </h3>
            <p className="mt-3 text-base leading-7 text-zinc-300">{job.summary}</p>
            <ul className="mt-5 space-y-2.5 text-sm leading-6 text-zinc-400">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/70" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
      <motion.div {...fadeUp} className="rounded-lg border border-white/10 p-5 sm:p-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
          Earlier Experience
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {EARLIER_EXPERIENCE.map((job) => (
            <div key={`${job.company}-${job.role}`}>
              <p className="font-medium text-zinc-100">
                {job.role} <span className="text-zinc-500">- {job.company}</span>
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                {job.years} / {job.location}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function Research() {
  const renderAuthors = (authors) =>
    authors?.map((author, authorIndex) => (
      <span key={author}>
        {authorIndex > 0 && <span className="text-zinc-600">, </span>}
        {author === SITE.name ? <strong className="font-semibold text-zinc-100">{author}</strong> : author}
      </span>
    ));

  return (
    <div className="space-y-4">
      {PUBLICATIONS.map((paper, index) => (
        <motion.article
          key={paper.title}
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: index * 0.04 }}
          className="grid gap-4 rounded-lg border border-white/10 p-5 transition hover:border-white/20 sm:grid-cols-[1fr_auto] sm:items-start"
        >
          <div>
            <p className="text-sm font-medium text-cyan-200/80">
              {paper.venue} / {paper.year}
            </p>
            <h3 className="mt-2 text-lg font-semibold leading-7 text-white">{paper.title}</h3>
            {paper.authors && (
              <p className="mt-2 text-sm leading-6 text-zinc-500">{renderAuthors(paper.authors)}</p>
            )}
          </div>
          <ExternalAnchor
            href={paper.link}
            className="inline-flex w-fit items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-zinc-200 transition hover:border-white/30 hover:text-white"
          >
            <span>Read</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </ExternalAnchor>
        </motion.article>
      ))}
      <motion.div {...fadeUp} className="pt-2">
        <ExternalAnchor
          href="https://scholar.google.com/citations?hl=en&user=WCpVTPEAAAAJ"
          className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-100"
        >
          <BookOpen className="h-4 w-4" aria-hidden="true" />
          <span>View all on Google Scholar</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </ExternalAnchor>
      </motion.div>
    </div>
  );
}

function Focus() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
      <motion.div {...fadeUp} className="rounded-lg border border-white/10 bg-white/[0.025] p-5 sm:p-6">
        <div className="mb-5 flex items-center gap-3">
          <ShieldCheck className="h-5 w-5 text-cyan-200/75" aria-hidden="true" />
          <h3 className="text-lg font-semibold text-white">What I work on</h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {FOCUS_AREAS.map((area) => (
            <div key={area} className="rounded-md border border-white/10 px-3 py-3 text-sm text-zinc-200">
              {area}
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div {...fadeUp} className="rounded-lg border border-white/10 p-5 sm:p-6">
        <div className="mb-5 flex items-center gap-3">
          <Cpu className="h-5 w-5 text-cyan-200/75" aria-hidden="true" />
          <h3 className="text-lg font-semibold text-white">Core tooling</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {CORE_TECH.map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function Writing() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let active = true;

    fetch("/posts/posts.json", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : []))
      .then((data) => {
        if (active && Array.isArray(data)) {
          setPosts(data.filter((post) => post?.title && post?.href));
        }
      })
      .catch(() => {
        if (active) setPosts([]);
      });

    return () => {
      active = false;
    };
  }, []);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return posts;

    return posts.filter((post) =>
      `${post.title} ${post.excerpt || ""}`.toLowerCase().includes(normalizedQuery),
    );
  }, [posts, query]);

  if (posts.length === 0) {
    return (
      <motion.div {...fadeUp} className="rounded-lg border border-white/10 bg-white/[0.025] p-6">
        <FileText className="h-5 w-5 text-cyan-200/75" aria-hidden="true" />
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
          Technical writing on ML systems, evaluation, and production AI.
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      <motion.div
        {...fadeUp}
        className="mb-5 flex items-center gap-3 rounded-lg border border-white/10 px-4 py-3"
      >
        <Search className="h-4 w-4 text-zinc-500" aria-hidden="true" />
        <label htmlFor="post-search" className="sr-only">
          Search writing
        </label>
        <input
          id="post-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search writing"
          className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
        />
        <span className="text-xs text-zinc-500">{filteredPosts.length} results</span>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2">
        {filteredPosts.map((post) => (
          <motion.article
            key={post.href}
            {...fadeUp}
            className="rounded-lg border border-white/10 p-5 transition hover:border-white/20"
          >
            <a href={post.href} className="group">
              <h3 className="text-lg font-semibold text-white group-hover:underline">{post.title}</h3>
              {post.excerpt && <p className="mt-2 text-sm leading-6 text-zinc-400">{post.excerpt}</p>}
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-300">
                Read <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function Credentials() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <motion.div {...fadeUp} className="rounded-lg border border-white/10 p-5 sm:p-6">
        <div className="mb-5 flex items-center gap-3">
          <GraduationCap className="h-5 w-5 text-cyan-200/75" aria-hidden="true" />
          <h3 className="text-lg font-semibold text-white">Education</h3>
        </div>
        <div className="space-y-4">
          {EDUCATION.map((item) => (
            <div key={item.school}>
              <p className="font-medium text-white">{item.school}</p>
              <p className="mt-1 text-sm text-zinc-400">
                {item.degree} - {item.years}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div {...fadeUp} className="rounded-lg border border-white/10 p-5 sm:p-6">
        <div className="mb-5 flex items-center gap-3">
          <Award className="h-5 w-5 text-cyan-200/75" aria-hidden="true" />
          <h3 className="text-lg font-semibold text-white">Recognition</h3>
        </div>
        <ul className="space-y-3 text-sm text-zinc-300">
          {RECOGNITION.map((award) => (
            <li key={award} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/70" />
              <span>{award}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

function Contact() {
  return (
    <motion.div
      {...fadeUp}
      className="grid gap-6 rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-[1fr_auto]"
    >
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-white">Get in touch</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">
          Interested in technical collaborations, research, ML systems, reviewing, and speaking
          opportunities.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
        {PROFILE_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <ExternalAnchor
              key={link.label}
              href={link.href}
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-zinc-200 transition hover:border-white/30 hover:text-white"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span>{link.label}</span>
              {link.href.startsWith("http") && <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />}
            </ExternalAnchor>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090b] text-zinc-200">
      <Nav />
      <main>
        <Hero />
        <Section
          id="impact"
          eyebrow="Selected impact"
          title="Evidence from production systems"
          intro="A concise view of the work that best represents my current ML/AI systems profile."
        >
          <SelectedImpact />
        </Section>
        <Section
          id="experience"
          eyebrow="Experience"
          title="Production ML and applied AI work"
          intro="Focused on the strongest work rather than a full resume dump."
        >
          <Experience />
        </Section>
        <Section
          id="research"
          eyebrow="Research & Publications"
          title="Published work"
          intro="Research across job-platform security, recommendations, reinforcement learning, and financial modeling."
        >
          <Research />
        </Section>
        <Section
          id="focus"
          eyebrow="Public technical identity"
          title="What I work on"
          intro="A focused snapshot of current technical areas and the core tools behind them."
        >
          <Focus />
        </Section>
        <Section
          id="writing"
          eyebrow="Writing"
          title="Technical notes"
          intro="Visually secondary for now, ready for real posts when they exist."
        >
          <Writing />
        </Section>
        <Section id="credentials" eyebrow="Background" title="Education & recognition">
          <Credentials />
        </Section>
        <Section id="contact" className="pb-24" eyebrow="Contact" title="Collaboration and opportunities">
          <Contact />
        </Section>
      </main>
      <footer className="border-t border-white/10 py-8">
        <Container className="flex flex-col gap-2 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            (c) {new Date().getFullYear()} {SITE.name}
          </p>
          <p>{SITE.role} @ {SITE.company}</p>
        </Container>
      </footer>
    </div>
  );
}
