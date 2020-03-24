import router from '../../utils/router';



import { getApiRouteHandler } from './get.route';
import { postApiRouteHandler } from './post.route';



//common CRUD routes        
router.route('/api/*')
        .get(getApiRouteHandler)
        .post(postApiRouteHandler)

export default router