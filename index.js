function forEach(array, callbackFunction) {
  for (let element of array) {
    callbackFunction(element)
  }
}

const names = ['Emily', 'Dave', 'Jessica']

forEach(names, (name) => console.log(`Hello, ${name}!`))
