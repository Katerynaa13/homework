"use strict";

function checkProbabilityTheory(count) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < count; i++) {
      let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

      if (randomNumber % 2 === 0) {
          evenCount++;
      } else {
          oddCount++;
      }
  }

  let totalNumbers = evenCount + oddCount;
  let evenPercentage = (evenCount / totalNumbers) * 100;
  let oddPercentage = (oddCount / totalNumbers) * 100;

  console.log(`Кількість згенерованих чисел: ${totalNumbers}`);
  console.log(`Кількість парних чисел: ${evenCount}`);
  console.log(`Кількість непарних чисел: ${oddCount}`);
  console.log(`Відсоток від парного до непарного: ${evenPercentage.toFixed(2)}% : ${oddPercentage.toFixed(2)}%`);
}
checkProbabilityTheory(15);