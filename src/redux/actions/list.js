const LIST_FILTERS = {
    CLEAR_INTERVAL: 'CLEAR_INTERVAL',
    START_INTERVAL: 'START_INTERVAL',
    ADD_ELEMENT: 'ADD_ELEMENT',
    CHANGE_PROPERTIES: 'CHANGE_PROPERTIES',
    FILTER_MESSAGES: 'FILTER_MESSAGES'
};


const LIST_ACTIONS = {
    clearInterval: interval => ({
        type: LIST_FILTERS.CLEAR_INTERVAL,
        interval
    }),
    startInterval: (time, callback) => ({
        type: LIST_FILTERS.START_INTERVAL,
        time,
        callback
    }),
    addElement: data => ({
        type: LIST_FILTERS.ADD_ELEMENT,
        data
    }),
    changeProperties: (id, newValues) => ({
        type: LIST_FILTERS.CHANGE_STATE,
        id,
        newValues
    }),
    filterMessages: (filters) => ({
        type: LIST_FILERS.FILTER_MESSAGES,
        filters
    })
};

export {LIST_FILTERS, LIST_ACTIONS};