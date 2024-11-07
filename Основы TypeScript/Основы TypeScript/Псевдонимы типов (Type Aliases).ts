function doSomething(user: { firstName: string, lastName: number }) {}
function doSomethingElse(user: { firstName: string, lastName: number }) {}
function doSomethingAnother(user: { firstName: string, lastName: number }) {}

type User = {
  firstName: string;
  pointsCount: number;
}
function doSomething(user: User) {}
function doSomethingElse(user: User) {}
function doSomethingAnother(user: User) {}


// Типы можно задавать для любых типов данных, например, для простых:

type SomeType = string;
// А также для составных:

// union тип из трех возможных значений
type SomeType = string | number | null;

// Функция
type Countable = (coll: number[]) => number


// Описание типа функции вне объекта и внутри отличается. Когда функция записывается самостоятельно, используется формат стрелочной функции:
type Countable = (coll: number[]) => number

// Внутри типа, который описывает объект, формат меняется на используемый для обычных свойств:
type User = {
  firstName: string;
  pointsCount: number;
  count(coll: number[]): number;
}


// Но это не касается колбеков, которые могут быть использованы внутри:
type User = {
  firstName: string;
  pointsCount: number;
  // Типы взяты для примера
  count(coll: (v: string) => string): number;
}

// Задание
// Реализуйте функцию getOlderUser(), которая принимает на вход двух пользователей и возвращает того, который старше. 
// Если пользователи являются ровесниками, то возвращается null:

// const user1 = { name: 'Petr', age: 8 };

// BEGIN (write your solution here)

type User = {
    name: string,
    age:number
}


function getOlderUser(user1: User, user2: User) : User | null  {
    if (user1.age === user2.age) return null
    return user1.age > user2.age ? user1 : user2
}
// END

export type { User };
export default getOlderUser;
