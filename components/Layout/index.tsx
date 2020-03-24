import React, { Component } from "react";
import styles from "./styles.scss";
import {StateType,PropsType} from './types.d';
import Header from 'components/Header'

export default class Layout extends Component <PropsType,StateType>{
  constructor(props){
    super(props);
  }


  render() {
  
    return (
      <div className={styles.container}>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
