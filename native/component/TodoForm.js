import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './TodoForm.style.js';

class TodoForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        text: '',
    };

    handleTextChange = (value) => {
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
            <TextInput
                style={styles.input}
                placeholder="13:30立项会"
                value={this.state.text}
                onChangeText={this.handleTextChange}
                onSubmitEditing={this.handleSubmit}
            />
        );
    }
}

export default TodoForm;
