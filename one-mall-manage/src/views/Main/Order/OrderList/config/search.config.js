export const searchFormConfig = {
  formItems: [
    {
      field: 'order_sn',
      type: 'input',
      label: '订单编号',
      placeholder: '订单编号'
    },
    {
      field: 'order_status',
      type: 'select',
      label: '订单状态',
      placeholder: '订单状态',
      options: [
        {
          title: '待付款',
          value: 0
        },
        {
          title: '待发货',
          value: 1
        },
        {
          title: '待收货',
          value: 2
        },
        {
          title: '待评价',
          value: 3
        },
        {
          title: '已完成',
          value: 4
        }
      ]
    }
  ]
};
