export default class Controller {
  constructor({}) {}

  async init() {
    console.log('controller initialized')
  }

  static async initialize(deps) {
    const controller = new Controller(deps)
    return controller.init()
  }
}
