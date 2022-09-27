// function arrayDiff(a, b) {
//   if (b.length === 0) return a
//   let result = []
//   a.forEach(el1 => {
//     let flag = true
//     for (let i = 0; i < b.length; i++){
//       if(el1 === b[i]){
//         flag = false
//       } 
//     }
//     if(flag){
//       result.push(el1)
//     }
//   })
//   return result
// }



// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }


// function getSum(obj) {
//   let sum = 0
//   for (let key in obj) {
//     sum += salaries[key]
//   }
//   return sum
// }

// alert(getSum(salaries))



// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// }



// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }
// console.log(menu)

// function lovefunc(flower1, flower2){
//   if (flower1 === 0 && flower2 === 0) {
//     return false
//   } 
//   if(flower1 % flower2 === 0) {
//     return false
//   } else true
// }

// console.log(lovefunc(6, 4));
// console.log(lovefunc(2, 4));
// console.log(lovefunc(3, 4));
// console.log(lovefunc(5, 4));
// console.log(lovefunc(8, 4))

// 20 == 32 




// const arr = [1, 2, 3, 4, 5]
// function powX(array, n) {
//   return array.map(e => {
//     return e * n
//   })
// }



// function bindContext(person) {
//   return function (context) {
//     return `Name ${person}, context ${context}.`
//   }
// }

// const addLena = bindContext('lena')
// console.log(addLena('person1'));


// function barista(coffees){
//   let counter = 0
//   coffees.sort((a,b) => a - b).reduce((acc, el, i) => {
//     if (i === 0) { 
//       counter += el
//       return el 
//     }  
//     counter += el + 2 + acc
//     return el + 2 + acc
//   },0)
//   return counter
// }
// console.log(barista([20,5,4]));

// 4 4+2+5 11+2+20

// let calculator = {
//   read() {
//     this.a = +prompt('a?', 0)
//     this.b = +prompt('b?', 0)
//   },
//   sum() {
//     return this.a + this.b
//   },
//   mult() {
//     return this.a * this.b
//   }

// }





// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mult() );









// let ladder = {
//   step: 0,
//   up() {
//     this.step++
//     return this
//   },
//   down() {
//     this.step--;
//     return this
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//     return this
//   }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// ladder.up().up().down().showStep().down().showStep();



// function Calculator (a,b){
//   this.read = function () {
//     this.a = +prompt('a?', 0)
//     this.b = +prompt('b?', 0)
//   }
//   this.sum = function() {
//     return this.a + this.b
//   }
//   this.mult = function () {
//     return this.a * this.b
//   }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mult() );




// function Accumulator(startingValue) {
//   this.value = startingValue
//   this.read = function() {
//     this.value += +prompt('Сколько нужно добавить?', '0')
//   }
// }





// let accumulator = new Accumulator(123); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// alert(accumulator.value); // выведет сумму этих значений