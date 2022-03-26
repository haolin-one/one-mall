import goodsList from './Goods/GoodsList';
import goodsCate from './Goods/GoodsCate';
import addGoods from './Goods/AddGoods';
import orderSetting from './Order/OrderSetting';
import orderList from './Order/OrderList';
import admin from './Permission/Admin';
import role from './Permission/Role';
import menu from './Permission/Menu';

export const allRoutes = [
  goodsList,
  goodsCate,
  addGoods,
  orderList,
  orderSetting,
  admin,
  role,
  menu
];
