import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FormGroup, InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap';

// import { NavLink } from 'react-router-dom';

const SearchInput = ({state, name, handleChangeInput, onClick}) => {
  return (
    <FormGroup>
      <InputGroup>
        <Input 
          placeholder="Procurar usuário / repositório" 
          name={name}
          value={state[name]}
          onChange={handleChangeInput}
          />
          <InputGroupAddon addonType="prepend">
            <InputGroupText onClick={onClick}><FontAwesomeIcon icon={faSearch} /></InputGroupText>
          </InputGroupAddon>
      </InputGroup>
    </FormGroup>
  );
};

export default SearchInput;