const MODAL_BACKDROP = 'modal-backdrop';
const MODAL_CONTAINER = 'modal';
const MODAL_CLOSE = '[data-close]';

const modalBackdropEl = document.getElementsByClassName(MODAL_BACKDROP)[0];
const modalEl = modalBackdropEl.getElementsByClassName(MODAL_CONTAINER)[0];
const modalCloseElHandlers = modalEl.querySelectorAll(MODAL_CLOSE);

class ModalViewModal {
  static MODAL_HANDLER = '[data-modal]';
  data = ko.observable(null);
  details = ko.computed(() => {
    if (!this.data()) return {};
    return this.data;
  });

  constructor() {
    modalBackdropEl.addEventListener('click', this.hide, true);

    modalCloseElHandlers.forEach((handler) => {
      handler.addEventListener('click', this.hide, true);
    });
  }

  mountTo(data, selector, element) {
    const handlers = document.querySelectorAll(selector || MODAL_HANDLER);
    handlers.forEach((handler) => {
      handler.addEventListener('click', () => this.open(data), true);
    });
  }

  hide(event) {
    if (
      event.target.classList.contains(MODAL_BACKDROP) ||
      event.target.matches(MODAL_CLOSE)
    ) {
      modalBackdropEl.setAttribute('style', 'display: none');
      modalEl.classList.remove('open');
    }
  }

  open(details) {
    console.log(details);
    this.data(details);
    modalBackdropEl.setAttribute('style', 'display: flex');
    modalEl.classList.add('open');
  }
}

const ModalInstance = Object.freeze(new ModalViewModal());
