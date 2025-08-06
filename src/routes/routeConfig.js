// Configuración centralizada de rutas
export const routes = [
  {
    path: '/',
    name: 'Home',
    title: 'Inicio'
  },
  {
    path: '/about',
    name: 'About',
    title: 'Acerca de'
  },
  {
    path: '/services',
    name: 'What we do',
    title: 'Servicios'
  },
  {
    path: '/process',
    name: 'Process',
    title: 'Proceso'
  },
  {
    path: '/pricing',
    name: 'Pricing',
    title: 'Precios'
  },
  {
    path: '/contact',
    name: 'Contact',
    title: 'Contacto'
  }
];

// Función helper para obtener el título de la página
export const getPageTitle = (pathname) => {
  const route = routes.find(route => route.path === pathname);
  return route ? route.title : 'Página no encontrada';
};