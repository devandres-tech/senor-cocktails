const generateRandomNumbers = (numberOfItems) => {
  let randomNumbers = []
  while (randomNumbers.length < numberOfItems) {
    const randomNumber = Math.floor(Math.random() * 284)
    if (randomNumbers.indexOf(randomNumber) === -1)
      randomNumbers.push(randomNumber)
  }
  return randomNumbers
}

export { generateRandomNumbers }
