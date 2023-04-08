import React, { useState } from 'react';
import '../assets/styles.css';


const Panel3 = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [amount, setAmount] = useState('');
  const [moisture, setMoisture] = useState('');
  const [primjesa, setPrimjesa] = useState('');
  const [price, setPrice] = useState('');

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleCropChange = (event) => {
    setSelectedCrop(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleMoistureChange = (event) => {
    setMoisture(event.target.value);
  };

  const handlePrimjesaChange = (event) => {
    setPrimjesa(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
  };

  return (
    <div className="panel">
        <div className='titlePanel'>
            <h2>Odkup</h2>
        </div>

      <form onSubmit={handleSubmit}>
        <div className='sectionContainer'>
            <label htmlFor="user-select">Odaberi farmera:</label>
            <select id="user-select" value={selectedUser} onChange={handleUserChange}>
            <option value="">--Odaberi farmera--</option>
            <option value="user1">Hundric</option>
            <option value="user2">Straja</option>
            <option value="user3">Ljutaga</option>
            </select>
        </div>
        <div className='sectionContainer'>
            <label htmlFor="crop-select">Vrsta Zitarice:</label>
            <select id="crop-select" value={selectedCrop} onChange={handleCropChange}>
            <option value="">--Odaberi vrstu zitarice--</option>
            <option value="crop1">Žito</option>
            <option value="crop2">Suncokret</option>
            <option value="crop3">Soja</option>
            </select>
        </div>
        <div className='sectionContainer'>
            <label htmlFor="amount-input">Količina:</label>
            <input id="amount-input" type="number" value={amount} onChange={handleAmountChange} />
        </div>
        
        <div className='sectionContainer'>
            <label htmlFor="moisture-input">Vlaga:</label>
            <input id="moisture-input" type="number" value={moisture} onChange={handleMoistureChange} />
        </div>

        <div className='sectionContainer'>
            <label htmlFor="primjesa-input">Primjesa:</label>
            <input id="primjesa-input" type="number" value={primjesa} onChange={handlePrimjesaChange} />
        </div> 
        <div className='sectionContainer'>
            <label htmlFor="price-input">Cijena:</label>
            <input id="price-input" type="number" value={price} onChange={handlePriceChange} />
        </div>     
        <br></br>
        <div id='submitDiv'>
            <button id='submitBtn' type="submit">Submit</button>
        </div>
        
      </form>
    </div>
  );
};

export default Panel3;
