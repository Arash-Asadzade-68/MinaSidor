import axiosFactory  from "../../api/apiNew";
import axios from 'axios';

/* #region  cvbuilder post */

// async function   get_token() {
//     const token = await axios.get('/get-token')
//     return token;
// }
// async function   post_token() {
//     const token = await axios.post('/auth',{dto:{id:13333}})
//     return token;
// }
// export async function  postCVBuilderApi(getRequestParams: BaseCRUDRequestDto<Cv>,requestStatus:RequestStatus) {
// 	// return axiosFactory(requestStatus).post("/Employee/Cv/Cvs", {
// 	// 	dto: getRequestParams.dto,
//     // });
//     const token = await get_token();
   
// };

export const   saveApp = (body,requestStatus:RequestStatus): Promise<Object> =>{
	return axiosFactory(requestStatus).post("/apply/saveApp", body);

 };

/* #endregion */

/* #region  Categories */
export const getCategoriesApi = (getRequestParams:string , requestStatus:RequestStatus): Promise<string> => {
	return axiosFactory(requestStatus).get(`/apply/needslist?${getRequestParams}`);
};
/* #endregion */


/* #region  Companies */
export const getCompaniesApi = (getRequestParams:string , requestStatus:RequestStatus): Promise<string> => {
	return axiosFactory(requestStatus).get(`/apply/companies?${getRequestParams}`);
};
/* #endregion */