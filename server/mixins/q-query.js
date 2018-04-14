'use strict';

let regexEscape = function(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

module.exports = function(Model) {
  // unknown error in this case, may be fix later,
  // [WARNING: id property cannot be changed ...]
  // override in base model instead
  Model.observe('access', function(ctx, next) {
    if (ctx.query && ctx.query.where && ctx.query.where.q) {
      var q = new RegExp(regexEscape(ctx.query.where.q), 'i');
      delete ctx.query.where.q;
      var orCondition = [];

      ctx.Model.forEachProperty(function(name, prop) {
        if (prop.type === String || Array.isArray(prop.type) || prop.type === Array) {
          var c = {};
          c[name] = q;
          orCondition.push(c);
        }
      });

      ctx.query.where['or'] = orCondition;
    }
    next();
  });
};
