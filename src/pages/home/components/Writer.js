import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {WriterWrapper,WriterItem,WriterInfo} from '../style';

class Writer extends PureComponent{
 render() {
        return (
            <WriterWrapper>
               {
                this.props.WriterList.map((item)=>{
                    return ( 
                            <WriterItem key={item.get('id')}>
                                
                                <img className="pic" src={item.get('imgUrl')}></img>
                                <WriterInfo>
                                    <a className="name"href="">{item.get('Name')}</a>
                                    
                                    <a className="follow">关注</a>
                                    <span className="iconfont icon">&#xe61c;</span>
                                    <p className="info">{item.get('info')}</p>
                                   
                                </WriterInfo>
                            </WriterItem>
                           
                        )
                   })
                  
                }
            </WriterWrapper>
             
        )   
    }
}

const mapState =(state)=>({
    WriterList: state.get('home').get('writerList'),
 });
export default connect(mapState,null)(Writer) ;