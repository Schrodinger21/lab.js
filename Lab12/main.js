"use strict";

function checkDogs(dogJulia, dogKate) {
  // loại bỏ hai phần tử đầu và cuối
  const newDogJulia = dogJulia.slice(1, 4);
  const dogData = newDogJulia.concat(dogKate);
  dogData.forEach((element, index) => {
    element >= 3
      ? console.log(
          `Dog number ${index + 1} is an adult, and is ${element} year old`
        )
      : console.log(`Dog number ${index + 1} is still a puppy`);
  });
}

const dogJulia = [3, 5, 2, 12, 7];
const dogKate = [4, 1, 15, 8, 3];
checkDogs(dogJulia, dogKate);

// -------------------
const dogJulia2 = [9, 16, 6, 8, 3];
const dogKate2 = [10, 5, 6, 1, 4];
checkDogs(dogJulia2, dogKate2);

// Lab 12.2

console.log("lab 12.2");
function calcAverageHumanAge(ages) {
  // dùng map để tính tuổi người cho từng phần tử tuổi trong mảng.
  const humanAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const humanAgesNew = humanAge.filter((age) => age >= 18);
  return (
    // dùng reduce để tính tổng tuổi các chú chó trưởng thành
    (
      humanAgesNew.reduce((prevAge, currage) => prevAge + currage) /
      humanAgesNew.length
    ).toFixed(2)
  );
}

const ages = [5, 2, 4, 1, 15, 8, 3];
console.log(calcAverageHumanAge(ages));
const ages2 = [16, 6, 10, 6, 6, 1, 4];
console.log(calcAverageHumanAge(ages2));

//Lab 12.3

console.log("Lab 12.3");

function calcAverageHumanAge2(ages) {
  return (
    ages
      .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter((age) => age >= 18)
      .reduce((age, ageNext) => age + ageNext, 0) /
    ages
      .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter((age) => age >= 18).length
  ).toFixed(2);
}
console.log(calcAverageHumanAge2(ages));
console.log(calcAverageHumanAge2(ages2));
