export type StateTypes = {
    money:number;
    month:number;
    categories:Object;
    selectedCategory:string;
    securityNumber:string;
    showLoader:boolean;
    showValidationMessages:boolean;
    companies:{companies :Array , user_info:{surName:string} , loading:boolean};
    reasons:Array;
    selectedCompany:{companyId :string , companyName:string};
    needDescription:string;
    active:number;
    activedCompany:number;
};

export type PropsTypes = {
    items:Object;
    dispatch?:any;
    companies?:any
    _gotoNextStep?:() => void
    _companyNotFound?:() => void
}
export enum RequestStatus {
    WithAuth = 'WithAuth',
    WithoutAuth = 'WithoutAuth',
    Both = 'Both'
}