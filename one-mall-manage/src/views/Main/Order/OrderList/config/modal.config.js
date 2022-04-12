export const modalConfig = {
  formItems: [
    {
      field: 'order_sn',
      type: 'input',
      label: '订单编号',
      disabled: true
    },
    {
      field: 'userName',
      type: 'input',
      label: '收货人',
      disabled: true
    },
    {
      field: 'telNumber',
      type: 'input',
      label: '联系电话',
      disabled: true
    },
    {
      field: 'address',
      type: 'input',
      label: '收货地址',
      disabled: true
    },
    {
      field: 'delivery_company',
      type: 'select',
      label: '物流公司',
      options: [
        {
          title: '韵达快递',
          value: '韵达快递'
        },
        {
          title: '中通快递',
          value: '中通快递'
        }
      ]
    },
    {
      field: 'delivery_sn',
      type: 'input',
      label: '物流单号'
    }
  ],
  colLayout: {}
};
