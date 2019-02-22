function translate(string) {

	let stringArray = string.split(/\s/);
	let outArray = [];

	stringArray.forEach((element) => {

		//begins with vowel or consonant
		if (element.charAt(0).match(/^['aeiou']/i)) {
			outArray.push(`${element}ay`);
		} else {
			firstVowelndx = /[aeiou]/i.exec(element).index;
			
			//handle qu
			if (element.charAt(firstVowelndx).toLowerCase() == 'u' &&
				element.charAt(firstVowelndx - 1).toLowerCase() == 'q') {
				firstVowelndx++;
			}

			outArray.push(
				`${element.slice(firstVowelndx)}${element.slice(0, firstVowelndx)}ay`
			);

		}

	});

	return outArray.join(' ');

}

module.exports = {
	translate
}

