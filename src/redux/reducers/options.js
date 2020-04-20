import {OPTIONS_FILTERS, OPTIONS_ACTIONS} from '../actions/options'

const initialState = {
    list: []
};

export function options(state= initialState, actions){
    switch(actions.type) {
        case OPTIONS_FILTERS.IS_SPAM:
            const modifyMessages = state.messageList.map((item) => {
                if(item.id === actions.id){
                    item.isSpam = actions.isSpam;
                    current = item;
                }
            });
            return Object.assign({}, state, {
                    
            });

        default:
            return state;
    
    }

}

//for delete state.lis.message list