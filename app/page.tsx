"use client"

// import dynamic from 'next/dynamic'
import Image from "next/image";
import Link from "next/link";

// const Animation = dynamic(() => import('./components/Animation'), { ssr: false });

export default function Home() {
  return (
    <main className="site-shell">
      <header className="hero-section">
        <nav className="site-nav" aria-label="Primary navigation">
          <span className="nav-mark">IT / 26</span>
          <span className="nav-label">Independent creator</span>
        </nav>
        <div className="hero-content">
          <p className="eyebrow">Web / play / image / sound</p>
          <h1>Ippei<br /><span>Tanaka</span></h1>
          <div className="hero-intro">
            <p className="hero-statement">I make thoughtful digital experiences and playful worlds.</p>
            <p className="hero-detail">A multidisciplinary creator working across websites, video games, art, and music.</p>
          </div>
          <ul className="social-links" aria-label="Social links">
            <li><Link href="https://github.com/ippei-tanaka" target="_blank" rel="noreferrer" aria-label="GitHub"><Image src="/github-icon.svg" alt="" width={24} height={24} /></Link></li>
            <li><Link href="https://www.linkedin.com/in/ippei-tanaka-52544a428/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Image src="/linkedin-icon.svg" alt="" width={24} height={24} /></Link></li>
            <li><Link href="https://www.instagram.com/natural.math" target="_blank" rel="noreferrer" aria-label="Instagram"><Image src="/instagram-icon.svg" alt="" width={24} height={24} /></Link></li>
            <li><Link href="https://medium.com/@ippei.tanaka" target="_blank" rel="noreferrer" aria-label="Medium"><Image src="/medium-icon.svg" alt="" width={24} height={24} /></Link></li>
            <li><Link href="https://soundcloud.com/red-tree-leaf" target="_blank" rel="noreferrer" aria-label="SoundCloud"><Image src="/soundcloud-icon.svg" alt="" width={24} height={24} /></Link></li>
          </ul>
        </div>
      </header>
      <section className="projects-section" aria-labelledby="projects-heading">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-heading">Projects</h2>
          <span className="project-count">03 / 03</span>
        </div>
        <div className="project-grid">
          <article className="project-card project-card-featured">
            <Link href="https://flow-board-seven-alpha.vercel.app/" target="_blank" rel="noreferrer" className="project-image-link"><Image src="/flow-board.png" alt="Flow Board" width={600} height={432} className="project-image" /></Link>
            <div className="project-copy">
              <div className="project-info"><div><p className="project-type">Web App / backend / frontend</p><h3><Link href="https://flow-board-seven-alpha.vercel.app/" target="_blank" rel="noreferrer">Flow Board <span aria-hidden="true">↗</span></Link></h3></div><p className="project-year">2026</p></div>
              <p className="project-description">Reusable UI components built with CSS and TypeScript.</p>
            </div>
          </article>
          <article className="project-card">
            <Link href="https://buyfromhere.ca/" target="_blank" rel="noreferrer" className="project-image-link"><Image src="/from-here.png" alt="From Here website" width={600} height={432} className="project-image" /></Link>
            <div className="project-copy">
              <div className="project-info"><div><p className="project-type">Web design / frontend</p><h3><Link href="https://buyfromhere.ca/" target="_blank" rel="noreferrer">From Here <span aria-hidden="true">↗</span></Link></h3></div><p className="project-year">2025</p></div>
              <p className="project-description">Reusable UI components built with CSS and TypeScript.</p>
            </div>
          </article>
          <article className="project-card">
            <Link href="https://red-tree.itch.io/chill-maze" target="_blank" rel="noreferrer" className="project-image-link"><Image src="/chill-maze.png" alt="Chill Maze game" width={600} height={432} className="project-image" /></Link>
            <div className="project-info"><div><p className="project-type">Game / interactive</p><h3><Link href="https://red-tree.itch.io/chill-maze" target="_blank" rel="noreferrer">Chill Maze <span aria-hidden="true">↗</span></Link></h3></div><p className="project-year">2023</p></div>
            <p className="project-description">A quiet 3D maze game made with TypeScript and PixiJS.</p>
          </article>
          <article className="project-card">
            <Link href="https://ippei-tanaka.github.io/spider-solitaire/" target="_blank" rel="noreferrer" className="project-image-link"><Image src="/spider-solitaire.png" alt="Spider Solitaire game" width={600} height={478} className="project-image" /></Link>
            <div className="project-info"><div><p className="project-type">Game / web app</p><h3><Link href="https://ippei-tanaka.github.io/spider-solitaire/" target="_blank" rel="noreferrer">Spider Solitaire <span aria-hidden="true">↗</span></Link></h3></div><p className="project-year">2022</p></div>
            <p className="project-description">A digital take on the classic card game using React and TypeScript. <Link href="https://github.com/ippei-tanaka/spider-solitaire" target="_blank" rel="noreferrer" className="source-link">View source</Link></p>
          </article>
        </div>
      </section>
      {/* <Animation /> */}
      <footer className="site-footer">
        <p>© 2026 Ippei Tanaka</p><p>Made with curiosity.</p>
      </footer>
    </main>
  );
};