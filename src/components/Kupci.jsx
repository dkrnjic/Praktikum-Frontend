import React, { useState } from 'react';
import '../assets/grainTable.css';
import Table from './KupciTable';
import Panel2 from './Panel2';


const Kupci = () => {
  const [activePanel, setActivePanel] = useState(0);
  const [buttonLabel, setButtonLabel] = useState("Dodaj Kupca");

  const togglePanel = () => {
    setActivePanel(activePanel === 0 ? 1 : 0);
    setButtonLabel(buttonLabel === "Dodaj Kupca" ? "Nazad" : "Dodaj Kupca");
  };

  const panels = [Table, Panel2];

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

export default Kupci;
