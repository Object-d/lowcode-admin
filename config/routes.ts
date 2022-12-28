export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/admin',
    name: '管理',
    icon: 'icon-xitongguanli',
    access: 'canAdmin',
    //component: './admin',
    routes: [
      {
        path: '/admin/user',
        name: '用户管理',
        //hideInMenu: true,
        icon: 'smile',
        component: './admin/users',
      },
      {
        path: '/admin/role',
        name: '角色管理',
        ///hideInMenu: true,
        icon: 'smile',
        component: './admin/roles',
      },
      {
        path: '/admin/permission',
        name: '权限管理',
        ///hideInMenu: true,
        icon: 'smile',
        component: './admin/permissions',
      },
      {
        path: '/admin/menu',
        name: '菜单管理',
        ///hideInMenu: true,
        icon: 'smile',
        component: './admin/menus',
      },
      {
        path: '/admin/log',
        name: '操作日志',
        ///hideInMenu: true,
        icon: 'smile',
        component: './admin/logs',
      },
      { component: './404' },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
