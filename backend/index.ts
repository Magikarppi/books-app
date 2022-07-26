import express, { Request, Response } from 'express';
const { PORT } = require('./utils/config');
const { connectToDatabase } = require('./utils/db');
const { booksRouter } = require('./controllers/books');

const app = express();

app.use(express.json());
app.use('/api/books', booksRouter);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
