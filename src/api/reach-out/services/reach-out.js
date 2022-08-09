'use strict';

/**
 * reach-out service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reach-out.reach-out');
