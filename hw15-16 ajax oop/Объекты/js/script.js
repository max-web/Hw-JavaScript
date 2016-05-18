//прототипы
function Human() {
	this.name = 'Richard';
	this.age = 25;
	this.sex = 'male';
	this.height = 175;
	this.weight = 85;
}

Worker.prototype = new Human();
Student.prototype = new Human();

function Worker() {
	this.job = 'driver';
	this.salary = 3000;
	this.work = function() {
		console.log('Метод "работать"');
	};
}

function Student() {
	this.university = 'Oxford';
	this.grants = 500;
	this.hobby = function() {
		console.log('Метод "смотреть сериалы"');
	};
}

// создание экземпляров
var worker1 = new Worker();
var worker2 = new Worker();
var worker3 = new Worker();

var student1 = new Student();
var student2 = new Student();
var student3 = new Student();


// вывод в консоль
console.log('ЭКЗЕМПЛЯРЫ ОБЪЕКТОВ:');
console.log(worker1, worker2, worker3);
console.log(student1, student2, student3);


console.log('ДОП. ПРОВЕРКА НАЛИЧИЯ СВОЙСТВ HUMAN:');
console.log('worker1.name = ', worker1.name);
console.log('student2.age = ', student2.age);

console.log('ДОП. ПРОВЕРКА МЕТОДОВ WORKER И STUDENT:');
worker1.work();
student2.hobby();