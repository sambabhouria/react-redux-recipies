import React, { useState, useEffect } from 'react';
import Tabs from '../../components/onglet/tabs';
import ReactMarkdown from 'react-markdown';
import readmePath from './Readme.md';
import {KanbanBoardContainer} from '../../containers/kanban-board-app';
import KanbanBoard from './kanban-board';
import './kanban.css';
const style = {
  marginTop: '8px',
  background: '#f9dcdd',
  styleh: {
    lineHeight: '20px',
    verticalAlign: 'middle',
    textAlign: 'center',
    marginBottom: '-12px',
  },
};
let child1 = React.createElement('li', null, 'First Text Content');
let cardsList = [
  {
    id: 1,
    title: 'Read the Book',
    description: 'I should read the whole book',
    color: '#BD8D31',
    status: 'in-progress',
    tasks: [],
  },
  {
    id: 2,
    title: 'Write some code',
    description:
      'Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)',
    color: '#3A7E28',
    status: 'todo',
    tasks: [
      {
        id: 1,
        name: 'ContactList Example',
        done: true,
      },
      {
        id: 2,
        name: 'Kanban Example',
        done: false,
      },
      {
        id: 3,
        name: 'My own experiments',
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
            'Chargement...'
          ) : (
            <ReactMarkdown source={readme} />
          )}
        </div>
      </div>
      <div label="Kanban Board">
        {/* <KanbanBoard cards={cardsList} /> */}
		 <KanbanBoardContainer cards={cardsList} />
      </div>
      <div label="Board">{child1}</div>
    </Tabs>
  );
};

export default KanbanBoardApp;
