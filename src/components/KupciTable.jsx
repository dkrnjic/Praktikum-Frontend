import React, { useState, useEffect } from 'react';
import '../assets/table.css';

const KupciTable = () => {
  const [data, setData] = useState([]);
  let i= 1;
  useEffect(() => {
    i= 1;
    fetch('http://localhost:3000/klijenti')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);
  console.log(data);
  return (
    <div className='holder'>
     
      <div className="grain-table">
        <div className="row1 test11">
          <div className="cell">ID</div>
          <div className="cell">Ime</div>
          <div className="cell">Prezime</div>
          <div className="cell">Adresa</div>
          <div className="cell">Kupljeno</div>
        </div>
        {data.map(klijent => (
          <div className="row1" key={klijent.id}>
            <div className="cell">{i++}</div>
            <div className="cell">{klijent.ime}</div>
            <div className="cell">{klijent.prezime}</div>
            <div className="cell">{klijent.address}</div>
            <div className="cell">{klijent.bought}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KupciTable;