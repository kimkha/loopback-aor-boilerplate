'use strict';


module.exports = function(Model) {
  Model.belongsTo('User', {as: 'creator'});
  Model.belongsTo('User', {as: 'updater'});

  // unknown error in this case, may be fix later,
  // [WARNING: id property cannot be changed ...]
  // override in base model instead
  Model.observe('before save', function(ctx, next) {
    if (ctx.instance) {
      let userId = ctx.options.accessToken ? ctx.options.accessToken.userId : '';
      let curentDate = new Date();
      // check create/update case
      if (ctx.isNewInstance) {
        ctx.instance.creatorId = userId;
        ctx.instance.createdDate = curentDate;
      } else {
        ctx.instance.unsetAttribute('updaterId');
        ctx.instance.unsetAttribute('updatedDate');
      }
      ctx.instance.updaterId = userId;
      ctx.instance.updatedDate = curentDate;
    }
    next();
  });
};
