const ACTIVE_TAB = 'active';
const TAB_CLASS = 'tab';
const TABS_CONTAINER = 'tabs';
const TARIFFS_CONTAINER = 'tariffs';
const MODAL_ID = 'modal';

class App {
  bootstrap() {
    const contractsView = document.querySelector(`#${TABS_CONTAINER}`);
    ko.applyBindings(
      new ContractsViewModel(ContractServiceInstance),
      contractsView
    );

    const tariffsView = document.querySelector(`#${TARIFFS_CONTAINER}`);
    ko.applyBindings(
      new TariffsViewModel(
        ContractServiceInstance,
        TariffService,
        ModalInstance
      ),
      tariffsView
    );

    const modalsView = document.querySelector(`#${MODAL_ID}`);
    ko.applyBindings(new ModalViewModal(), modalsView);
  }
}

const app = new App();
app.bootstrap();
