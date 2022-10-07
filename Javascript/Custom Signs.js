 export function buildSign(occasion, name) {
    return `Happy ${occasion} ${name}!`;
  }

  export function buildBirthdaySign(age) {
    return `Happy Birthday! What a ${age < 50 ? 'young' : 'mature'} fellow you are.`;
  }

  export function graduationFor(name, year) {
    const message = `Congratulations ${name}!
  Class of ${year}`;
    return message;
  }

  export function costOf(sign, currency) {
    const cost = sign.length * 2 + 20;
    return `Your sign costs ${cost}.00 ${currency}.`;
  }
  