import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Switch } from 'react-native';

import styles from './TodoItem.style.js';

const propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    onChecked: PropTypes.func.isRequired,
};

function TodoItem(props) {
    const handleChecked = (isChecked) => {
        props.onChecked(props.id, isChecked);
    };

    return (
        <View style={[styles.container]}>
            <Text style={styles.text}>{props.text}</Text>
            <Switch
                value={props.isCompleted}
                onValueChange={handleChecked}
            />
        </View>
    );
}

TodoItem.propTypes = propTypes;

export default TodoItem;
