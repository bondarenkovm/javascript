// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log((i *= 1));
// }

// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
//   // Change code above this line
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// function findLongestWord(string) {
//   const stringArrau = string.split(" ");

//   let maxString = stringArrau[0];

//   // for (let i = 0; i < stringArrau.length; i += 1) {
//   //   maxString = stringArrau(i);
//   // }

//   for (item of stringArrau) {
//     if (item.length > maxString.length) {
//       maxString = item;
//     }
//   }

//   return maxString;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//--------------------------------------------------------------
// function filterArray(numbers, value) {
// let nevArray = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > value) {
//     nevArray.push(numbers[i]);
//   }
// }
// for (let number of numbers) {
//   console.log(number);
// if (number > value) {
//   filteredNumbers.push(number);
// }
// }

// return nevArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
//--------------------------------------------------------------
// function getCommonElements(array1, array2) {
//   let nevArray = [];

//   for (let element of array1) {
//     // console.log(element);

//     if (array2.includes(element)) {
//       nevArray.push(element);
//       // console.log(element);
//     }
//   }
//   return nevArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 5, 3], [2, 4, 5]));

//--------------------------------------------------------------
// function getEvenNumbers(start, end) {
//   let nevArray = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       nevArray.push(i);
//     }
//   }

//   return nevArray;
// }
// console.log(getEvenNumbers(2, 5));

//--------------------------------------------------------------

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     // console.log(i);
//     number = i;
//     break;
//   }
// }
// console.log(number);
//--------------------------------------------------------------

// function includes(array, value) {
// for (let i = 0; i < array.length; i += 1) {
//   const element = array[i];
//   console.log(element);

//   if (element === value) {
//     return element;
//   }
// }
// for (let element of array) {
//   if (element === value) {
//     return element;
//   }
// }
// for (let element of array) {
//   // console.log(element);
//   element === value;
//   return element;
// }
//   return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
//--------------------------------------------------------------
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   console.log(propName);
//   let nevАrray = [];

//   for (const product of products) {
//     nevАrray.push(product.propName);
//   }
//   return nevАrray;
//   // Change code above this line
// }
// console.log(getAllPropValues('name'));
//--------------------------------------------------------------
// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },

//   // Change code above this line
// };
// console.log(bookShelf.getBooks());

//-------------------Задача 41/41-------------------------------------------
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const { name } of this.potions) {
//       if (name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     return this.potions.push(newPotion);
//   },

// removePotion(potionName) {
//   const { potions } = this;
//   for (const potion of potions) {
//     if (potion.name === potionName) {
//       // const potionIndex = potions.indexOf(potion);
//       return potions.splice(potions.indexOf(potion), 1);
//     }
//   }
//   return `Potion ${potionName} is not in inventory!`;
// },

//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         return (potion.name = newName);
//       }
//     }
//   },
//   // Change code above this line
// };

// // console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.removePotion('Dragon breath'));
// // console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(atTheOldToad.getPotions());

//---------------------Задача 48/13-----------------------------------------
// const changeEven = (numbers, value) => {
//   // Change code below this line

//   const newArray = [];

//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       element += value;
//     }
//     newArray.push(element);
//   });

//   return newArray;

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   // Change code above this line
// };
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

//---------------------Дич-----------------------------------------

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// doMath(44, 3, function add(x, y) {
//   return x + y;
// });
//----------------------------------------------------
// const planets = ['Земля', 'Марс', 'Венера', 'Юпітер'];

// const planetsInUpperCase = planets.map(planet => planet.length);
// console.log(planetsInUpperCase);
//----------------------------------------------------
// const clients = ['Mango', 'Poly', 'Ajax', 'Poly', 'Kiwi', 'Ajax', 'Poly'];
// console.log(clients.indexOf('Poly'));

//----------------------------------------------------
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.table(tagCount);

//--------------------Задача 27/48------------------------------------------

// const getInactiveUsers = users => {
//   return users.filter(({ isActive }) => isActive !== true);
// };
// const InactiveUsers = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];
// console.log(getInactiveUsers(InactiveUsers));

//--------------------Задача 31/48------------------------------------------

// const getInactiveUsers = users => users.every(({ isActive }) => isActive === true);

// const InactiveUsers = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];
// console.log(getInactiveUsers(InactiveUsers));

//--------------------Задача 31/48------------------------------------------
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// // const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // console.log(playtimes);

// const totalPlayTime = Object.values(players).reduce(
//   (previousValue, number) => previousValue + number,
//   0
// );
// console.log(totalPlayTime);
// const averagePlayTime = totalPlayTime / Object.values(players).length;
// console.log(averagePlayTime);

//--------------------Задача 37/48 умова------------------------------------------
// const getTotalFriendCount = users => users.reduce((total, user) => total + user.friends.length, 0);

// const getTotalFriendCount = users =>
//   users.reduce((total, user) => {
//     total += user.friends.length;
//     return total;
//   }, 0);

//--------------------Задача 48/48------------------------------------------

// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter(user => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);
// };

// const InactiveUsers = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];
// const genders = 'female';
// console.log(getTotalBalanceByGender(InactiveUsers, genders));

//--------------------Задача 41/48------------------------------------------
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = books.sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );

// const sortedByReversedAuthorName = books.sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );

// const sortedByAscendingRating = books.sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );

// const sortedByDescentingRating = books.sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );

//--------------------Задача 45/48------------------------------------------

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter(({ rating }) => rating > MIN_BOOK_RATING)
//   .map(({ author }) => author)
//   .sort();
// console.log(names);

//--------------------Колбеки------------------------------------------
/**
 * Напишіть наступні функції:
 * `createProduct(obj, callback)` - приймає об'єкт товару без id, а також коллбек.
 * Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість `id` та викликає коллбек
 * передаючи йому створений об'єкт.
 *
 * `logProduct(product)` - колббек приймаючий об'єкт продукту і логуючий його в консоль
 * `logTotalPrice(product)` - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
 */

// const createProduct = (obj, callback) => {
//   const products = {
//     ...obj,
//     id: 1,
//   };
//   return callback(products);
// };

// const logProduct = product => {
//   console.log(product);
// };
// const logTotalPrice = ({ prise, quantity }) => {
//   console.log(prise * quantity);
// };

// const product = {
//   name: 'milk',
//   prise: 50,
//   quantity: 15,
// };

// createProduct(product, logProduct);
// createProduct(product, logTotalPrice);
//--------------------5 модуль------------------------------------------
// const petya = {
//   username: 'Petya',
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showThis();
// petya.showName();

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }
// console.log(makeOrderMessage(2, 400, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

//--------------------5 модуль 7/20------------------------------------------
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// // const cars = new Car({ brand: 'Nissan', model: 'Qashqai', price: 20000 });
// console.log(new Car({ brand: 'Nissan', model: 'Qashqai', price: 20000 }));

//--------------------5 модуль 7/20------------------------------------------
// class Car {
//   constructor({ brand, model, price }) {
//     // brand;
//     // model;
//     // price;
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// console.log(new Car({ brand: 'Nissan', model: 'Qashqai', price: 20000 }));
// // console.log(getPrice());
//--------------------5 модуль 10/20------------------------------------------

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     return this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     const itemsIndex = this.items.indexOf(itemToRemove);
//     this.items.splice(itemsIndex, 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//--------------------5 модуль 11/20------------------------------------------

// class StringBuilder {
//   constructor(value) {
//     this.value = value;
//   }
//   getValue() {
//     return this.value;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padEnd(str) {
//     this.value = this.value + str;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

//--------------------5 модуль 16/20------------------------------------------
// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//       // return;
//     }
//     // return;
//     // this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 50000;
// console.log(audi.price); // 49000

// audi.price = 57001;
// console.log(audi.price); // 49000

//--------------------5 модуль 17/20------------------------------------------
// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line

//   static checkPrice(price) {
//     // price > Car.#MAX_PRICE
//     //   ? 'Error! Price exceeds the maximum'
//     //   : 'Success! Price is within acceptable limits';

//     if (price > Car.#MAX_PRICE) {
//       return 'Error! Price exceeds the maximum';
//     }
//     return 'Success! Price is within acceptable limits';
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price));

//--------------------5 модуль 20/20------------------------------------------
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   blacklistedEmails = [];
//   // static blacklistedEmails = [];

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     // this.blacklistedEmails = Admin.blacklistedEmails;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// // console.log(Admin.blacklistedEmails);
// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');

// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

//------------------------------------------------------------------------------
// class User {
//   static takenEmails = [];

//   static isEmailTaken(email) {
//     return User.takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.takenEmails.push(email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(User.takenEmails);
// console.log(User.isEmailTaken('poly@mail.com'));
// console.log(User.isEmailTaken('mango@mail.com'));
// console.log(User.takenEmails);

//---------------------------------this---------------------------------------------
// function showThis() {
//   console.log('this in showThis: ', this);
// }

// Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window
// const user = {
//   username: 'Mango',
//   showThis() {
//     console.log('this in showThis: ', this);
//   },
// };

// user.showThis();

// const dddd = user.showThis;

// console.log(dddd());

// Записуємо посилання на функцію у властивість об'єкта
// Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;

// Викликаємо функцію в контексті об'єкта
// this буде вказувати на поточний об'єкт, в контексті
// якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

//---------------------------------
// function greetGuest() {
//   // console.log(`${greeting}, ${this.username}.`);
//   console.log('this in showThis: ', this);
// }

// const mango = {
//   username: 'Манго',
// };
// // const poly = {
// //   username: "Полі",
// // };

// greetGuest.call(mango); // Ласкаво просимо, Манго.
// // greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.

//---------------------------------Класи---------------------------------------------

// class Car1 {
//   constructor({ brand, model, price } = {}) {
//     console.log(this);
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// console.dir(Car1);
// const carInstance = new Car1({ brand: 'Nissan', model: 'Qashqai', price: 20000 });
// console.log(carInstance);
//-------------------------------задача---------------------------------------------
// Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items.
// Замітка це об'єкт із властивостями text та priority.
// Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };
//   constructor(arr) {
//     this.items = arr;
//   }
//   addNote(note) {
//     this.items.push(note);
//   }
//   removeNote(text) {

//     console.log(this.item.text === text);
//     if (this.items.text === text) {
//     }
//   }
//   updatePriority(text, newPriority) {}
// }
// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);

// // myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
// // console.log(myNotes.items);

//------------------------------------------------------------------
// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll('.menu-item');
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

//-------------------------------ДЗ-6---------------------------------------------
//-------------------------------Task 1---------------------------------------------
// const items = document.querySelectorAll('#categories .item');
// console.log('Number of categories:', items.length);
// items.forEach(item => {
//   console.log('Category:', item.firstElementChild.textContent);
//   console.log('Elements:', item.lastElementChild.children.length);
// });

// -----------
//const listEl = document.querySelector('#categories');

// const listItems = listEl.children;

// console.log('Number of categories:', listItems.length);
// console.log('Category:', listItems[0].firstElementChild.textContent);
// console.log('Elements:', listItems[0].lastElementChild.children.length);
// console.log('Category:', listItems[1].firstElementChild.textContent);
// console.log('Elements:', listItems[1].lastElementChild.children.length);
// console.log('Category:', listItems[2].firstElementChild.textContent);
// console.log('Elements:', listItems[2].lastElementChild.children.length);

//-----------------------variant 2
// const itemEl = document.querySelectorAll('#categories .item');
// console.log(itemEl.length);

// const titleEl = document.querySelectorAll('.item h2');
// console.log(titleEl[0].textContent);
// console.log(titleEl[1].textContent);
// console.log(titleEl[2].textContent);

// const listEl1 = itemEl[0].querySelectorAll('ul li');
// console.log(listEl1.length);
// const listEl2 = itemEl[1].querySelectorAll('ul li');
// console.log(listEl2.length);
// const listEl3 = itemEl[2].querySelectorAll('ul li');
// console.log(listEl3.length);
//-------------------------------Task 2---------------------------------------------
// const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
// const list = document.querySelector('#ingredients');
// // console.log(list);
//=============================variant-1=======================
// const elements = ingredients.map(ingredient => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');
//   itemEl.textContent = ingredient;
//   return itemEl;
// });
// // console.log(elements);

// list.prepend(...elements);

//=============================variant-2=======================
// const makeingredients = options => {
//   return options.map(ingredient => {
//     const itemEl = document.createElement('li');
//     itemEl.classList.add('item');
//     itemEl.textContent = ingredient;
//     return itemEl;
//   });
// };
// // const elements = makeingredients(ingredients);
// list.prepend(...makeingredients(ingredients));
//-------------------------------Task 3---------------------------------------------
// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];
// //width="370" height="370"
// const list = document.querySelector('.gallery');
// list.style.display = 'flex';
// const imagesMarkup = images
//   .map(
//     ({ url, alt }) =>
//       `<li class="gallery__item"><img width="500" height="500" src = '${url}' alt = '${alt}'></li>`
//   )
//   .join('');
// console.log(imagesMarkup);
// list.insertAdjacentHTML('afterbegin', imagesMarkup);
//-------------------------------Task 4---------------------------------------------

// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const valueEl = document.querySelector('#value');

// let counterValue = 0;
// const counter = () => (counterValue += 1);

// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);
// incrementBtn.addEventListener('click', () => {
//   //   counter();
//   counterValue += 1;
//   valueEl.textContent = counterValue;
//   // decrementBtn.style.backgroundСolor = `buttonface`;
//   // incrementBtn.style.backgroundColor = `green`;
// });
// decrementBtn.addEventListener('click', () => {
//   counterValue -= 1;
//   valueEl.textContent = counterValue;
//   // incrementBtn.style.backgroundСolor = `buttonface`;
//   // decrementBtn.style.backgroundColor = `red`;
// });
//-------------------------------Task 5---------------------------------------------

// const refs = {
//   input: document.querySelector('#name.input'),
//   output: document.querySelector('#name-output'),
// };

// const input = document.querySelector('#name-input');
// const output = document.querySelector('#name-output');

// input.addEventListener('input', onInputChange);
// // console.log(output.textContent);
// function onInputChange(event) {
//   if (event.currentTarget.value) {
//     return (output.textContent = event.currentTarget.value);
//   }
//   output.textContent = 'Anonymous';
// }
//===========--2--=========
// input.addEventListener('input', event => {
//   return event.currentTarget.value
//     ? (output.textContent = event.currentTarget.value)
//     : (output.textContent = 'Anonymous');
// });

// function onInputChange(event) {
//   return event.currentTarget.value
//     ? (output.textContent = event.currentTarget.value)
//     : (output.textContent = 'Anonymous');
// }

//-------------------------------Task 6---------------------------------------------
// const input = document.querySelector('[data-length="6"]');
// // console.log(input);
// // console.log(input.dataset.length);

// input.addEventListener('blur', onInputBlur);

// function onInputBlur(event) {
//   //   console.log(event.currentTarget.value.length);
//   //   console.log(event.currentTarget.value.length == input.dataset.length);
//   input.classList.add('invalid');
//   input.classList.remove('valid');
//   if (event.currentTarget.value.length == input.dataset.length) {
//     input.classList.remove('invalid');
//     input.classList.add('valid');
//   }
// }

//-------------------------------Task 7---------------------------------------------
// const inputEl = document.querySelector('#font-size-control');
// const output = document.querySelector('#text');

// inputEl.addEventListener('input', () => {
//   console.log(event.currentTarget.value);

//   output.style.fontSize = `${inputEl.value}px`;
// });

//-------------------------------Task 8---------------------------------------------
// const formEl = document.querySelector('.login-form');
// // const emailEl = document.querySelector('.email');
// // const passwordEl = document.querySelector('.password');
// // const btn = document.querySelector('button');
// // console.log(formEl);
// // console.log(btn);

// formEl.addEventListener('submit', onFormSubmit);
// function onFormSubmit(event) {
//   event.preventDefault();
//   const formElenents = event.currentTarget.elements;
//   //   console.dir(formElenents);
//   if (!formElenents.email.value || !formElenents.password.value) {
//     alert('Заповни свої дані!!!');
//   }
//   const email = formElenents.email.value;
//   const password = formElenents.password.value;

//   const formData = {
//     email,
//     password,
//   };
//   console.log(formData);
//   formEl.reset();
// }
//-------------------------------------
// const formEl = document.querySelector('.login-form');

// formEl.addEventListener('submit', onFormSubmit);
// function onFormSubmit(event) {
//   event.preventDefault();
//   const { email, password } = event.currentTarget.elements;
//   if (!email.value || !password.value) {
//     alert('Заповни свої дані!!!');
//   }
//   const userEmail = email.value;
//   const userPasswords = password.value;

//   const formData = {
//     userEmail,
//     userPasswords,
//   };
//   console.log(formData);
//   formEl.reset();
// }

//-------------------------------Task 9---------------------------------------------
// const btn = document.querySelector('.change-color');
// const backgroundColor = document.querySelector('.color');

// btn.addEventListener('click', () => {
//   document.body.style.backgroundColor = getRandomHexColor();
//   backgroundColor.textContent = document.body.style.backgroundColor;
//   // backgroundColor.textContent = getRandomHexColor();
// });

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
//-------------------------------Task 10---------------------------------------------
const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

// let numberInput = 0;

// inputEl.addEventListener('input', () => {
//   numberInput = Number(inputEl.value);
// });

btnCreate.addEventListener('click', () => {
  createBoxes(inputEl.value);
});

btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  const div = [];

  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${20 + 10 * i}px`;
    divEl.style.height = `${20 + 10 * i}px`;
    divEl.style.backgroundColor = `${getRandomHexColor()}`;
    div.push(divEl);
  }
  boxesEl.prepend(...div);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
  // numberInput = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//==========================================================
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const controlsEl = document.querySelector('#controls');
// const inputEl = controlsEl.firstElementChild;
// const createBtn = document.querySelector('button[data-create]');
// const destroyBtn = document.querySelector('button[data-destroy]');
// const boxEl = document.querySelector('#boxes');

// inputEl.addEventListener('focus', destroyBoxes);
// createBtn.addEventListener('click', () => {
//   createBoxes(inputEl.value);
// });
// function createBoxes(amount) {
//   // inputEl.value = '';
//   let boxes = '';
//   for (let i = 1, j = 30; i <= amount; i += 1, j += 10) {
//     boxes += `<div style="width: ${j}px; height: ${j}px; background-color: ${getRandomHexColor()}"></div>`;
//   }
//   boxEl.insertAdjacentHTML('beforeend', boxes);
// }

// function destroyBoxes() {
//   boxEl.innerHTML = '';
//   inputEl.value = '';
// }
// destroyBtn.addEventListener('click', destroyBoxes);

//==========================================================
// const inputNumber = document.querySelector('#controls>input');
// const buttonCreate = document.querySelector('[data-create]');
// const buttonDestroy = document.querySelector('[data-destroy]');
// const boxes = document.querySelector('#boxes');

// const initialBoxSize = 30; //square width=30px height=30px
// let numberOfBoxes = 0;

// inputNumber.addEventListener('input', getInputValue);
// buttonCreate.addEventListener('click', () => {
//   createBoxes(numberOfBoxes);
// });
// buttonDestroy.addEventListener('click', destroyBoxes);

// function getInputValue(e) {
//   numberOfBoxes = Number(e.currentTarget.value);
// }

// function createBoxes(amount) {
//   let newBox = '';
//   for (let i = 1; i <= amount; i += 1) {
//     let boxSize = initialBoxSize * i;
//     const bgColor = getRandomHexColor();
//     newBox += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${bgColor}"></div>`;
//   }
//   boxes.insertAdjacentHTML('beforeend', newBox);
// }

// function destroyBoxes() {
//   boxes.innerHTML = '';
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
