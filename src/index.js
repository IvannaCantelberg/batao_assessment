const ACTIVE_TAB = 'active';
const TAB_CLASS = 'tab';
const TABS_CONTAINER = 'tabs';
const TARIFFS_CONTAINER = 'tariffs';
const MODAL_BACKDROP = 'modal-backdrop';
const MODAL_CONTAINER = 'modal';
const MODAL_HANDLER = '[data-modal]';
const MODAL_CLOSE = '[data-close]';

const modalBackdropEl = document.getElementsByClassName(MODAL_BACKDROP)[0];
const modalEl = modalBackdropEl.getElementsByClassName(MODAL_CONTAINER)[0];
const modalCloseElHandlers = modalEl.querySelectorAll(MODAL_CLOSE);

const initModalHandler = () => {
  const handlers = document.querySelectorAll(MODAL_HANDLER);
  handlers.forEach((handler) => {
    handler.addEventListener('click', openModal, true);
  });
};

// initModalHandler();

function openModal() {
  modalBackdropEl.setAttribute('style', 'display: flex');
  modalEl.classList.add('open');
}

const hideModal = (event) => {
  if (
    event.target.classList.contains(MODAL_BACKDROP) ||
    event.target.matches(MODAL_CLOSE)
  ) {
    modalBackdropEl.setAttribute('style', 'display: none');
    modalEl.classList.remove('open');
  }
};

modalBackdropEl.addEventListener('click', hideModal, true);

modalCloseElHandlers.forEach((handler) => {
  handler.addEventListener('click', hideModal, true);
});

class App {
  bootstrap() {
    const contractsView = document.querySelector(`#${TABS_CONTAINER}`);
    ko.applyBindings(
      new ContractsViewModel(ContractServiceInstance),
      contractsView
    );

    const tariffsView = document.querySelector(`#${TARIFFS_CONTAINER}`);
    ko.applyBindings(
      new TariffsViewModel(ContractServiceInstance, TariffService),
      tariffsView
    );

    initModalHandler();
  }
}

const app = new App();
app.bootstrap();
