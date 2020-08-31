const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src = "logo.png";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // Work with JSON data here
        data.forEach((movie) => {
            const card = document.createElement("div");
            card.setAttribute("class", "card");

            const h1 = document.createElement("h1");
            h1.textContent = movie.title;

            const p = document.createElement("p");

            movie.description = movie.description.slice(0, 300);
            p.textContent = `${movie.description}...`;

            container.appendChild(card);

            card.appendChild(h1);
            card.appendChild(p);
        });
    })
    .catch((err) => {
        // Do something for an error here
        const errorMessage = document.createElement("marquee");
        errorMessage.textContent = "Uy da, its not working :')";
    });

// var request = new XMLHttpRequest();

// request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
// request.onload = function () {
//     // Begin accessing JSON data here
//     var data = JSON.parse(this.response);

//     if (request.status >= 200 && request.status < 400) {
//         data.forEach((movie) => {
//             console.log(movie.title);
//         });
//     } else {
//         console.log("error");
//     }
// };

request.send();
