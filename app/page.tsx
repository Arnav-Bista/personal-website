'use client';

import { useEffect } from 'react';
import './home.css';

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('in'));
      return;
    }
    document.documentElement.classList.add('js-ready');
    const io = new IntersectionObserver(
      entries => entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      }),
      { threshold: 0.08 }
    );
    els.forEach(el => io.observe(el));
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
    }, 2000);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);

  return (
    <div className="site-root">

      <nav className="nav">
        <div className="shell nav-inner">
          <a href="#top" className="nav-brand">arnav.bista</a>
          <div className="nav-links">
            <a href="https://github.com/Arnav-Bista/" target="_blank" rel="noopener noreferrer">
              github ↗
            </a>
            <a href="https://www.linkedin.com/in/arnav-bista/" target="_blank" rel="noopener noreferrer">
              linkedin ↗
            </a>
          </div>
        </div>
      </nav>

      <section id="top" style={{ paddingTop: 'clamp(72px, 11vw, 120px)', paddingBottom: 'clamp(24px, 4vw, 56px)' }}>
        <div className="shell">
          <div className="section-head">
            <div className="section-idx">index — arnav bista</div>
            <div className="section-title">Things I built</div>
          </div>

          <div className="proj-list">

            <a className="proj-row reveal" href="https://gym.arnavbista.com" target="_blank" rel="noopener noreferrer">
              <div className="proj-num">001</div>
              <div className="proj-title-cell">
                <div className="title">
                  Gym Occupancy Prediction
                  <span className="status-pill" data-kind="wip">WIP</span>
                </div>
                <div className="kicker">gym.arnavbista.com</div>
              </div>
              <div className="proj-desc">
                Forecasts how busy the gym will be at any given hour using historical
                occupancy signals. Trained on months of scraped data.
              </div>
              <div className="proj-stack">
                <span className="tag">Python</span>
                <span className="tag">ML</span>
                <span className="tag">Web</span>
              </div>
              <div className="proj-action">
                Open <span className="arrow">↗</span>
              </div>
            </a>

            <a className="proj-row reveal" href="https://tsp.arnavbista.com" target="_blank" rel="noopener noreferrer">
              <div className="proj-num">002</div>
              <div className="proj-title-cell">
                <div className="title">
                  Genetic Algorithms — TSP
                  <span className="status-pill" data-kind="wip">WIP</span>
                </div>
                <div className="kicker">tsp.arnavbista.com</div>
              </div>
              <div className="proj-desc">
                A genetic-algorithm solver for the Travelling Salesman Problem.
                Explores crossover, mutation, and selection strategies on gnarly
                node graphs.
              </div>
              <div className="proj-stack">
                <span className="tag">Rust</span>
                <span className="tag">Algorithms</span>
              </div>
              <div className="proj-action">
                Open <span className="arrow">↗</span>
              </div>
            </a>

          </div>
        </div>
      </section>

      <footer>
        <div className="shell" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '24px', flexWrap: 'wrap' }}>
          <div>© 2026 ARNAV BISTA</div>
          <div className="ascii">· · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·</div>
          <div>
            <a href="https://github.com/Arnav-Bista/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
              GITHUB ↗
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
