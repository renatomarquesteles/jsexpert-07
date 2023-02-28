export default class Camera {
  constructor() {
    this.video = document.createElement('video')
  }

  static async init() {
    // Checks if browser has camera support
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error(
        `Browser API navigator.mediaDevices.getUserMedia not available`
      )
    }

    const videoConfig = {
      audio: false,
      video: {
        width: globalThis.screen.availWidth,
        height: globalThis.screen.availHeight,
        frameRate: {
          ideal: 60,
        },
      },
    }

    // Gets camera video source
    const stream = await navigator.mediaDevices.getUserMedia(videoConfig)
    const camera = new Camera()

    camera.video.srcObject = stream
    camera.video.width = 320
    camera.video.height = 240
    camera.video.className = 'cam'

    // Inserts the camera video in the HTML
    document.body.append(camera.video)

    // Waits for the camera video to be ready
    await new Promise((resolve) => {
      camera.video.onloadedmetadata = () => {
        resolve(camera.video)
      }
    })

    camera.video.play()

    return camera
  }
}
