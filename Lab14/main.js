const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data) {
  const html = `
    <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
        </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

function whereAmI(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(function (response) {
      if (!response.ok) throw new Error(`Error code: ${response.status}`);
      return response.json();
    })
    .then(function (data) {
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(function (response) {
      if (!response.ok) throw new Error(`Error code: ${response.status}`);
      return response.json();
    })
    .then(function (data) {
      renderCountry(data[0]);
    })
    .catch((err) => console.error(`Error: ${err.message}`));
}
setTimeout(function () {
  whereAmI(52.585, 13.381);
}, 1000);
setTimeout(function () {
  whereAmI(19.037, 72.873);
}, 2000);
setTimeout(function () {
  whereAmI(-33.933, 18.474);
}, 3000);
