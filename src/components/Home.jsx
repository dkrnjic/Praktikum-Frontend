import React, { useState } from 'react';
import '../assets/home.css'
import Panel from './Panel';
import Panel2 from './Panel2';
import Panel3 from './Panel3';
import Panel4 from './Panel4';
import Panel5 from './Panel5';
import GrainTable from './GrainTable';
import Farmeri from './Farmeri';
import Kupci from './Kupci';
import Otkup from './Otkup';
import Prodaja from './Prodaja';
//import { useHistory } from 'react-router-dom';

const Home = () => {
  const [activePanel, setActivePanel] = useState(0);

  const handlePanelButtonClick = (index) => {
    setActivePanel(index);
  };

  const panels = [Farmeri, Kupci, Otkup, Prodaja, GrainTable];
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <div className='djeca'>
            <a className='linkClass' onClick={() => handlePanelButtonClick(0)}>Farmeri</a>
          </div>
          <div className='djeca'>
            <a className='linkClass' onClick={() => handlePanelButtonClick(1)}>Kupci</a>
          </div>
          <div className='djeca'>
            <a className='linkClass' onClick={() => handlePanelButtonClick(2)}>Odkup</a>
          </div>
          <div className='djeca'>
            <a className='linkClass' onClick={() => handlePanelButtonClick(3)}>Prodaja</a>
          </div>
          <div className='djeca'>
            <a className='linkClass' onClick={() => handlePanelButtonClick(4)}>Žitarice</a>
          </div>
        </div>
      </nav>
      <div className="container2">
        {React.createElement(panels[activePanel])}
      </div>
      <div>
        <div className='logoutBtn'><a className='linkClass' >Logout</a></div> 
      </div>
    </div>
  
  );
};



export default Home;
