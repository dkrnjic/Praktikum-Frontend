import React, { useState } from 'react';
import '../assets/grainTable.css';
import Table from './FarmeriTable';
import Panel from './Panel';


const GrainTable = () => {
  const [activePanel, setActivePanel] = useState(0);
  const [buttonLabel, setButtonLabel] = useState("Dodaj Poljoprivrednika");

  const togglePanel = () => {
    setActivePanel(activePanel === 0 ? 1 : 0);
    setButtonLabel(buttonLabel === "Dodaj Poljoprivrednika" ? "Nazad" : "Dodaj Poljoprivrednika");
  };

  const panels = [Table, Panel];

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
