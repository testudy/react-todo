import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'material-ui/List';

import TodoItem from './TodoItem';

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
    return (
        <List>
            {
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
                    .map(item => (
                        <TodoItem
                            key={item.id}
                            {...item}
                            onChecked={props.onChecked}
                        />
                    ))
            }
        </List>
    );
}

TodoList.propTypes = propTypes;

export default TodoList;
