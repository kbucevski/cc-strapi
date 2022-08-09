'use strict';

/**
 * book-estimator service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book-estimator.book-estimator');
