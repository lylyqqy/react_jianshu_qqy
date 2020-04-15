// index.js引入了我们store文件夹下所有文件的出口
import reducer from './reducer';
import * as actionCreators from './actionCreators';
import * as actionTypes from './actionTypes'

export {reducer,actionCreators,actionTypes}


// 如果我们不创建index.js那么再store文件夹中引入reducer的路径为import headerReducer from '../common/header/store/reducer'
// 太长了，所以我们新建了一个文件index.js，这样当我们引入reducer时，路径就变为了：import headerReducer from '../common/header/store';