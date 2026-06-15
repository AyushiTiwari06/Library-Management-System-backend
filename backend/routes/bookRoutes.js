import express from "express";
import Book from "../models/Book.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  async (req, res) => {
    const book =
      await Book.create(req.body);

    res.json(book);
  }
);

router.get("/", async (req, res) => {
  const books =
    await Book.find();

  res.json(books);
});

router.put(
  "/:id",
  authMiddleware,
  async (req, res) => {
    const book =
      await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(book);
  }
);

router.delete(
  "/:id",
  authMiddleware,
  async (req, res) => {
    await Book.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Book Deleted"
    });
  }
);

router.get(
  "/featured/all",
  async (req, res) => {
    const books =
      await Book.find({
        featured: true
      });

    res.json(books);
  }
);

router.get(
  "/price/less/:value",
  async (req, res) => {
    const books =
      await Book.find({
        price: {
          $lt: req.params.value
        }
      });

    res.json(books);
  }
);

router.get(
  "/price/greater/:value",
  async (req, res) => {

    const books =
      await Book.find({
        price: {
          $gt: req.params.value
        }
      });

    res.json(books);

  }
);
export default router;