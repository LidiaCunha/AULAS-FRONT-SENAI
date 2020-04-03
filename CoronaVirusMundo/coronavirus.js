"use strict";

let DB = [
    {
        "country_name": "PAIS",
        "cases": "<div class='spinner green'></div>",
        "deaths": "<div class='spinner purple'></div>"
    }
];

const showData = (data) => {
    const panel = `
        <div class="estado">
            ${data.country_name}
        </div>

        <div class="card confirmados">
            <div class="numeros"> ${data.cases} </div>
            <div class="titulos"> CONFIRMADOS </div>
        </div>

        <div class="card mortes">
            <div class="numeros"> ${data.deaths} </div>
            <div class="titulos"> MORTES </div>
        </div>

    `;

    const $container = document.createElement("div");
    $container.innerHTML = panel;

    const $info = document.getElementById("info");
    $info.removeChild($info.firstChild);
    $info.appendChild($container);
}

const getCoronaCountry = async () => {
    const url = "https://corona.lmao.ninja/countries?sort=country";
    const getApi = await fetch(url);
    const json = await getApi.json();
    DB = json;
}

const findCountry = (evento) => {
    let countryMap = evento.target.id;
    
    const getCountry = DB.find(country => country.countryInfo.iso2 == countryMap? country:"");

    console.log(getCountry);
    const country = {
        "country_name": getCountry.country,
        "cases": getCountry.cases,
        "deaths": getCountry.deaths
    };

    showData(country);
}

document.querySelector("svg").addEventListener("click", findCountry);

showData(DB[0]);

getCoronaCountry();