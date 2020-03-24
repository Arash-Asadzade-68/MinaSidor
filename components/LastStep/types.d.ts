import { FormComponentProps } from 'antd/lib/form/Form';
export type StateTypes = {
    money:number;
    month:number;
    categories:Object;
    selectedCategory:string;
    securityNumber:string;
    showLoader:boolean;
    companies:Array;
};
type DispatchFunc = {getRequestParams:boolean, type: string};
type Dispatch = (innterFunc: DispatchFunc)=>void; 
export type PropsTypes = {
    items:Object;
    dispatch?:Dispatch;
    companies?:Object;
    form?:any;
}
export enum RequestStatus {
    WithAuth = 'WithAuth',
    WithoutAuth = 'WithoutAuth',
    Both = 'Both'
}