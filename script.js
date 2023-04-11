// const navEl = document.querySelector("ul");
// console.log(navEl);

// const navItemEl = document.querySelector('li');
// console.log(navItemEl);

// const navItemEl = document.querySelector(".header-item");
// console.log(navItemEl);

// const navItemsEl = document.querySelectorAll(".header-item");
// console.log(navItemsEl);

// const navLinksEl = document.querySelectorAll(".header-link");
// console.log(navLinksEl);

// const featureEl = document.querySelectorAll(".feature-list .feature-list-item");
// console.log(featureEl);

// const imageEl = document.querySelector(".service-image");
// console.log(imageEl);
// console.log(imageEl.src);

//* Поменяем текст

// const heroTitleEl = document.querySelector(".hero-title");
// console.log("heroTitleEl", heroTitleEl);
// console.log(heroTitleEl.textContent);
// heroTitleEl.textContent = "Good evening!";

//* Атрибути

// console.log(imageEl.getAttribute("src")); // практически не используется
// console.log(imageEl.src); // через "точку" более современный синтаксис

//* чтоб удалить

// console.log(imageEl.removeAttribute("src"));

//* проверить, есть ли у элемента этот атрибут

// console.log(imageEl.hasAttribute("src")); // вернёт false или true

//* data - атрибуты

// const heroes = document.querySelectorAll('.js-heroes button');
// console.log(heroes[1].dataset.hero);

//* classList

// const navEl = document.querySelector(".header-navigation");
// console.log(navEl.classList);
// navEl.classList.add("super-nav"); // добавить класс
// navEl.classList.remove("header-navigation"); // удалить класс
// navEl.classList.replace("super-nav", "newNav"); // заменяет старый на новый
// console.log(navEl.classList.contains("newNav")); // проверить, есть ли такой класс

//* поиск элемента с помощью querySelector
// const currentPageUrl = "./portfolio.html";

// const linkEl = document.querySelector(
//   `.header-link[href = '${currentPageUrl}']`
// );
// console.log(linkEl);

//* навигация по DOM

// const featEl = document.querySelector(".feature-list");
// console.log(featEl);

// console.log(featEl.children);
// console.log(featEl.firstElementChild);
// console.log(featEl.lastElementChild);
// console.log(featEl.previousElementSibling);
// console.log(featEl.nextElementSibling);
// console.log(featEl.firstElementChild.nextElementSibling);
// console.log(featEl.firstElementChild.children);

//* СОЗДАНИЕ и УДАЛЕНИЕ ЭЛЕМЕНТОВ

// const titleEl = document.createElement('h1'); // при создании указываем легальный тег, а не какое-либо название; элемент создаётся в памяти;
// titleEl.classList.add('page-title');
// titleEl.textContent = 'Заголовок'; // после создания элемента теперь надо его добавить
// console.log(titleEl);

// document.body.append(titleEl); //добавляет в конец

//* создаём и добавляем новый пункт меню

// const navItemEl = document.createElement("li"); //создали новый пункт li
// navItemEl.classList.add("header-item");

// const navLinkEl = document.createElement("a"); //создали ссылку а для пункта li
// navLinkEl.classList.add("header-link");
// navLinkEl.textContent = "BASE";
// navLinkEl.href = "./profile";

// console.log(navItemEl);
// console.log(navLinkEl);

// navItemEl.appendChild(navLinkEl); // вкладываем а в li
// console.log(navItemEl);

// const navEl = document.querySelector(".header-list"); // вызываем наш список ul

// navEl.appendChild(navItemEl); // добавляем созданный элемент (li > a) в конец списка ul
// navEl.insertBefore(navItemEl, navEl.firstElementChild); // добавляем созданный элемент (li > a) в начале списка ul
// navEl.insertBefore(navItemEl, navEl.lastElementChild); // добавляем созданный элемент (li > a) перед последним элементом списка ul
// navEl.insertBefore(navItemEl, navEl.children[1]); // добавляем созданный элемент (li > a) после первого элемента списка ul

//!==================================================================================

//* Создаём карточку продукта (РЕПЕТА)

// const product = {
//   name: "Сервоприводы",
//   description: "Lorem ipsum.",
//   price: 2000,
//   available: true,
//   onSale: true,
// };

// типа получили задание от верстальщика, что необходимо создать элемент

// const productEl = document.createElement("article"); //создаём элемент
// productEl.classList.add("product"); // создаём класс элемента

// const nameEl = document.createElement("h2"); // создаём заголовок
// nameEl.textContent = product.name; // добавляем название заголовка из объекта
// nameEl.classList.add("product_name"); //создаём класс заголовка

// const descrEl = document.createElement("p"); // создаём абзац
// descrEl.textContent = product.description; //добавляем текст абзаца из объекта
// descrEl.classList.add("product_descr"); //создаём класс абзаца

// const priceEl = document.createElement("p"); // создаём абзац
// priceEl.textContent = `Цена: ${product.price}`; //добавляем текст абзаца из объекта
// priceEl.classList.add("product_price"); //создаём класс абзаца

// получили независимые элементы

// console.log(productEl);
// console.log(nameEl);
// console.log(descrEl);
// console.log(priceEl);

// теперь необходимо в элемент article добавить три элемента, которые в него входят

// productEl.append(nameEl, descrEl, priceEl);

// console.log(productEl);

//* теперь сделаем тоже самое, только у нас будет массив этих объектов

const products = [
  {
    name: "Сервоприводы",
    description: "Lorem ipsum.",
    price: 2000,
    available: true,
    onSale: true,
  },

  {
    name: "Генератор",
    description: "Lorem ipsum.",
    price: 3000,
    available: false,
    onSale: false,
  },
  {
    name: "Титаниум",
    description: "Lorem ipsum.",
    price: 2500,
    available: true,
    onSale: false,
  },
];

// console.log(products);

// const productContainerEl = document.querySelector(".js-products");

// напишем функцию, которая получает 1 объект и из этого объекта создаёт одну карточку продукта

// const makeProductCard = ({ name, description, price }) => {
//   const productEl = document.createElement("article");
//   productEl.classList.add("product");

//   const nameEl = document.createElement("h2");
//   nameEl.textContent = name;
//   nameEl.classList.add("product_name");

//   const descrEl = document.createElement("p");
//   descrEl.textContent = description;
//   descrEl.classList.add("product_descr");

//   const priceEl = document.createElement("p");
//   priceEl.textContent = `Цена: ${price}`;
//   priceEl.classList.add("product_price");

//   productEl.append(nameEl, descrEl, priceEl);

//   return productEl;
// };

// console.log(makeProductCard(products[2]));

// теперь мы можем сделать много этих карточек

// const elements = products.map(makeProductCard);

// console.log(elements);

// productContainerEl.append(...elements); // распыляем в контейнер, т.е. добавляем в разметку

//!==================================================================================

const titleEl = document.querySelector(".service-title");
console.log(titleEl.textContent);
console.log(titleEl.innerHTML);

