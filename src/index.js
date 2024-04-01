const ACTIVE_TAB = 'active';
const TAB_CLASS = 'tab';
const TABS_CONTAINER = 'tabs';
const MODAL_BACKDROP = 'modal-backdrop';
const MODAL_CONTAINER = 'modal';
const MODAL_HANDLER = '[data-modal]';
const MODAL_CLOSE = '[data-close]';

// let selectedTabNode = null;

// function onTabClick(event) {
//   const self = this;
//   if (self.classList.contains(ACTIVE_TAB)) return;

//   selectedTabNode.classList.remove(ACTIVE_TAB);
//   self.classList.add(ACTIVE_TAB);
//   selectedTabNode = self;

//   console.log(event, selectedTabNode);
// }

// const initTabs = () => {
//   const element = document.getElementById('tabs');
//   selectedTabNode = element.getElementsByClassName(ACTIVE_TAB)[0];

//   Array.from(element.children).forEach((elementNode) => {
//     if (!elementNode.classList.contains(TAB_CLASS)) return;

//     elementNode.addEventListener('click', onTabClick, true);
//   });
// };

// initTabs();

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

class TabViewModel {
  constructor(indicator, monthsGratis) {
    this.indicator = indicator;
    this.monthsGratis = monthsGratis;
  }

  selectedContract = ko.observable(0);

  contractsData = [
    {
      years: 1,
      monthsGratis: 2,
      tariffs: [
        {
          title: 'Shared',
          perMonth: '179,00',
          price: '149,17',
        },
        {
          title: 'Onager',
          perMonth: '439,00',
          price: '365,83',
        },
        {
          title: 'Scorpio',
          perMonth: '879,00',
          price: '732,50',
        },
      ],
    },
    {
      years: 2,
      monthsGratis: 4,
      tariffs: [
        {
          title: 'Shared',
          perMonth: '179,00',
          price: '119,33',
        },
        {
          title: 'Onager',
          perMonth: '439,00',
          price: '292,67',
        },
        {
          title: 'Scorpio',
          perMonth: '879,00',
          price: '586,00',
        },
      ],
    },
    {
      years: 3,
      monthsGratis: 6,
      tariffs: [
        {
          title: 'Shared',
          perMonth: '179,00',
          price: '89,50',
        },
        {
          title: 'Onager',
          perMonth: '439,00',
          price: '219,50',
        },
        {
          title: 'Scorpio',
          perMonth: '879,00',
          price: '439,50',
        },
      ],
    },
    {
      years: 0,
      monthsGratis: 0,
      tariffs: [
        {
          title: 'Shared',
          perMonth: '179,00',
          price: '179,00',
        },
        {
          title: 'Onager',
          perMonth: '439,00',
          price: '439,00',
        },
        {
          title: 'Scorpio',
          perMonth: '879,00',
          price: '879,00',
        },
      ],
    },
  ];

  test = ko.observable('some test value');

  selectContract = (data, event) => {
    let context = ko.contextFor(event.target);
    let index = context.$index();
    this.selectedContract(index);
    // data.selected = !data.selected;
    console.log('selected tab =>', data, context, index);
  };
}

const tabsView = document.querySelector(`#${TABS_CONTAINER}`);

ko.applyBindings(new TabViewModel(1, 4), tabsView);

ko.components.register('contract', {
  template: `
  
  
  
  `,
});
