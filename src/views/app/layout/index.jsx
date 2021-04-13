import React from 'react';
import NavBar from '../../../components/NavBar';

const AppLayout = ({ children, history }) => {
  
  return (
    <div id="app-container">
      <NavBar history={history} />
      <main>
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
