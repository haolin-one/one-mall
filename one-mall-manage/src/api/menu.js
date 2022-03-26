import hloAxios from '@/request';

export function getMenusById(id) {
  return hloAxios.get({
    url: `/menu/${id}`
  });
}
