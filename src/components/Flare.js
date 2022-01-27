import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import Filter from './Filter';

const Flare = () => {
  const api = 'https://flare-code-exercise-data.s3.amazonaws.com/airlines.json';

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const [data, setData] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState([]);
  const [airports, setAirports] = useState([]);
  const [selectedAirports, setSelectedAirports] = useState([]);

  //initial fetch for large airports json
  useEffect(() => {
    return async () => {
      try {
        const { data } = await axios.get(api);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
  }, []);

  //creating a list of years and airports avail based on the airports json
  useEffect(() => {
    const parsedData = data.reduce(
      (accu, entry) => {
        const year = entry.Time.Year;
        if (!accu.years.includes(year)) accu.years.push(year);

        const airport = entry.Airport.Code;
        if (!accu.airports.includes(airport)) accu.airports.push(airport);

        return accu;
      },
      { years: [], airports: [] }
    );

    setYears(parsedData.years);
    setAirports(parsedData.airports);
  }, [data]);

  console.log(selectedAirports, selectedYear);

  return (
    <div>
      <h1>Flare Airport Challenge</h1>
      <Filter
        type={'Years'}
        handler={setSelectedYear}
        options={years}
        multiple={false}
      />
      <Filter
        type={'Airports'}
        handler={setSelectedAirports}
        options={airports}
        multiple={true}
        multipleOptions={selectedAirports}
      />

      <Table columns={months} selectedAirports={selectedAirports} />
    </div>
  );
};

export default Flare;
