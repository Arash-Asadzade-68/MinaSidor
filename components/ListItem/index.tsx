import React, { Component } from "react";
import Styles from "./Styles.scss";
import { PropsType } from './types';
import cs from 'classnames'

const ListItem = ({ onClick, text, id = "", className , listName , activedIndex}: PropsType) => {
  return (
    <div className={cs(Styles.btn, className)} onClick={onClick} tabIndex={-1}>
      <div >
        {text}
      </div>
      {id.length > 0 && <span>{id}</span>}
      {activedIndex!== -1 && listName!=="categories" && <div className={Styles.btnActive}>
        <span className={Styles.checkmark}>
          <div className={Styles.checkmarkCircle}></div>
          <div className={Styles.checkmarkStem}></div>
          <div className={Styles.checkmarkTick}></div>
        </span>
      </div>}
    </div>
  );
}

export default ListItem
