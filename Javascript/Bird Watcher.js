 export function totalBirdCount(birdsPerDay) {
    let x = 0
    for (let i = 0; i < birdsPerDay.length; i++) {
      x += birdsPerDay[i];
    }
    return x
  }

  export function birdsInWeek(birdsPerDay, week) {
    let startDay = (week - 1) * 7;
    let endDay = startDay + 7;
    let count = 0;
    for (let i = startDay; i < endDay; i++) {
      count += birdsPerDay[i];
    }
    return count;
  }
  
  
  export function fixBirdCountLog(birdsPerDay) {
    for(let i = 0; i < birdsPerDay.length; i++) {
      if (i % 2 == 0) {
        birdsPerDay[i]++
      }
    }
    return birdsPerDay
  }