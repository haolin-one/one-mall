export const searchFormConfig = {
  labelWidth: '120px',
  itemStyle: {
    padding: '10px 30px'
  },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '分类名称',
      placeholder: '分类名称'
    },
    {
      field: 'parent_id',
      type: 'select',
      label: '父分类',
      placeholder: '父分类',
      options: []
    }
  ]
};
