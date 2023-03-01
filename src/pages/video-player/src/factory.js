import Camera from '../../../utils/camera.js'
import { supportsWorkerType } from '../../../utils/webworkers.js'
import Controller from './controller.js'
import View from './view.js'

async function getWorker() {
  if (supportsWorkerType()) {
    const worker = new Worker('./src/worker.js', { type: 'module' })

    return worker
  }

  const workerMock = {
    async postMessage() {},
    onmessage(message) {},
  }
  return workerMock
}
const worker = await getWorker()

const camera = await Camera.init()

const factory = {
  async initalize() {
    return Controller.initialize({
      view: new View(),
      worker,
      camera,
    })
  },
}

export default factory
