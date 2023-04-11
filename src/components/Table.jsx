import React, { useState } from 'react';
import '../assets/table.css';

const Table = () => {
  return (
    <div className='holder'>
     
      <div className="grain-table">
        <div className="row">
          <div className="cell">ID</div>
          <div className="cell">Žitarica</div>
          <div className="cell">Količina</div>
          <div className="cell">Kupovna cijena</div>
          <div className="cell">Prodajna cijena</div>
        </div>
        <div className="row">
          <div className="cell">1</div>
          <div className="cell">Wheat</div>
          <div className="cell">100</div>
          <div className="cell">$1.50</div>
          <div className="cell">$2.00</div>
        </div>
        <div className="row">
          <div className="cell">2</div>
          <div className="cell">Corn</div>
          <div className="cell">50</div>
          <div className="cell">$2.00</div>
          <div className="cell">$3.00</div>
        </div>
        <div className="row">
          <div className="cell">3</div>
          <div className="cell">Rice</div>
          <div className="cell">75</div>
          <div className="cell">$1.25</div>
          <div className="cell">$1.75</div>
        </div>
      </div>
    </div>
  );
}

export default Table;