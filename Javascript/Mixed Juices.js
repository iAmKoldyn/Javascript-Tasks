export function timeToMixJuice(name) {
    switch (name) {
      case 'Pure Strawberry Joy':{
        return 0.5;
      }
      case 'Energizer':{
        return 1.5;
      }
      case 'Green Garden':{
        return 1.5;
      }
      case 'Tropical Island':{
        return 3.0;
      }
      case 'All or Nothing':{
        return 5.0;
      }
      default:{
        return 2.5;
      }
    }
  }

  export function limesToCut(wedgesNeeded, limes) {
    let i = 0;
    while (wedgesNeeded > 0 && i < limes.length) {
      switch(limes[i]){
        case 'small': {
          wedgesNeeded = wedgesNeeded - 6;
          break;
        }
        case 'medium': {
          wedgesNeeded = wedgesNeeded - 8;
          break;
        }
        default: {
          wedgesNeeded = wedgesNeeded - 10;
        }
      }
      i++;
    }
    return i;
  }
 
  export function remainingOrders(timeLeft, orders) {
    while (timeLeft > 0) {
      timeLeft -= timeToMixJuice(orders.shift())
    }
    return orders;
  }