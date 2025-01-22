const express = require("express");
const router = express.Router();
module.exports = router;
const posts = require("../posts");
const postsController = require("../controllers/postscontroller");
const postExists = require("../middleware/checkPostExsists");

/////ESECUZIONE/////

//index --> GET
router.get('/', postsController.index);

//show --> GET
router.get('/:id', postExists, postsController.show);

//create --> POST
// router.post('/', postsController.create);

//update --> PUT
// router.put('/:id', postExists, postsController.update);

//modify --> PATCH
// router.patch('/:id', postExists, postsController.modify);

//destroy --> DELETE
router.delete('/:id', postExists, postsController.destroy);