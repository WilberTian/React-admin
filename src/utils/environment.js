import * as environmentConstant from '../configs/environments';

export default process.env.NODE_ENV || environmentConstant.PRODUCTION;
