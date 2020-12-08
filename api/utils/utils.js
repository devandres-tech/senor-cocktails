const normalizeArray = (ingArray, start, middle, outputArray) => {
  if (middle === 0) return

  // get right and left sides
  let leftSide = ingArray.slice(start, middle)
  let rightSide = ingArray.slice(middle, ingArray.length)

  // create ingredient object
  if (leftSide[start] !== null || rightSide[start] !== null) {
    let ing = {}
    ing.name = leftSide[start]
    ing.measurement = rightSide[start]
    outputArray.push(ing)
  }

  // remove first item from each array
  leftSide.shift()
  rightSide.shift()
  let newArray = [...leftSide, ...rightSide]

  normalizeArray(newArray, 0, middle - 1, outputArray)
}

const normalizeIngredients = (drink) => {
  let normalizedIngredientsArray = []

  // create an array with all the drink object values
  let drinkArray = []
  for (const prop in drink) {
    drinkArray.push(drink[prop])
  }

  // get the section that includes ingredients and measurements
  const ingredientArray = drinkArray.slice(21, 51)

  normalizeArray(ingredientArray, 0, 15, normalizedIngredientsArray)
  return normalizedIngredientsArray
}

const generateRandomNumbers = (numberOfItems) => {
  let randomNumbers = []
  while (randomNumbers.length < numberOfItems) {
    const randomNumber = Math.floor(Math.random() * 284)
    if (randomNumbers.indexOf(randomNumber) === -1)
      randomNumbers.push(randomNumber)
  }
  return randomNumbers
}

export { normalizeIngredients, generateRandomNumbers }
