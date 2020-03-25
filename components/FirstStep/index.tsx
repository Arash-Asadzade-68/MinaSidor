import React, { Component } from 'react';
import groupBy from 'lodash/groupBy';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Input } from 'antd';
import {isEmpty} from "lodash"
import cs from 'classnames';
import RangeSlider from 'components/Rangeslider';
import ListItem from 'components/ListItem'
import Button from 'components/Button';
import Loader from 'components/Loader';
import { StateTypes, PropsTypes, RequestStatus } from './types.d'
import Styles from './styles.scss';
import { getCompaniesAction } from 'store/GetCompanies/actions'
import { fetchFormValuesAction} from 'store/Form/actions'
import { securityNumberRegex, dashAndDigitsRegex , _checkValidation , errors} from 'utils'
import {Money,Month} from './slidersConfig'

class FirstStep extends Component<PropsTypes, StateTypes> {

    constructor(props) {
        super(props);
        this.state = {
            money: 3750000,
            month: 6,
            categories: {},
            companies: null,
            reasons: [],
            selectedCategory: "",
            securityNumber: "",
            showLoader: false,
            showValidationMessages: false,
            selectedCompany: null,
            needDescription: "",
            active: null ,
            activedCompany:-1
        };
    }

    _handleMoneyChange = (money: number) => {
        if(money > 10000000) this.setState({money:10000000})
        else
          this.setState({ money })
    }
    _handleYearChange = (month: number) => {
        this.setState({ month })
    }

    _moneyIncrement = () => {
        const { money } = this.state;
        const newAmount = money + Money.steps
        if (newAmount <= 10000000)
            this.setState({ money: newAmount })
    }
    _moneyDecrement = () => {
        const { money } = this.state;
        const newAmount = money - Money.steps
        if (newAmount >= Money.min)
            this.setState({ money: newAmount })
    }
    _monthIncrement = () => {
        const { month } = this.state;
        const newMonth = month + Month.steps
        if (newMonth <= Month.max)
            this.setState({ month: newMonth })
    }
    _monthDecrement = () => {
        const { month } = this.state;
        const newMonth = month - Month.steps
        if (newMonth >= Month.min)
            this.setState({ month: newMonth })
    }
    componentDidMount() {
        const { companies , items} = this.props;
        if(companies && companies.listDto && isEmpty(companies.listDto.data)) this.props._companyNotFound(); 
        const categories = groupBy(items, item => item.category);
        this.setState({ categories})
            
    }
    componentWillReceiveProps(nextProps){
        const { companies } = nextProps;
        if(companies && companies.listDto && isEmpty(companies.listDto.data)) this.props._companyNotFound();
        const { securityNumber, selectedCategory, reasons } = this.state 
        this.setState({
            companies: securityNumber.length > 0 && 
            selectedCategory.length > 0 && 
            reasons.length > 0 && 
            companies.listDto && !isEmpty(companies.listDto.data)? companies.listDto.data : {} })
    }
    _onSelectCategory = (selectedCategory, i) => {
        this.setState({ selectedCategory, active: i })
    }
    _onSelectReasons = (selectedCategory) => {
        let reasons = []
        if (this.state.reasons.indexOf(selectedCategory) !== -1 && this.state.reasons.length !== 0) reasons = this.state.reasons.filter((_, i) => i !== this.state.reasons.indexOf(selectedCategory))
        else reasons = [...this.state.reasons, selectedCategory]
        this.setState({ reasons });
    }
    _getCompanyInfo = () => {
        const { securityNumber, selectedCategory } = this.state
       
        if (securityNumber.length > 0 && selectedCategory.length > 0){
            this.props.dispatch(getCompaniesAction(`personalNumber=${securityNumber}`, RequestStatus.WithoutAuth))
            this.setState({showLoader:true})
            }
        else {
            const element = document.getElementById("securityNumber") as HTMLElement;
            const error  =  element.nextSibling as HTMLElement;
            error.textContent = errors["securityNumber"].emptyMessage;
            this.setState({showValidationMessages:true})
        }
    }
    _securityNumberOnChange = (e) => {
        const { value } = e.target;
        const { securityNumber } = this.state;
        if (dashAndDigitsRegex.test(value) || value === '')
            this.setState({ securityNumber: value },
                () => { if (securityNumberRegex.test(securityNumber)) this.setState({ showValidationMessages: false }) }
            );
    }
    _onSelectCompany = (selectedCompany , i) => {
        this.setState({ selectedCompany , activedCompany : i})
    }
    _handleFormsubmit = () => {
        const { reasons, companies, securityNumber, needDescription, selectedCategory, selectedCompany, money, month } = this.state;
        if (reasons.length > 0 && selectedCategory.length > 0 && selectedCompany) {
            this.props.dispatch(fetchFormValuesAction({
                orgNumber: selectedCompany.companyId,
                orgName: selectedCompany.companyName,
                personalNumber: securityNumber.replace('-',''),
                amount: money,
                amourtizationPeriod: month,
                need: reasons,
                needDescription: needDescription,
                lastName: companies.user_info.surName,
                broker_id: "broker1"
            })) 
            this.props._gotoNextStep();
        }else this.setState({ showValidationMessages: true })  
    }
    render() {
        const { money, month, categories, selectedCategory, selectedCompany ,securityNumber, showLoader, companies, showValidationMessages  , reasons} = this.state;
        console.log('companies', companies)
        return (
            <div className={Styles.mainForm}>
                <div className={Styles.formHeader}>
                    <div className={Styles.formCircleIcon}>
                        <i className="fa fa-newspaper-o"></i>
                    </div>
                    <span>Ansök om företagslån</span>
                </div>
                <RangeSlider
                    marks={Money}
                    value={money}
                    defaultValue={3750000}
                    onChange={(money) => this._handleMoneyChange(money)}
                    increaseValue={this._moneyIncrement}
                    decreaseValue={this._moneyDecrement}
                    title="Önskat lånebelopp"
                />
                <RangeSlider
                    marks={Month}
                    value={month}
                    defaultValue={6}
                    onChange={(month) => this._handleYearChange(month)}
                    increaseValue={this._monthIncrement}
                    decreaseValue={this._monthDecrement}
                    title="Önskad låneperiod"
                />
                <div className={Styles.categories}>
                    <label className={Styles.categoriesLabel}>Vad ska företagslånet användas till?</label>
                    <div className={Styles.categoriesList}>
                        {Object.keys(categories).map((cat, i) => <ListItem  listName="categories"
                                                                            key={cat}
                                                                            onClick={() => this._onSelectCategory(cat, i)} 
                                                                            className={cs(Styles.btnReason, i === this.state.active ? Styles.active : "")}
                                                                            text={cat} />)}
                    </div>
                    <div className={Styles.description}>
                        Välj din anledningar till lånet
                    </div>
                    <div className={Styles.description}>
                        Om du har mer än en anledning till företagslån får du älja flera alternativ
                    </div>
                    {selectedCategory.length > 0 && <div className={Styles.categoriesList}>
                        {categories[selectedCategory].map(option => <ListItem activedIndex={reasons.indexOf(option.API_Name)} 
                                                                              key={option.API_Name}
                                                                              onClick={() => this._onSelectReasons(option.API_Name)}
                                                                              className={cs(Styles.btnReason ,reasons.indexOf(option.API_Name)!==-1 ? Styles.active : "")} 
                                                                              text={option.Label} />)}
                    </div>}
                    {showValidationMessages && reasons.length ===0 && <span className={Styles.validationMesssage}>Välj en anledning krävs</span>}
                </div>
                <div className={Styles.inputContainer}>
                    <label className={Styles.inputLabel}>Förklara vad?</label>
                    <Input className={Styles.input} onChange={(e) => this.setState({ needDescription: e.target.value })} />
                </div>

                <div className={Styles.inputContainer}>
                    <label className={Styles.inputLabel}>
                        Personnummer
                        <span>Ange ditt svenska personnummer så att vi kan hitta ditt företag</span>
                    </label>
                    <div id="securityNumber" className={Styles.inputWithBtn}>
                        <Input
                            maxLength={13} 
                            onKeyUp = {(e)=> _checkValidation(e,securityNumberRegex,"securityNumber", Styles ,errors)} 
                            disabled={!isEmpty(companies)} 
                            className={cs(Styles.input,securityNumberRegex.test(securityNumber) ? Styles.active : "")} 
                            value={securityNumber} onChange={this._securityNumberOnChange} 
                            placeholder="exempel:19800101-1234" />
                        {isEmpty(companies) && <Button type="success" className={cs(Styles.btn, Styles.success)} 
                                                           onClick={() => this._getCompanyInfo()}>
                            {isEmpty(companies) && showLoader  ? <Loader /> : <span>Sök bolag</span>}
                        </Button>}
                    </div>
                    {<span  className={Styles.validationMesssage}></span>}
                    {companies && !isEmpty(companies) && <span className={Styles.inputExtraInfo}>
                        <strong>Name:{companies.user_info ? companies.user_info.surName : ''}</strong>
                    </span>}
                </div>

                {companies && !isEmpty(companies) && <div className={Styles.inputContainer}>
                    <label className={Styles.inputLabel}>Välj ditt företag</label>
                    <div className={Styles.companiesList}>
                        {companies.companies && companies.companies.map((option , i) => 
                                <ListItem 
                                 onClick={() => this._onSelectCompany(option,i)} 
                                 className={cs(Styles.companyWidget ,  i === this.state.activedCompany ? Styles.active : "")} text={option.companyName} 
                                 id={option.companyId}
                                 key={option.companyId}
                                 activedIndex={this.state.activedCompany} />)}
                    </div>
                    {showValidationMessages && isEmpty(selectedCompany) && <span className={Styles.validationMesssage}>
                        Välj vilket företag lånet är avsett för .
                        Om du inte kan hitta ditt företag i listan ovan kan detta bero på att ditt företag är inaktivt eller andra skäl . 
                        Kontakta oss direkt så hjälper vi dig.
                        </span>}
                </div>}

                <div className={Styles.Submit}>
                    <Button className={cs(Styles.largBtn, Styles.warning)} 
                            onClick={this._handleFormsubmit}>spara och gå</Button>
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => ({
    items: state.categories.listDto,
    companies: state.companies
})

const withConnect = connect(
    mapStateToProps,
);
export default compose(
    withConnect,
)(FirstStep);
