const navBtn = document.querySelector('div.menu .menubtn');
const nav = document.querySelector('div.menu nav');

function menu() {
  nav.classList.toggle('visible');
};

function menuOff() {
  nav.classList.remove('visible');
}

nav.addEventListener('click', menuOff)
navBtn.addEventListener('click', menu);


const products = document.querySelector('div.menu nav ul li:nth-child(1)');
const viewProducts = document.querySelector('div.products');
const services = document.querySelector('div.menu nav ul li:nth-child(2)');
const viewServices = document.querySelector('div.services');
const about = document.querySelector('div.menu nav ul li:nth-child(3)');
const viewAbout = document.querySelector('div.about');
const contact = document.querySelector('div.menu nav ul li:nth-child(4)');
const viewContact = document.querySelector('div.contact');
const menuHight = document.getElementById("menu").offsetHeight;

products.addEventListener('click', function () {
  nav.classList.remove('visible');
  window.scrollTo(0, viewProducts.offsetTop - menuHight)
});

services.addEventListener('click', function () {
  nav.classList.remove('visible');
  window.scrollTo(0, viewServices.offsetTop - menuHight)
});

about.addEventListener('click', function () {
  nav.classList.remove('visible');
  window.scrollTo(0, viewAbout.offsetTop - menuHight)
});

contact.addEventListener('click', function () {
  nav.classList.remove('visible');
  window.scrollTo(0, viewContact.offsetTop - menuHight)
});