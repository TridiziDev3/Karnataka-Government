// src/components/Homepage/WingsSection.jsx
import React from "react";
import "../../Styles/Homepage/wingsSection.css";
import {
  FiSearch,
  FiMonitor,
  FiBriefcase,
  FiTool,
  FiAlertTriangle,
  FiUsers,
  FiEdit3,
  FiClock,
  FiArrowUpRight,
} from "react-icons/fi";
import { TEXT } from "../../content/text";

const iconComponents = [
  <FiSearch />,
  <FiMonitor />,
  <FiBriefcase />,
  <FiTool />,
  <FiAlertTriangle />,
  <FiUsers />,
  <FiEdit3 />,
  <FiClock />,
];

const WingsSection = ({ lang }) => {
  const t = TEXT.wings;
  const names = t.items[lang];

  const wings = names.map((name, idx) => ({
    name,
    icon: iconComponents[idx],
  }));

  return (
    <section className="wings">
      <div className="container">
        <h3 className="section-title">
          {t.heading[lang]}
        </h3>

        <div className="wings__grid">
          {wings.map((item) => (
            <div key={item.name} className="wing-card">
              <div className="wing-card__icon">{item.icon}</div>
              <p className="wing-card__title">{item.name}</p>
              <FiArrowUpRight className="wing-card__arrow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WingsSection;
