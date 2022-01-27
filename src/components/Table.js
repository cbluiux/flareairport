import React from 'react';
import './Table.css';

const Table = ({ columns, selectedAirports }) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {columns.map((column) => {
            return <th key={column}>{column}</th>;
          })}
          <th>Mean</th>
        </tr>
        {selectedAirports.map((row) => {
          return (
            <tr>
              <th key={row}>{row}</th>
            </tr>
          );
        })}
      </thead>
    </table>
  );
};

export default Table;
