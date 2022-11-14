// Lab 4.1
function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`
  );
}
describeCountry("Việt Nam", 98, "Hà Nội");
describeCountry("Japan", 30, "Tokyo");
describeCountry("China", 1441, "Bắc Kinh");

// Lab 4.2
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
console.log(`Việt Nam: ${percentageOfWorld1(98).toFixed(2) + "%"}`);
console.log(`Japan: ${percentageOfWorld1(30).toFixed(2) + "%"}`);
console.log(`China: ${percentageOfWorld1(1441).toFixed(2) + "%"}`);

// vd 2
function percentageOfWorld2(population) {
  return (population / 7900) * 100;
}
console.log(`Korea: ${percentageOfWorld2(60).toFixed(2) + "%"}`);
console.log(`Finland: ${percentageOfWorld2(6).toFixed(2) + "%"}`);
console.log(`Canada: ${percentageOfWorld2(110).toFixed(2) + "%"}`);

// Lab 4.3
const percentageOfWorld3 = (population) => (population / 7900) * 100;

console.log(`Nga: ${percentageOfWorld3(220).toFixed(2) + "%"}`);

console.log(`Germany: ${percentageOfWorld3(66).toFixed(2) + "%"}`);

console.log(`Poland: ${percentageOfWorld3(12).toFixed(2) + "%"}`);

// Lab 4.4
const describePopulation = (country, population) =>
  console.log(
    `${country} has ${population} million people, which is about ${percentageOfWorld1(
      population
    ).toFixed(1)}% of the world`
  );
describePopulation("ThaiLand", 110);
describePopulation("Hà Lan", 50);
describePopulation("Na uy", 88);

/*Array */

// Lab 4.5
const populations = [98, 1441, 39, 88];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]).toFixed(1),
  percentageOfWorld1(populations[1]).toFixed(1),
  percentageOfWorld1(populations[2]).toFixed(1),
  percentageOfWorld1(populations[3]).toFixed(1),
];
console.log(percentages);

// Lab 4.6

const neighbours = ["China", "Lao", "Campuchia"];

neighbours.push("Utopia");
console.log("push: ", neighbours);

neighbours.pop();
console.log("Pop: ", neighbours);

neighbours.indexOf("Germany") === -1
  ? console.log("Probably not a central European country :D")
  : console.log("Ok");

const index = neighbours.indexOf("Lào");
neighbours[index] = "Thailand";
console.log(neighbours);

//Lab 4.7

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win ${avgDolphins} vs ${avgKoalas}`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win ${avgKoalas} vs ${avgDolphins}`;
  } else {
    return "No team wins...";
  }
};

// test 1
console.log(checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49)));
// test 2
console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)));

//Lab 4.7

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0, 2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0] + bills[1] + tips[1] + bills[2] + tips[2]];
console.log(bills, tips, totals);
