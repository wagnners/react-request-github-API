import React from 'react';
import NavBar from '../../../components/NavBar';

const AppLayout = ({ children }) => {
  return (
    <div id="app-container">
      <NavBar />
      <main>
          <div className="container mt-3">{children}</div>
      </main>
      {/* <main>
        <div className="container-fluid">{children}</div>
      </main> */} 
      {/* <Footer /> */}
    </div>
  );
};

export default AppLayout;
