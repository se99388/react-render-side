import express from 'express';
import renderer from './helpers.js/renderer';

const app = express();

//make sure that the files inside public will be exposed outside - go to the browser->inspect->sources
//public contains all client scripts and components
app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('test');
  res.send(renderer());
});

app.listen(3030, () => {
  console.log('listening to 3030');
});
