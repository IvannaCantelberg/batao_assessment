const YEARS_PERIOD = 12;

const convertToNumberToDot = (value) => {
  return value.replace(/,/g, '.');
};
const convertToNumberToComma = (value) => {
  return value.replace(/\./g, ',');
};

class TariffService {
  calculate(settings) {
    const monthsAmount = YEARS_PERIOD - settings.monthsGratis;
    const monthPrice = parseFloat(convertToNumberToDot(settings.perMonth));
    const yearlyCosts = YEARS_PERIOD * monthPrice;

    const discountedPrice = (monthPrice * monthsAmount) / YEARS_PERIOD;
    const savings = yearlyCosts - discountedPrice * YEARS_PERIOD;

    return {
      perMonth: convertToNumberToComma(monthPrice.toFixed(2)), // '179,00',
      price: convertToNumberToComma(discountedPrice.toFixed(2)),
      savings: convertToNumberToComma(savings.toFixed(2)),
    };
  }
}
