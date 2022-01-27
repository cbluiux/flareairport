import React from 'react';
import './Filter.css';

const Filter = ({ type, handler, options, multiple, multipleOptions }) => {
  return !multiple ? (
    <div className="filter">
      <h3>{type}</h3>
      <select className={type} onChange={(e) => handler(e.target.value)}>
        {options.map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </div>
  ) : (
    <div className="filter">
      <h3>{type}</h3>
      <select
        className={type}
        multiple
        onChange={(e) => handler([...multipleOptions, e.target.value])}
      >
        {options.map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Filter;
