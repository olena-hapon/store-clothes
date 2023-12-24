/**
 * product controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product.product');

// import { factories } from '@strapi/strapi';

// export default factories.createCoreController('api:product.product', ({ strapi }) =>  ({
//   async find(ctx) {
//     const sanitizedQueryParams = await this.sanitizeQuery(ctx);
//     const { results, pagination } = await strapi.service('api::product.product').find(sanitizedQueryParams);
//     const sanitizedResults = await this.sanitizeOutput(results, ctx);

//     return this.transformResponse(sanitizedResults, { pagination });
//   }
// }));