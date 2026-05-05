import { useState, useEffect, useRef } from "react";
import './App.css'

function useFade() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const PROJECTS = [
  { name: "Shiseido", type: "SFCC, CSS3, jQuery", emoji: "🤖" },
  { name: "Arper", type: "Magento, PHP, CSS3, jQuery", emoji: "🎨" },
  { name: "Arrowhead", type: "Shopify, Next.JS, CSS3, jQuery", emoji: "🌐" },
];

const EXPERIENCE = [
  {
    company: "Dentsu World Services",
    desc: "Worked on SFCC projects, built reusable UI components using JavaScript & jQuery, optimized performance and SEO, and collaborated with backend and QA teams.",
    date: "Feb 2022 – Present",
  },
  {
    company: "Livpure India Pvt Ltd",
    desc: "Developed Shopify and WordPress websites, customized themes, ensured cross-browser responsiveness, and supported eCommerce growth through collaboration with sales teams and A/B testing initiatives.",
    date: "Sept 2020 – Feb 2022",
  },
  {
    company: "Fantastech Solutions",
    desc: "Built WordPress websites with theme customization and page builders (Elementor, WPBakery, Beaver), developed WooCommerce stores, and wrote clean, reusable, cross-browser compatible code.",
    date: "May 2019 – Aug 2020",
  },
  {
    company: "Amuratech Pvt Ltd",
    desc: "Worked with HTML, CSS, and JavaScript, created email templates for marketing campaigns, and supported SEO-related enhancements.",
    date: "Sept 2018 – Feb 2019",
  }
];

const TOOLS = [
  { name: "Git", type: "Website Builder", emoji: "⚡" },
  { name: "Bitbucket", type: "Design Tool", emoji: "🎨" },
  { name: "Jira", type: "Payments Provider", emoji: "🍋" },
  { name: "Source Tree", type: "AI Assistant", emoji: "🤖" },
  { name: "Figma", type: "Productivity Tool", emoji: "📋" },
  { name: "Chrome DevTools", type: "React Framework", emoji: "▲" },
];

const BLOGS = [
  {
    title: "Prompt Engineering for Frontend Developers: Unlocking the Power of AI Tools",
    excerpt:
      "As frontend developers, we constantly juggle between design systems, accessibility, performance, and user experience. With the rise of AI-powered tools, particularly language models and coding assistants, there’s a growing need to understand how to effectively interact with these systems. This is where prompt engineering becomes a game-changer.",
    date: "Apr 21, 2025",
    read: "3min read",
    link: "https://medium.com/@sachinr1013/prompt-engineering-for-frontend-developers-unlocking-the-power-of-ai-tools-782eceb77402"
  },
  {
    title: "The Role of AI in Modern Software Development and How Businesses Can Benefit from It",
    excerpt:
      "Artificial Intelligence (AI) is no longer a futuristic dream — it’s here, and it’s transforming software development in ways we never imagined. From automating tedious coding tasks to improving security and enhancing user experiences, AI has become a game-changer for businesses looking to stay ahead. If you’re wondering how AI fits into the software world and how your business can reap the rewards, let’s dive in.",
    date: "Mar 1, 2025",
    read: "3min read",
    link: "https://medium.com/@sachinr1013/the-role-of-ai-in-modern-software-development-and-how-businesses-can-benefit-from-it-864ae9a4185d"
  },
  {
    title: "Shopify Headless Explained: The Ideal Choice for Small and Medium Businesses",
    excerpt:
      "In the fast-changing world of e-commerce, businesses need to be quick, flexible, and future-ready. Traditional e-commerce platforms are often limited in terms of customization, speed, and user experience. This is where headless commerce comes in. It allows businesses to separate the front-end (what users see) from the back-end (where the data lives), offering complete freedom to design and innovate.",
    date: "July 14, 2025",
    read: "4min read",
    link: "https://medium.com/@sachinr1013/shopify-headless-explained-the-ideal-choice-for-small-and-medium-businesses-a1af3618c95c"
  },
];

function Section({ children, id }) {
  const ref = useFade();
  return (
    <div id={id} ref={ref} className="section fade-in">
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const heroRef = useFade();

  return (
    <div className="site">
      <nav className="nav">
        {["✉", "⊞", "🔗", "✏", "☰"].map((icon, i) => (
          <div className="nav-icon" key={i}>{icon}</div>
        ))}
      </nav>

      <div ref={heroRef} className="hero fade-in">
        <div className="hero-card">
          <div className="hero-img">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="36" r="18" fill="rgba(255,255,255,0.25)" />
              <ellipse cx="50" cy="78" rx="28" ry="18" fill="rgba(255,255,255,0.2)" />
            </svg>
          </div>
          <div className="hero-card-body">
            <div className="hero-card-name">Sachin Raut</div>
            <div className="hero-card-divider" />
            <div className="hero-card-bio">
              A Software Engineer who has developed countless innovative solutions.
            </div>
          </div>
        </div>

        <div className="hero-right">
          <h1 className="hero-title">
            <span className="hero-title-main">Software</span>
            <span className="hero-title-main">Engineer</span>
          </h1>
          <p className="hero-desc">
            Passionate frontend developer with hands-on experience in building scalable, high-performance web applications. Specialized in Salesforce Commerce Cloud (SFCC), Magento, and modern JavaScript ecosystems.
          </p>

          <div className="stats">
            {[
              { n: "+7", l: "Years of\nExperience" },
              { n: "+30", l: "Projects\nCompleted" },
              { n: "+20", l: "Worldwide\nClients" },
            ].map(({ n, l }) => (
              <div className="stat" key={n}>
                <div className="stat-num">{n}</div>
                <div className="stat-label" style={{ whiteSpace: "pre-line" }}>{l}</div>
              </div>
            ))}
          </div>

          <div className="service-cards">
            <div className="service-card service-card-orange">
              <div className="service-card-icon">
                <span>⚡</span>
              </div>
              <div className="service-card-title">JavaScript, React,<br />HTML5, CSS3</div>
              <div className="service-card-arrow">↗</div>
            </div>
            <div className="service-card service-card-lime">
              <div className="service-card-icon">
                <span style={{ fontSize: "18px" }}>▦</span>
              </div>
              <div className="service-card-title">SFCC, Shopify,<br />Magento, WordPress</div>
              <div className="service-card-arrow">↗</div>
            </div>
          </div>
        </div>
      </div>

      {/* RECENT PROJECTS */}
      <Section id="projects">
        <div className="section-heading">
          <span className="sh-top">Recent</span>
          <span className="sh-top">Projects</span>
        </div>
        <div className="project-list">
          {PROJECTS.map((p) => (
            <div className="project-item" key={p.name}>
              <div className="project-thumb">{p.emoji}</div>
              <div className="project-info">
                <div className="project-name">{p.name}</div>
                <div className="project-type">{p.type}</div>
              </div>
              <div className="project-arrow">↗</div>
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience">
        <div className="section-heading">
          <span className="sh-top">7+ Years of</span>
          <span className="sh-top">Experience</span>
        </div>
        <div className="exp-list">
          {EXPERIENCE.map((e) => (
            <div className="exp-item" key={e.company}>
              <div>
                <div className="exp-company">{e.company}</div>
                <div className="exp-desc">{e.desc}</div>
              </div>
              <div>
                <div className="exp-date">{e.date}</div>
                <div className="exp-arrow">↗</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TOOLS */}
      <Section id="tools">
        <div className="section-heading">
          <span className="sh-top">Tools</span>
          <span className="sh-top">Used</span>
        </div>
        <div className="tools-grid">
          {TOOLS.map((t) => (
            <div className="tool-item" key={t.name}>
              <div className="tool-icon">{t.emoji}</div>
              <div className="tool-info">
                <div className="tool-name">{t.name}</div>
                <div className="tool-type">{t.type}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* BLOG */}
      <Section id="blog">
        <div className="section-heading">
          <span className="sh-top">Articles</span>
          <span className="sh-top">Written</span>
        </div>
        <div className="blog-list">
          {BLOGS.map((b) => (
            <div className="blog-item" key={b.title}>
              <div>
                <div className="blog-title">{b.title}</div>
                <div className="blog-excerpt">{b.excerpt}</div>
                <div className="blog-meta">
                  <span>{b.date}</span>
                  <span>{b.read}</span>
                  <a href={b.link} target="_blank">link</a>
                </div>
              </div>
              <div className="blog-arrow">↗</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <div className="section-heading">
          <span className="sh-top">Connect</span>
          <span className="sh-bottom">With me</span>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                className="form-input"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              className="form-input"
              placeholder=""
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button className="form-submit" type="submit">Submit →</button>
        </form>
      </Section>

      {/* FOOTER */}
      <footer className="footer">
        <span>Made by Sachin Raut</span>
        <span>© 2026 All rights reserved</span>
      </footer>
    </div>
  );
}
