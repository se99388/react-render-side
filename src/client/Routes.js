import React from 'react';
// import { Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route  path="/users" component={UsersList} />
//     </div>
//   );
// };

// export default [
//   {
//     ...HomePage,
//     path: '/',
//     exact: true
//   },
//   {
//     ...UsersListPage,
//     path: '/users',
//   },
//   {
//     ...App,
//     path:''
//   }
// ];

export default [
  {
    ...App, //Doesnt containt path. Therefore, will always displayed on the screen
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
