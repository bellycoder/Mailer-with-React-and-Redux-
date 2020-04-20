import {LIST_FILTERS, LIST_ACTIONS} from '../actions/list'
import allMails from '../mail-data.json'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    interval: null,
    messageList: [],
    current: {}
};

export function list(state= initialState, actions){
    switch(actions.type) {
        case LIST_FILTERS.START_INTERVAL:
            return Object.assign({}, state, {
                interval: setInterval(LIST_ACTIONS.addElement.bind(allMails[0]), actions.time)
               });
        case LIST_FILTERS.CLEAR_INTERVAL:
            clearInterval(state.interval);
            return Object.assign({}, state, {
                interval: null
            });
        case LIST_FILTERS.ADD_ELEMENT:
            const new_element = Object.assign({}, actions.data, {id: uuidv4()});
            return Object.assign({}, state, {
                messageList: [...state.messageList, new_element],
                current: new_element
            });
        case LIST_FILTERS.CHANGE_STATE:
            let current = {};
            const modifyMessages = state.messageList.map((item) => {
                if(item.id === actions.id){
                    item.isReaded = actions.isReaded;
                    current = item;
                }
                return item;
            });
            return Object.assign({}, state, {
                messageList: modifyMessages,
                current: current
            });
        default:
            return state;
    }
}