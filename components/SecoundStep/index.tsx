import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import axios from 'axios'
import groupBy from 'lodash/groupBy';
import { StateTypes, PropsTypes, RequestStatus } from './types.d'
import { FormComponentProps } from 'antd/lib/form/Form';
import Styles from './styles.scss';
import { Input, Checkbox,Button  } from 'antd';
import Loader from 'components/Loader';
import cs from 'classnames';
import { emailRegex, phoneRegex , digitsRegex , _checkValidation , errors} from 'utils';
import { saveAppAction} from 'store/SaveApp/actions'





class SecoundStep extends Component<PropsTypes, StateTypes> {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            phoneNumber: "",
            checked:false,
            showWalidationMessage:false,
            showLoader:false
        };
    }


    _phoneNumberOnChange = (e) => {
        const { value } = e.target;
        if (digitsRegex.test(value) || value === '')
            this.setState({ phoneNumber: value });    
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { result } = nextProps;
        this.setState({showLoader: result.loading})
        if(!result.loading) this.props._gotoNextStep();   
    }
   
    _applyForLoan =  () => {
        const { checked , email , phoneNumber } =this.state;
        const {values} = this.props
       if(!checked) this.setState({showWalidationMessage:true})
       if(email.length <=0 ){
        const element = document.getElementById("email") as HTMLElement;
        const error  =  element.nextSibling as HTMLElement;
        error.textContent = errors["email"].emptyMessage;
       }
       if(phoneNumber.length <=0 ){
        const element = document.getElementById("phone") as HTMLElement;
        const error  =  element.nextSibling as HTMLElement;
        error.textContent = errors["phone"].emptyMessage;
       }
       if(checked && emailRegex.test(email) && phoneRegex.test(phoneNumber) ){
        const result= {
            email: email,
            phoneNumber: phoneNumber,
            oppId: "",
            ...values
        }
        this.props.dispatch(saveAppAction(result, RequestStatus.WithoutAuth))
}
        
    }

    render() {
        const { email,phoneNumber ,checked , showWalidationMessage , showLoader} = this.state;
        
        console.log('values2', this.props.values)
        return (
            <div className={Styles.mainForm}>
                <div className={Styles.formHeader}>
                    <div className={Styles.formCircleIcon}>
                        <i className="fa fa-newspaper-o"></i>
                    </div>
                    <span>Kontaktuppgifter:</span>
                </div>

                <div className={Styles.userInputs}>
                    
                        <div className={Styles.inputContainer}>
                            <label className={Styles.inputLabel}>Telefon</label>
                            <div id="phone" className={Styles.inputWithBtn}>
                                <div  className={Styles.inputIcon} >
                                      <span><i className="fa fa-phone icon"></i></span>
                                </div>
                                <Input maxLength={10}  onKeyUp = {(e)=>_checkValidation(e,phoneRegex,"phone", Styles ,errors)} className={Styles.input} value={phoneNumber} onChange={this._phoneNumberOnChange} placeholder="0790266255" />
                            </div>
                            <span className={Styles.validationMesssage}></span>
                        </div>
                        <div className={Styles.inputContainer}>
                            <label className={Styles.inputLabel}>E-post</label>
                            <div id="email"  className={Styles.inputWithBtn}>
                                <div  className={Styles.inputIcon} >
                                      <span><i className="fa fa-envelope  icon"></i></span>
                                </div>
                                <Input  onKeyUp = {(e)=>_checkValidation(e,emailRegex,"email", Styles ,errors)} className={Styles.input} onChange={(e)=>this.setState({email:e.target.value})} value={email} placeholder="example@mail.com" />
                            </div>
                            <span className={Styles.validationMesssage}></span>
                        </div>
                </div>
                <div className={Styles.checkTerm}>
                    <Checkbox value={checked}  onChange={()=>this.setState({checked:!checked})}>
                    <span className={Styles.checkboxText}>Härmed godkänner jag användarvillkoren. <a href="https://www.ponture.com/eula" target="_blank" rel="noopener noreferrer">läs våra användarvillkor</a></span>
                    </Checkbox>
                   {(showWalidationMessage && !checked) && <span className={Styles.validationMesssage}>Godkännande av våra villkor är obligatorisk för att ansöka.</span>}
                </div>

                <div className={Styles.Submit}>
                    <Button onClick={this._applyForLoan} className={cs(Styles.largBtn , Styles.warning)}>{showLoader ? <Loader /> :"Ansök"}</Button>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    values: state.values.values,
    result:state.result
})

const withConnect = connect(
    mapStateToProps,
);
export default compose(
    withConnect,
)(SecoundStep);
