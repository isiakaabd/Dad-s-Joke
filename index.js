const button = document.querySelector("button");
const jokes = document.getElementById("jokes");


// add event listener

button.addEventListener("click", importJoke)

 async function importJoke () {

const config = {
    headers: {
    Accept: "application/json"
    }
}


const res = await  fetch ("https://icanhazdadjoke.com", config)
const data = await  res.json()

jokes.innerHTML = data.joke
}