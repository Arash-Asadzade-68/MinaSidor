import axios ,{AxiosInstance} from 'axios';



/** 
 this function return base url config for api requests;axios base url is selected base on request status for example if request status set to withAuth means 
 user should has token to request this api; at the end if basUrl set to /auth/ we should add credentials to config
 */ 

   function axiosFactory  (requestStatus : RequestStatus) : AxiosInstance  {
		let api = axios.create({});
		switch(requestStatus)
		{
			case 'Both' :
			{
				if(true)//has sid cookie
				{
					api = axios.create({
						baseURL: '/both/',
					});
				}
				
				break;
			}
			case 'WithAuth' :
			{
				api = axios.create({
						baseURL: '/auth/',
					});
				break;
			}
			case 'WithoutAuth' :
			{
				api = axios.create({
						baseURL: '/api/',
					});
				break;
			}
			default:
				break;
		}
		
		api.interceptors.request.use((config) => {
			if(config.baseURL == '/auth/')
					config.withCredentials = true;
			return config;
		});

		return api;
    }

export default axiosFactory;

