function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
	let now = Date.now();
	let birthdayDate = new Date();
	birthdayDate.setFullYear(parseInt(birthday.slice(0, 4)));
	birthdayDate.setMonth(parseInt(birthday.slice(5, 7))-1);
	birthdayDate.setDate(parseInt(birthday.slice(8, 10)));
	let diff = now - (+birthdayDate);
	let age = diff / 31536000000;
	console.log(age);
	if (age >= 18) {
		return 1;
	} else {
		return 0;
	}

}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
	let sound;
	if (typeof animal === "undefined") {
		return null;
	} else {
		return sound = animal.sound;
	}
    
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
	console.log(marks);
	let roundedAverage;
	let sum = 0;
	for (let value of marks) {
		sum += parseInt(value);
	}
	console.log(sum);
	roundedAverage = Math.round(sum / marks.length);
	return roundedAverage;
    
}