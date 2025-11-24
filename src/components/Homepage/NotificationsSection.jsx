// src/components/Homepage/NotificationsSection.jsx
import React from "react";
import "../../Styles/Homepage/notificationsSection.css";
import { TEXT } from "../../content/text";

const rows = [
  { title: "Lorem Ipsum Content Is Dummy Text", date: "10/03/2019" },
  { title: "Lorem Ipsum Content Is Dummy Text", date: "10/03/2019" },
  { title: "Lorem Ipsum Content Is Dummy Text", date: "10/03/2019" },
  { title: "Lorem Ipsum Content Is Dummy Text", date: "10/03/2019" },
  { title: "Lorem Ipsum Content Is Dummy Text", date: "10/03/2019" },
];

const NotificationsSection = ({ lang }) => {
  const t = TEXT.notifications;

  return (
    <section className="notifications">
      <div className="container">
        <h3 className="section-title">
          {t.heading[lang]}
        </h3>

        <div className="notifications__table-wrapper">
          <table className="notifications__table">
            <colgroup>
              <col className="col-latest" />
              <col className="col-middle" />
              <col className="col-middle-wide" />
              <col className="col-date" />
            </colgroup>

            <thead>
              <tr>
                <th>{t.latest[lang]}</th>
                <th></th>
                <th></th>
                <th>{t.date[lang]}</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td className="notifications__title">
                    {lang === "kn" ? t.rowTitleKn : row.title}
                  </td>
                  <td></td>
                  <td></td>
                  <td className="notifications__date">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default NotificationsSection;
