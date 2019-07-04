import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';

config();

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => res.status(301).redirect('/api/v1'));

app.get('/', (req, res) => {
  res.send('Welcome to xzy');
});

// app.all('*', (req, res) =>
//   res.status(404).json({
//     error: 'Sorry, the requested endpoint does not exist on our server'
//   });
// );


if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log('Welcome to xyz'));
}
export default app;
