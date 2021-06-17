
// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => document.body.innerHTML = `<img src=${data.message}>`);

const ideaText = document.getElementById('idea-text')
const ideaBtn = document.getElementById('idea-btn')

ideaBtn.addEventListener('click', () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            ideaText.textContent = `${data.activity}`
        })
})


