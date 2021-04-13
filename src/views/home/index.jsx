import React, { useState } from 'react'
import { Col, Row } from 'reactstrap';
import SearchInput from '../../components/SearchInput';
import logo from '../../assets/img/github-logo.png';
import searchStore from '../../zustand/search';

const Home = ({history}) => {
  
  const changeSearch = searchStore(state => state.changeSearch);   
  
  const [state, setState] = useState({
    search: searchStore((state) => state.search)
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

    history.push({
      pathname: '/app/search',
      search: '?q='+state.search+'&type=users',
    });
  }

  return ( 
    <main className="d-flex justify-content-center">
      <div className="container align-self-center mt-3">
        <div className="search-content w-75 text-center">
          <Row>
            <Col md="12">
              <img src={logo} alt="Logo" width="100" className="m-5"/>
              <SearchInput state={state} name="search" handleChangeInput={handleChangeInput} onClick={btnSearch} />
            </Col>
          </Row>
        </div>
      </div>
    </main>
  )
}
export default Home;