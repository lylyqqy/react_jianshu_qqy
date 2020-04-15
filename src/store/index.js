import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// compose 包装函数可以向这个函数中传递很多的方法 
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =createStore(reducer, composeEnhancers(
        applyMiddleware(thunk)
      ));
export default store;


// createStore 的函数的作用就是生成一个 store 对象，这个对象具有5个方法：

// return {
//   dispatch,  // 传入 action，调用 reducer 及触发 subscribe 绑定的监听函数
//   subscribe,
//   getState,
//   replaceReducer,  // 用新的 reducer 代替当前的 reducer，使用不多
//   [$$observable]: observable
// }
// 而 applyMiddleware 函数的作用就是对 store.dispatch 方法进行增强和改造，使得在发出 Action 和执行 Reducer 之间添加其他功能。

// compose 函数则是 applyMiddleware 函数的核心，其会形成串联的函数调用关系，用于增强 dispatch 方法。

