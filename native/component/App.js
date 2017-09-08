import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import AppHeader from './AppHeader';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';
import TodoList from './TodoList';

import styles from './App.style.js';

const propTypes = {
    filter: PropTypes.string.isRequired,
    entities: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
    })),
    onCreate: PropTypes.func.isRequired,
    onCompleted: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired,
};

function App(props) {
    return (
        <View style={styles.app}>
            <AppHeader />
            <View style={styles.appMain}>
                <View style={styles.appAction}>
                    <TodoForm onSubmit={props.onCreate}/>
                    <TodoFilter
                        value={props.filter}
                        onChange={props.onFilter}
                    />
                </View>
                <TodoList
                    filter={props.filter}
                    entities={props.entities}
                    onChecked={props.onCompleted}
                />
            </View>
        </View>
    );
}

App.propTypes = propTypes;

export default App;
