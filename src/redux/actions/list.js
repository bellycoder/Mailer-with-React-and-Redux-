const LIST_FILTERS = {
    CLEAR_INTERVAL: 'CLEAR_INTERVAL',
    START_INTERVAL: 'START_INTERVAL',
    ADD_ELEMENT: 'ADD_ELEMENT',
    CHANGE_STATE: "CHANGE_STATE"
};


const LIST_ACTIONS = {
    clearInterval: interval => ({
        type: LIST_FILTERS.CLEAR_INTERVAL,
        interval
    }),
    startInterval: time => ({
        type: LIST_FILTERS.START_INTERVAL,
        time
    }),
    addElement: data => ({
        type: LIST_FILTERS.ADD_ELEMENT,
        data
    }),
    changeState: (id, isReaded) => ({
        type: LIST_FILTERS.CHANGE_STATE,
        id,
        isReaded
    })
};

export {LIST_FILTERS, LIST_ACTIONS};