export default class Controller {
  #view
  #service

  constructor({ view, service }) {
    this.#view = view
    this.#service = service

    this.#view.configureOnButtonClick(this.onButtonStart.bind(this))
  }

  async init() {
    console.log('controller initialized')
  }

  static async initialize(deps) {
    const controller = new Controller(deps)
    controller.log(
      'still not detecting eye blinks. Click on the button to start'
    )
    return controller.init()
  }

  log(text) {
    this.#view.log(`logger: ${text}`)
  }

  onButtonStart() {
    this.log('initializing blink detection...')
  }
}
