import React from 'react';
import './ListsStyles.css'; // Importing the CSS file
 // Importing the CSS file
const NisanthList = () => {
  return (
    <div className="container">
      {/* Title */}
      <h1 className="title">Nisanth List</h1>

      {/* Unordered List */}
      <section className="list-section">
        <h2 className="list-heading">Unordered List</h2>
        <ul className="unordered-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
        </ul>
      </section>

      {/* Ordered List */}
      <section className="list-section">
        <h2 className="list-heading">Ordered List</h2>
        <ol className="ordered-list">
          <li>Learn HTML</li>
          <li>Learn CSS</li>
          <li>Learn JavaScript</li>
        </ol>
      </section>

      {/* Definition List */}
      <section className="list-section">
        <h2 className="list-heading">Definition List or Descriptive List</h2>
        <dl className="definition-list">
          <dt>React</dt>
          <dd>A library for building user interfaces.</dd>
          <dt>JavaScript</dt>
          <dd>The programming language of the Web.</dd>
          <dt>HTML</dt>
          <dd>The standard markup language for creating web pages.</dd>
        </dl>
      </section>
    </div>
  );
};

export default NisanthList;
