export default class Controller {
  #view
  #worker
  #camera
  #blinkCounter = 0

  constructor({ view, worker, camera }) {
    this.#view = view
    this.#camera = camera
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
    let ready = false

    worker.onmessage = ({ data }) => {
      if (data === 'READY') {
        console.log('worker is ready')
        this.#view.enableButton()
        ready = true
        return
      }

      const blinked = data.blinked
      this.#blinkCounter += blinked
      console.log('blinked', blinked)
    }

    return {
      send(msg) {
        if (!ready) return

        worker.postMessage(msg)
      },
    }
  }

  async init() {
    console.log('controller initialized')
  }

  loop() {
    const video = this.#camera.video
    const image = this.#view.getVideoFrame(video)

    this.#worker.send(image)
    this.log(`detecting eye blink...`)

    setTimeout(() => this.loop(), 100)
  }

  log(text) {
    this.#view.log(`logger: ${text}`)
  }

  onButtonStart() {
    this.log('initializing blink detection...')
    this.#blinkCounter = 0
    this.loop()
  }
}
