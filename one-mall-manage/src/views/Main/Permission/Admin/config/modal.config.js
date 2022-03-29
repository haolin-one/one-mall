export const modalConfig = {
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
      field: 'gender',
      type: 'switch',
      label: '性别',
      open: { text: '女', value: '0' },
      close: { text: '男', value: '1' }
    },
    {
      field: 'role',
      type: 'select',
      label: '角色',
      options: []
    },
    {
      field: 'phone',
      type: 'input',
      label: '手机号码'
    },
    {
      field: 'email',
      type: 'input',
      label: '邮箱'
    }
  ],
  colLayout: {
    xl: 11, // >1920px
    lg: 24,
    md: 8,
    sm: 6,
    xs: 24
  }
};
