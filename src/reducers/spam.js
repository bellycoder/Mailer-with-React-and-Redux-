import {IS_SPAM} from '../actions'

const initialState = {
    list: []
}

export function isSpam(state= initialState, actions){
    switch(actions.type){
        case: IS_SPAM:
            return: Object.assign({},state, list{action.payload})
            default: 
            return: satate
    })
}