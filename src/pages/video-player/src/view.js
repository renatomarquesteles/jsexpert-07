export default class View {
  #initButton = document.querySelector('#init')
  #statusElement = document.querySelector('#status')

  enableButton() {
    this.#initButton.disabled = false
  }

  configureOnButtonClick(fn) {
    this.#initButton.addEventListener('click', fn)
  }

  log(text) {
    this.#statusElement.innerHTML = text
  }
}
