// // JavaScript Comprehensive Guide

// // 1. Variables and Data Types
// // ----------------------------

// // Declaring variables with let and const
// let username = 'JohnDoe'; // String
// const age = 25; // Number
// let isAdmin = true; // Boolean
// let score = null; // Null
// let user; // Undefined

// console.log(username, age, isAdmin, score, user);

// // 2. Operators
// // ------------

// // Arithmetic operators
// let a = 5;
// let b = 3;
// console.log(a + b); // 8
// console.log(a - b); // 2
// console.log(a * b); // 15
// console.log(a / b); // 1.666
// console.log(a % b); // 2

// // Comparison operators
// console.log(a > b); // true
// console.log(a < b); // false
// console.log(a >= b); // true
// console.log(a <= b); // false
// console.log(a == '5'); // true (type coercion)
// console.log(a === '5'); // false (no type coercion)
// console.log(a != '5'); // false (type coercion)
// console.log(a !== '5'); // true (no type coercion)

// // Logical operators
// let c = true;
// let d = false;
// console.log(c && d); // false
// console.log(c || d); // true
// console.log(!c); // false

// // 3. Control Structures
// // ---------------------

// // if-else statement
// if (age >= 18) {
//     console.log('Adult');
// } else {
//     console.log('Minor');
// }

// // switch statement
// let day = 3;
// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     default:
//         console.log('Other day');
// }

// // for loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// // while loop
// let counter = 0;
// while (counter < 5) {
//     console.log(counter);
//     counter++;
// }

// // do-while loop
// let index = 0;
// do {
//     console.log(index);
//     index++;
// } while (index < 5);

// // 4. Functions
// // ------------

// // Function declaration
// function multiply(x, y) {
//     return x * y;
// }
// console.log(multiply(4, 5));

// // Function expression
// const divide = function (x, y) {
//     return x / y;
// };
// console.log(divide(20, 4));

// // Arrow function
// const subtract = (x, y) => x - y;
// console.log(subtract(10, 3));

// // 5. Objects and Arrays
// // ---------------------

// // Object creation
// let person = {
//     firstName: 'Jane',
//     lastName: 'Doe',
//     age: 28,
//     fullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     }
// };
// console.log(person.fullName());

// // Array creation
// let fruits = ['Apple', 'Banana', 'Cherry'];
// console.log(fruits[0]); // Apple
// console.log(fruits.length); // 3

// // Array methods
// fruits.push('Orange'); // Add element to end
// console.log(fruits);
// fruits.pop(); // Remove element from end
// console.log(fruits);
// fruits.shift(); // Remove element from start
// console.log(fruits);
// fruits.unshift('Strawberry'); // Add element to start
// console.log(fruits);

// // 6. DOM Manipulation
// // -------------------

// // Adding elements to the DOM
// let newElement = document.createElement('div');
// newElement.textContent = 'Hello, DOM!';
// document.body.appendChild(newElement);

// // Changing styles
// newElement.style.color = 'blue';
// newElement.style.fontSize = '20px';

// // 7. Event Handling
// // -----------------

// // Adding an event listener
// document.getElementById('myButton').addEventListener('click', () => {
//     alert('Button clicked!');
// });

// // 8. Asynchronous JavaScript
// // --------------------------

// // Using Promises
// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data fetched');
//         }, 2000);
//     });
// };

// fetchData().then(data => console.log(data)).catch(error => console.error(error));

// // Using async/await
// const fetchDataAsync = async () => {
//     try {
//         const data = await fetchData();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// };
// fetchDataAsync();

// // 9. JavaScript in Web Development
// // --------------------------------

// // Fetch API for making HTTP requests
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));

// // 10. ES6 Features
// // ----------------

// // Template literals
// let greeting = `Hello, ${username}! Welcome to the website.`;
// console.log(greeting);

// // Destructuring assignment
// let [firstFruit, secondFruit] = fruits;
// console.log(firstFruit, secondFruit);

// // Spread operator
// let numbers = [1, 2, 3];
// let newNumbers = [...numbers, 4, 5, 6];
// console.log(newNumbers);

// // 11. Classes and Inheritance
// // ---------------------------

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a sound.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }

//     speak() {
//         console.log(`${this.name} barks.`);
//     }
// }

// let dog = new Dog('Rex');
// dog.speak();

// // 12. Error Handling
// // ------------------

// try {
//     let result = divide(10, 0);
//     if (result === Infinity) {
//         throw new Error('Division by zero');
//     }
// } catch (error) {
//     console.error(error.message);
// }

// // 13. JSON
// // --------

// // JSON parsing and stringifying
// let jsonString = '{"firstName":"Jane","lastName":"Doe","age":28}';
// let jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);

// let newJsonString = JSON.stringify(jsonObject);
// console.log(newJsonString);

// // 14. Regular Expressions
// // -----------------------

// let regex = /hello/i; // case-insensitive search for "hello"
// let str = 'Hello, world!';
// console.log(regex.test(str)); // true

// // 15. Module System
// // -----------------

// // ES6 Module example
// // File: math.js
// export const add = (x, y) => x + y;
// export const subtract = (x, y) => x - y;

// // File: app.js
// import { add, subtract } from './math.js';
// console.log(add(5, 3));
// console.log(subtract(9, 4));

// // 16. Advanced Topics
// // -------------------

// // Closures
// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log('Outer Variable:', outerVariable);
//         console.log('Inner Variable:', innerVariable);
//     };
// }
// const newFunction = outerFunction('outside');
// newFunction('inside');

// // Immediately Invoked Function Expression (IIFE)
// (function() {
//     console.log('IIFE executed');
// })();

// // Higher-Order Functions
// const numbersArray = [1, 2, 3, 4, 5];

// const doubledNumbers = numbersArray.map(num => num * 2);
// console.log(doubledNumbers);

// const evenNumbers = numbersArray.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// // 17. Web APIs
// // ------------

// // Geolocation API
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//         console.log('Latitude:', position.coords.latitude);
//         console.log('Longitude:', position.coords.longitude);
//     });
// }

// // Local Storage API
// localStorage.setItem('username', 'JohnDoe');
// console.log(localStorage.getItem('username'));
// localStorage.removeItem('username');

// // 18. Debugging
// // -------------

// // Console logging
// console.log('Debugging message');

// // Breakpoints (Use browser dev tools to set breakpoints in your code)

// // 19. Testing
// // -----------

// // Simple function to test
// const addNumbers = (x, y) => x + y;

// // Basic test
// console.assert(addNumbers(2, 3) === 5, 'Test failed: 2 + 3 should equal 5');

// // 20. Miscellaneous
// // -----------------

// // Iterators and Generators
// function* generatorFunction() {
//     yield 'First value';
//     yield 'Second value';
//     return 'Done';
// }
// const generator = generatorFunction();
// console.log(generator.next().value); // 'First value'
// console.log(generator.next().value); // 'Second value'
// console.log(generator.next().value); // 'Done'

// // Symbol type
// const sym1 = Symbol('description');
// const sym2 = Symbol('description');
// console.log(sym1 === sym2); // false

// // Proxy
// let target = {
//     message1: 'hello',
//     message2: 'everyone'
// };
// let handler = {
//     get: function (target, prop, receiver) {
//         if (prop === 'message2') {
//             return 'world';
//         }
//         return Reflect.get(...arguments);
//     }
// };
// let proxy = new Proxy(target, handler);
// console.log(proxy.message1); // hello
// console.log(proxy.message2); // world

// // 21. Practice and Implementation
// // --------------------------------

// // Build small projects to practice your skills:
// // - To-Do List App
// // - Weather App
// // - Calculator
// // - Blogging Platform

// // JavaScript Comprehensive Guide - Continued

// // 22. Advanced ES6 Features
// // -------------------------

// // Default Parameters
// const greetUser = (name = 'User') => `Hello, ${name}!`;
// console.log(greetUser()); // Hello, User!
// console.log(greetUser('Alice')); // Hello, Alice!

// // Rest and Spread Operator
// const sum = (...numbers) => {
//     return numbers.reduce((acc, num) => acc + num, 0);
// };
// console.log(sum(1, 2, 3, 4)); // 10

// const colors = ['red', 'green', 'blue'];
// const newColors = ['yellow', ...colors, 'purple'];
// console.log(newColors); // ['yellow', 'red', 'green', 'blue', 'purple']

// // Object Destructuring
// const personDetails = {
//     name: 'Alice',
//     age: 30,
//     job: 'Developer'
// };

// const { name, age, job } = personDetails;
// console.log(name, age, job); // Alice 30 Developer

// // Template Literals with Multiline Strings
// const longString = `
// This is a long string
// that spans multiple
// lines.
// `;
// console.log(longString);

// // 23. Advanced Data Structures
// // ----------------------------

// // Map
// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 25);
// console.log(map.get('name')); // Alice
// console.log(map.size); // 2

// // Set
// const set = new Set();
// set.add(1);
// set.add(2);
// set.add(2); // Duplicates are ignored
// console.log(set.size); // 2
// console.log(set.has(1)); // true

// // WeakMap
// const weakMap = new WeakMap();
// let obj = { key: 'value' };
// weakMap.set(obj, 'data');
// console.log(weakMap.get(obj)); // data

// // WeakSet
// const weakSet = new WeakSet();
// let obj2 = { key: 'value' };
// weakSet.add(obj2);
// console.log(weakSet.has(obj2)); // true

// // 24. More Web APIs
// // -----------------

// // Fetch API with POST Request
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     }
// })
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.error('Error:', error));

// // Intersection Observer API
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//         } else {
//             entry.target.classList.remove('visible');
//         }
//     });
// });

// document.querySelectorAll('.observe').forEach(el => {
//     observer.observe(el);
// });

// // 25. Advanced Functions
// // ----------------------

// // Callback Functions
// function fetchData(callback) {
//     setTimeout(() => {
//         callback('Data fetched');
//     }, 2000);
// }

// fetchData(data => {
//     console.log(data);
// });

// // Currying
// const multiplyCurried = x => y => x * y;
// const multiplyBy2 = multiplyCurried(2);
// console.log(multiplyBy2(3)); // 6

// // Function Composition
// const add5 = num => num + 5;
// const double = num => num * 2;

// const add5ThenDouble = num => double(add5(num));
// console.log(add5ThenDouble(10)); // 30

// // 26. Asynchronous Programming with Async/Await
// // ---------------------------------------------

// // Async/Await with Error Handling
// const fetchDataAsync = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };

// fetchDataAsync();

// // Parallel Execution with Promise.all
// const fetchPost = fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json());
// const fetchUser = fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json());

// Promise.all([fetchPost, fetchUser])
//     .then(results => {
//         const [post, user] = results;
//         console.log(post, user);
//     })
//     .catch(error => console.error('Error:', error));

// // 27. Web Workers
// // ---------------

// // Simple Web Worker
// // File: worker.js
// self.onmessage = function(e) {
//     const result = e.data[0] * e.data[1];
//     self.postMessage(result);
// };

// // Main file
// const worker = new Worker('worker.js');
// worker.onmessage = function(e) {
//     console.log('Result:', e.data);
// };
// worker.postMessage([10, 20]); // Result: 200

// // 28. Service Workers and PWA
// // ---------------------------

// // Registering a Service Worker
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/service-worker.js')
//         .then(registration => {
//             console.log('Service Worker registered with scope:', registration.scope);
//         })
//         .catch(error => {
//             console.error('Service Worker registration failed:', error);
//         });
// }

// // 29. IndexedDB
// // -------------

// // Opening a Database
// const request = indexedDB.open('MyDatabase', 1);

// request.onerror = function(event) {
//     console.error('Database error:', event.target.errorCode);
// };

// request.onsuccess = function(event) {
//     const db = event.target.result;
//     console.log('Database opened successfully');
// };

// // Creating an Object Store
// request.onupgradeneeded = function(event) {
//     const db = event.target.result;
//     const objectStore = db.createObjectStore('users', { keyPath: 'id' });
//     objectStore.createIndex('name', 'name', { unique: false });
// };

// // Adding Data to Object Store
// const addUser = (db, user) => {
//     const transaction = db.transaction(['users'], 'readwrite');
//     const objectStore = transaction.objectStore('users');
//     objectStore.add(user);

//     transaction.oncomplete = function() {
//         console.log('User added successfully');
//     };

//     transaction.onerror = function(event) {
//         console.error('Transaction error:', event.target.errorCode);
//     };
// };

// // Using the addUser function
// const dbRequest = indexedDB.open('MyDatabase', 1);
// dbRequest.onsuccess = function(event) {
//     const db = event.target.result;
//     addUser(db, { id: 1, name: 'John Doe' });
// };

// // 30. Canvas API
// // --------------

// // Drawing on Canvas
// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// // Drawing a Rectangle
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 100, 100);

// // Drawing a Circle
// ctx.beginPath();
// ctx.arc(150, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();

// // Drawing Text
// ctx.font = '30px Arial';
// ctx.fillText('Hello Canvas', 200, 50);

// // 31. WebRTC
// // ----------

// // Accessing User Media
// navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//     .then(stream => {
//         const videoElement = document.querySelector('video');
//         videoElement.srcObject = stream;
//     })
//     .catch(error => {
//         console.error('Error accessing user media:', error);
//     });

// // 32. WebSockets
// // --------------

// // Creating a WebSocket Connection
// const socket = new WebSocket('wss://example.com/socket');

// socket.onopen = function() {
//     console.log('WebSocket connection established');
//     socket.send('Hello Server');
// };

// socket.onmessage = function(event) {
//     console.log('Message from server:', event.data);
// };

// socket.onclose = function() {
//     console.log('WebSocket connection closed');
// };

// // 33. More ES6+ Features
// // ----------------------

// // Optional Chaining
// const user = {
//     address: {
//         city: 'New York'
//     }
// };
// console.log(user?.address?.city); // New York
// console.log(user?.contact?.phone); // undefined

// // Nullish Coalescing
// const nullValue = null;
// const defaultValue = 'Default';
// console.log(nullValue ?? defaultValue); // Default

// // Dynamic Import
// if (condition) {
//     import('./module.js')
//         .then(module => {
//             module.doSomething();
//         })
//         .catch(error => {
//             console.error('Error loading module:', error);
//         });
// }

// // 34. TypeScript Basics
// // ---------------------

// // Installing TypeScript
// // npm install -g typescript

// // TypeScript Example
// // File: example.ts
// let username: string = 'Alice';
// let userAge: number = 25;

// function greet(user: string, age: number): string {
//     return `Hello, ${user}. You are ${age} years old.`;
// }

// console.log(greet(username, userAge));

// // Compiling TypeScript
// // tsc example.ts

// // 35. Web Components
// // ------------------

// // Creating a Custom Element
// class MyElement extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({ mode: 'open' });
//         const p = document.createElement('p');
//         p.textContent = 'Hello, Web Component!';
//         this.shadowRoot.append(p);
//     }
// }
// customElements.define('my-element', MyElement);

// // Using the Custom Element
// // <my-element></my-element>

// // 36. Application Development
// // ---------------------------

// // Building a Simple To-Do List App
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('#todo-form');
//     const input = document.querySelector('#todo-input');
//     const list = document.querySelector('#todo-list');

//     form.addEventListener('submit', event => {
//         event.preventDefault();
//         const text = input.value.trim();
//         if (text) {
//             const li = document.createElement('li');
//             li.textContent = text;
//             list.appendChild(li);
//             input.value = '';
//         }
//     });

//     list.addEventListener('click', event => {
//         if (event.target.tagName === 'LI') {
//             event.target.remove();
//         }
//     });
// });

// // 37. Performance Optimization
// // ----------------------------

// // Debouncing
// const debounce = (func, delay) => {
//     let timeoutId;
//     return (...args) => {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => func(...args), delay);
//     };
// };

// const onResize = () => {
//     console.log('Window resized');
// };
// window.addEventListener('resize', debounce(onResize, 500));

// // Throttling
// const throttle = (func, limit) => {
//     let lastFunc;
//     let lastRan;
//     return (...args) => {
//         if (!lastRan) {
//             func(...args);
//             lastRan = Date.now();
//         } else {
//             clearTimeout(lastFunc);
//             lastFunc = setTimeout(() => {
//                 if (Date.now() - lastRan >= limit) {
//                     func(...args);
//                     lastRan = Date.now();
//                 }
//             }, limit - (Date.now() - lastRan));
//         }
//     };
// };

// const onScroll = () => {
//     console.log('Window scrolled');
// };
// window.addEventListener('scroll', throttle(onScroll, 200));

// // 38. Testing with Jest
// // ---------------------

// // Installing Jest
// // npm install --save-dev jest

// // Example Jest Test
// // File: sum.js
// const sum = (a, b) => a + b;
// module.exports = sum;

// // File: sum.test.js
// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

// // Running Tests
// // npm test

// // 39. GraphQL
// // -----------

// // Simple GraphQL Query
// const query = `
// {
//     user(id: "1") {
//         name
//         age
//     }
// }`;

// fetch('https://api.example.com/graphql', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ query })
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));

// // 40. Final Tips and Resources
// // ----------------------------

// // Keep Practicing
// // - Build small projects
// // - Contribute to open source
// // - Participate in coding challenges

// // Stay Updated
// // - Follow JavaScript news and updates
// // - Join developer communities
// // - Read technical blogs and documentation

// // Explore More
// // - Learn related technologies (e.g., Node.js, React, Angular)
// // - Experiment with different libraries and frameworks

// // Useful Resources
// // - MDN Web Docs: https://developer.mozilla.org/
// // - JavaScript Info: https://javascript.info/
// // - FreeCodeCamp: https://www.freecodecamp.org/










