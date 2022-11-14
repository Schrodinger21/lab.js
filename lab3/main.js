// Lab 3.1
// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);
// Lab 3.2
// let numNeighbours = prompt(
//   "How many neighbor countries does your country have?"
// );
// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
//   // khi use ===
//   // Giá trị trả về : No border => vì numNeighbours là type là string
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// lab 3.3
// let country = prompt("Country name");
// let isIsland = prompt("Is it an island?");
// let population = prompt("How much population?");
// let language = prompt("Use language");

const country = "Canada";
const population = 35;
const isIsland = false;
let language = "English";

if (population < 50 && language === "English" && isIsland == false) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria !!!`);
}

//Lab 3.4
switch (language) {
  case "Chinese":
    console.log(`${language}: MOST number ò native speakers!`);
    break;
  case "Spanish":
    console.log(`${language}: 2nd place in number of native speakers`);
    break;
  case "English":
    console.log(`${language}: 3rd place`);
    break;
  case "Hindi":
    console.log(`${language}: Number 4`);
    break;
  case "Arabic":
    console.log(`${language}: 5th most spoken language`);
    break;
  default:
    console.log("Great language too :D");
}

// Lab 3.5
population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

// Lab 3.6

// let scoreDolphins = (96 + 108 + 89) / 3;
// let scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);
// if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win!");
// } else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
//   console.log("Koalas win!");
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
//   console.log("Both win the trophy!");
// } else {
//   console.log("Không có đội chiến thắng!");
// }

//Bonus 1
// let scoreDolphins = (97 + 112 + 101) / 3;
// let scoreKoalas = (109 + 95 + 123) / 3;

// console.log(scoreDolphins, scoreKoalas);
// if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win!");
// } else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
//   console.log("Koalas win!");
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
//   console.log("Both win the trophy!");
// } else {
//   console.log("No one wins the trophy");
// }
//Bonus 2
let scoreDolphins = (97 + 112 + 101) / 3;
let scoreKoalas = (109 + 95 + 106) / 3;

console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
  console.log("Dolphins win!");
} else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
  console.log("Koalas win!");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy");
}

//Lab 3.6
const bill = 275;
// const bill = 40;
// const bill = 403;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
