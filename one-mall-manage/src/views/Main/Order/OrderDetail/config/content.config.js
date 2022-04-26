export const contentTableConfig = {
  propList: [
    {
      prop: 'picture',
      label: '商品图片',
      slotName: 'img'
    },
    {
      prop: 'name',
      label: '商品名称'
    },
    {
      prop: 'price',
      label: '单价(￥)'
    },
    {
      prop: 'goods_count',
      label: '购买数量'
    },
    {
      label: '小计(￥)',
      slotName: 'sum'
    }
  ],
  showFooter: false,
  showHeader: false
};
