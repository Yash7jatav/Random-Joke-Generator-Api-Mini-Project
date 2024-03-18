const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const jokeBox = document.querySelector(".joke");
const btn = document.querySelector(".btn");

const getJoke = async () => {
    let jokeResponse = await fetch(url);
    let jokeData = await jokeResponse.json();
    jokeBox.innerHTML = jokeData.joke;
}

btn.addEventListener("click", getJoke);
