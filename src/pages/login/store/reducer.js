
import {fromJS} from 'immutable'
//  fromJS可以帮组我们把js对象转化为immutable对象
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
   login:false,
});


export default (state = defaultState,action ) =>{

    switch(action.type){
        case actionTypes.CHANGE_LOGIN:
            return state.set('login',action.value);
        case actionTypes.LOGOUT:
            return state.set('login',action.value);
        default:
            return state;

    }
    
}