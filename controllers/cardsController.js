const Card = require("../models/CardModel");

exports.getCards = async (req, res, next) => {
  try {
    const cards = await Card.find();
    return res.status(200).json({
      success: true,
      count: cards.length,
      data: cards,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      data: err,
    });
  }
};

exports.addCard = async (req, res, next) => {
  try {
    const card = await Card.create(req.body);
    return res.status(201).json({
      success: true,
      data: card,
    });
  } catch (err) {
    if (err.message.includes("validation")) {
      const message = err.message;
      return res.status(400).json({
        success: false,
        error: message,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Somethimg went wrong...",
      });
    }
  }
};

exports.deleteCard = async (req, res, next) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id);
    if (!card) {
      return res.status(404).json({
        success: false,
        error: "Card not found",
      });
    }
    return res.status(204).json({
      success: true,
      data: null,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Somethimg went wrong...",
    });
  }
};

exports.updateCard = async (req, res, next) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!card) {
      return res.status(404).json({
        success: false,
        error: "Card not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: card,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Somethimg went wrong...",
    });
  }
};
