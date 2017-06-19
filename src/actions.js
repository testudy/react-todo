import store from './store';

export function create(text) {
    store.dispatch({
        type: 'CREATE',
        payload: text,
    });
}


export function setCompleted(id, isCompleted) {
    store.dispatch({
        type: 'SET_COMPLETED',
        payload: {
            id,
            isCompleted,
        },
    });
}

export function setFilter(filter) {
    store.dispatch({
        type: 'SET_FILTER',
        payload: filter,
    });
}
