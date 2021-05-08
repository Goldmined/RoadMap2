const express = require("express"); //функция, после вызова получаем один экземпляр приложения
const app = express(); //один экземляр приложения
const cors = require('cors');
const PORT = 3001; // порт
const User = require("./model/User");
app.use(express.static("public"));
const Post = require("./model/Post");
const Comment = require("./model/Comment");

app.use(cors());


app.get("/users", (req, res) => {
  //если поступит запрос на адрес "/", то мы вернем строчку 'Server Index Page'
  res.json({
    items: User.list(),
  });
});

app.get("/users/:id", (req, res) => {
  res.json({
    item: User.getById(req.params.id),
  });
});



app.get("/posts", (req, res) => {
  //если поступит запрос на адрес "/", то мы вернем строчку 'Server Index Page'
  res.json({
    items: Post.list(req.query.userId),
  });
});

app.get("/posts/:id", (req, res) => {
  res.json({
    item: Post.getById(req.params.id),
  });
});



app.get("/comments", (req, res) => {
  //если поступит запрос на адрес "/", то мы вернем строчку 'Server Index Page'
  res.json({
    items: Comment.list(req.query.postId),
  });
});

app.get("/comments/:id", (req, res) => {
  res.json({
    item: Comment.getById(req.params.id),
  });
});



app.listen(PORT, () => {
  // стартуем приложение оно должно слушаться порт 3001
  console.log(`Server app listening at http://localhost:${PORT}`);
});
