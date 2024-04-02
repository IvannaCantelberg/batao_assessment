class TariffsViewModel {
  constructor(ContractService, TariffService) {
    this.contractService = ContractService.init();
    this.tariffService = new TariffService();
    let contract = this.contractService.getInitialTariffsByContract();
    if (contract) {
      this.selectedYears = ko.observable(contract.years);
      this.tariffsData = ko.observable(this.calculateTariff(contract));
    }

    this.tariffsDetails = this.contractService.getTariffsDetails();

    this.contractService.getTariffsByContract().subscribe((contractData) => {
      this.selectedYears(contractData.years);
      this.tariffsData(this.calculateTariff(contractData));
    });
  }

  calculateTariff(contract) {
    return contract.tariffs.map((item) => {
      let data = this.tariffService.calculate({
        monthsGratis: contract.monthsGratis,
        perMonth: item.perMonth,
      });

      return { ...item, ...data };
    });
  }
}
