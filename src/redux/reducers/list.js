import {LIST_FILTERS, LIST_ACTIONS} from '../actions/list'
import allMails from '../mail-data.json'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    interval: null,
    messageList: [],
    current: {}
};

export function list(state= initialState, actions){
    console.log(actions);
    switch(actions.type) {
        case LIST_FILTERS.START_INTERVAL:
            return Object.assign({}, state, {
                interval: setInterval(function (){
                    actions.callback(allMails[0])
                }, actions.time*100)
               });
        case LIST_FILTERS.CLEAR_INTERVAL:
            clearInterval(state.interval);
            return Object.assign({}, state, {
                interval: null
            });
        case LIST_FILTERS.ADD_ELEMENT:
            const new_element = Object.assign({}, actions.data, {id: uuidv4(), isReaded: false});
            return Object.assign({}, state, {
                messageList: [new_element, ...state.messageList],
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