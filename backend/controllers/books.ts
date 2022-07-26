import express, { NextFunction, Request, Response } from 'express';
import Book from '../models/book';

const router = express.Router();

const bookFinder = async (req: any, _res: Response, next: NextFunction) => {
  req.book = await Book.findByPk(req.params.id);
  next();
};

router.get('/', async (_req: Request, res: Response) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error: any) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (error: any) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
});

router.delete('/:id', bookFinder, async (req: any, res: Response) => {
  if (req.book) {
    await req.book.destroy();
  }
  res.status(204).end();
});

module.exports = router;
