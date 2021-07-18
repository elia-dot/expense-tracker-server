const express = require("express");

const {
  getCards,
  addCard,
  deleteCard,
  updateCard,
} = require("../controllers/cardsController");

const router = express.Router();

router.route("/").get(getCards).post(addCard);

router.route("/:id").delete(deleteCard).patch(updateCard);

module.exports = router;