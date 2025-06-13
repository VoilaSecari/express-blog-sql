// importo data
const connection = require("../data/db.js");

// index
const index = (req, res) => {
  const sql = "SELECT * FROM `posts`";

  //ora facciamo la connection query
  connection.query(sql, (err, results) => {
    //qui restituiamo per l'eventuale errore
    if (err) return res.status(500).json({ error: "Error executing query" });

    //qui restituiamo i risultati corretti
    res.json({
      data: results,
      status: 200,
    });
  });
};

const show = (req, res) => {
  //creo costanti per navigare
  const postId = parseInt(req.params.id);

  const sql = "SELECT * FROM `posts` WHERE `id` = ?";

  // creare la connessione
  connection.query(sql, [postId], (err, results) => {
    if (err) return res.status(500).json({ error: "Error executing query" });
    const post = results[0];

    //qui facciamo i tags

    const tagsSql =
      "SELECT tags.* FROM post_tag INNER JOIN tags ON tags.id = post_tag.tag_id WHERE post_id = ?";

    connection.query(tagsSql, [postId], (err, results) => {
      if (err) return res.status(500).json({ error: "Error executing query" });
      post.tags = results;

      res.json({
        data: post,
        status: 200,
      });
    });
  });
};

const store = (req, res) => {
  const { title, content, image, tags } = req.body;

  //id generator
  let maxId = 0;
  for (const post of posts) {
    if (post.id > maxId) maxId = post.id;
  }

  const postId = maxId + 1;
  //ora il nuovo post con tutti i dati destrutturati
  const newPost = { id: postId, title, content, image, tags };

  posts.push(newPost);

  console.log(newPost);
  return res.json({
    message: "Creazione sul blog di un nuovo post.",
    data: newPost,
    status: 200,
  });
};

const update = (req, res) => {
  const postId = parseInt(req.params.id);
  const originalPost = posts.find((post) => post.id === postId);

  // not found
  if (!originalPost) {
    const error = new Error();
    error.statusCode = 404;
    error.message = "Post non trovato";
    throw error;
  }
  const { title, content, image, tags } = req.body;

  const updatedPost = { id: postId, title, content, image, tags };

  const originalPostIndex = posts.indexOf(originalPost);

  posts.splice(originalPostIndex, 1, updatedPost);

  res.json({
    message: "Post con id " + postId + " correttamente sostituito.",
    data: updatedPost,
    status: 200,
  });
};

const modify = (req, res) => {
  const postId = parseInt(req.params.id);
  res.json("Modifica sul blog del post " + id);
};

const destroy = (req, res) => {
  const postId = parseInt(req.params.id);

  // creiamo la query con segnaposto disidratato
  const sql = "DELETE FROM `posts` WHERE `id` = ?";

  //usiamola
  connection.query(sql, [postId], (err, results) => {
    if (err) return res.status(500).json({ error: "Error executing query" });

    res.sendStatus(204);
  });
};

module.exports = { index, show, store, update, modify, destroy };
