import {LIST_FILTERS} from '../actions/list'
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
                    actions.callback()
                }, actions.time*1000)
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
        case LIST_FILTERS.CHANGE_PROPERTIES:
            let current = {};
            const modifyMessages = state.messageList.map((item) => {
                if(item.id === actions.id){
                    item = Object.assign({}, item, actions.newValues) ;
                    current = item;
                }
                return item;
            });
            return Object.assign({}, state, {
                messageList: modifyMessages,
                current: current
            });
        case LIST_FILTERS.FILTER_MESSAGES:
          /*  let current = {};
            const algo = Object.assign({}, actions.data, {isSpam: false, from: " ", isReaded: true});*/

        default:
            return state;
    }
}