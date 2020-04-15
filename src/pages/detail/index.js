import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {DetailWrapper,Header, Content} from './style'
import {actionCreators} from './store'

class Detail extends PureComponent{
 render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                < Content dangerouslySetInnerHTML={{__html:this.props.content}} /> 
               
               
            </DetailWrapper>
        )   
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state)=>({
   title: state.getIn(['detail','title']),
   content: state.getIn(['detail','content']),
})
const mapDispatch = (dispatch)=>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
})


export default connect(mapState,mapDispatch)(withRouter(Detail));
// withRouter的意思是我让这个detail有能力获得参数里的所有内容，为什么没有能力获得所有内容呢，
// 因为引入了loadable异步组件，在app.js中detail对应得是loadable.js，所以index.js失去了获取
// this.props.match.params.id这个参数得内容，使用withRouter又可以重新获得这种能力
