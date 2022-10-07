 export function translate2d(dx, dy) {
    return (x, y) => [x+dx, y+dy];
  }

  export function scale2d(sx, sy) {
     return (x, y) => [x*sx, y*sy];
  }
  
  export function composeTransform(f, g) {
     return function (x, y) {
     let resultF = f(x,y); 
     let resultG = g(resultF[0],resultF[1]);
     return resultG; 
    };
  }
  
  export function memoizeTransform(f) {
    let lastX, lastY, lastResult;
    return function memoized(x, y) {
      if (lastX === x && lastY === y) {
        return lastResult;
      }
      lastX = x;
      lastY = y;
      return (lastResult = f(x, y));
    };
  }
  
  
  