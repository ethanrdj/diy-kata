const numberToReversedDigits = number => {
	const s = number.toString().split("").reverse();
	return s.map(e => e * 1)
};

module.exports = numberToReversedDigits;
