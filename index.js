
function getDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => location.href = data.message);
}
const myBtn = document.getElementById('btn')

myBtn.addEventListener('click', getDog)