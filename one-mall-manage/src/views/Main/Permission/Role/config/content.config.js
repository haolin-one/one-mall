export const contentTableConfig = {
  propList: [
    {
      prop: 'name',
      label: '角色名称'
    },
    {
      prop: 'description',
      label: '描述'
    },
    {
      prop: 'createAt',
      label: '创建时间'
    },
    {
      prop: 'updateAt',
      label: '修改时间'
    },
    {
      label: '操作',
      slotName: 'handle'
    }
  ],
  showIndexColumn: true
};
