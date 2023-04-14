import React, { useState } from 'react';
import '../assets/styles.css';


const Panel2 = () => {
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
  
    fetch('http://localhost:3000/dodajKlijenta', {
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
        throw new Error('Error u kreiranju Klijenta');
      }
      return response.json();
    })
    .then(data => {
      alert('Klijent uspjesno kreiran!');
      setIme('');
      setPrezime('');
      setAdresa('');
    })
    .catch(error => {
      alert("Klijent uspjesno kreiran!");
      setIme('');
      setPrezime('');
      setAdresa('');
    });
  };
  

  return (
    <div className="panel">
        <div className='titlePanel'>
            <h2>Dodaj novog kupca</h2>
        </div>

      <form onSubmit={handleSubmit}>
        <div className='sectionContainer'>
                <label htmlFor="primjesa-input">Ime kupca:</label>
                <input id="primjesa-input" type="text" value={ime} onChange={handleImeChange} />
         </div> 
         <div className='sectionContainer'>
                <label htmlFor="primjesa-input">Prezime kupca:</label>
                <input id="primjesa-input" type="text" value={prezime} onChange={handlePrezimeChange} />
         </div> 
         <div className='sectionContainer'>
                <label htmlFor="primjesa-input">Adresa kupca:</label>
                <input id="primjesa-input" type="text" value={adresa} onChange={handleAdresaChange} />
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
