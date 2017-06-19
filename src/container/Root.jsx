import React, { Component } from 'react';

import App from '../component/App';
import store from '../store';
import {
    create,
    setCompleted,
    setFilter,
} from '../actions';

class Root extends Component {
    state = {
        filter: 'all',
        entities: [],
    };

    updateState = () => {
        this.setState(store.getState());
    };

    componentWillMount() {
        store.addListener(this.updateState);
    }

    componentWillUnmount() {
        store.removeListener(this.updateState);
    }

    render() {
        return <App
            {...this.state}
            onCreate={create}
            onCompleted={setCompleted}
            onFilter={setFilter}
        />;
    }
}

export default Root;
