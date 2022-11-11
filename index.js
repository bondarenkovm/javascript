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

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }

  addItem(newItem) {
    return this.items.push(newItem);
  }
  removeItem(itemToRemove) {
    const itemsIndex = this.items.indexOf(itemToRemove);
    this.items.splice(itemsIndex, 1);
  }
}

// Change code above this line
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
