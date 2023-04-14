import React, { useState, useEffect } from 'react';
import '../assets/table.css';

const OtkupTable = () => {
  const [data, setData] = useState([]);
  let i= 1;
  useEffect(() => {
    i= 1;
    fetch('http://localhost:3000/otkup')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);
  return (
    <div className='holder'>
     
      <div className="grain-table">
        <div className="row1">
          <div className="cell">ID</div>
          <div className="cell">Poljoprivrednik</div>
          <div className="cell">Tip Žitarice</div>
          <div className="cell">Količina</div>
          <div className="cell">Vrijeme</div>
          <div className="cell">Primjesa</div>
          <div className="cell">Vlaga</div>
          <div className="cell">Cijena</div>
        </div>
        {data.map(otkup => (
          <div className="row1" key={otkup.id}>
            <div className="cell">{i++}</div>
            <div className="cell">{otkup.ime}</div>
            <div className="cell">{otkup.tip}</div>
            <div className="cell">{otkup.kolicina}</div>
            <div className="cell">{otkup.vrijeme}</div>
            <div className="cell">{otkup.primjesa}</div>
            <div className="cell">{otkup.vlaga}</div>
            <div className="cell">{otkup.cijena}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtkupTable;