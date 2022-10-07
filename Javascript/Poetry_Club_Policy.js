export function frontDoorResponse(line) {

    return  line[0]}
  
  export function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.toLowerCase(word.slice(1)).substring(1)
  
  }
  
  export function backDoorResponse(line) {
  return line.trim().slice(-1)
  }
  
  export function backDoorPassword(word) {
  return frontDoorPassword(word) + ', please'
  }
  