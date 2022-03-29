import hloAxios from '@/request';

export function createPageData(url, data) {
  return hloAxios.post({
    url,
    data
  });
}

export function deletePageData(url) {
  return hloAxios.delete({
    url
  });
}

export function updatePageData(url, data) {
  return hloAxios.patch({
    url,
    data
  });
}

export function getPageListData(url, data) {
  return hloAxios.post({
    url,
    data
  });
}
