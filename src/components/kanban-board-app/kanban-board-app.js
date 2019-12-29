import React, { useState, useEffect } from "react";
import Tabs from "../../components/onglet/tabs";
import ReactMarkdown from "react-markdown";
import readmePath from "./Readme.md";

import KanbanBoard from "./kanban-board";
import "./kanban.css";
const style = {
  marginTop: "8px",
  background: "#f9dcdd",
  styleh: {
    lineHeight: "20px",
    verticalAlign: "middle",
    textAlign: "center",
    marginBottom: "-12px",
  },
};

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    status: "in-progress",
    tasks: [],
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true,
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false,
      },
      {
        id: 3,
        name: "My own experiments",
        done: false,
      },
    ],
  },
];

const KanbanBoardApp = () => {
  const [readme, setReadme] = useState(null);

  useEffect(() => {
    fetch(readmePath)
      .then(response => response.text())
      .then(text => {
        setReadme(text);
      });
  }, []);

  return (
    <Tabs>
      <div label="Introduction">
        <div style={style}>
          {readme === null ? (
            "Chargement..."
          ) : (
            <ReactMarkdown source={readme} />
          )}
        </div>
      </div>
      <div label="Kanban Board">
        <KanbanBoard cards={cardsList} />
      </div>
      <div label="Board">tootototo</div>
    </Tabs>
  );
};
export default KanbanBoardApp;
