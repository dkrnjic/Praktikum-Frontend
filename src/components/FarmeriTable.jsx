import React, { useState, useEffect } from 'react';
import '../assets/table.css';

const FarmeriTable = () => {
  const [data, setData] = useState([]);
  let i= 1;
  useEffect(() => {
    i= 1;
    fetch('http://localhost:3000/farmers')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  console.log(data);

  return (
    <div className='holder'>
      <div className="grain-table">
        <div className="row1">
          <div className="cell">ID</div>
          <div className="cell">Ime</div>
          <div className="cell">Prezime</div>
          <div className="cell">Adresa</div>
          <div className="cell">Dug</div>
        </div>
        {data.map(farmer => (
          <div className="row1" key={farmer.id}>
            <div className="cell">{i++}</div>
            <div className="cell">{farmer.ime}</div>
            <div className="cell">{farmer.prezime}</div>
            <div className="cell">{farmer.address}</div>
            <div className="cell">{farmer.debt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FarmeriTable;
