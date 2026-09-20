const SITE = {
  name: "Saif Jawaid",
  descriptor: "Engineer / Researcher / Builder",
  title: "Senior Machine Learning Engineer at Indeed",
  email: "saif.jawaid@gmail.com",
  summary:
    "I build production machine learning and LLM systems across evaluation, search, ranking, recommendations and document understanding. My work spans applied research, system architecture, experimentation and large-scale deployment.",
  portraitSrc: "/profile-placeholder.svg",
};

const LINKS = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=WCpVTPEAAAAJ",
  },
  { label: "GitHub", href: "https://github.com/SaifJawaid" },
  { label: "LinkedIn", href: "https://linkedin.com/in/saifjawaid" },
  { label: "Email", href: `mailto:${SITE.email}` },
];

const OPTIONAL_PROFILE_LINKS = [
  { label: "ORCID", href: null },
  { label: "Semantic Scholar", href: null },
];

const PROFILE_LINKS = [
  ...LINKS,
  ...OPTIONAL_PROFILE_LINKS.filter((link) => Boolean(link.href)),
];

const SELECTED_WORK = [
  {
    title: "Argus",
    meta: "Indeed / LLM Evaluation & Observability",
    text: "Architected and built an LLM-as-a-Judge evaluation and observability platform used across multiple markets, processing roughly 400K daily verdicts and eliminating approximately $180K in annotation costs.",
  },
  {
    title: "Resume Parsing",
    meta: "Indeed / LLM Systems",
    text: "Designed an orchestrator-based resume-parsing architecture and helped take LLM parsing from prototype to production across multiple markets.",
  },
  {
    title: "Application Intelligence",
    meta: "Indeed / Question Understanding & Answer Automation",
    text: "Led ML work for question understanding and answer auto-fill across a surface covering 53.3M employer screening questions per day.",
  },
  {
    title: "Search & Recommendations",
    meta: "Myntra / Search / Ranking / Recommendation",
    text: "Led work across semantic search, query rewriting, retrieval, ranking, recommendation systems and bandits, contributing to substantial product and business improvements.",
  },
];

const PUBLICATIONS = [
  {
    year: "2026",
    title:
      "Defending Job Platforms from Non-Genuine Applications Using Layered Detection and Anomaly Modeling",
    venue: "PRISM Workshop, NDSS Symposium",
    href: "https://www.ndss-symposium.org/ndss-paper/auto-draft-673/",
  },
  {
    year: "2023",
    title:
      "Diversify and Conquer: Bandits and Diversity for an Enhanced E-commerce Homepage Experience",
    venue: "RecSys Workshop",
    href: "https://arxiv.org/abs/2309.14046",
  },
  {
    year: "2022",
    title:
      "Fine-Grained Session Recommendations in E-commerce using Deep Reinforcement Learning",
    venue: "KDD Workshop",
    href: "https://arxiv.org/abs/2210.15451",
  },
  {
    year: "2020",
    title:
      "Multi-Asset Portfolio Optimization with Stochastic Sharpe Ratio under Drawdown Constraint",
    venue: "Annals of Financial Economics",
    href: "https://www.worldscientific.com/doi/abs/10.1142/S2010495220800019",
  },
  {
    year: "2018",
    title: "Application of Feature Selection and Extraction Techniques on Indian Stock Market",
    venue: "Statistical Methods in Finance",
    href: "https://statfin.cmi.ac.in/2018/abstract/Saif_Jawid.html",
  },
];

const EXPERIENCE = [
  {
    company: "Indeed",
    role: "Senior Machine Learning Engineer",
    years: "Feb 2025 - Present",
    text: "Production ML and LLM systems spanning evaluation, application intelligence, document understanding, search/ranking and reliability.",
  },
  {
    company: "Myntra",
    role: "Lead Machine Learning Scientist",
    years: "Jul 2019 - Jan 2025",
    text: "Led applied ML work across search, ranking, retrieval, recommendations and personalization.",
  },
];

const EARLIER = ["AB InBev - Data Science Intern", "Shapoorji Pallonji - Engineer"];

const EDUCATION = [
  {
    school: "Indian Statistical Institute, Kolkata",
    degree: "MTech, Operations Research",
    years: "2017 - 2019",
  },
  {
    school: "Jadavpur University",
    degree: "BTech, Engineering",
    years: "2012 - 2016",
  },
];

const RECOGNITION = ["CEO Hall of Fame - Myntra", "Multiple quarterly awards - Myntra"];

function ExternalLink({ href, children, className = "", ariaLabel }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}

function LinkList({ className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${className}`}>
      {PROFILE_LINKS.map((link, index) => (
        <span key={link.label} className="inline-flex items-center gap-x-3">
          {index > 0 && <span className="text-stone-300">/</span>}
          <ExternalLink href={link.href} className="editorial-link">
            {link.label}
          </ExternalLink>
        </span>
      ))}
    </div>
  );
}

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-5 pb-2 pt-4 text-sm sm:px-8">
      <a href="#top" className="font-semibold tracking-tight text-charcoal">
        {SITE.name}
      </a>
      <LinkList className="hidden text-[13px] sm:flex" />
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto grid w-full max-w-[1180px] gap-7 px-5 pb-7 pt-2 sm:px-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(240px,0.66fr)] lg:items-center">
      <div className="max-w-[760px]">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          {SITE.descriptor}
        </p>
        <h1 className="font-serif text-[clamp(3.5rem,7.2vw,6.35rem)] font-normal leading-[0.88] tracking-[-0.045em] text-charcoal">
          {SITE.name}
        </h1>
        <p className="mt-4 text-xl font-semibold leading-snug text-charcoal sm:text-2xl">{SITE.title}</p>
        <p className="mt-4 max-w-[700px] text-[17px] leading-7 text-body sm:text-[18px]">{SITE.summary}</p>
        <LinkList className="mt-5 text-[15px]" />
      </div>

      <figure className="grid max-w-[255px] gap-3 justify-self-start lg:justify-self-end">
        <div className="border border-stone-300 bg-[#ede6d8] p-1.5">
          <img
            src={SITE.portraitSrc}
            alt="Saif Jawaid"
            width="680"
            height="850"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <figcaption className="grid grid-cols-2 gap-x-4 gap-y-1 border-t border-stone-300 pt-3 text-[12px] uppercase tracking-[0.12em] text-muted">
          <span>ML systems</span>
          <span>LLM evaluation</span>
          <span>Search & ranking</span>
          <span>Recommendations</span>
        </figcaption>
      </figure>
    </section>
  );
}

function SelectedWork() {
  return (
    <section className="section-rule mx-auto w-full max-w-[1180px] px-5 py-6 sm:px-8">
      <h2 className="section-title">Selected Work</h2>
      <div className="mt-4 grid gap-y-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
        {SELECTED_WORK.map((item, index) => (
          <article
            key={item.title}
            className={index > 0 ? "lg:border-l lg:border-stone-300 lg:pl-5" : ""}
          >
            <h3 className="font-serif text-[1.35rem] leading-tight text-charcoal">{item.title}</h3>
            <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.11em] text-muted">
              {item.meta}
            </p>
            <p className="mt-2.5 text-[13px] leading-5 text-body">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="section-rule mx-auto w-full max-w-[1180px] px-5 py-6 sm:px-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <h2 className="section-title">Research</h2>
        <ExternalLink
          href="https://scholar.google.com/citations?hl=en&user=WCpVTPEAAAAJ"
          className="editorial-link text-[14px]"
        >
          Full list on Google Scholar &rarr;
        </ExternalLink>
      </div>
      <div className="mt-4 divide-y divide-stone-300 border-y border-stone-300">
        {PUBLICATIONS.map((paper) => (
          <article key={paper.title} className="grid gap-2 py-2.5 sm:grid-cols-[64px_minmax(0,1fr)_170px_42px] sm:items-baseline">
            <p className="text-[13px] font-semibold text-muted">{paper.year}</p>
            <div>
              <h3 className="text-[14px] font-semibold leading-5 text-charcoal">{paper.title}</h3>
            </div>
            <p className="text-[13px] leading-5 text-muted sm:text-right">{paper.venue}</p>
            <ExternalLink href={paper.href} className="editorial-link text-[13px] sm:text-right">
              Link
            </ExternalLink>
          </article>
        ))}
      </div>
    </section>
  );
}

function Background() {
  return (
    <section className="section-rule mx-auto grid w-full max-w-[1180px] gap-7 px-5 py-6 sm:px-8 lg:grid-cols-[1.35fr_0.85fr_0.8fr]">
      <div>
        <h2 className="section-title">Experience</h2>
        <div className="mt-3 space-y-4">
          {EXPERIENCE.map((job) => (
            <article key={job.company}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-2xl leading-tight text-charcoal">{job.company}</h3>
                <p className="text-[13px] text-muted">{job.years}</p>
              </div>
              <p className="mt-1 text-[14px] font-semibold text-charcoal">{job.role}</p>
              <p className="mt-1.5 max-w-[560px] text-[13px] leading-5 text-body">{job.text}</p>
            </article>
          ))}
          <p className="border-t border-stone-300 pt-3 text-[13px] leading-6 text-muted">
            Earlier: {EARLIER.join(" / ")}
          </p>
        </div>
      </div>

      <div>
        <h2 className="section-title">Education</h2>
        <div className="mt-3 space-y-4">
          {EDUCATION.map((item) => (
            <article key={item.school}>
              <h3 className="text-[15px] font-semibold leading-5 text-charcoal">{item.school}</h3>
              <p className="mt-1 text-[14px] text-body">{item.degree}</p>
              <p className="mt-1 text-[13px] text-muted">{item.years}</p>
            </article>
          ))}
        </div>
      </div>

      <div>
        <h2 className="section-title">Recognition</h2>
        <div className="mt-3 space-y-2.5">
          {RECOGNITION.map((item) => (
            <p key={item} className="text-[15px] font-semibold leading-6 text-charcoal">
              {item}
            </p>
          ))}
          <p className="pt-2 text-[13px] text-muted">
            Writing - coming soon
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1180px] flex-col gap-3 border-t border-stone-300 px-5 py-5 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <p>&copy; 2026 {SITE.name}</p>
      <LinkList />
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <Research />
        <Background />
      </main>
      <Footer />
    </div>
  );
}
