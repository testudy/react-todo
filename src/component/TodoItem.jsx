import React from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

export default function TodoItem(props) {
    return (
        <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Notifications"
        />
    );
};
