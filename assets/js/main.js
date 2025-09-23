// ROUTER
const routes = ['about','experience','skills','education','publications','blog','contact'];
function route() {
  const id = (location.hash.replace('#/','') || 'about');
  routes.forEach(r => document.getElementById(r)?.classList.remove('active'));
  const el = document.getElementById(routes.includes(id) ? id : 'about');
  el?.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.addEventListener('hashchange', route);
route();

// YEAR
document.getElementById('year').textContent = new Date().getFullYear();

// BLOG POSTS
const POSTS = [
  {
    title: "My daughter, LLMs, and why both need structure",
    date: "2025-08-30",
    tags: ["Analogy","Prompting"],
    href: "posts/llms-structure.html",
    excerpt: "A magnet-tiles moment that explains why providing structure beats blind fine-tuning."
  },
  {
    title: "DSPy in 5 lines: bootstrapping an LLM-as-a-Judge",
    date: "2025-07-27",
    tags: ["DSPy","LLMaaJ"],
    href: "posts/dspy-judge.html",
    excerpt: "Micro-tutorial on building eval loops that actually move your Pareto front."
  }
];

// Render posts
const postGrid = document.getElementById('posts');
function renderPosts(filter="") {
  const filtered = POSTS.filter(p => 
    p.title.toLowerCase().includes(filter) ||
    p.tags.join(" ").toLowerCase().includes(filter) ||
    p.excerpt.toLowerCase().includes(filter)
  );
  postGrid.innerHTML = filtered.map(p => `
    <article class="card">
      <a class="title" href="${p.href}">${p.title}</a>
      <div class="meta">${p.date} · ${p.tags.join(' · ')}</div>
      <div class="sub">${p.excerpt}</div>
    </article>`).join('');
}
renderPosts();

// Search filter
document.getElementById('search').addEventListener('input', e => {
  renderPosts(e.target.value.toLowerCase());
});
