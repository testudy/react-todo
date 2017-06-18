import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class TodoForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        text: '',
    };

    handleTextChange = (event, value) => {
        this.setState({
            text: value.trim(),
        });
    };

    handleSubmit = (event, value) => {
        event.preventDefault();
        if (this.state.text) {
            this.props.onSubmit(this.state.text);
            this.setState({
                text: '',
            });
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    hintText="13:30立项会"
                    floatingLabelText="点击输入下一个待办事项"
                    fullWidth
                    value={this.state.text}
                    autoComplete="off"
                    onChange={this.handleTextChange}
                />
            </form>
        );
    }
}

export default TodoForm;
