import React from "react";
import "../../Styles/Homepage/notificationsSection.css";

const rows = [
  { title: "Lorem Ipsum Content Is Dummy Text", date: "10/03/2019" },
  { title: "Lorem Ipsum Content Is Dummy Text", date: "10/03/2019" },
  { title: "Lorem Ipsum Content Is Dummy Text", date: "10/03/2019" },
  { title: "Lorem Ipsum Content Is Dummy Text", date: "10/03/2019" },
  { title: "Lorem Ipsum Content Is Dummy Text", date: "10/03/2019" },
];

const NotificationsSection = () => {
  return (
    <section className="notifications">
      <div className="container">
<h3 className="section-title">ಅಧಿಸೂಚನೆಗಳು</h3>

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
                <th>Latest</th>
                <th></th>
                <th></th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td className="notifications__title">{row.title}</td>
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
