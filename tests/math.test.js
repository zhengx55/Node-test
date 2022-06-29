const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  asyncAdd,
} = require("../src/index");

// jest provides test functions globally for testing
test("Calculate Total with Tips", () => {
  const total = calculateTip(10, 0.3);
  if (total !== 3) {
    throw new Error("Calculate Total error");
  }
});

// assertion
test("Calculate Total with Tips with Assertions", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(3);
});

test("Convert Celsius to Fahrenheit", () => {
  const Fahrenheit = celsiusToFahrenheit(10);
  expect(Fahrenheit).toBe(50);
});

test("Convert Fahrenheit to Celsius", () => {
  const Fahrenheit = fahrenheitToCelsius(50);
  expect(Fahrenheit).toBe(10);
});

// test async functions
test("Async test demo", (done) => {
  setTimeout(() => {
    expect(1).toBe(1);
    done();
  }, 200);
});

test("Async test demo2", (done) => {
  asyncAdd(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});

test("Async test demo3", async () => {
  const sum = await asyncAdd(2, 3);
  expect(sum).toBe(5);
});
