import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import userRoutes from './routes/userRoutes';

config();

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => res.status(301).redirect('/api/v1'));

app.get('/', (req, res) => {
  res.send('Welcome to xzy');
});

// Handles user routes
app.use('/api/v1/users', userRoutes);


// app.use(ErrorHandler.sendError);


if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log('Welcome to xyz'));
}
export default app;
