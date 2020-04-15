import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {ListWrapper,ListItem,ListInfo,LoadMore } from '../style'
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';

class List extends PureComponent{
 render() {
        return (
             <ListWrapper>
                {
                    this.props.arr.map((item,index)=>{
                        return (
                            // 单页页面调转：整个网站在你访问的过程中，只会加载一次html文档，减少性能 react-router-dom
                            <Link key={index} to={"/detail/"+item.get('id')}>
                                <ListItem >
                                    <img className="pic" src={item.get('imgUrl')}></img>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('content')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )

                    })
                }
            <LoadMore onClick={()=>this.props.getMoreList(this.props.page)}>加载更多</LoadMore>
            </ListWrapper>
        ) 
      
    }
}

const mapState =(state)=>({
    arr: state.get('home').get('listArray'),
    page:state.get('home').get('listPage'),
 });
const mapDispatch = (dispatch)=>({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})

 export default connect(mapState,mapDispatch)(List);