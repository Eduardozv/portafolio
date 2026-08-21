import React, { forwardRef, useState } from "react";
import dataPortfolio from "../../data/Portfolio/creative-agency-data.json";

const descriptions = {
  "Retail Performance & Inventory BI Platform":
    "BI dashboard for a multi-store retailer — parameterized query layer, custom RBAC, automated email reports.",
  FastStock: "SaaS platform for real-time inventory tracking via barcode/QR.",
  "GA Instalaciones Comerciales": "E-commerce storefront for a commercial fixtures supplier.",
  "The Yoga Collective": "Class booking app for a yoga studio network.",
  "Marbl Platform": "Product platform spanning web and mobile.",
  Game: "Tower defense prototype built for a game jam.",
  Conectorium: "Web platform.",
  Kindergarden: "Website for a kindergarten and childcare center.",
  "Ayax Toyota": "Dealer app — service scheduling & showroom.",
  "KingdomRush Vengeance Expansion": "Tower defense expansion — IronHide Games.",
  "JunkWorld TowerDefense Project": "Tower defense game — IronHide Games.",
};

const categories = ["all", "webs", "apps", "gamedev"];

const IdeWork = forwardRef((props, ref) => {
  const [active, setActive] = useState("all");

  const items =
    active === "all"
      ? dataPortfolio
      : dataPortfolio.filter((item) => item.groups.includes(active));

  return (
    <section className="ide-work" id="work" ref={ref}>
      <div className="container">
        <div className="ide-work-eyebrow">{"// 02 — work.tsx"}</div>
        <div className="ide-work-header">
          <h2 className="ide-work-heading">Selected Work</h2>
          <div className="ide-work-filters">
            {categories.map((cat) => (
              <span
                key={cat}
                className={"ide-work-filter" + (active === cat ? " active" : "")}
                onClick={() => setActive(cat)}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="ide-work-grid">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.links[1] ? item.links[1].link : "#"}
              target="_blank"
              rel="noreferrer"
              className="ide-work-card"
            >
              <div className="ide-work-card-image">
                <img
                  src={require("../../assets/images/" + item.image)}
                  alt={item.title}
                />
              </div>
              <div className="ide-work-card-body">
                <div className="ide-work-card-top">
                  <h3>{item.title}</h3>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7"></path>
                    <path d="M9 7h8v8"></path>
                  </svg>
                </div>
                <span className="ide-work-card-category">{item.category}</span>
                <p>{descriptions[item.title] || ""}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
});

export default IdeWork;
