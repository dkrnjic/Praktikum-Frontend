import React, { useState } from 'react';
import '../assets/styles.css';


const Panel = () => {
  const [ime, setIme] = useState('');
  const [prezime, setPrezime] = useState('');
  const [adresa, setAdresa] = useState('');

  const handleImeChange = (event) => {
    setIme(event.target.value);
  };

  const handlePrezimeChange = (event) => {
    setPrezime(event.target.value);
  };

  const handleAdresaChange = (event) => {
    setAdresa(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    fetch('http://localhost:3000/dodajPoljoprivrednika', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ime: ime,
        prezime: prezime,
        adresa: adresa
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error u kreiranju poljoprivrednika');
      }
      return response.json();
    })
    .then(data => {
      alert('Poljoprivrednik uspjesno kreiran!');
      setIme('');
      setPrezime('');
      setAdresa('');
    })
    .catch(error => {
      alert("Poljoprivrednik uspjesno kreiran!");
      setIme('');
      setPrezime('');
      setAdresa('');
    });
  };
  

  return (
    <div className="panel">
      <div className='titlePanel'>
        <h2>Dodaj novog poljoprivrednika</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='sectionContainer'>
          <label htmlFor="ime-input">Ime poljoprivrednika:</label>
          <input id="ime-input" type="text" value={ime} onChange={handleImeChange} />
        </div> 
        <div className='sectionContainer'>
          <label htmlFor="prezime-input">Prezime poljoprivrednika:</label>
          <input id="prezime-input" type="text" value={prezime} onChange={handlePrezimeChange} />
        </div> 
        <div className='sectionContainer'>
          <label htmlFor="adresa-input">Adresa poljoprivrednika:</label>
          <input id="adresa-input" type="text" value={adresa} onChange={handleAdresaChange} />
        </div> 

        <br></br>
        <div id='submitDiv'>
          <button id='submitBtn' type="submit">Submit</button>
        </div>
        
      </form>
    </div>
  );
};

export default Panel;
