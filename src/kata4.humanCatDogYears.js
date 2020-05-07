const humanCatDogYears = number => {
    const x = [];
    x[0] = number; // Human age
    
    if (number === 1) {
    x[1] = 15 // Cat age
    }
    if ( number === 2) {
    x[1] =24 // Cat age
    }
    if (number === 1) {
    x[2] = 15 // Dog age
    }
    if ( number === 2) {
    x[2] =24 // Dog age
    }
    if (number >= 3) {
    x[1] = ((number - 2) *4) +24 // Cat age
    }
    if (number >= 3) {
    x[2] = ((number - 2) *5) +24 // Dog age
    }
    return x;
    
  };

module.exports = humanCatDogYears;
