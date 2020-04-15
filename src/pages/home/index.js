import React,{PureComponent} from 'react';
import {connect} from 'react-redux'; 
// connect容器组件
import {HomeWrapper,HomeLeft,HomeRight} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import axios from 'axios';
import {actionCreators} from './store'
import {BackTop} from './style'


class Home extends PureComponent{

//  shouldComponentUpdate(){
   //  只有和我数据相关的数据发生改变的时候，我才重新渲染render函数（页面里有connect意味着只要数据发生改变render函数就会重新执行）
   // 我们自己每次在每个里面写shouldComponentUpdate()太麻烦了，所以react里面内置了一个新的组件类型PureComponent,里面内置了
   // shouldComponentUpdate()，只需要我们将Component改为 PureComponent即可
//  }
 render() {
        return (
           <HomeWrapper>
               <HomeLeft>
                    <img className ='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                    <Topic></Topic>
                    <List></List>
               </HomeLeft>
               <HomeRight>
                  <Recommend></Recommend>
                  <Writer></Writer>
               </HomeRight>
               {
                  this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> :null
               }
               
           </HomeWrapper>
        )   
    }
    componentDidMount(){
       this.props.changeHomeData();
       this.bindEvents();
    }
    componentWillUnmount(){
      window.removeEventListener('scroll',this.props.changeScrollTopShow);
   }
    
    handleScrollTop(){
       window.scrollTo(0,0);
    }
    bindEvents(){
       window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapState = (state)=>({
   showScroll: state.getIn(['home','showScroll'])
});

// 这样写代码就把UI组件和容器组件区分开了
const mapDispatch = (dispatch)=>({
    changeHomeData(){
       const action =actionCreators.getHomeInfo();
       dispatch(action);
    },
    changeScrollTopShow(){
       if(document.documentElement.scrollTop > 100){
         dispatch(actionCreators.toggleTopShow(true));
       }else{
         dispatch(actionCreators.toggleTopShow(false));
       }
    }
});

export default connect(mapState,mapDispatch)(Home);