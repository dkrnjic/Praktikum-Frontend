import React, { useState, useEffect } from 'react';
import '../assets/styles.css';

const Panel4 = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [amount, setAmount] = useState('');
  const [moisture, setMoisture] = useState('');
  const [primjesa, setPrimjesa] = useState('');
  const [price, setPrice] = useState('');
  const [users, setUsers] = useState([]);
  const [crops, setCrops] = useState([]);

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
    
    const data = {
      ime: selectedUser,
      tipZitarice: selectedCrop,
      kolicina: amount,
      cijena: price
    };
    
    fetch('http://localhost:3000/dodajProdaju', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
      alert('Prodaja uspjesno dodana!');
        setSelectedUser('');
        setSelectedCrop('');
        setAmount(0);
        setMoisture(0);
        setPrimjesa(0);
        setPrice(0);
  };


  useEffect(() => {
    fetch('http://localhost:3000/imenaKlijenta')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));

    fetch('http://localhost:3000/imenaZitarica')
      .then((response) => response.json())
      .then((data) => {

        setCrops(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="panel">
      <div className='titlePanel'>
        <h2>Prodaja</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='sectionContainer'>
          <label htmlFor="user-select">Odaberi farmera:</label>
          <select id="user-select" value={selectedUser} onChange={handleUserChange}>
            <option value="">--Odaberi kupca--</option>
            {users.map((user) => (
              <option key={user.ime} value={`${user.ime} ${user.prezime}`}>
                {`${user.ime} ${user.prezime}`}
              </option>
            ))}
          </select>
        </div>

        <div className='sectionContainer'>
          <label htmlFor="crop-select">Vrsta Zitarice:</label>
          <select id="crop-select" value={selectedCrop} onChange={handleCropChange}>
            <option value="">--Odaberi vrstu zitarice--</option>
            {crops.map((crop) => (
              <option key={crop.ime} value={crop.ime}>
                {crop.ime}
              </option>
            ))}
          </select>
        </div>

        <div className='sectionContainer'>
          <label htmlFor="amount-input">Količina:</label>
          <input id="amount-input" type="number" value={amount} onChange={handleAmountChange} />
        </div>

        <div className='sectionContainer'>
          <label htmlFor="price-input">Cijena:</label>
          <input id="price-input" type="number" value={price} onChange={handlePriceChange} />
        </div>
    <br />
    <div id="submitDiv">
      <button id="submitBtn" type="submit">
        Submit
      </button>
    </div>
  </form>
</div>
  );
};

export default Panel4;
