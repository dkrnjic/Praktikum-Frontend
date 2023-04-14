import React, { useState, useEffect } from 'react';
import '../assets/table.css';

const ProdajaTable = () => {
  const [data, setData] = useState([]);
  let i= 1;
  useEffect(() => {
    i= 1;
    fetch('http://localhost:3000/prodaja')
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
          <div className="cell">Klijent</div>
          <div className="cell">Tip Žitarice</div>
          <div className="cell">Količina</div>
          <div className="cell">Vrijeme</div>
          <div className="cell">Cijena</div>
        </div>
        {data.map(prodaja => (
          <div className="row1" key={prodaja.id}>
            <div className="cell">{i++}</div>
            <div className="cell">{prodaja.ime}</div>
            <div className="cell">{prodaja.tip}</div>
            <div className="cell">{prodaja.kolicina}</div>
            <div className="cell">{prodaja.vrijeme}</div>
            <div className="cell">{prodaja.cijena}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProdajaTable;