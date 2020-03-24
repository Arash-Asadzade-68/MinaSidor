import React , { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { storeConfiguration } from '../store/store';
import axios from 'axios';
import Router from 'next/router';



const tagManagerArgs = {
  gtmId: 'GTM-PKXWBBN'
}

type DispatchFunc = {getRequestParams:object, type: string};
type Dispatch = (innterFunc: DispatchFunc)=>void; 

interface Props {
  dispatch:Dispatch;
  store: any,
}
export enum RequestStatus {
  WithAuth ='WithAuth',
  WithoutAuth = 'WithoutAuth',
  Both ='Both'
}


// pages/_app.js

const MyApp = (props) => {
    const {store,Component} = props;
    return  <Provider store={store}>
        <Component {...props} />
      </Provider>
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  let pageProps = {isAuth :false}
  if(Component.getInitialProps){
    pageProps = await Component.getInitialProps(ctx)
  }
  //checking authenitication in initial page
  // if(typeof window === 'undefined' && isAuthValid(ctx.req)) {pageProps.isAuth = true; }
  return { pageProps }
}
export default withRedux(storeConfiguration)(MyApp)