const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours.");
    expect(reachDestination(100, 18)).toEqual("I should be there in 6 hours.");
    expect(reachDestination(220, 65)).toEqual("I should be there in 3.5 hours.");
    expect(reachDestination(555, 80)).toEqual("I should be there in 7 hours.")
  });
});
