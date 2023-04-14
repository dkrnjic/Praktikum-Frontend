import React, { useState } from 'react';
import '../assets/styles2.css';


const Panel5 = () => {
  const [ime, setIme] = useState('');
  const [tip, setTip] = useState('');
  const [kupovna, setKupovna] = useState('');
  const [prodajna, setProdajna] = useState('');

  const handleImeChange = (event) => {
    setIme(event.target.value);
  };

  const handleTipChange = (event) => {
    setTip(event.target.value);
  };

  const handleKupovnaChange = (event) => {
    setKupovna(event.target.value);
  };
  const handleProdajnaChange = (event) => {
    setProdajna(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
  
    fetch('http://localhost:3000/dodajZitaricu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ime: ime,
        tip: tip,
        kupovna: kupovna,
        prodajna: prodajna
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error u kreiranju Zitarice');
      }
      return response.json();
    })
    .then(data => {
      alert('Zitarica uspjesno kreirana!');
      setIme('');
      setTip('');
      setKupovna('');
      setProdajna('');
    })
    .catch(error => {
      alert("Zitarica uspjesno kreirana!");
      setIme('');
      setTip('');
      setKupovna('');
      setProdajna('');
    });
  };

  return (
    <div className="panel">
        <div className='titlePanel'>
            <h2>Žitarice</h2>
        </div>

      <form onSubmit={handleSubmit}>
      
        <div className='sectionContainer'>
            <label htmlFor="amount-input">Ime Žitarice:</label>
            <input id="amount-input" type="text" value={ime} onChange={handleImeChange} />
        </div>
        
        <div className='sectionContainer'>
            <label htmlFor="moisture-input">Tip Žitarice:</label>
            <input id="moisture-input" type="text" value={tip} onChange={handleTipChange} />
        </div>

        <div className='sectionContainer'>
            <label htmlFor="primjesa-input">Kupovna cijena:</label>
            <input id="primjesa-input" type="number" value={kupovna} onChange={handleKupovnaChange} />
        </div> 
        <div className='sectionContainer'>
            <label htmlFor="price-input">Prodajna cijena:</label>
            <input id="price-input" type="number" value={prodajna} onChange={handleProdajnaChange} />
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
