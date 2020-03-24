import React, { Component } from 'react';
import { StateTypes, PropsTypes, RequestStatus } from './types.d'
import { Steps, message, Row, Col } from 'antd';
import FirstStep from 'components/FirstStep';
import SecoundStep from 'components/SecoundStep';
import LastStep from 'components/LastStep'
import NotFound from 'components/NotFound'
import Styles from './styles.scss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getCategoriesAction } from 'store/GetCategories/actions'
import Loader from 'components/Loader'


const { Step } = Steps


class StepCp extends Component<PropsTypes, StateTypes> {

    state = {
        current: 0,
        values: null,
        notFound: false,
        showLoader: false
    };

    _gotoNextStep = () => {
        const current = this.state.current + 1;
        this.setState({ current })
    }

    private steps = [
        {
            title: '',
            content: <FirstStep  _gotoNextStep={this._gotoNextStep}
                _companyNotFound={() => this.setState({ notFound: true })} />,
        },
        {
            title: '',
            content: <SecoundStep _gotoNextStep={this._gotoNextStep} />,
        },
        {
            title: '',
            content: <LastStep />,
        },
    ];


    

    componentDidMount() {
        this.props.dispatch(getCategoriesAction("lang=sv", RequestStatus.WithoutAuth))
    }




    render() {
        const { current, notFound } = this.state;
        return (
            <div className={Styles.content}>
                 {this.props.data.loading ?<Loader className={Styles.loaderContainer}/> : <div className={Styles.form}>
                    <Row>
                        <Col>
                            <Steps current={current}>
                                {this.steps.map(item => (
                                    <Step key={item.title} title={item.title} />
                                ))}
                            </Steps>
                            {notFound ? <NotFound /> : this.steps[current].content}
                        </Col>
                    </Row>
                </div>}
            </div>


        )
    }
}

const mapStateToProps = state => ({
    data: state.categories,
})

const withConnect = connect(
    mapStateToProps,
);


export default compose(
    withConnect,
)(StepCp);

