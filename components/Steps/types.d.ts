export type StateTypes = {
    current:number,
    notFound:boolean,
    showLoader:boolean,
    values :{
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
};
export type PropsTypes = {
    dispatch?:Dispatch;
    data?:any
}

type DispatchFunc = {getRequestParams:boolean, type: string};
type Dispatch = (innterFunc: DispatchFunc)=>void; 

export enum RequestStatus {
    WithAuth = 'WithAuth',
    WithoutAuth = 'WithoutAuth',
    Both = 'Both'
}