import React from 'react';
import NavBar from '../../../components/NavBar';

const AppLayout = (props) => {
  
  return (
    <div id="app-container">
      <NavBar {...props} />
      <main>
        {props.children}
      </main>
    </div>
  );
};

export default AppLayout;
