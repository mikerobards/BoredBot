
// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => document.body.innerHTML = `<img src=${data.message}>`);

const bored = document.getElementById('bored')

fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => {
        bored.textContent = `${data.activity}`
    })