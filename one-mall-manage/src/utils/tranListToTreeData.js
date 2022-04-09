export function tranListToTreeData(list, parentId) {
  const treeListData = [];
  list.forEach((item) => {
    if (item.parent_id === parentId) {
      const children = tranListToTreeData(list, item.id);
      if (children.length) {
        item.children = children;
      }
      treeListData.push({
        label: item.name,
        value: item.id,
        children: item.children
      });
    }
  });
  return treeListData;
}

// list.forEach((item) => {
//   item.children = [];
//   if (item.parent_id === 0) {
//     list.forEach((item2) => {
//       if (item.id === item2.parent_id) {
//         item.children.push(item2);
//       }
//     });
//     console.log(item);
//   }
// });
