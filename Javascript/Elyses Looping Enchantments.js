 export function cardTypeCheck(stack, card) {
    let counter = 0;
    stack.forEach((elem) => { if (elem === card) counter += 1 });
    return counter;
  }

  export function determineOddEvenCards(stack, type) {
    let counter = 0;
    stack.forEach((elem) => {
      if (elem % 2 != type) {
        counter += 1;
      }
    });
    return counter;
  }