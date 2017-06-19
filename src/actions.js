import dispatcher from './dispatcher';

export function create(text) {
    dispatcher.dispatch({
        type: 'CREATE',
        payload: text,
    });
}


export function setCompleted(id, isCompleted) {
    dispatcher.dispatch({
        type: 'SET_COMPLETED',
        payload: {
            id,
            isCompleted,
        },
    });
}

export function setFilter(filter) {
    dispatcher.dispatch({
        type: 'SET_FILTER',
        payload: filter,
    });
}
