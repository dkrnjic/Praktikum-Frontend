import React, { useState } from 'react';
import '../assets/styles2.css';


const Panel5 = () => {
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
            <h2>Žitarice</h2>
        </div>

      <form onSubmit={handleSubmit}>
      
        <div className='sectionContainer'>
            <span htmlFor="amount-input">Žito:</span>
            <input id="amount-input" type="text" value='199.99kg' onChange={handleAmountChange}  disabled/>
        </div>
        
        <div className='sectionContainer'>
            <label htmlFor="moisture-input">Soja:</label>
            <input id="moisture-input" type="text" value={moisture} onChange={handleMoistureChange} />
        </div>

        <div className='sectionContainer'>
            <label htmlFor="primjesa-input">Suncokret:</label>
            <input id="primjesa-input" type="text" value={primjesa} onChange={handlePrimjesaChange} />
        </div> 
        <div className='sectionContainer'>
            <label htmlFor="price-input">Ječam:</label>
            <input id="price-input" type="text" value={price} onChange={handlePriceChange} />
        </div>     
        <br></br>
        <div id='submitDiv'>
            <button id='submitBtn' type="submit">Submit</button>
        </div>
        
      </form>
    </div>
  );
};

export default Panel5;
