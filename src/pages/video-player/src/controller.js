export default class Controller {
  #view
  #service
  #worker

  constructor({ view, service, worker }) {
    this.#view = view
    this.#service = service
    this.#worker = this.#configureWorker(worker)

    this.#view.configureOnButtonClick(this.onButtonStart.bind(this))
  }

  static async initialize(deps) {
    const controller = new Controller(deps)
    controller.log(
      'still not detecting eye blinks. Click on the button to start'
    )
    return controller.init()
  }

  #configureWorker(worker) {
    worker.onmessage = (msg) => {
      if (msg.data === 'READY') {
        this.#view.enableButton()
        return
      }
    }

    return worker
  }

  async init() {
    console.log('controller initialized')
  }

  log(text) {
    this.#view.log(`logger: ${text}`)
  }

  onButtonStart() {
    this.log('initializing blink detection...')
  }
}
