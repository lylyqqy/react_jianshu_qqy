import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyled} from './style.js'
import { IconfontStyled } from './statics/iconfont/iconfont'
ReactDOM.render(
    <Fragment>
        <GlobalStyled />
        <IconfontStyled />
         <App />
    </Fragment>,
    document.getElementById('root'));


