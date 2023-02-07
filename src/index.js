module.exports = function toReadable(number) {
	let ones, tens, hundreds = 0;
	let onesStringsArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let tensStringsArray = ['', [
		'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
	], 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let hundredsStringsArray = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

	let numStringReversed = number.toString().split('').reverse();
	console.log(numStringReversed);

	[ones, tens, hundreds] = numStringReversed;

	let hundredsString = '';
	let tensOnesString = '';
	let tensString = '';
	let onesString = '';

	if (number == 0)
		return 'zero';
	if (number < 10)
		return onesStringsArray[ones];
	if (hundreds >= 0)
		hundredsString = hundredsStringsArray[hundreds];
	if (+(tens + ones) > 9 && +(tens + ones) < 20) {
		tensOnesString = tensStringsArray[tens][ones];
		return [hundredsString, tensOnesString].join(' ').replace(/\s+/g, ' ').trim();
	}
	if (tens >= 0)
		tensString = tensStringsArray[tens];
	if (ones >= 0)
		onesString = onesStringsArray[ones];

	return [hundredsString, tensString, onesString].join(' ').replace(/\s+/g, ' ').trim();
}