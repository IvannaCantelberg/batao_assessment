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

initModalHandler();

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

// const appView = document.querySelector(`#app`);
// ko.applyBindings(new AppViewModel(), appView);

class TabViewModel {
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

ko.components.register('contract', {
  template: `
  <div class="card-sm relative cursor-pointer hovered"
            data-bind="click: selectContract, clickBubble: false, css: {'active': isSelected() } ">
        <!-- ko ifnot: !data.monthsGratis -->
        <span class="label">
            <span data-bind="text: data.monthsGratis"></span> maanden gratis
        </span>
        <!-- /ko -->
        <div class="flex gap-4 mt-2">
            <!-- ko ifnot: !data.years -->
            <p class="count" data-bind="text: data.years"></p>
            <!-- /ko -->
            <div>
                <p class="title">Jaar contract</p>
                <p class="sub-title">Incl. verhuis service</p>
            </div>
        </div>
    </div>
  `,
  viewModel: function (params) {
    const self = this;

    self.index = params.index();
    self.data = params.data;
    self.isSelected = params.isSelected;

    selectContract = (data) => {
      params.onSelect(data.index);
    };
  },
});

const contractsView = document.querySelector(`#${TABS_CONTAINER}`);
ko.applyBindings(new TabViewModel(ContractServiceInstance), contractsView);

class TariffsViewModel {
  constructor(ContractService) {
    this.contractService = ContractService.init();

    this.contractService.getTariffsByContract().subscribe(function (data) {
      console.log('subscriber ', data);
    });
  }
}

const tariffsView = document.querySelector(`#${TARIFFS_CONTAINER}`);
ko.applyBindings(new TariffsViewModel(ContractServiceInstance), tariffsView);
