/* eslint-disable import/prefer-default-export */
import { useRouter } from 'next/router';

export const getRoutes = () => [
  {
    label: 'Home',
    path: '/',
    items: null,
    hasOwnPage: true,
    includeInNavigation: true,
  },
  {
    label: 'Leben',
    path: '/leben',
    items: null,
    hasOwnPage: true,
    includeInNavigation: true,
  },
  {
    label: 'Interessen',
    path: '/interessen',
    items: null,
    hasOwnPage: true,
    includeInNavigation: true,
  },
  {
    label: 'Background',
    path: '/background',
    items: [
      {
        label: 'Ausbildung',
        path: '/ausbildung',
        items: null,
        hasOwnPage: true,
        includeInNavigation: true,
      },
      {
        label: 'Berufliche Erfahrungen',
        path: '/berufliche-erfahrungen',
        items: null,
        hasOwnPage: true,
        includeInNavigation: true,
      },
      {
        label: 'Social Engagements',
        path: '/social-engagements',
        items: [
          {
            label: 'Marketing Symposium',
            path: '/marketing-symposium',
            items: null,
            hasOwnPage: true,
            includeInNavigation: false,
          },
        ],
        hasOwnPage: true,
        includeInNavigation: true,
      },
    ],
    hasOwnPage: false,
    includeInNavigation: true,
  },
  {
    label: 'Kontakt',
    path: '/kontakt',
    items: null,
    hasOwnPage: true,
    includeInNavigation: true,
  },
];

export const isActivePath = (path) => {
  const router = useRouter();

  return path === '/'
    ? router.pathname === path
    : router.pathname.startsWith(path);
};

export const getPath = () => {
  const routes = getRoutes();
  const homeRoute = routes.find((route) => route.path === '/');
  const routeFirstLevel = routes.find((route) => isActivePath(route.path));
  const routeSecondLevel = routeFirstLevel.items
    ? routeFirstLevel.items.find((route) =>
        isActivePath(routeFirstLevel.path + route.path)
      )
    : null;
  const routeThirdLevel =
    routeFirstLevel.items && routeSecondLevel.items
      ? routeSecondLevel.items.find((route) =>
          isActivePath(
            routeFirstLevel.path + routeSecondLevel.path + route.path
          )
        )
      : null;
  const path = [];
  path.push(homeRoute);
  if (routeFirstLevel) path.push(routeFirstLevel);
  if (routeSecondLevel)
    path.push({
      ...routeSecondLevel,
      path: routeFirstLevel.path + routeSecondLevel.path,
    });
  if (routeThirdLevel)
    path.push({
      ...routeThirdLevel,
      path: routeFirstLevel.path + routeSecondLevel.path + routeThirdLevel.path,
    });

  return path;
};
