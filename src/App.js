import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './common/header';
import store from './store'
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write';

function App() {
  return (
    <Provider store={store}>
      
        {/* 最好将它放在一个标签里 */}
        
        <BrowserRouter>
        {/* 
          BrowserHistory里面的内容代表我们要使用路由了
          
        */}
          <div>
            <Header />
             {/* 如果没有exact /detail的时候既会匹配/也会匹配/detail,exact的意思是只有当完全匹配的时候才显示 */}
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              {/* 匹配 /detail/1 */}
          </div>
        </BrowserRouter>

     
     
    </Provider>
  );
}

export default App;
