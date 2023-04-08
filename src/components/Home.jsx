import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';

const Home = () => {
 // const history = useHistory();
  //const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const logout = () => {
    // Implement your logout logic here, such as clearing session storage
    //history.push('/login');
  };


  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo right"></a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a onClick={logout}>Logout</a></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <h4>Insert Cooperative</h4>
        <form>
          {/* Add your form fields here */}
        </form>
        <h4>Add New Farmer</h4>
        <form>
          {/* Add your form fields here */}
        </form>
        <h4>Sell Crops</h4>
        <form>
          {/* Add your form fields here */}
        </form>
      </div>
    </div>
  );
};

export default Home;
