const errorTypes = require('../constants/error-types');
const { goodsStock } = require('../service/goods.service');

const verifyStock = async (ctx, next) => {
  const { goodsItem } = ctx.request.body;
  let isNotEnough = false;
  await goodsStock(goodsItem);
  goodsItem.forEach(async (item) => {
    const { goods_count, goods_stock } = item;
    const stock = goods_stock - goods_count;
    if (stock < 0) {
      isNotEnough = true;
    }
  });
  if (isNotEnough) {
    const error = new Error(errorTypes.STOCK_IS_NOT_ENOUGH);
    return ctx.app.emit('error', error, ctx);
  }
  await next();
};

module.exports = {
  verifyStock
};
