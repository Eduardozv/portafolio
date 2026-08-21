import React, { forwardRef } from "react";

const WhoWeAreFour = forwardRef((props, ref) => (
  <section className="main-section ide-about" id="about" ref={ref}>
    <div className="container">
      <div className="ide-about-eyebrow">{"// 01 — about.tsx"}</div>
      <h2 className="ide-about-heading">About</h2>
      <div className="ide-about-grid">
        <p className="ide-about-bio">
          Software Engineer and Full-Stack Developer based in Montevideo,
          Uruguay. I design and build custom solutions end to end —
          frontend, backend, and database layers — specialized in turning
          ideas into functional, scalable, production-ready products.
          Currently running FastStock, a multi-tenant SaaS I founded,
          alongside freelance client work.
        </p>
        <div className="ide-about-stack">
          <div className="ide-about-stack-label">{"// stack"}</div>
          <div className="skill-tags">
            <span>React</span>
            <span>Next.js</span>
            <span>React Native</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Firebase</span>
            <span>Supabase</span>
            <span>Unity</span>
          </div>
        </div>
      </div>
    </div>
  </section>
));

export default WhoWeAreFour;
