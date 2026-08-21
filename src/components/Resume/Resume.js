import React, { forwardRef } from "react";
import dataExperience from "../../data/Carousel/experience-resume-data.json";
import dataEducation from "../../data/Carousel/education-resume-data.json";

const startYear = (item) => {
  const dates = item.items.find((i) => i.icon === "calendar");
  const match = dates && dates.title.match(/\d{4}/);
  return match ? parseInt(match[0], 10) : 0;
};

const isOngoing = (item) => {
  const dates = item.items.find((i) => i.icon === "calendar");
  return dates && /now/i.test(dates.title);
};

const sortByYearDesc = (list) =>
  [...list].sort((a, b) => {
    if (isOngoing(a) !== isOngoing(b)) return isOngoing(a) ? -1 : 1;
    return startYear(b) - startYear(a);
  });

const Resume = forwardRef((props, ref) => {
  const experience = sortByYearDesc(dataExperience);
  const education = sortByYearDesc(dataEducation);

  return (
    <section className="dark-bg ide-resume" id="resume" ref={ref}>
      <div className="container">
        <div className="ide-resume-eyebrow">{"// 03 — experience.tsx"}</div>
        <h2 className="ide-resume-heading">Experience</h2>

        <div className="ide-timeline">
          {experience.map((item) => {
            const dates = item.items.find((i) => i.icon === "calendar");
            const company = item.items.find((i) => i.icon === "envato");
            const tech = (item.tech || "")
              .replace("Tools / Technologies used:", "")
              .split(/[\n,]/)
              .map((t) => t.trim())
              .filter(Boolean);

            return (
              <div className="ide-timeline-item" key={item.id}>
                <span className="ide-timeline-node"></span>
                <div className="ide-timeline-date">{dates && dates.title}</div>
                <h3 className="ide-timeline-role">{item.title}</h3>
                <div className="ide-timeline-company">{company && company.title}</div>
                <p className="ide-timeline-text">{item.text}</p>
                <div className="ide-timeline-tags">
                  {tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="ide-education">
          <div className="ide-education-label">{"// education"}</div>
          <div className="ide-education-grid">
            {education.map((item) => {
              const dates = item.items.find((i) => i.icon === "calendar");
              const school = item.items.find((i) => i.icon === "envato");
              return (
                <div className="ide-education-item" key={item.id}>
                  <div className="ide-timeline-date">{dates && dates.title}</div>
                  <h4>{item.title}</h4>
                  <div className="ide-education-school">{school && school.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Resume;
