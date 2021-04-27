const express = require('express'); //функция, после вызова получаем один экземпляр приложения
const app = express(); //один экземляр приложения
const PORT = 3001;// порт

app.get('/', (req, res) => { //если поступит запрос на адрес "/", то мы вернем строчку 'Server Index Page'
  res.send('Server Index Page');
});

app.listen(PORT, () => { // стартуем приложение оно должно слушаться порт 3001
  console.log(`Server app listening at http://localhost:${PORT}`);
});