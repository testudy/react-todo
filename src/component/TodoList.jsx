import React from 'react';
import { List } from 'material-ui/List';

import TodoItem from './TodoItem';

export default function TodoList(props) {
    return (
        <List>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </List>
    );
};
