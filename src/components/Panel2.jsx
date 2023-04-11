import React, { useState } from 'react';
import '../assets/styles.css';


const Panel2 = () => {
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
            <h2>Dodaj novog kupca</h2>
        </div>

      <form onSubmit={handleSubmit}>
        <div className='sectionContainer'>
                <label htmlFor="primjesa-input">Ime kupca:</label>
                <input id="primjesa-input" type="text" value={primjesa} onChange={handlePrimjesaChange} />
         </div> 
         <div className='sectionContainer'>
                <label htmlFor="primjesa-input">Prezime kupca:</label>
                <input id="primjesa-input" type="text" value={primjesa} onChange={handlePrimjesaChange} />
         </div> 
         <div className='sectionContainer'>
                <label htmlFor="primjesa-input">Adresa kupca:</label>
                <input id="primjesa-input" type="text" value={primjesa} onChange={handlePrimjesaChange} />
         </div> 


        <br></br>
        <div id='submitDiv'>
            <button id='submitBtn' type="submit">Submit</button>
        </div>
        
      </form>
    </div>
  );
};

export default Panel2;
