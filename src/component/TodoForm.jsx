import React from 'react';
import TextField from 'material-ui/TextField';

export default function TodoForm(props) {
    return (
        <TextField
            hintText="13:30立项会"
            floatingLabelText="点击输入下一个待办事项"
            fullWidth
        />
    );
};
