const joinNames = namesObj => {
const x = namesObj.map(e => e.toString());
x.pop();
return `${x.join(", ")} & ${namesObj.pop()}`
};

module.exports = joinNames;
