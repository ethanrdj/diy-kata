const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    //[{name:'Bart'}, {name:'Lisa'}, {name:'Maggie'}]
    expect(joinNames(["Bart", "Lisa", "Maggie"])).toBe('Bart, Lisa & Maggie');
    expect(joinNames(["Bart", "Lisa", "Maggie", "Bart"])).toBe('Bart, Lisa, Maggie & Bart');
    expect(joinNames(["Bart", "Lisa", "Maggie", "Bart", "Maggie"])).toBe('Bart, Lisa, Maggie, Bart & Maggie');
});
});