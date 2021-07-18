const Expense = require("../models/ExpenseModel");

exports.getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.find();
    return res.status(200).json({
      success: true,
      count: expenses.length,
      data: expenses,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      data: err,
    });
  }
};

exports.addExpense = async (req, res, next) => {
  try {
    const expense = await Expense.create(req.body);
    return res.status(201).json({
      success: true,
      data: expense,
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

exports.deleteExpense = async (req, res, next) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id );
    if (!expense) {
      return res.status(404).json({
        success: false,
        error: "Expense not found",
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
