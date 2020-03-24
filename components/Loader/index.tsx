import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import cs from 'classnames'
import Styles from './styles.scss';


interface Props {
    className?:any
}
interface State {
    
}

export default class CPLoader extends Component<Props, State> {
    state = {}

    render() {
        const {className}  = this.props
        return (
            <div className={cs(Styles.container, className)}>
                <Loader
                type="Oval"
                color="#FFF"
                width={20}
                height={'100%'}
                />
            </div>
        )
    }
}
