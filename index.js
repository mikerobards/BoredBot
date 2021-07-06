
// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => document.body.innerHTML = `<img src=${data.message}>`);

const ideaText = document.getElementById('idea-text')
const ideaBtn = document.getElementById('idea-btn')
const titleEl = document.getElementById('title')

const showActivity = (data) => {
    ideaText.textContent = `${data.activity}`
    titleEl.textContent = "🦾 HappyBot🦿"
    document.body.classList.add('fun')
}

ideaBtn.addEventListener('click', () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => showActivity(data))
})


