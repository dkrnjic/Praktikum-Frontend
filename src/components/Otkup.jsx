import React, { useState } from 'react';
import '../assets/grainTable.css';
import Table from './OtkupTable';
import Panel3 from './Panel3';


const Otkup = () => {
  const [activePanel, setActivePanel] = useState(0);
  const [buttonLabel, setButtonLabel] = useState("Dodaj Otkup");

  const togglePanel = () => {
    setActivePanel(activePanel === 0 ? 1 : 0);
    setButtonLabel(buttonLabel === "Dodaj Otkup" ? "Nazad" : "Dodaj Otkup");
  };

  const panels = [Table, Panel3];

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

export default Otkup;
