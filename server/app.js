import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import articlesRoutes from './routes/articlesRoutes';

config();

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => res.status(301).redirect('/api/v1'));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to xyz' });
});

// Handles user routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/articles', articlesRoutes);

// app.use(ErrorHandler.sendError);


if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log('Welcome to xyz - A sequelize demo app'));
}
export default app;
