# ITGirlsHomeworkW19

1. Чем отличается класс от объекта? Приведите примеры и того, и другого, отличные от указанных в уроке.
   Класс - это шаблон, по кторорому мы создаём объект. Класс представляет описание объекта, его состояния и поведения, а объект является конкретным воплощением или экземпляром класса.
2. Приведите примеры объектно-ориентированного подхода в реальной жизни.
   класс - платье, его свойствами будут ткань, выкройка, пуговицы, нитки
   класс - чашка, свойства - материал, объем, размер
   Приведите примеры объектно-ориентированного подхода в программировании.
   создание нового предмета в онлайн-магазине: класс - товар, свойства - название, наличие, цена
3. Что такое конструктор? Самостоятельно изучите и напишите, какие бывают виды конструкторов.
   Конструктор - это метод для создания объектов, созданных с использованием class. Это специальные функции, которые позволяют инициализировать свойства объекта до создания. Объекты, созданные с помощью конструктора, уникальны. Поэтому каждому объекту после создания можно отдельно добавлять свойства, которых не было в конструкторе.
   В JS есть встроенные конструкторы. Они используются для создания строки, объекта, числа, булевого значения. Также есть возможность создавать собственные конструкторы.
4. Что выведет код? Почему именно так?
   Изначально я думала, что код выведет ninja, pomidor, site. Но для bike() он выводит undefined. Я думаю, что это потому что эта функция без параметров. А у объектов прописаны свойства name, к которым они могут обратиться.
5. Чем статические свойства и методы отличаются от нестатических? В каких ситуациях они применяются?
   Статические свойства и методы относятся ко всему классу, а не к отдельному объекту. Нестатические свойства и методы применяются по отношению к конректному объекту.
   Статические методы используются в классах, относящихся к базам данных, для поиска/сохранения/удаления вхождений в базу данных. Для создания классов-калькуляторов, классов-утилит, классов-помощников для работы с какими-то другими классами.
6. Самостоятельно изучите, что такое геттеры и сеттеры, приведите пример класса с их использованием.
   Геттеры и сеттеры - это свойства-аксессоры объекта. Для них используются ключевые слова get и set. Геттер позволяет получить значение объекта, сеттер - присвоить значение. Один сеттер изменяет одно свойство.
   Добавлять геттеры и сеттеры в объект можно также с помощью метода Object.defineProperty().
7. Что выведет код? Почему именно так?
   class Person {
   constructor(name) {
   this.name = name
   }
   }

const member = new Person("John")
console.log(typeof member)

код выведет object, потому что мы его создаём с помощью класса Person.

8. Что выведет код? Почему именно так?
   const person = {
   name: "Valera",
   age: 23
   }

let city = person.city
city = "Amsterdam"

console.log(person)

Код выведет только имя и возраст.
чтобы добавить город, надо написать person.city = "Amsterdam".

Практические задания:

1. Создайте класс `Работник`, который будет иметь следующие свойства: `name` (имя), `surname` (фамилия), `rate` (ставка за день работы), `days` (количество отработанных дней). Также класс должен иметь метод `getSalary()`, который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки `rate` на количество отработанных дней `days`.

   Вот так должен работать наш класс:

   ```
   var worker **=** new Worker('Иван', 'Иванов', 10, 31);

   console.log(worker.name); //выведет 'Иван'
   console.log(worker.surname); //выведет 'Иванов'
   console.log(worker.rate); //выведет 10
   console.log(worker.days); //выведет 31
   console.log(worker.getSalary()); //выведет 310 - то есть 10*31
   ```

2. Помните наше практическое задание с опросником для владельцев котиков? Он нам снова пригодится! Напишите класс `Cat` со свойствами, соответствующими полям вашего опросника (например, кличка, корм и пр.), и по нажатию на кнопку "Ок" создайте экземпляр этого класса, заполнив его свойства ответами из опросника. В этом классе будут только свойства и конструктор, без методов. Выведите результат (заполненный объект класса `Cat`) в консоль при помощи console.log.

3. Создайте класс `Калькулятор`, который будет содержать 4 **статических** метода - _Сложение_, _Умножение_, _Вычитание_ и _Деление_. Доработайте свою страничку с калькулятором, чтобы в ней использовались методы этого класса.

4. Реализуйте класс `Валидатор`, который будет проверять строки. К примеру, у него будет метод `isEmail`, который параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод `isDomain` для проверки домена, метод `isDate` для проверки даты и метод `isPhone` для проверки телефона.

   Сделайте 2 версии этого класса - стандартную и статическую.

   ```
   //стандартная вызывается вот так
   var validator **=** new Validator();
   console.log(validator.isEmail('alisa@mail.ru'));
   console.log(validator.isDomain('itgirlschool.ru'));
   console.log(validator.isDate('12.05.2021'));
   console.log(validator.isPhone('+7(910)123-45-67')); //тут используем формат своей страны

   //а статическая так
   console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
   console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
   console.log(ValidatorStatic.isDate('12.05.2021'));
   console.log(ValidatorStatic.isPhone('+7(910)123-45-67')); //тут используем формат своей страны
   ```
