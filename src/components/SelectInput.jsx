import React from 'react';
import Select from 'react-select';

// import { NavLink } from 'react-router-dom';

const SelectInput = ({state, options, defaultValue, name, handleChangeInput}) => {
    
    return (
        <Select  
            className="react-select"
            name={name}
            defaultValue={defaultValue} 
            options={options} 
            value={options.filter(({value}) => value === state[name])}
            onChange={handleChangeInput}
        />
    );
};

export default SelectInput;