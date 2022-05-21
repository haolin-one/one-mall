import { allRoutes } from '@/router/routes';

export const permissionRoutes = (menus = []) => {
  const routes = [];
  menus.forEach((menu) => {
    const isPermission = allRoutes.find((route) => {
      console.log(route.name);
      return route.name === menu.name || route.name === 'orderDetail';
    });
    if (isPermission) {
      routes.push(isPermission);
    }
  });
  return routes;
};
