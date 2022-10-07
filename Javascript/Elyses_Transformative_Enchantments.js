 export function seeingDouble(deck) {
    return deck.map(card => card * 2)
  }
 
    export function threeOfEachThree(deck) {
      return deck.reduce(
        (newArray, card) => {
          if(card === 3) {
            newArray.push(card,card,card)
        } else {
          newArray.push(card)
          }
          return newArray
        }, []
      )
    }
 
  export function middleTwo(deck) {
    return deck.slice(4,6)
  }

    export function sandwichTrick(deck) {
      const pop = deck.pop()
      const shift = deck.shift()
      deck.splice(deck.length / 2, 0, pop, shift)
      return deck
    }

  export function twoIsSpecial(deck) {
    return deck.filter(card => card === 2)
  }

  export function perfectlyOrdered(deck) {
    return deck.sort((a,b) => a - b)
  }

  export function reorder(deck) {
    return deck.reverse()
  }