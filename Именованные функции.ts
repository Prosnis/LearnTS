
// Обязательный параметр
function getGreetingPhrase(name: string) {
  return `Hello, ${name.toUpperCase()}!`;
}

// Expected 1 arguments, but got 0.
getGreetingPhrase();

//Необязательный параметр

function getGreetingPhrase(name?: string) {
  return `Hello, ${name ? name.toUpperCase() : 'Guest'}!`;
}

getGreetingPhrase('Mike'); // Hello, MIKE!
getGreetingPhrase(); // Hello, Guest!


//Значение по умолчанию
//  Со значением по умолчанию не нужно ничего указывать дополнительно. Значение задается как в JavaScript. Сама переменная автоматически становится необязательной, и тип выводится, исходя из переданного значения:

function getGreetingPhrase(name = 'Guest') {
  return `Hello, ${name.toUpperCase()}!`;
}

getGreetingPhrase() // Hello, GUEST!

// Тип возвращаемого значения

// Во многих случаях TypeScript выводит тип возвращаемого значения самостоятельно, но его можно указывать явно:

function getGreetingPhrase(name: string): string {
  return `Hello, ${name.toUpperCase()}!`;
}

// Задание
// Реализуйте функцию getHiddenCard(). Она принимает на вход номер кредитки, который состоит из 16 цифр, 
// в виде строки и возвращает его скрытую версию. Эта версия может использоваться на сайте для отображения. Например, 
// если номер исходной карты был 2034399002125581, то скрытая версия выглядит так: ****5581.

// Получается, функция заменяет первые 12 символов на звездочки. Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию — 4.

// BEGIN (write your solution here)
function getHiddenCard(string : string, count = 4) {
    let phrase = string.slice(-4)
    let stars = ''
    while(count > 0) {
        stars+= '*'
        count--
    }
    return stars + phrase
}
// END

export default getHiddenCard;
