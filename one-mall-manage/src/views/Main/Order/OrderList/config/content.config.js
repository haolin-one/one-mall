export const contentTableConfig = {
  propList: [
    {
      prop: 'order_sn',
      label: '订单编号'
    },
    {
      prop: 'username',
      label: '用户账号'
    },
    {
      prop: 'createAt',
      label: '创建时间'
    },
    {
      prop: 'total_amount',
      label: '订单金额',
      slotName: 'money'
    },
    {
      prop: 'order_status',
      label: '订单状态',
      slotName: 'order_status',
      width: '100px'
    },
    {
      label: '操作',
      slotName: 'order_handle'
    }
  ],
  showHeader: false,
  showIndexColumn: true
};
