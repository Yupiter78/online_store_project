import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();

    this.elem.addEventListener('click', this.#onClick);
  }

  render() {
    this.elem = createElement(`
                              <div class="modal">
                                <div class="modal__overlay"></div>
                                <div class="modal__inner">
                                  <div class="modal__header">
                                    <button type="button" class="modal__close">
                                      <img src="../../assets/images/icons/cross-icon.svg" alt="close-icon" />
                                    </button>
                                    <h3 class="modal__title"></h3>
                                  </div>
                                  <div class="modal__body"></div>
                                </div>
                              </div>
                            `);
  }

  sub(ref) {
    return this.elem.querySelector(`.modal__${ref}`);
  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');

    this.keydownEventListener = this.#onKeyDownEscape;
    document.addEventListener('keydown', this.keydownEventListener);
  }

  #onClick = (event) => {
    if (event.target.closest('.modal__close')) {
      event.preventDefault();
      this.close();
    }
  }

  #onKeyDownEscape = (event) => {
    if (event.code === 'Escape') {
      event.preventDefault();
      this.close();
    }
  }

  setTitle(title) {
    this.sub('title').textContent = title;
  }

  setBody(node) {
    this.sub('body').innerHTML = '';
    this.sub('body').append(node);
  }

  close() {
    document.removeEventListener('keydown', this.keydownEventListener);
    document.body.classList.remove('is-modal-open');
    this.elem.remove();
  }
}
