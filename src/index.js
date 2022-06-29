const calculateTip = (total, tipPercent) => {
  const tip = total * tipPercent;
  return tip;
};

const fahrenheitToCelsius = (temperture) => {
  return (temperture - 32) / 1.8;
};

const celsiusToFahrenheit = (temperture) => {
  return temperture * 1.8 + 32;
};

const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 200);
  });
};

module.exports = {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  asyncAdd,
};
