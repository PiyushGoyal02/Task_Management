import React from "react";
import { NotebookText, Loader, CheckCheck, ColumnsIcon } from 'lucide-react';
import "../Styles_CSS_Code/MyTaskCSS.css";

function MyTask() {
  const Details = [
    {
      title: "Design hero section",
      description: "Mockup for landing page with CTA button",
      type: "Design",
      PersonName: "AP",
    },
    {
      title: "Setup MongoDB schema",
      description: "Define user, project, task collections",
      type: "Backend",
      PersonName: "PG",
    },
    {
      title: "Write README",
      description: "Document setup steps and folder structure",
      type: "Docs",
      PersonName: "PS",
    },
    {
      title: "Build auth system",
      description: "JWT login, signup, refresh token flow",
      type: "Backend",
      PersonName: "AJ",
    },
  ];

  const columns = [
    {
      Heading: 'Todo',
      icon: <NotebookText />
    },

    {
      Heading: 'Todo',
      icon: <Loader />
    },

    {
      Heading: 'Todo',
      icon: <CheckCheck />
    },

  ]

  return (
    <div className="MainDivForMyTask">
      {columns.map((column, index) => (
        // Top heading
        <div className="TodoDivSection" key={index}>
          <div className="HeadingRow">
            <span className="headingIcon">{column.icon}</span>
            <h2 className="TodoText">{column.Heading}</h2>
          </div>

          {/* Content Code */}
          {Details.map((item, index) => (
            <div className="TaskCard" key={index}>
              <h3 className="Title-text">{item.title}</h3>

              <p className="Description-Text">
                {item.description}
              </p>

              <div className="Buttontext">
                <span className="TypeTextButton">
                  {item.type}
                </span>

                <span className="PersonNameTextButton">
                  {item.PersonName}
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MyTask;