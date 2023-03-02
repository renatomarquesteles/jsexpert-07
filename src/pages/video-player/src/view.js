export default class View {
  #initButton = document.querySelector('#init')
  #statusElement = document.querySelector('#status')
  #videoFrameCanvas = document.createElement('canvas')
  #canvasContext = this.#videoFrameCanvas.getContext('2d', {
    willReadFrequently: true,
  })
  #videoElement = document.querySelector('#video')

  // Converts video into a canvas image
  getVideoFrame(video) {
    const canvas = this.#videoFrameCanvas
    const [width, height] = [video.videoWidth, video.videoHeight]
    canvas.width = width
    canvas.height = height

    this.#canvasContext.drawImage(video, 0, 0, width, height)
    return this.#canvasContext.getImageData(0, 0, width, height)
  }

  // Pause/Play video
  togglePlayVideo() {
    if (this.#videoElement.paused) {
      this.#videoElement.play()
      return
    }

    this.#videoElement.pause()
  }

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
