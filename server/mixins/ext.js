'use strict';
module.exports = function(Model, options) {
  Model.defineProperty('description', {type: 'string', default: '', length: 2048, require: false});
  Model.defineProperty('tag', {type: ['string'], length: 128, require: false});
};
