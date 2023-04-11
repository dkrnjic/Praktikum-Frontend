import React, { useState } from 'react';
import '../assets/table.css';

const FarmeriTable = () => {
  return (
    <div className='holder'>
     
      <div className="grain-table">
        <div className="row">
          <div className="cell">ID</div>
          <div className="cell">Ime</div>
          <div className="cell">Prezime</div>
          <div className="cell">Adresa</div>
          <div className="cell">Dug</div>
        </div>
        <div className="row">
          <div className="cell">1</div>
          <div className="cell">Steva</div>
          <div className="cell">Hundrić</div>
          <div className="cell">Br Radića 100</div>
          <div className="cell">€444</div>
        </div>
        <div className="row">
          <div className="cell">2</div>
          <div className="cell">Zdenko</div>
          <div className="cell">Raničić</div>
          <div className="cell">Zrinska 20</div>
          <div className="cell">€100</div>
        </div>
        <div className="row">
          <div className="cell">3</div>
          <div className="cell">Ljutaga</div>
          <div className="cell">Grbavac</div>
          <div className="cell">Kolodvorska 44</div>
          <div className="cell">€234</div>
        </div>
      </div>
    </div>
  );
}

export default FarmeriTable;