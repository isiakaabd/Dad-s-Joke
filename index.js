const button = document.querySelector("button");
const jokes = document.getElementById("jokes");


// add event listener

button.addEventListener("click", importJoke)

importJoke ()

 async function importJoke () {

        const config = {
            headers: {
            Accept: "application/json"
            }
        }
        try{

            const res = await  fetch ("https://icanhazdadjoke.com", config)
            const data = await  res.json()
            jokes.innerHTML = data.joke
        }
        catch(err){
           
            jokes.innerHTML = `Failed to Load, Please Check Your connection.<br /> <br /><br /> REMLAD`
          
        }

}