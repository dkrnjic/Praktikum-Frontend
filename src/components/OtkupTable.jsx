import React, { useState } from 'react';
import '../assets/table.css';

const OtkupTable = () => {
  return (
    <div className='holder'>
     
      <div className="grain-table">
        <div className="row">
          <div className="cell">ID</div>
          <div className="cell">Poljoprivrednik</div>
          <div className="cell">Tip Žitarice</div>
          <div className="cell">Količina</div>
          <div className="cell">Vrijeme</div>
          <div className="cell">Primjesa</div>
          <div className="cell">Vlaga</div>
          <div className="cell">Cijena</div>
        </div>
        <div className="row">
          <div className="cell">1</div>
          <div className="cell">Steva Hundrić</div>
          <div className="cell">Žito</div>
          <div className="cell">450kg</div>
          <div className="cell">10/04/2023, 23:20:37</div>
          <div className="cell">2%</div>
          <div className="cell">2%</div>
          <div className="cell">€400</div>
        </div>
        <div className="row">
          <div className="cell">2</div>
          <div className="cell">Mirko</div>
          <div className="cell">Dizdar</div>
          <div className="cell">Zrinska 22</div>
          <div className="cell">€400</div>
          <div className="cell">4</div>
          <div className="cell">2%</div>
          <div className="cell">€400</div>
        </div>
        <div className="row">
          <div className="cell">3</div>
          <div className="cell">Netko</div>
          <div className="cell">Polarić</div>
          <div className="cell">Ulica neka 85</div>
          <div className="cell">€574</div>
          <div className="cell">4</div>
          <div className="cell">2%</div>
          <div className="cell">€400</div>
        </div>
      </div>
    </div>
  );
}

export default OtkupTable;