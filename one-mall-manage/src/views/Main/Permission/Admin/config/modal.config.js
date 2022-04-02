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
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '密码'
    },
    {
      field: 'gender',
      type: 'switch',
      label: '性别',
      open: { text: '女', value: '0' },
      close: { text: '男', value: '1' }
    },
    {
      field: 'role_id',
      type: 'select',
      label: '角色',
      options: []
    },
    {
      field: 'phone',
      type: 'input',
      label: '手机号码',
      placeholder: '手机号码'
    },
    {
      field: 'email',
      type: 'input',
      label: '邮箱',
      placeholder: '邮箱'
    },
    {
      field: 'avatar_url',
      type: 'upload',
      label: '头像'
    }
  ],
  colLayout: {
    xl: 11, // >1920px
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  },
  rules: {
    name: [
      {
        required: true,
        message: '姓名不能为空',
        trigger: 'blur'
      },
      { min: 2, max: 10, message: '姓名长度在2到10位之间', trigger: 'blur' }
    ],
    username: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur'
      },
      { min: 5, max: 12, message: '姓名长度在5到12位之间', trigger: 'blur' }
    ],
    role_id: [
      {
        required: true,
        message: '角色不能为空',
        trigger: 'blur'
      }
    ]
  }
};
