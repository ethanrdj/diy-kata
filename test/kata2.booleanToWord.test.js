const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it('returns the boolean true as a string of Yes', () => {
    expect(booleanToWord(true)).toBe('Yes');
  })

  it('returns the boolean true as a string of Yes', () => {
    expect(booleanToWord(false)).toBe('No');
  })
});
