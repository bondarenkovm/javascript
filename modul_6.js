// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);
//=================================
// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName);
// console.log(menuItemsByTagName.length);

// const menuItemsByClass = document.querySelectorAll('.menu-item');
// console.log(menuItemsByClass);
// console.log(menuItemsByClass.length);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);
//=================================
//===================================================
// const message = document.querySelector('#message');
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector('.btn.active');
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector('.image');
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';
//===================================================
// const text = document.querySelector('#paragraph');

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// console.log(text.classList.contains('red')); // true

// text.classList.remove('big');
// console.log(text.classList); // ["text", "red", value: "text red"]

// text.classList.add('new-class');
// console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // Can add multiple classes
// text.classList.add('a', 'b', 'c');
// console.log(text.classList);

// text.classList.toggle('is-hidden'); // will add is-hidden class
// text.classList.toggle('is-hidden'); // will remove is-hidden class

// // classList has a forEach method
// text.classList.forEach(cls => {
//   console.log(cls); // text, red, new-class
// });
//===================================================
// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll('.dishes > li');
// dishes.forEach(dish => {
//   console.log(dish.dataset.id);
// });
//===================================================
// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');

// const markup = technologies.map(technology => `<li class="list-item">${technology}</li>`).join('');

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;
//===================================================
// const image = document.querySelector('.image');

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute('src')); // true

// console.log(image.getAttribute('alt')); // "Lake and clouds"

// image.setAttribute('alt', 'Amazing nature');

// console.log(image.getAttribute('alt')); // Amazing nature
//===================================================

// const form = document.querySelector('.register-form');

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const { username, password } = event.currentTarget.elements;
//   // event.preventDefault();
//   // const {
//   //   elements: { username, password },
//   // } = event.currentTarget;
//   console.log(username.value, password.value);
// });
//==========================7.1=========================
// const output = document.querySelector('.output');
// let scrollEventCounter = 0;

// window.addEventListener('scroll', () => {
//   scrollEventCounter += 1;
//   output.textContent = scrollEventCounter;
// });
//=========================7.2==========================
// const vanillaOutput = document.querySelector('.output.vanilla');
// const throttledOutput = document.querySelector('.output.throttled');
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
// };

// document.addEventListener('scroll', () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );
//============================7.3=======================
// const vanillaOutput = document.querySelector('.output.vanilla');
// const throttledOutput = document.querySelector('.output.throttled');
// const debouncedOutput = document.querySelector('.output.debounced');
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   debounced: 0,
// };

// document.addEventListener('scroll', () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

// document.addEventListener(
//   'scroll',
//   _.debounce(() => {
//     eventCounter.debounced += 1;
//     debouncedOutput.textContent = eventCounter.debounced;
//   }, 300)
// );
//===============================7.4====================
const vanillaOutput = document.querySelector('.output.vanilla');
const throttledOutput = document.querySelector('.output.throttled');
const trailingOutput = document.querySelector('.output.trailing');
const leadingOutput = document.querySelector('.output.leading');
const eventCounter = {
  vanilla: 0,
  throttled: 0,
  trailing: 0,
  leading: 0,
};

// Trailing debounce
document.addEventListener(
  'scroll',
  _.debounce(() => {
    eventCounter.trailing += 1;
    trailingOutput.textContent = eventCounter.trailing;
  }, 300)
);

// Leading debounce
document.addEventListener(
  'scroll',
  _.debounce(
    () => {
      eventCounter.leading += 1;
      leadingOutput.textContent = eventCounter.leading;
    },
    300,
    { trailing: false, leading: true }
  )
);

document.addEventListener('scroll', () => {
  eventCounter.vanilla += 1;
  vanillaOutput.textContent = eventCounter.vanilla;
});

document.addEventListener(
  'scroll',
  _.throttle(() => {
    eventCounter.throttled += 1;
    throttledOutput.textContent = eventCounter.throttled;
  }, 300)
);
//==================================7.1=================
//=====================================7.1==============
