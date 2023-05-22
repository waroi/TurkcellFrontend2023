class Util {
	static getRandomNumber(min, max, excludeList) {
		let randomNumber;

		do {
			randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		} while (excludeList.includes(randomNumber));

		return randomNumber;
	}

	static generateRandomNumbers(count, lenght) {
		let numbers = [];
		let excludeList = [];

		for (var i = 0; i < count; i++) {
			var randomNumber = Util.getRandomNumber(1, lenght, excludeList);
			numbers.push(randomNumber);
			excludeList.push(randomNumber);
		}

		return numbers;
	}
}
