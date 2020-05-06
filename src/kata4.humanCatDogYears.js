const humanCatDogYears = number => {
const x = [];
x[0] = number;

if (number === 1) {
    x[1] = 15
}
if ( number === 2) {
    x[1] =24
}
if (number === 1) {
    x[2] = 15
}
if ( number === 2) {
    x[2] =24
}
if (number >= 3) {
    x[1] = ((number - 2) *4) +24
}
if (number >= 3) {
    x[2] = ((number - 2) *5) +24
}
return  x;
};

module.exports = humanCatDogYears;
