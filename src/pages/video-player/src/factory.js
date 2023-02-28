import Camera from '../../../utils/camera.js'
import Controller from './controller.js'
import Service from './service.js'
import View from './view.js'

// const [rootPath] = window.location.href.split('/pages/')

const camera = await Camera.init()

const factory = {
  async initalize() {
    return Controller.initialize({
      view: new View({}),
      service: new Service({}),
    })
  },
}

export default factory
