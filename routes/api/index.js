const router = require("express").Router();
const booksRoutes = require("./books");

// BOOKS ROUTE
router.use("/books", booksRoutes);

module.exports = router;
