import React from 'react';

const TermCategory = ({ categoryName, terms }) => {
  return (
    <section className="category-section">
      <h2>{categoryName}</h2>
      <div className="terms-container">
        {Object.entries(terms).map(([term, definition]) => (
          <div key={term} className="term-item">
            <h3>{term}</h3>
            <p>{definition}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TermCategory;