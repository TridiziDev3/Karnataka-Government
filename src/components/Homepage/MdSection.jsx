// src/components/Homepage/MdSection.jsx
import React from "react";
import "../../Styles/Homepage/mdSection.css";

import midImage from "../../assets/Homepage/midimage.png";

const MdSection = () => {
  return (
    <section className="md-section">
      <div className="container">
        <div className="md-card">
          {/* LEFT: Text block */}
          <div className="md-card__text">
            <h3>Managing Director Desk</h3>
            <p>
              Bengaluru Solid Waste Management Limited (BSWML) is an active
              government of Karnataka undertaking company incorporated on{" "}
              22nd May 2021, based in Bengaluru, Karnataka, India. It focuses on
              environmental sector innovation, specifically solid waste
              management.
            </p>
            <p>
              The company has an authorized and paid-up capital of ₹0.50 million
              (INR 5,00,000). The registered office is located at #30/1, 1st and
              2nd Floor, UNI Building, Thimmaiah Road, Vasanth Nagar, Bengaluru,
              Karnataka, 560051. The company is led by seven board of directors.
            </p>

            <button className="md-card__btn">Know More</button>
          </div>

          {/* RIGHT: Photo block */}
          <div className="md-card__photo">
            <img
              src={midImage}
              alt="M Maheshwar Rao, IAS"
              className="md-card__photo-img"
            />
            <p className="md-card__name">M Maheshwar Rao, IAS</p>
            <p className="md-card__role">Managing Director</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MdSection;
