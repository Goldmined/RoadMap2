const express = require('express'); //функция, после вызова получаем один экземпляр приложения
const app = express(); //один экземляр приложения
const PORT = 3001;// порт
const User = require("./model/User")
app.use(express.static('public'));

app.get('/users', (req, res) => { //если поступит запрос на адрес "/", то мы вернем строчку 'Server Index Page'
  res.json({
      items: User.list()
  });
});

app.get('/users/:id', (req, res) => {
    res.json({
        items: User.getById(req.params.id)
    });
  });

app.listen(PORT, () => { // стартуем приложение оно должно слушаться порт 3001
  console.log(`Server app listening at http://localhost:${PORT}`);
});