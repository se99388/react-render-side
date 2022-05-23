import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';

const App = ({ route }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      {renderRoutes(route.routes)}
    </div>
  );
};

function loadData(store) {
  //dispatch argument can get a cb function for async action
  return store.dispatch(fetchCurrentUser());
}
export default {
  component: App,
  loadData
};
