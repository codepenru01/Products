"use strict";

let btn = document.querySelector("#btn");
btn.addEventListener("click", getPost);
let con = 0;
let div = document.querySelector("#cardDiv");

function getPost() {
    fetch(`https://fakestoreapi.com/products`)
    .then((res) => {
        return res.json()
    })
    .then((post) => {
        for (let index = 0; index < 1; index++) {
            div.innerHTML = `
            <div class="card col-3 m-1 mx-auto">
                <img class="card-img-top" src="${post[con].image}" width="300px" height="350px">
                <div class="card-body">
                    <h5 class="card-title text-center text-danger">${post[con].id}</h5>
                    <hr>
                    <p class="card-text text-center">${post[con].title}</p>
                    <hr>
                    <h4 class="text-primary text-center">${post[con].price}</h4>
                    <hr>
                    <h6 class="text-center">${post[con].description}</h6>
                    <hr>
                    <h6 class="text-center">${post[con].category}</h6>
                    <hr>
                    <h2 class="text-center">${post[con].rating.rate}</h2>
                    <hr>
                    <h2 class="text-center">${post[con].rating.count}</h2>
                </div>
            </div>
            `
            con = con + 1;
        }
    })
    .catch((error) => {
        console.log(error);
    })
}