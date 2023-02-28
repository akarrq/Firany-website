class Menu {
  constructor() {
    this.menuBtn = document.querySelector('[data-id="menuBtn"]');
    this.menu = document.querySelector('[data-id="menu"]');
    this.menuItems = document.querySelectorAll('[data-id="menuItem"]');
    this.sections = document.querySelectorAll('[data-id="section"]');
  }
  setListener() {
    this.menuBtn.addEventListener("click", this.switchMenu.bind(this));
    this.menu.addEventListener("click", this.closeMenu.bind(this));
    for (const menuItem of this.menuItems) {
      menuItem.addEventListener("click", this.scrollToSection.bind(this));
    }
  }
  switchMenu() {
    this.menu.classList.toggle("nav__menu--visible");
  }
  closeMenu() {
    this.menu.classList.remove("nav__menu--visible");
  }
  scrollToSection(e) {
    let clickedElement = e.target;
    this.closeMenu();
    for (const section of this.sections) {
      if (section.textContent === clickedElement.textContent) {
        window.scrollTo(
          0,
          section.offsetTop - this.menu.parentElement.offsetHeight
        );
      }
    }
  }
}

const nav = new Menu();
nav.setListener();
