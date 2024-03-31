const ACTIVE_TAB = 'active';
const TAB_CLASS = 'tab';
const MODAL_BACKDROP = 'modal-backdrop';
const MODAL_CONTAINER = 'modal';
const MODAL_HANDLER = '[data-modal]';
const MODAL_CLOSE = '[data-close]';

let selectedTabNode = null;

function onTabClick(event) {
  const self = this;
  if (self.classList.contains(ACTIVE_TAB)) return;

  selectedTabNode.classList.remove(ACTIVE_TAB);
  self.classList.add(ACTIVE_TAB);
  selectedTabNode = self;

  console.log(event, selectedTabNode);
}

const initTabs = () => {
  const element = document.getElementById('tabs');
  selectedTabNode = element.getElementsByClassName(ACTIVE_TAB)[0];

  Array.from(element.children).forEach((elementNode) => {
    if (!elementNode.classList.contains(TAB_CLASS)) return;

    elementNode.addEventListener('click', onTabClick, true);
  });
};

initTabs();

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
