import React, { Component } from 'react';
import update from 'immutability-helper';

import App from '../component/App';

class Root extends Component {
    state = {
        filter: 'all',
        entities: [],
    };

    /*
     * 利用random随机数生成伪GUID
     * https://zh.wikipedia.org/wiki/全局唯一标识符
     * https://baike.baidu.com/view/185358.htm
     */
    guid() {
        const raw = [
            Math.random().toString(31).substr(2),
            Math.random().toString(31).substr(2),
            Math.random().toString(31).substr(2),
        ].join('').substr(0, 32);
        return raw.replace(/(\S{8})(\S{4})(\S{4})(\S{4})(\S{12})/, '$1-$2-$3-$4-$5');
    }

    handleCreate = (text) => {
        this.setState(update(this.state, {
            entities: {
                $push: [{
                    id: this.guid(),
                    text,
                    isCompleted: false,
                    createTimestamp: Date.now(),
                }]
            }
        }));
    };

    handleCompleted = (id, isCompleted) => {
        const entities = this.state.entities;
        const index = entities.findIndex(item => item.id === id);

        this.setState(update(this.state, {
            entities: {
                [index]: {
                    isCompleted: {
                        $set: isCompleted,
                    }
                }
            }
        }));
    };

    handleFilter = (filter) => {
        this.setState(update(this.state, {
            filter: {$set: filter}
        }));
    };

    render() {
        return <App
            {...this.state}
            onCreate={this.handleCreate}
            onCompleted={this.handleCompleted}
            onFilter={this.handleFilter}
        />;
    }
}

export default Root;
