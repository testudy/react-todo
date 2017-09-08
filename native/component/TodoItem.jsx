import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    onChecked: PropTypes.func.isRequired,
};

function TodoItem(props) {
    const handleChecked = (event, isChecked) => {
        props.onChecked(props.id, isChecked);
    };

    return (
        <ListItem
            leftCheckbox={<Checkbox
                checked={props.isCompleted}
                onCheck={handleChecked}
            />}
            primaryText={props.text}
        />
    );
}

TodoItem.propTypes = propTypes;

export default TodoItem;
