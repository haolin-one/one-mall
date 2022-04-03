export const searchFormConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '姓名',
      placeholder: '姓名'
    },
    {
      field: 'username',
      type: 'input',
      label: '用户名',
      placeholder: '用户名'
    },
    {
      field: 'role_id',
      type: 'select',
      label: '角色',
      options: []
    }
    // {
    //   field: 'gender',
    //   type: 'switch',
    //   label: '性别',
    //   open: { text: '女', value: '0' },
    //   close: { text: '男', value: '1' }
    // }
  ]
};
