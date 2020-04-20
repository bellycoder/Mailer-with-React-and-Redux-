import {OPTIONS_FILTERS} from '../actions/options'

const initialState = {
    list: []
};

export function options(state= initialState, actions){
    switch(actions.type){
        case OPTIONS_FILTERS.IS_SPAM:
            return Object.assign({}, state);
        default:
            return state;
    }
}