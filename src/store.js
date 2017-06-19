import { Store } from 'flux/utils';
import update from 'immutability-helper';

import dispatcher from './dispatcher';

class TodoStore extends Store {
    constructor() {
        super(dispatcher);
        this.state = {
            filter: 'all',
            entities: [],
        };
    }

    getState() {
        return this.state;
    }

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

    __onDispatch(action) {
        console.log(action);

        if (action.type === 'CREATE') {
            this.state = update(this.state, {
                entities: {
                    $push: [{
                        id: this.guid(),
                        text: action.payload,
                        isCompleted: false,
                        createTimestamp: Date.now(),
                    }]
                }
            });
        } else if (action.type === 'SET_COMPLETED') {
            const entities = this.state.entities;
            const index = entities.findIndex(item => item.id === action.payload.id);
         
            this.state = update(this.state, {
                entities: {
                    [index]: {
                        isCompleted: {
                            $set: action.payload.isCompleted,
                        }
                    }
                }
            });
        } else if (action.type === 'SET_FILTER') {
            this.state = update(this.state, {
                filter: {$set: action.payload}
            });
        }

        this.__emitChange();
    }
}

export default new TodoStore();
