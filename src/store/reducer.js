// 将小的笔记本整合成大的笔记本来使用
import {combineReducers} from 'redux-immutable';
import { reducer as headerReducer }  from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store/';
import {  reducer as detailReducer } from '../pages/detail/store/';
import {  reducer as loginReducer } from '../pages/login/store/';
const reducer = combineReducers({
    header : headerReducer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer,
})

export default reducer;
// reducer存放太多的数据可能造成代码的不可维护，所以我们把一个Reducer拆分成很多个reducer再做一个整合，将header相关的数据存放再header中，新建store文件夹,reducer.js再将reducer
// 做一个整合