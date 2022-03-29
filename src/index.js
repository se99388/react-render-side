import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers.js/renderer';
import createStore from './helpers.js/createStore';

const app = express();

//make sure that the files inside public will be exposed outside - go to the browser->inspect->sources
//public contains all client scripts and components
app.use(express.static('public'));

app.get('*', async (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });
  //use await here to wait until the store will be updated with the fetched data
  await Promise.all(promises)

  res.send(renderer(req, store));
});

app.listen(3030, () => {
  console.log('listening to 3030');
});
