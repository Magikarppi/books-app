import express, { Request, Response } from 'express';
import Book from '../models/book';

const router = express.Router();

router.get('/', async (_req: Request, res: Response) => {
  const books = await Book.findAll();
  res.json(books);
});

module.exports = router;
