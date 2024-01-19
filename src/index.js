console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const dogPics = document.getElementById("dog-image-container");
const dogBreeds = document.getElementById("dog-breeds");
const dogList = document.querySelectorAll("#dog-breeds li")


// const ul = document.querySelector('ul')
const li = document.createElement('li')

const init = () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((data) => 
        data.message.forEach(imgUrl => {
            const imageElement = document.createElement('img')
            imageElement.src = imgUrl
            dogPics.appendChild(imageElement)
        })
    )
    return fetch("https://dog.ceo/api/breeds/list/all")
        .then((resp) => resp.json())
        .then((data) => {
        const breedArray = Object.keys(data.message)
        breedArray.forEach(breed => {
            const li = document.createElement('li')
            li.textContent = breed
            dogBreeds.appendChild(li)

        const dogList = document.querySelectorAll("#dog-breeds li")
        dogList.forEach((dog) => {
            dog.addEventListener("click", () => {
            dog.style.color = "green"
    })
})
        })
        const breedDropDown = document.getElementById("breed-dropdown")
        breedDropDown.addEventListener("change", (event) => {
        const selectedLetter = event.target.value
        console.log("filter")

        dogBreeds.innerHTML = "";

        const filteredBreeds = Object.keys(data.message).filter((breed) =>
            breed.startsWith(selectedLetter)
);
        
        filteredBreeds.forEach(breed => {
            const breedItem = document.createElement('li');
            breedItem.textContent = breed;
            dogBreeds.appendChild(breedItem)
        })
})
        });
   
    }
// add event listener to each dropdown letter option
// it will be a  click event
// the callback will be a function that displays only the dog breeds from the main list that start with that letter
// const breedDropDown = document.getElementById("breed-dropdown")
// breedDropDown.addEventListener("change", (event) => {
//     const selectedLetter = event.target.value
//     console.log("filter")

//     breedArray.textContent = "";
//     const filteredBreeds = breedArray.filter(dog =>
//         dog.startsWith(selectedLetter))
//         filteredBreeds.forEach(breed => {
//             const dogItem = document.createElement('li');
//             dogItem.textContent = breed;
//             breedArray.appendChild(dogItem)
//         })
// })
    
document.addEventListener("DOMContentLoaded", init)

// const dogList = document.querySelectorAll("#dog-breeds li")
// dogList.forEach((dog) => {
//     dog.addEventListener("click", () => {
//         dog.style.color = "yellow"
//         console.log("woof")
//     })
// })
