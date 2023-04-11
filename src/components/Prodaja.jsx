import React, { useState } from 'react';
import '../assets/grainTable.css';
import Table from './ProdajaTable';
import Panel4 from './Panel4';


const Prodaja = () => {
  const [activePanel, setActivePanel] = useState(0);
  const [buttonLabel, setButtonLabel] = useState("Dodaj Prodaju");

  const togglePanel = () => {
    setActivePanel(activePanel === 0 ? 1 : 0);
    setButtonLabel(buttonLabel === "Dodaj Prodaju" ? "Nazad" : "Dodaj Prodaju");
  };

  const panels = [Table, Panel4];

  return (
    <div>
      <div className="newEntry">
        <a className="linkClass1" onClick={togglePanel}>
          {buttonLabel}
        </a>
      </div>
      <div className="container2">{React.createElement(panels[activePanel])}</div>
    </div>
  );
};

export default Prodaja;
