import React from 'react';
import PropTypes from 'prop-types';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import './TodoFilter.css';

const propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

function TodoFilter(props) {
    const handleChange = (event, value) => {
        props.onChange(value);
    };

    return (
        <RadioButtonGroup
            name="filter"
            defaultSelected={props.value}
            onChange={handleChange}
            className="radio-group"
        >
            <RadioButton
                value="all"
                label="全部"
                className="radio"
            />
            <RadioButton
                value="uncompleted"
                label="未完成"
                className="radio"
            />
            <RadioButton
                value="completed"
                label="已完成"
                className="radio"
            />
        </RadioButtonGroup>
    );
};

TodoFilter.propTypes = propTypes;

export default TodoFilter;
