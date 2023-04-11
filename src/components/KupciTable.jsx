import React, { useState } from 'react';
import '../assets/table.css';

const KupciTable = () => {
  return (
    <div className='holder'>
     
      <div className="grain-table">
        <div className="row">
          <div className="cell">ID</div>
          <div className="cell">Ime</div>
          <div className="cell">Prezime</div>
          <div className="cell">Adresa</div>
          <div className="cell">Kupljeno</div>
        </div>
        <div className="row">
          <div className="cell">1</div>
          <div className="cell">Martin</div>
          <div className="cell">Savić</div>
          <div className="cell">Monte Cappellette 50</div>
          <div className="cell">€444</div>
        </div>
        <div className="row">
          <div className="cell">2</div>
          <div className="cell">Mirko</div>
          <div className="cell">Dizdar</div>
          <div className="cell">Zrinska 22</div>
          <div className="cell">€400</div>
        </div>
        <div className="row">
          <div className="cell">3</div>
          <div className="cell">Netko</div>
          <div className="cell">Polarić</div>
          <div className="cell">Ulica neka 85</div>
          <div className="cell">€574</div>
        </div>
      </div>
    </div>
  );
}

export default KupciTable;