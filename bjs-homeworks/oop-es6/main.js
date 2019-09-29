// Задача 1
class Weapon {
	constructor(name,attack,durability,range) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.range = range;
		this.durabilityStart = durability;
		//
	}
	takeDamage(damage) {
		this.durability = this.durability - damage;
		if (this.durability < 0) {
			this.durability = 0;
		}
	}
	getDamage() {
		if (this.durability >= (0.3 * this.durabilityStart)) {
			return this.attack;
		} else if (this.durability != 0) {
			return this.attack / 2;
		} else {
			return 0;
		}
	}
	isBroken() {
		let result = this.durability ? false : true;
		return result;
	}
}

const sword = new Weapon('Меч',25,500,1);
const bow = new Weapon('Лук',10,200,3);
const arm = new Weapon('Рука',1,Infinity,1);
const knife = new Weapon('Нож',5,300,1);
const staff = new Weapon('Посох',8,300,2);
const longBow = new Weapon('Длинный лук',15,bow.durability,4);
const sekira = new Weapon('Секира',27,800,sword.range);
const stormStaff = new Weapon('Посох Бури',10,staff.durability,3);
// Задача 2
class Bow extends Weapon {
	constructor() {
		super('Лук',10,200,3);
		
	}
}
class Sword extends Weapon {
	constructor() {
		super('Меч',25,500,1);
	}
}
class Arm extends Weapon {
	constructor() {
		super('Рука',1,Infinity,1);
	}
}
class Knife extends Weapon {
	constructor() {
		super('Нож',5,300,1);
	}
}
class Staff extends Weapon {
	constructor() {
		super('Посох',8,300,2);
	}
}
class LongBow extends Weapon {
	constructor() {
		super('Длинный лук',15,bow1.durability,4);
	}
}
class Sekira extends Weapon {
	constructor() {
		super('Секира',27,800,sword1.range);
	}
}
class StormStaff extends Weapon {
	constructor() {
		super('Посох Бури',10,staff1.durability,3);
	}
}
const bow1 = new Bow();
const sword1 = new Sword();
const arm1 = new Arm();
const knife1 = new Knife();
const staff1 = new Staff();
const longBow1 = new LongBow();
const sekira1 = new Sekira();
const stormStaff1 = new StormStaff();

console.log(bow1); 
console.log(sword1); 
console.log(arm1); 
console.log(knife1); 
console.log(staff1); 
console.log(longBow1); 
console.log(sekira1); 
console.log(stormStaff1); 

