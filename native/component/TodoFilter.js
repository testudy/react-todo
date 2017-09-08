import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';

import styles from './TodoFilter.style.js';

const propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

function TodoFilter(props) {
    const handleChange = (value) => {
        props.onChange(value);
    };

    return (
        <View style={styles.container}>
            <Button
                title="全部"
                disabled={props.value === 'all'}
                onPress={() => {handleChange('all')}}
            />
            <Button
                title="未完成"
                disabled={props.value === 'uncompleted'}
                onPress={() => {handleChange('uncompleted')}}
            />
            <Button
                title="已完成"
                disabled={props.value === 'completed'}
                onPress={() => {handleChange('completed')}}
            />
        </View>
    );
};

TodoFilter.propTypes = propTypes;

export default TodoFilter;
