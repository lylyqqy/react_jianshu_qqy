import React from 'react';
import Loadable from 'react-loadable';

// import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import('./index.js'),
    // 这里的import指的是你需要异步加载的文件
  loading(){
      return <div>正在加载</div>
  }
//   这个加载需要一点时间，在这个时间内我们可以在页面内显示一些临时的内容
});

export default()=><LoadableComponent />

