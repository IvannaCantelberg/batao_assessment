const YEARS_PERIOD = 12;

const convertToNumberWithDot = (value) => {
  return value.replace(/,/g, '.');
};

class TariffService {
  constructor(settings) {
    // this.monthsAmount = YEARS_PERIOD - settings.monthsGratis;
    // this.monthPrice = parseFloat(convertToNumberWithDot(settings.perMonth));
    // this.yearlyCosts = YEARS_PERIOD * this.monthPrice;
  }

  calculate(settings) {
    const monthsAmount = YEARS_PERIOD - settings.monthsGratis;
    const monthPrice = parseFloat(convertToNumberWithDot(settings.perMonth));
    const yearlyCosts = YEARS_PERIOD * monthPrice;

    const newPrice = (monthPrice * monthsAmount) / YEARS_PERIOD;
    const savings = yearlyCosts - newPrice * YEARS_PERIOD;

    return {
      perMonth: monthPrice.toFixed(2).replace(/\./g, ','), // '179,00',
      price: newPrice.toFixed(2).replace(/\./g, ','),
      savings: savings.toFixed(2).replace(/\./g, ','),
    };
  }
}
