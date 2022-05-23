import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers.js/renderer';
import createStore from './helpers.js/createStore';

const app = express();
const port = 3030;

app.use(
  '/api/auth/google',
  proxy('http://localhost:5555/auth/google', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = `localhost:${port}`;
      console.log(opts.path);
      return opts;
    }
  })
);

//proxy - for client request. Each client request baseURL is '/api'. So it will replaced with http://react-ssr-api.herokuapp.com by the server
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = `localhost:${port}`;
      // console.log(opts);
      return opts;
    }
  })
);

//make sure that the files inside public will be exposed outside - go to the browser->inspect->sources
//public contains all client scripts and components
app.use(express.static('public'));

app.get('*', async (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });
  //use await here to wait until the store will be updated with the fetched data
  await Promise.all(promises);
  const context = {};
  const content = renderer(req, store, context);
  console.log('context', context);
  if (context.notFound) {
    res.status(404);
  }
  res.send(content);
});

app.listen(port, () => {
  console.log('listening to 3030');
});
