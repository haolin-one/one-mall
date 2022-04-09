export const modalConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '商品名称'
    },
    {
      field: 'price',
      type: 'number',
      label: '商品价格',
      placeholder: '商品价格'
    },
    {
      field: 'description',
      type: 'textarea',
      label: '商品描述',
      placeholder: '商品描述'
    },
    {
      field: 'goods_cate_id',
      type: 'treeSelect',
      label: '商品分类',
      options: []
    },
    {
      field: 'picture',
      type: 'upload',
      label: '商品图片'
    }
  ],
  colLayout: {
    xl: 24,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  }
};
