import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {RecommendWrapper,RecommendItem} from '../style';

class Recommend extends PureComponent{
 render() {
        return (
          <RecommendWrapper>
              {
                  this.props.RecommendList.map((item)=>{
                        return (
                            <RecommendItem key={item.get('id')}>
                               
                                <a href="">
                                    <img className='pic'src={item.get('imgUrl')} alt="tuijian"></img>
                                    
                                </a>
                            </RecommendItem>
              
                        )
                  })
              }
              
              
          </RecommendWrapper>
        )   
    }
}

const mapState =(state)=>({
   RecommendList: state.get('home').get('recommendList'),
})

export default connect(mapState,null)(Recommend);