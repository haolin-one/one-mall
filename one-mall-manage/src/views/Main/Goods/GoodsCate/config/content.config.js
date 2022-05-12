export const contentTableConfig = {
  title: '分类列表',
  propList: [
    {
      prop: 'name',
      label: '分类名称'
    },
    {
      prop: 'picture',
      label: '分类图片',
      slotName: 'img'
    },
    {
      prop: 'level',
      label: '级别',
      slotName: 'level'
    },
    {
      prop: 'parentCate',
      label: '父分类'
    },
    {
      label: '设置',
      slotName: 'setting'
    },
    { label: '操作', minWidth: '180', slotName: 'handle' }
  ],
  showIndexColumn: true
};
