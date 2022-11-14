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

console.log(`Đức: ${percentageOfWorld3(66).toFixed(2) + "%"}`);

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
