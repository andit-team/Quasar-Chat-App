
const routes = [
  {
    path: '/',
    component: () => import('layouts/AuthLayout'),
    children: [
      { path: '', component: () => import('pages/Auth/Login') },
      { path: 'signup', component: () => import('pages/Auth/SignUp') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/MainLayout'),
    children: [
      { path: '', component: () => import('pages/User/Users') },
    ]
  },
  {
    path: '/messages',
    component: () => import('layouts/MainLayout'),
    children: [
      { path: '', component: () => import('pages/Message/Messages') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => Error
  }
]

export default routes
