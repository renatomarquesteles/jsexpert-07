import Camera from '../../../utils/camera.js'
import { supportsWorkerType } from '../../../utils/webworkers.js'
import Controller from './controller.js'
import Service from './service.js'
import View from './view.js'

async function getWorker() {
  if (supportsWorkerType()) {
    console.log('initializing esm workers')
    const worker = new Worker('./src/worker.js', { type: 'module' })

    return worker
  }

  console.warn('Your browser does not support esm modules on web workers!')
  console.warn('Importing libraries...')
  await import('https://unpkg.com/@tensorflow/tfjs-core@2.4.0/dist/tf-core.js')
  await import(
    'https://unpkg.com/@tensorflow/tfjs-converter@2.4.0/dist/tf-converter.js'
  )
  await import(
    'https://unpkg.com/@tensorflow/tfjs-backend-webgl@2.4.0/dist/tf-backend-webgl.js'
  )
  await import(
    'https://unpkg.com/@tensorflow-models/face-landmarks-detection@0.0.1/dist/face-landmarks-detection.js'
  )
  console.warn('using worker mock instead')
  const service = new Service({
    faceLandmarksDetection: window.faceLandmarksDetection,
  })

  const workerMock = {
    async postMessage(video) {
      const blinked = await service.headBlinked(video)
      if (!blinked) return
      workerMock.onmessage({ data: { blinked } })
    },
    // onmessage will be overwritten by the controller
    onmessage(message) {},
  }

  console.log('Loading TF model')
  await service.loadModel()
  console.log('TF model loaded successfully')

  setTimeout(() => {
    worker.onmessage({ data: 'READY' })
  }, 200)

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
