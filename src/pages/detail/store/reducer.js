import {fromJS} from 'immutable'
//  fromJS可以帮组我们把js对象转化为immutable对象
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    title:"",
    content:"",
})

export default (state = defaultState,action ) =>{

    switch(action.type){
       case actionTypes.CHANGE_DETAIL:
           return state.merge({
            title:action.title,
            content:action.content,
           })
             
        default:
            return state;

    }
    
}