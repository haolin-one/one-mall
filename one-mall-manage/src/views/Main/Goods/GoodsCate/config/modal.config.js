export const modalConfig = {
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
      placeholder: '父分类'
    }
  ],
  colLayout: {
    xl: 11, // >1920px
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  }
};
