import React,{Component}from 'react';
import {connect} from 'react-redux';
import { HeaderWrapper,Logo,Nav ,NavItem,NavSearch,Addition,Button,SearchWrapper,
        SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchInfoList} from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store';
import {Link} from 'react-router-dom';
import {actionCreators as loginActionCraetors} from '../../pages/login/store'


class Header extends Component{
    
    getListArea (){
        const {focused,mouseIn,list,page,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage} =this.props;
        const jsList = list.toJS();
        // // list是一个immutable的数组不支持list[i]的写法，所以将其将其转化为js的数组
        const pageList = [];
        if(jsList.length){
            // 当list里面有数据时，才做循环，这样SearchInfoItem的key值才没有问题
            for(let i = (page-1)*2;i<page*2;i++){
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
    
        }
        
        if(focused || mouseIn){
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage,this.spinIcon)} >
                    <span ref={(icon)=>{this.spinIcon = icon }} className="iconfont spin">&#xe865;</span>
                        换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                        {
                        //  immutable数组，但是也提供了map方法
                        //  list.map((item)=>{ 
                        //     return  <SearchInfoItem key={item}>{item}</SearchInfoItem>
                        // })
                        pageList
                        }
                       
                   
                </SearchInfoList>
            </SearchInfo>
            );
        }else{
            return null;
        }
    }

    render(){
        const {focused,handleInputFocus,handleInputBlur,list,login,logout} = this.props;
        return (
            <HeaderWrapper>
             <Link to="/">
                <Logo  />
            </Link>
        <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载APP</NavItem>
            {
                login? 
                <NavItem className="right" onClick={logout}>退出</NavItem>:
                <Link to="./login">  <NavItem className="right">登陆</NavItem> </Link>
            }
           
            <NavItem className="right">
                <span className="iconfont">&#xe636;</span>
            </NavItem>
            <SearchWrapper>
                <CSSTransition
                    in={focused}
                    timeout={200}
                    classNames="Slide"
                >
                    <NavSearch
                    className={focused ? 'focused':''}
                    onFocus={()=>{handleInputFocus(list)}}
                    // 每次点击的搜索框的时候都会去网络请求headerList.json数据，所以我们需要减少不必要的网络请求，所以我们加入了list参数
                    
                    onBlur={handleInputBlur}
                    ></NavSearch>
                </CSSTransition>
                
                <span className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe62b;</span>
                {this.getListArea(focused)}
            </SearchWrapper>
            
        </Nav>
        <Addition>
            <Link to="/write">
                <Button className="writting">
                    <span className="iconfont">&#xe665;</span>
                    写文章
                </Button>
            </Link>
           
            <Button className="reg">注册</Button>
        </Addition>
    </HeaderWrapper>

        )
    }
} 


// 我的组件和store建立连接时,store里的数据如何映射到props里 state指的是store里的数据
const mapStateToProps =(state) =>{
    return {
        //方法1：
        focused : state.getIn(['header','focused']),
        // 方法2. focused : state.get('header').get('focused')
        // focused : state.header.get('focused')
        // state是一个js对象，header是一个immutable对象，我们希望state也是一个immutable对象 
        // header是header->store下面的reducer里面生成的，state是在根目录下的store下的reducer里面生成的
        // state.header已经是一个immutable类型数据 调用state.header.focused方法已经不可以了
        //通过安装redux-immutable 使我们的state也变为了immutable对象，通过.get('header')来读取
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn']),
        // header下面的page
        login:state.getIn(['login','login']),
    }
}
// 组件和store建立连接时,组件要改变store里的内容就要调用dispatch方法,那么我们把要调用dispatch方法的都写在mapDispathToProps里面
// 这样你就有能力调用dispatch方法了
const mapDispathToProps =(dispatch) =>{
    return {
        handleInputFocus(list){
            if(list.size===0){
                // 当没有数据的时候去请求数据，当第二次请求的时候如果有数据，就不用去获取数据了，避免了不必要的ajax请求数据
                dispatch(actionCreators.getList());
            }
            
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage,spin){

            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0;
            }
            
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
            if(page<totalPage){

                dispatch(actionCreators.changePage(page+1));    
            }
            else{
                dispatch(actionCreators.changePage(1));
            }
            
        },
        logout(){
            dispatch(loginActionCraetors.logout())
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);
// Header和store建立连接