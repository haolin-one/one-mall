export const contentTableConfig = {
  propList: [
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'username',
      label: '用户名'
    },
    {
      prop: 'gender',
      label: '性别',
      slotName: 'gender',
      width: '80'
    },
    {
      prop: 'role',
      label: '角色'
    },
    {
      prop: 'phone',
      label: '电话号码'
    },
    {
      prop: 'email',
      label: '邮箱',
      minWidth: '120'
    },
    {
      prop: 'birthday',
      label: '生日'
    },
    {
      prop: 'usable',
      label: '启动状态',
      slotName: 'usable'
    },
    // {
    //   prop: 'createAt',
    //   label: '创建时间',
    //   minWidth: '100'
    // },
    // {
    //   prop: 'updateAt',
    //   label: '更新时间',
    //   minWidth: '100'
    // },
    { label: '操作', minWidth: '120', slotName: 'handle' }
  ],
  showIndexColumn: true
};
