console.log('%c HI', 'color: firebrick')

console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        addImage(myJson);
    });
  });

function addImage(message) {
    let container = document.getElementById('dog-image-container');
    message.message.forEach(url => {
        let element = document.createElement('img')
        element.src = url;
        container.appendChild(element)
    });
}

document.addEventListener("DOMContentLoaded", function() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
        return response.json();
    })
    .then((myJson) => { 
        addBreed(myJson);
    });
});

function addBreed(message) {
    let container = document.getElementById("dog-breeds");
    console.log(message.message);

    for (const breed in message.message) {
        let element = document.createElement('li')
        element.innerHTML = breed
        container.appendChild(element)
        element.addEventListener("click", function() {
            element.style.color = "red";
        })
    }
}



document.addEventListener("DOMContentLoaded", function() {
    let dropdown2 = document.getElementById("breed-dropdown")

    dropdown2.addEventListener("change", filterBreeds)
})

function filterBreeds(e) {
    let breeds = document.querySelectorAll('li')
    console.log('getting dogs starting with' + " " + e.target.value)
    for(let i = 0; i < breeds.length; i++){
        if (breeds[i].innerText.startsWith(e.target.value)) {
            breeds[i].style.display = "block"
        } else {
            breeds[i].style.display = "none"
        }

    }
}

// if starts with value, style display block 
// else style display none 