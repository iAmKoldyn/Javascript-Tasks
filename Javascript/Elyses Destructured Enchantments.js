
 export function getFirstCard(deck) {
    const [firstCard] = deck
    return firstCard
  }

  export function getSecondCard(deck) {
    const [firstCard, secondCard] = deck
    return secondCard
  }

  export function swapTopTwoCards(deck) {
    const [firstCard, secondCard, ...rest] = deck
    return [secondCard, firstCard, ...rest]
  }
 
  export function discardTopCard(deck) {
    const [firstCard, ...rest] = deck
    return [firstCard, [...rest]]
  }
  const FACE_CARDS = ['jack', 'queen', 'king'];

  export function insertFaceCards(deck) {
    const [firstCard, ...rest] = deck
    return [firstCard,...FACE_CARDS, ...rest]
  }
  