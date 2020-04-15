
import {fromJS} from 'immutable'
//  fromJS可以帮组我们把js对象转化为immutable对象
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    topicList:[],
    listArray:[],
    recommendList:[],
    writerList:[],
    listPage:1,
    showScroll:true,
});

const changeHomeData = (state,action)=>{
    return  state.merge({
        topicList:fromJS(action.topicList),
        listArray:fromJS(action.listArray),
        recommendList:fromJS(action.recommendList),
        writerList:fromJS(action.writerList),
    })
}
const addListArray = (state,action)=>{
    return state.merge({
        'listArray':state.get('listArray').concat(action.list),
        'listPage':action.nextPage,
     })
}

export default (state = defaultState,action ) =>{

    switch(action.type){
        case actionTypes.CHANGE_HOME_DATA:
           return changeHomeData(state,action);
         case actionTypes.ADD_LIS_ARRAY:
             return addListArray(state,action);
         case actionTypes.TOGGLE_SCROLL_TOP:
             return state.set('showScroll',action.show);
             
        default:
            return state;

    }
    
}