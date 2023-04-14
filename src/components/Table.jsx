import React, { useState, useEffect } from 'react';
import '../assets/table.css';

const Table = () => {
  const [data, setData] = useState([]);
  let i= 1;
  useEffect(() => {
    i= 1;
    fetch('http://localhost:3000/zitarice')
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
          <div className="cell">Žitarica</div>
          <div className="cell">Tip</div>
          <div className="cell">Količina</div>
          <div className="cell">Kupovna cijena</div>
          <div className="cell">Prodajna cijena</div>
        </div>
        {data.map(grain => (
          <div className="row1" key={grain.id}>
            <div className="cell">{i++}</div>
            <div className="cell">{grain.ime}</div>
            <div className="cell">{grain.tip}</div>
            <div className="cell">434</div>
            <div className="cell">{grain.kupovna}</div>
            <div className="cell">{grain.prodajna}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;