"use strict";
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
	if (isNaN(parseInt(percent))) {
		console.log(`Параметр percent содержит неправильное значение ${percent}`);
	}
	if (isNaN(parseInt(contribution))) {
		console.log(`Параметр contribution содержит неправильное значение ${contribution}`);
	}
	if (isNaN(parseInt(amount))) {
		console.log(`Параметр amount содержит неправильное значение ${amount}`);
	}
	if (isNaN(parseInt(date))) {
		console.log(`Параметр date содержит неправильное значение ${date}`);
	}
	percent = parseInt(percent);
	contribution = parseInt(contribution);
	amount = parseInt(amount);
	date = parseInt(date);
	let s = amount - contribution;
	let p = percent / 100 / 12;
	let n = (date - 2019) * 12;
	let payment = 0;
	let totalAmount = 0;
	for (let i = 1; i <= n; i++) {
		payment = s *(p + p / ((Math.pow(1 + p, n)) - 1));
		totalAmount = totalAmount + payment;
	}
    console.log(totalAmount);
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
	if ((typeof name === "undefined") || (name === "")) {
		name = "Аноним"
	}
	let greeting = `Привет, мир! Меня зовут ${name}.`;
	console.log(greeting);
    return greeting;
}