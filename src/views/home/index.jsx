import React, { useState } from 'react'
import { Col, Row } from 'reactstrap';
import SearchInput from '../../components/SearchInput';

const Home = ({history}) => {
  const [state, setState] = useState({
    search: "",
    selectType: 1
  });

  const options = [
    { value: 1, label: 'Chocolate' },
    { value: 2, label: 'Strawberry' },
    { value: 3, label: 'Vanilla' }
  ];

  // useEffect(() => { 
  // }, []);

  const handleChangeInput = (values) => {

    const name  = values.target.name;
    const value = values.target.value;

    setState({
      ...state,
      [name]:value
    });

  }

  const btnSearch = () => {
    history.push({
      pathname: '/app/search',
      search: '?q='+state.search+'&type=users',
      state: 
        {q: state.search,
        type: "users"}
    });
  }

  return ( 
    <main className="d-flex justify-content-center">
      <div className="container align-self-center mt-3">
        <div className="search-content w-75">
          <Row>
            <Col md="12">
              <SearchInput state={state} name="search" handleChangeInput={handleChangeInput} onClick={btnSearch} />
            </Col>
          </Row>
        </div>
      </div>
    </main>
    
  )
}
export default Home;