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

const wings = [
  { name: "IT Cell", icon: <FiSearch /> },
  { name: "Public Relation", icon: <FiMonitor /> },
  { name: "Vigilance Cell", icon: <FiBriefcase /> },
  { name: "Technical", icon: <FiTool /> },
  { name: "Administration", icon: <FiAlertTriangle /> },
  { name: "Social Development", icon: <FiUsers /> },
  { name: "Legal Cell", icon: <FiEdit3 /> },
  { name: "R & D Cell", icon: <FiClock /> },
];

const WingsSection = () => {
  return (
    <section className="wings">
      <div className="container">
        <h3 className="section-title">WINGS</h3>

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
