import fetch from 'fetch-retry'
import getConfig from 'next/config';

import { extractApiRoute } from '../../utils';


//authenticated route for get request
// export function getAuthApiRouteHandler(req, res) {

//     const { serverRuntimeConfig } = getConfig();
//     const { API_GATEWAY_URL } = serverRuntimeConfig

//     const accessToken = getAccessToken(req)
//     const apiRoute = extractApiRoute(req.url)


//     fetch(`${API_GATEWAY_URL}${apiRoute}`, {
//         retryOn: (attempt, _error, response) => {
//             // retry on any network error, or 4xx or 5xx status codes
//             if (attempt < 3 && response.status === 401) {
//                 refreshTokenHandler(req, res)
//                 return true;
//             }
//             return false
//         },
//         retryDelay: (attempt, _error) => {
//             return Math.pow(2, attempt) * 1000; // 1000, 2000, 4040
//         },
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${accessToken}`
//         }
//     })
//         .then(response => {
//             if (response.status === 200) {
//                 res.status(response.status)
//                 return response.json()
//             } else {
//                 switch (response.status) {
//                     case 404:
//                         throw new Error('404');
//                     case 500:
//                         throw new Error('500');
//                     default:
//                         throw new Error('Some error occured');
//                 }
//             }
//         })
//         .then(response => res.json(response))
//         .catch(err => {


//             switch (err.message) {

//                 case '404': {
//                     return res.status(404).json(err)
//                 }
//                 case '500': {
//                     return res.status(500).json(err)
//                 }
//                 default: {
//                     return res.status(502).json(err)
//                 }
//             }
//         })

// }

// common route without authentication for get requests
export function getApiRouteHandler(req, res) {


    const { serverRuntimeConfig } = getConfig();
    const { API_GATEWAY_URL } = serverRuntimeConfig


    const apiRoute = extractApiRoute(req.url)

    fetch(`${API_GATEWAY_URL}${apiRoute}`, {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "access-control-allow-origin": "*"
        }
    })
        .then(response => {
            if (response.status === 200) {
                res.status(response.status)
                return response.json()
            } else {
                switch (response.status) {
                    case 404:
                        throw new Error('404');
                    case 500:
                        throw new Error('500');
                    default:
                        throw new Error('Some error occured');
                }
            }
        })
        .then(response => res.json(response))
        .catch(err => {


            switch (err.message) {

                case '404': {
                    return res.status(404).json(err)
                }
                case '500': {
                    return res.status(500).json(err)
                }
                default: {
                    return res.status(502).json(err)
                }
            }
        })


}

