class ContractsViewModel {
  constructor(ContractService) {
    this.contractService = ContractService.init();
    this.contractsData = this.contractService.getContracts();
  }

  selectedContract = ko.observable(0);

  onContractSelect = (index) => {
    this.selectedContract(index);
    this.contractService.setSelectedTariff(index);
  };
}
