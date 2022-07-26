import express, { Request, Response } from 'express';
import Book from '../models/book';

const router = express.Router();

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

module.exports = router;
