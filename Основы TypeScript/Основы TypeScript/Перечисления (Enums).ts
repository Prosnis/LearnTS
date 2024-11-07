// Перечисления используют вместо строк для постоянных значений:

enum OrderStatus {
  Created,
  Paid,
  Shipped,
  Delivered,
}

const order = {
  items: 3,
  status: OrderStatus.Created,
};

// Также перечисления после компиляции превращаются в JavaScript-объект, в котором каждому значению соответствует свойство. У этого свойства есть тип number и начинается он с 0:

const status = OrderStatus.Created;
console.log(status); // 0

// Но можно избавиться от создания дополнительных ключей, если указать строковые значения:

enum OrderStatus {
  Created = '0',
  Paid = '1',
  Shipped = '2',
  Delivered = '3',
}

const statuses = Object.keys(OrderStatus);
console.log(statuses); // ['Created', 'Paid', 'Shipped', 'Delivered']

console.log(OrderStatus); // =>
//   'Created': '0',
//   'Paid': '1',
//   'Shipped': '2',
//   'Delivered': '3'
// }

// Задание
// Реализуйте перечисление ModalStatus с двумя значениями: Opened и Closed
// Реализуйте функцию buildModal(). Он возвращает объект, который описывает модальное окно. Параметры функции:
// Текст, который должен быть внутри окна после инициализации
// Статус, с которым надо создать объект окна
// Функция возвращает объект с двумя полями: text (здесь хранится переданный текст) и status (здесь хранится переданный статус)

// BEGIN (write your solution here)
enum ModalStatus{
    Opened,
    Closed
}
function buildModal(text: string, status: ModalStatus): {text: string, status: ModalStatus}{
    return {
        text, status
    }
}
// END

export { ModalStatus };
export default buildModal;
