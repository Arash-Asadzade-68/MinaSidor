import React, { Component } from 'react';
import { StateTypes, PropsTypes } from './types'
import { Slider } from 'antd';
import Styles from './styles.scss';





class RangeSlider extends Component<PropsTypes, StateTypes> {

    constructor(props) {
        super(props);
    }

    _renderValue = () =>{
      const {value} = this.props;
      let num = value.toString();
      let result =num.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
     return result;
    }

    render() {
        const { marks , defaultValue , value , increaseValue , decreaseValue , title} = this.props;
    
        return (
            <div className={Styles.container}>
                <div className={Styles.rangeSliderHeader}>
                    <label className={Styles.rangeSliderLabel}>{title}</label>
                    <span className={Styles.rangeSliderSpan}>{`${this._renderValue()} ${marks.unit}`}</span>
                </div>
                <div className={Styles.rangeSlider}>
                    <div className={Styles.rangeSliderLeftSide} onClick={decreaseValue}>
                        <span className="fa fa-minus"></span>
                    </div>
                    <div className={Styles.rangeSliderCenter}>
                        <Slider defaultValue={defaultValue} min={marks.min} max={marks.max} step={marks.steps} tipFormatter={null} value={value} onChange={this.props.onChange} />
                        <div className={Styles.rangeSliderCustomLabels}>
                            <span className="min">{marks.startLabel}</span>
                            <span className="max">{marks.endLabel}</span>
                        </div>
                    </div>

                    <div className={Styles.rangeSliderRightSide} onClick={increaseValue}>
                       <span className="fa fa-plus"></span>
                    </div>
                </div>

            </div>
        )
    }
}

export default RangeSlider;