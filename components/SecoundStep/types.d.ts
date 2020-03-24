import { FormComponentProps } from 'antd/lib/form/Form';
export type StateTypes = {
    email:string
    phoneNumber:string,
    checked:boolean,
    showWalidationMessage:boolean,
    showLoader:boolean
};
type DispatchFunc = {getRequestParams:boolean, type: string};
type Dispatch = (innterFunc: DispatchFunc)=>void; 
export type PropsTypes = {
    dispatch?:Dispatch;
    _gotoNextStep?:() => void;
    values?:{
        orgNumber:string,
        orgName: string,
        personalNumber: string,
        amount: number,
        amourtizationPeriod: number,
        need:string[],
        needDescription: string,
        lastName: string,
        broker_id:string
        }
}
export enum RequestStatus {
    WithAuth = 'WithAuth',
    WithoutAuth = 'WithoutAuth',
    Both = 'Both'
}