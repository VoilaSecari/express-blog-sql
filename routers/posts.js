// baseline
const express = require("express");
const router = express.Router();
// importo data
// let { posts } = require("../data/posts.js");

// importo controller
const postController = require("../controllers/postController.js");

// definizione delle rotte

// INDEX (base, indice insomma)
// .get
router.get("", postController.index);

// SHOW (QUI PER LO SPECIFICO POST)
// .get
router.get("/:id", postController.show);

// STORE (qui si crea nuovo post)
// .post
router.post("", postController.store);

// UPDATE (qui si sostituisce un post del blog)
// .put
router.put("/:id", postController.update);

// MODIFY (qui si modifica un post del blog)
// .patch
router.patch("/:id", postController.modify);

// DESTROY (con questo si elimina un post)
// .delete
router.delete("/:id", postController.destroy);

// export router

module.exports = router;
