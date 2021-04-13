import React, { useState } from 'react';
import { NavLink } from 'reactstrap';
import logo from '../assets/img/github-logo.png';
import SearchInput from './SearchInput';
import searchStore from '../zustand/search';

const NavBar = ({history}) => {
  
  const changeSearch = searchStore(state => state.changeSearch); 
  const [state, setState] = useState({
    search: "",
  });

  const handleChangeInput = (values) => {

    const name  = values.target.name;
    const value = values.target.value;

    setState({
      ...state,
      [name]:value
    });

  }

  const btnSearch = () => {
    changeSearch(state.search);
  }

  return (
    <header className="bd-header bg-dark py-3 d-flex position-fixed w-100 align-items-stretch border-bottom border-dark">
        <div className="container-fluid d-flex align-items-center">
            <NavLink href="/"><img src={logo} alt="Logo" /></NavLink> 
            <SearchInput state={state} name="search" handleChangeInput={handleChangeInput} onClick={btnSearch} />
        </div>
    </header>
  );
};

export default NavBar;