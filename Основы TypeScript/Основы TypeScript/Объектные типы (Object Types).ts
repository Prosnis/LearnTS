// Тип: { firstName: string, pointsCount: number }
const user = {
  firstName: 'Mike',
  pointsCount: 1000,
};

// Поменять тип свойств нельзя
// Type 'number' is not assignable to type 'string'.
user.firstName = 7;

// TypeScript не позволяет обращаться к несуществующим свойствам. Это значит, что структура любого объекта должна быть задана при его инициализации:
// Property 'age' does not exist on type '{ firstName: string, pointsCount: number; }'.
user.age = 100;


// Чтобы принять такой объект в функцию как параметр, нужно указать его структуру в описании функции:
// Свойства в описании типа разделяются через запятую (,)
function doSomething(user: { firstName: string, pointsCount: number }) {
  // ...
}

// Теперь внутрь можно передавать любой объект, который совпадает по свойствам:

doSomething({ firstName: 'Alice', pointsCount: 2000 });
doSomething({ firstName: 'Bob', pointsCount: 1800 });

// Так нельзя
doSomething({ firstName: 'Bob' });
// И так тоже
doSomething({ firstName: 'Bob', pointsCount: 1800, key: 'another' });

// Как и в случае примитивных типов данных, ни null, ни undefined по умолчанию не разрешены. Чтобы изменить это поведение, нужно добавить опциональность:
// firstName может быть undefined
// pointsCount может быть null
function doSomething(user: { firstName?: string, pointsCount: number | null }) {
  // ...
}


Задание
// Реализуйте функцию isComplete(), которая принимает на вход курс и определяет, завершен ли он. Завершенным считается курс, в который добавлено четыре или более уроков:

// Определите тип исходя из структуры объекта
const course = {
  name: 'Java',
  lessons: ['variables', 'functions', 'conditions'],
};
isComplete(course); // false


// BEGIN
function isComplete(course: { name: string, lessons: string[] }): boolean {
  return course.lessons.length >= 4;
}
// END

export default isComplete;
