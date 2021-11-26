console.log("Hello World")

const message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault()

    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie)

}

document.querySelector('form').addEventListener('submit', addMovie)


function deleteMovie(event) {
    event.preventDefault()
    event.target.parentNode.remove()
    message.textContent = "Movie deleted!"
    revealMessage()
}


function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    const title = event.target.textContent
    if (event.target.classList.contains('checked')) {
        message.textContent = `${title} watched!`
    } else {
        message.textContent = `${title} re-added!`
    }
    revealMessage()
}

function revealMessage() {
    message.classList.remove('hide')
    setTimeout(() => message.classList.add('hide'), 1000)
}