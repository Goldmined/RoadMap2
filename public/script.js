// const { json } = require("express")

fetch('http://localhost:3001/users')
.then((res)=> res.json()) // обработать промис
.then((data) => {
    console.log(data);
    const usersEl = document.querySelector('.users')
    for (let item of data.items){
        const userEl = document.createElement('div');
        userEl.classList.add('user');
        userEl.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.email}</p>
        `
        usersEl.appendChild(userEl)
    }
})