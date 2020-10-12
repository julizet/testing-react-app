// @ts-check
// lesson is shamelessly plugged from testingjsvascript.com
const { sum, subtract, sumAsync, subtractAsync } = require("./math.js");

// test       a + b  = c
// test       a - b  = c
// async test a + b  = c
// async test a - b  = c

// um doppelten Code zu vermeiden
// eine Funktion zum testen von allen math Functions

function expect(actual) {
  return {
    toBe(expected) {
      if (actual != expected) {
        throw new Error(`${actual} not equal to ${expected}`);
      }
    },
  };
}

// damit alle Errors bei mehr als einem Error geworfen werden
// eine test Funktion für alle Funktionen
async function test(title, callback) {
  try {
    await callback();
    console.log(`✓ passed: ${title}`);
  } catch (error) {
    console.log(`⨉ not passed: ${title}`);
    console.log(error);
  }
}

test("should add 3 and 7 and give us 10", async () => {
  expect(await sumAsync(3, 7)).toBe(10);
});

test("should subtract 5 and 3 and give us 2", async () => {
  expect(await subtractAsync(5, 3)).toBe(2);
});

// by running assertions on the functions above

// let result = sum(3, 7);
// let expected = 10;

// if (result != expected) {
//   throw new Error(`${result} not equal to ${expected}`);
// }

// let result2 = subtract(5, 4);
// let expected2 = 1;

// if (result2 != expected2) {
//   throw new Error(`${result2} not equal to ${expected2}`);
// }
