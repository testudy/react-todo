import React, { Component } from 'react';
import { Container } from 'flux/utils';

import App from '../component/App';
import store from '../store.js';
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

    static getStores() {
        return [store];
    }

    static calculateState() {
        return store.getState();
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

export default Container.create(Root);
