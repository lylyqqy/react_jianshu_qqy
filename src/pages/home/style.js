import styled from 'styled-components'


export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
    // 子元素浮动，父元素设置overflow：hidden触发bfc感知子元素的高度

`;

export const HomeLeft = styled.div`
   margin-left:15px;
   padding-top:30px;
   width:625px;
   float:left;
   .banner-img{
       width:625px;
       height:270px;
   }
`;

export const HomeRight = styled.div`
    width:240px;
    float:right;

`;

export const TopicWrapper = styled.div `
   padding:20px 0 10px 0;
   overflow:hidden;
   margin-left:-18px;
   border-bottom:1px solid #dcdcdc;
   
`;

export const TopicItem = styled.div `
  float:left;
  height:32px;
  padding-right:10px;
  line-height:32px;
  margin-left:18px;
  font-size:14px;
  color:#000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  background:#f7f7f7;
  margin-bottom:18px;
  .topic-pic{
      display:block:
      float:left;
      width:32px;
    //   height:30px;
      margin-right:10px;
     
  }
`;

export const ListWrapper = styled.div `
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
`;

export const ListItem = styled.div `
overflow:hidden;
padding:20px 0;
border-bottom:1px solid #dcdcdc;
  .pic{
      display:block;
      width:125px;
      height:100px;
      float:right;
      border-radius:10px;
  }
`;
export const ListInfo = styled.div`
  width:500px;
  float:left;
  .title{
      line-height:27px;
      font-size:18px;
      font-weight:bold;
      color:#333;
  }
  .desc{
      line-height:24px;
      font-size:13px;
      color:#999
  }
`;

export const RecommendWrapper = styled.div`
    float:right;
    width:280px;
    height:285px;
    padding-bottom:4px;
    padding-top:30px;
    margin-top:-4px;
    box-sizing:border-box;
  
`
export const RecommendItem = styled.div`
  color:#333;
  text-decoration:none;
  min-height: 50px;
  background-color:transparent;
  padding-bottom:6px;
  .pic{
    display:block;
    width:100%;
    height:50px;
    border-radius:4px;
    cursor:pointer;
  }
`
export const  WriterWrapper = styled.div`
    float:right;
    width:280px;
    height:285px;
    padding-bottom:4px;
    padding-top:30px;
    margin-top:-4px;
    box-sizing:border-box;
  
`
export const WriterItem = styled.div`
  color:#333;
  text-decoration:none;
  min-height: 50px;
  background-color:transparent;
  padding-bottom:6px;
  .pic{
    
    cursor:pointer;
    height:47px;
    width:47px;
    display:inline-block;

  }
`
export const WriterInfo = styled.div`
  width:233px;
  box-sizing:border-box;
  padding-left:6px;
  float:right;
  padding-top:10px;
  .name{
      text-decoration:none;
      font-size:13px;
      font-weight:bold;
      color:#333;
  }
  .info{
      padding-top:6px;
      font-size:13px;
      color:#999;
  }\
  
  .follow{
    float:right;
    margin-right:5px;
    font-size: 13px;
    color: #42c02e;
  }
  
  .icon{
    float:right;
    color: #42c02e;
  }
  
`
export const LoadMore = styled.div`
  width:100%;
  height:40px;
  line-height:40px;
  margin:30px 0px;
  background:#a5a5a5;
  text-align:center;
  border-radius:20px;
  color:#fff;
  cursor:pointer;
`

export const BackTop = styled.div`
  position:fixed;
  right:100px;
  bottom:100px;
  width:60px;
  height:60px;
  line-height:60px;
  text-align:center;
  border:1px solid #ccc;
  font-size:14px;

`
