// Checks if the browser has javascript modules support for web workers
export function supportsWorkerType() {
  let supports = false

  // If the browser calls the "type" property then it is supported
  const tester = {
    get type() {
      supports = true
    },
  }

  try {
    // "blob://" is used to avoid an useless network request
    // terminate is called to avoid that an empty worker keeps running in the background
    new Worker('blob://', tester).terminate()
  } finally {
    return supports
  }
}
