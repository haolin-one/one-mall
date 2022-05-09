import { allRoutes } from '@/router/routes';

export const permissionRoutes = (menus = []) => {
  const routes = [];
  menus.forEach((menu) => {
    const isPermission = allRoutes.find((route) => {
      return route.name === menu.name;
    });
    if (isPermission) {
      routes.push(isPermission);
    }
  });
  return routes;
};
