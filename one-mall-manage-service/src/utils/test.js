const connection = require('../app/database');

const provinceName = [
  '广东省',
  '黑龙江省',
  '浙江省',
  '江苏省',
  '北京市',
  '上海市',
  '重庆市'
];
const cityName = [
  '广州市',
  '哈尔滨市',
  '杭州市',
  '南京市',
  '北京市',
  '上海市',
  '重庆市'
];
const countyName = [
  '黄埔区',
  '松北区',
  '萧山区',
  '鼓楼区',
  '朝阳区',
  '浦东新区',
  '永川区'
];
const detailInfo = [
  '广州商学院',
  '松浦街道浦源路2468号 黑龙江科技大学',
  '瓜沥镇机场路 杭州萧山国际机场T3航站楼',
  '湖南路街道汉口22号 南京大学(鼓楼校区)',
  '朝外街道朝阳门外大街三丰北里3号(外交部东南侧) 北京朝阳悠唐皇冠假日酒店',
  '滨江大道2777号 浦东美术馆',
  '光彩大道368号 重庆大学城市科技学院'
];
const addOrder = async (orderInfo) => {
  const index = Math.floor(Math.random() * (6 - 0)) + 0; //不含最大值，含最小值
  const {
    userId = 10,
    userName = '王浩林',
    telNumber = '19924688888',
    goods_id = [48],
    count = 1,
    total_amount = 2399,
    remark = ''
  } = orderInfo;
  const orderSn = new Date().getTime() + userId.toString();
  const statement = `INSERT INTO orders (user_id,order_sn,userName,telNumber,
                        provinceName,cityName,countyName,detailInfo,total_amount)
                        VALUES (?,?,?,?,?,?,?,?,?)`;
  await connection.execute(statement, [
    userId,
    orderSn,
    userName,
    telNumber,
    provinceName[index],
    cityName[index],
    countyName[index],
    detailInfo[index],
    total_amount
  ]);
  const statement1 = `INSERT INTO order_item (goods_id,goods_count,order_sn,remark)
                        VALUES (?,?,?,?)`;
  goods_id.forEach(async (item) => {
    await connection.execute(statement1, [item, count, orderSn, remark]);
  });
};

for (let i = 0; i < 100; i++) {
  console.log(i);
  addOrder({});
}
