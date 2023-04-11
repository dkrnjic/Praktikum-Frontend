import React, { useState } from 'react';
import '../assets/grainTable.css';
import Table from './Table';
import Panel5 from './Panel5';


const GrainTable = () => {
  const [activePanel, setActivePanel] = useState(0);
  const [buttonLabel, setButtonLabel] = useState("Dodaj Žitaricu");

  const togglePanel = () => {
    setActivePanel(activePanel === 0 ? 1 : 0);
    setButtonLabel(buttonLabel === "Dodaj Žitaricu" ? "Nazad" : "Dodaj Žitaricu");
  };

  const panels = [Table, Panel5];

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

export default GrainTable;
