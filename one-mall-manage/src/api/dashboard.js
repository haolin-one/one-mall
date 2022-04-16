import hloAxios from '@/request';

export function getCitySale() {
  return hloAxios.get({
    url: '/dashboard/getCitySale'
  });
}

export function getCateSale() {
  return hloAxios.get({
    url: '/dashboard/getCateSale'
  });
}
