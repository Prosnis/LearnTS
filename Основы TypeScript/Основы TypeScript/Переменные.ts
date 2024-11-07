// Переменные и константы в TypeScript определяются так же, как и в JavaScript:

let age = 10;

let company = 'Hexlet';
let user = {
  firstName: 'Miro',
};
let fruits = ['apple', 'banana'];



// Тип переменной поменяться не может:
let age = 10;
// Все нормально, тип тот же (Number)
age = 11.1;

// Type 'string' is not assignable to type 'number'.
age = 'some string'; // Error!


// Статическая типизация накладывает ограничение на массивы. Внутри могут храниться данные только одного типа:
let items = [1, 2, 3];
items.push(4); // Все хорошо

// Argument of type 'string' is not assignable to parameter of type 'number'.
items.push('code-basics'); // Error!

// С объектами ситуация еще строже. В TypeScript нельзя не только менять тип свойств внутри объекта, но и добавлять новые свойства динамически:
let user = {
  firstName: 'Miro',
};

// Property 'lastName' does not exist on type '{ firstName: string; }'.
user.lastName = 'Smith';


// TypeScript позволяет явно указывать тип переменных. Но на практике это редко нужно делать вручную, так как вывод типов работает автоматически:
let name: string = 'Alice';
const count: number = 100;
let canPlay: boolean = true;


// По умолчанию в TypeScript переменные могут содержать только указанный тип без исключений, например, мы не можем присвоить null:
let age = 30;
age = null; // Error!


// Такое поведение защищает нас от большого числа ошибок, которые связаны с тем, что нет проверок на null. При этом null иногда является допустимым значением. В этом случае используется специальный Union Type:

let age: number | null = 30;
age = null;


// Задание
// Допишите тело функции repeat(), которая повторяет строку указанное количество раз. Функция должна возвращать полученный результат. 
// Постарайтесь не использовать встроенные методы, для такой реализации вам понадобится цикл.
function repeat(text: string, count: number) {
  // BEGIN (write your solution here)
    let result = ''
  for (let i = 0; i < count; i++) {
    result += text
  }
  return result
  // END
}

export default repeat;
