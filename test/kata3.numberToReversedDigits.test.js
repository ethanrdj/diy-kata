const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(24680)).toEqual([0, 8, 6, 4, 2]);
    expect(numberToReversedDigits(73647)).toEqual([7, 4, 6, 3, 7]);
  });
});
