import express, { NextFunction, Request, Response } from 'express';
import Book from '../models/book';

const router = express.Router();

// Finding one specific book middleware
const bookFinder = async (req: any, _res: Response, next: NextFunction) => {
  req.book = await Book.findByPk(req.params.id);
  next();
};

// Getting all books
router.get('/', async (_req: Request, res: Response) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error: any) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
});

// Adding a new book
router.post('/', async (req: Request, res: Response) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (error: any) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
});

// Deleting a book
router.delete('/:id', bookFinder, async (req: any, res: Response) => {
  try {
    if (req.book) {
      await req.book.destroy();
    }
    res.status(204).end();
  } catch (error: any) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
});

// Updating a book
router.put('/:id', bookFinder, async (req: any, res: any) => {
  try {
    if (req.book) {
      await req.book.update({ ...req.body });
      res.json(req.book);
    }
  } catch (error: any) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
