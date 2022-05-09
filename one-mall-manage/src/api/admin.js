import hloAxios from '@/request';

export function login(data) {
  return hloAxios.post({
    url: 'admin/login',
    data
  });
}

export function getMenusById(id) {
  return hloAxios.get({
    url: `/menu/${id}`
  });
}
