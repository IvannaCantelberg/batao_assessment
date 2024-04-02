const MODAL_HANDLER = '[data-modal]';
class TariffsViewModel {
  constructor(ContractService, TariffService, ModalComponent) {
    this.modal = ModalComponent;

    this.contractService = ContractService.init();
    this.tariffService = new TariffService();
    let contract = this.contractService.getInitialTariffsByContract();
    if (contract) {
      this.selectedYears = ko.observable(contract.years);
      this.tariffsData = ko.observable(this.calculateTariff(contract));
    }

    this.tariffsDetails = this.contractService.getTariffsDetails();

    this.onInit();
  }

  onInit() {
    this.contractService.getTariffsByContract().subscribe((contractData) => {
      this.selectedYears(contractData.years);
      this.tariffsData(this.calculateTariff(contractData));
    });
  }

  renderedHandler = (elements, data, event) => {
    console.log(elements, data, event);
    // let el = elements.find((el) => {
    //   return !!el.querySelectorAll(selector);
    // });
    // console.log(el);
    this.modal.mountTo(data, MODAL_HANDLER, elements);
  };

  calculateTariff = (contract) => {
    return contract.tariffs.map((item) => {
      let data = this.tariffService.calculate({
        monthsGratis: contract.monthsGratis,
        perMonth: item.perMonth,
      });

      return { ...item, ...data };
    });
  };
}
