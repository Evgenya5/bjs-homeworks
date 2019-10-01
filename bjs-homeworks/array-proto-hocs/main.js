let memory = [];
function compareArrays( arr1, arr2 ) {
	if (arr1.length != arr2.length) {
		return false;
	} else {
		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i] != arr2[i]) {
				return false;
			}
		}
	}
	return true;
}
function sum(a, b) {
	return a+b;
}
function mSum(a,b) {
	return memoize(sum,3,a,b);
} 
function memoize(fn, limit) {
	if (memory.length != 0) {
		for (let i = 0; i < memory.length; i++) {
			if (compareArrays([arguments[2],arguments[3]],memory[i].args)) {
				console.log("Элемент повторяется " + memory[i].args);
				return memory[i].result;
			}
		}
	}
	if (memory.length >= limit) {
		console.log("удаляю самый старый элемент, т.к. лимит переполнен");
		memory.shift();
	}
	memory.push({
		args: [arguments[2],arguments[3]],
		result: fn(arguments[2],arguments[3])
	});
	return fn(arguments[2],arguments[3]);
}
console.log(mSum(3,4));
console.log(mSum(3,4));
console.log(mSum(2,9));
console.log(mSum(3,5));
console.log(mSum(2,9));
console.log(mSum(2,9));
console.log(mSum(3,7));
console.log(mSum(3,4));
console.log(mSum(3,4));
console.log(mSum(3,5));
console.log(mSum(2,9));
console.log(mSum(3,5));

