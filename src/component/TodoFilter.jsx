import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import './TodoFilter.css';

export default function TodoFilter(props) {
    return (
        <RadioButtonGroup name="shipSpeed" defaultSelected="all" className="radio-group">
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
