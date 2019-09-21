function getSolutions(a,b,c) {
	let D = Math.pow(b,2) - 4 * a * c;
	let x1, x2;
	if (D < 0) {
		return {D: D};
	} else if (D == 0) {
		x1 = - b / (2 * a);
		return {
			roots: [x1], 
			D: D
		};
	} else {
		x1 = (- b + Math.sqrt(D)) / (2 * a);
		x2 = (- b - Math.sqrt(D)) / (2 * a);
		return {roots: [x1,x2], D: D}
	}
}

function showSolutionsMessage(a,b,c) {
	let result = getSolutions(a,b,c);
	let k = 0;
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	for (let i in result) {
		k++;
	}
	if (k == 1) {
		console.log("Уравнение не имеет вещественных корней");
	} else if (result.roots.length == 1) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
	} else {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}
}
showSolutionsMessage(1,2,3);
showSolutionsMessage(7,20,-3);
showSolutionsMessage(2,4,2);

function getAverageScore(data) {
	let arrayOfAvarageMarks = [];
	let i = 0;
	let averageScore = {};
	for (let subject in data) {
		averageScore[subject] = getArrayAverage(data[subject]);
		//console.log(`${subject}: ${getArrayAverage(data[subject])}`);
        arrayOfAvarageMarks[i] = getArrayAverage(data[subject]);
        i++;
	}
	//console.log(`average: ${getArrayAverage(arrayOfAvarageMarks)}`);
	averageScore.average = getArrayAverage(arrayOfAvarageMarks);
	console.log(averageScore);
}
function getArrayAverage(arr) {
	let sum = 0;
	for (let value of arr) {
		sum += value;
	}
	return sum / arr.length;
}
console.log( getAverageScore({
	algebra: [2, 4, 5,2,3,4],
	geometry: [2,4,5],
	russian: [3,3,4,5],
	physics: [5,5],
	music: [2,2,6],
	english: [4,4,3],
	poetry: [5,3,4],
	chemistry: [2],
	french: [4,4]
}));

function getPersonData(secretData) {
	let person = {};
	for (let code in secretData) {
		if (code == "aaa") {
			person.firstName = getName(secretData[code]);
		} else {
			person.lastName = getName(secretData[code]);
		}
	}
	return person;
}
function getName(number) {
	if (number == 0) {
		return "Родриго";
	} else {
		return "Эмильо";
	}
}
console.log(getPersonData({
	aaa: 0,
	bbb: 0
}));
console.log(getPersonData({
	aaa: 1,
	bbb: 0
}));
console.log(getPersonData({
	aaa: 0,
	bbb: 1
}));
console.log(getPersonData({
	aaa: 1,
	bbb: 1
}));