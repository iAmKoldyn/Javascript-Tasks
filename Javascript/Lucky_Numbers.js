export function twoSum(array1, array2) {
    function arrayToNumber(numbers) {
      let numString = numbers.reduce((collector, num) => collector += String(num));
      return Number(numString);
    }
    
    return arrayToNumber(array1) + arrayToNumber(array2);
  }
  
  export function luckyNumber(value) {
    let reversedValue = Number(String(value)
                                .split('')
                                .reverse()
                                .join('')
                              );
    return value === reversedValue;
  }
  
  export function errorMessage(input) {
    if(!input) {
      return 'Required field';
    } else if(input == 0 || !Number(input)) {
      return 'Must be a number besides 0';
    } else {
      return '';
    }
  }
  