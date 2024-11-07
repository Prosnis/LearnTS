// Массив — это составной тип данных, который представляет собой контейнер для другого типа. Например, 
// тип «массив чисел» или «массив строк» — это контейнеры, содержащие в себе строки или числа.

// Чтобы обозначить такой тип, используются квадратные скобки: number[], string[].

// Определение массива выше можно было бы записать так:

const fruits: string[] = ['banana', 'mango', 'apple'];
// Так же описываются типы в определении функций:

function toUpperArray(items: string[]): string[] {
  return items.map((s) => s.toUpperCase());
}
// В заключении можно сказать, что массивы могут быть полезными инструментами при работе с данными.

// Задание
// Анаграммы — это слова, которые состоят из одинаковых букв. Например:

// спаниель — апельсин
// карат — карта — катар
// топор — ропот — отпор
// Реализуйте функцию filterAnagrams(), которая находит все анаграммы слова. 
// Функция принимает исходное слово и список для проверки — массив. А возвращает функция массив всех анаграмм. 
// Если в списке нет анаграммы, то возвращается пустой массив:

filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']

filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']

filterAnagrams('laser', ['lazing', 'lazy',  'lacer']);
// []

// BEGIN (write your solution here)

// END
function filterAnagrams(word : string, list : string[]) : string[] {
    const result = []
    for (let item of list) {
        if (key.length == word.length) {
            let keyword = item.split('').sort((a,b) =>  a.localeCompare(b)).join('')
            let wordSorted = word.split('').sort((a,b) =>  a.localeCompare(b)).join('')
            if(keyword == wordSorted) {
                result.push(key)
            }
        } else {
            continue
        }
    }
    return result.length ?  result : []
}
export default filterAnagrams;
