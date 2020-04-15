import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'
//  fromJS可以帮组我们把js对象转化为immutable对象
const defaultState = fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
});
// 用原来的写法要手动的保证state不可以被改变，存在风险，我们引入了facebook提供的immutable库,
// 可以帮我们生成immutable对象，通过get,set方法来得到数据和变更数据 

export default (state = defaultState,action ) =>{

    switch(action.type){
        case actionTypes.SEARCH_FOCUS:
            // immutable对象的set方法，会结合之前immutable对象的值和设置的值，放回一个全新的对象，没有改变之前的对象
            return state.set('focused',true);
            // return {
            //     focused:true
            // } 
            // 这样返回的是普通对象，普通对象没有get方法,
        case actionTypes.SEARCH_BLUR:
            return state.set('focused',false);
        case actionTypes.CHANGE_LIST:
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })
            // return state.set('list',action.data).set('totalPage',action.totalPage);
            // 如果有100个数据就要写100次.set很麻烦,所以使用state.merge方法，可以同时改变多个数据，效率更高
            //  return state.set('list',action.data);
            //    一个是普通的数组，一个是immutable数组，需要将action.data变为普通的数组
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;

    }
    
}