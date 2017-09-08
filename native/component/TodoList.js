import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import TodoItem from './TodoItem';
import styles from './TodoList.style.js';

const propTypes = {
    filter: PropTypes.string.isRequired,
    entities: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
    })),
    onChecked: PropTypes.func.isRequired,
};

function TodoList(props) {
    console.log(1, props.entities);

    const keyExtractor = (item, index) => item.id;

    return (
        <FlatList
            style={styles.container}
            data={
                props.entities
                    .filter((item) => {
                        if (props.filter === 'completed') {
                            return item.isCompleted;
                        }

                        if (props.filter === 'uncompleted') {
                            return !item.isCompleted;
                        }

                        return true;
                    })
            }
            renderItem={(item) => {
                console.log(2, item);
                return (
                    <TodoItem
                        key={item.id}
                        {...item.item}
                        onChecked={props.onChecked}
                    />
                )
            }}
            keyExtractor={keyExtractor}
        >
        </FlatList>
    );
}

TodoList.propTypes = propTypes;

export default TodoList;
