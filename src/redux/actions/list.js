import List from "../../components/List";

const LIST_FILTERS = {
    CLEAR_INTERVAL: 'CLEAR_INTERVAL',
    START_INTERVAL: 'START_INTERVAL',
    ADD_ELEMENT: 'ADD_ELEMENT',
    CHANGE_PROPERTIES: 'CHANGE_PROPERTIES',
    REQUEST_ELEMENTS: 'REQUEST_ELEMENTS',
    FILTER_MESSAGES: 'FILTER_MESSAGES',
    IS_SPAM: 'IS_SPAM',
    SAVE_OBJECTS: 'SAVE_OBJECTS'
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
        type: LIST_FILTERS.CHANGE_PROPERTIES,
        id,
        newValues
    }),
    filterMessages: (filter, reset) => ({
        type: LIST_FILTERS.FILTER_MESSAGES,
        filter,
        reset
    }),
    requestElements: () => ({
        type: LIST_FILTERS.REQUEST_ELEMENTS
    })
};

export {LIST_FILTERS, LIST_ACTIONS};