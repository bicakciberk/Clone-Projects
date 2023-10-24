function swiper() {
  const catTitle = document.querySelector(".cat-title"); //img
  let swiper = document.querySelector(".swiper-slide-next"); //active slide
  const nav = document.querySelector("nav"); //nav logo

  if (window.innerWidth < 800) {
    swiper = document.querySelector(".swiper-slide-active");
  }
  //   console.log(swiper);

  //   console.log(catTitle.children[0].src); //img src
  //   console.log(swiper.children[1].textContent);

  if (swiper.children[1].classList.contains("basic")) {
    catTitle.children[0].src =
      "https://www.kaft.com/resources-2.00.040/images/product/category/basic_tshirt.webp";
  } else if (swiper.children[1].classList.contains("creative")) {
    catTitle.children[0].src =
      "https://www.kaft.com/resources-2.00.040/images/product/category/tshirt.webp";
  } else if (swiper.children[1].classList.contains("tanks")) {
    catTitle.children[0].src =
      "https://www.kaft.com/resources-2.00.040/images/product/category/tank.webp";
  } else if (swiper.children[1].classList.contains("sweatshirts")) {
    catTitle.children[0].src =
      "https://www.kaft.com/resources-2.00.040/images/product/category/sweatshirt.webp";
  } else if (swiper.children[1].classList.contains("hoodies")) {
    catTitle.children[0].src =
      "https://www.kaft.com/resources-2.00.040/images/product/category/creative_hoodie.webp";
  } else if (swiper.children[1].classList.contains("beanies")) {
    catTitle.children[0].src =
      "https://www.kaft.com/resources-2.00.040/images/product/category/beanie.webp";
  } else if (swiper.children[1].classList.contains("socks")) {
    catTitle.children[0].src =
      "https://www.kaft.com/resources-2.00.040/images/product/category/sock.webp";
  } else if (swiper.children[1].classList.contains("trousers")) {
    catTitle.children[0].src =
      "https://www.kaft.com/resources-2.00.040/images/product/category/pant_man.webp";
  } else if (swiper.children[1].classList.contains("jacket")) {
    catTitle.children[0].src =
      "https://www.kaft.com/resources-2.00.040/images/product/category/jacket.webp";
  } else if (swiper.children[1].classList.contains("bags")) {
    catTitle.children[0].src =
      "https://www.kaft.com/resources-2.00.040/images/product/category/bag.webp";
  } else if (swiper.children[1].classList.contains("shorts")) {
    catTitle.children[0].src =
      "https://www.kaft.com/resources-2.00.040/images/product/category/short_man.webp";
  }
}

setInterval(() => {
  swiper();
}, 900);

function sideBar() {
  const menuBtn = document.querySelector("#menuBtn");
  const sideMenu = document.querySelector(".sidebar");
  const closeBtn = document.querySelector("#closeBtn");
  const fullPage = document.querySelector("#fullpage");

  menuBtn.addEventListener("click", function () {
    sideMenu.style.transform = "translateX(0px)";
    fullPage.classList.add("dark");
  });

  closeBtn.addEventListener("click", function () {
    sideMenu.style.transform = "translateX(-5000px)";
    fullPage.classList.remove("dark");
  });
}
sideBar();

const nav = document.querySelector("nav");
const spanI = document.querySelectorAll(".spanI");
const navLeftSpan = document.querySelector("#nav-left-span");
const navLogo = document.querySelector("#logo");
const iconCart = document.querySelector("#icon-cart");
const rightSmall = document.querySelector("#rightSmall");
const loginText = document.querySelector("#loginText");
const menuText = document.querySelector("#menuText");

function perView() {
  const body = document.querySelector("body");
  spanI.forEach((spanI) => {
    if (body.classList.contains("fp-viewing-5")) {
      navLeftSpan.style.color = "#353532"; //nav > left > span
      spanI.style.borderColor = "#353532";
      navLogo.src =
        "https://www.kaft.com/resources-2.00.040/images/kaft_logo.svg";
      navLogo.style.height = "30px";
      iconCart.style.fill = "#353532";
      rightSmall.style.color = "#353532";
      loginText.style.color = "#353532";
      menuText.style.color = "#353532";
    } else {
      navLeftSpan.style.color = "#fefefe"; //nav > left > span
      spanI.style.borderColor = "#fefefe";
      navLogo.src =
        "https://www.kaft.com/resources-2.00.040/images/logo-light.svg";
      loginText.style.color = "#fefefe";
      menuText.style.color = "#fefefe";
      navLogo.style.height = "51px";
    }
  });
}

setInterval(() => {
  perView();
}, 3000);

let isHeaderClose = false;

function headerClose() {
  const header = document.querySelector("#header");
  const headerCloseBtn = document.querySelector(".header-closebtn");
  headerCloseBtn.addEventListener("click", function () {
    isHeaderClose = true;
    if (isHeaderClose == true) {
      header.classList.remove("flex");
      header.classList.add("hidden");
      nav.classList.add("py-20px");
      nav.classList.remove("py-64px");
    }
  });
}
headerClose();

async function fetchCurrency() {
  const fetchCurrencySelect = document.querySelector("#fetchCurrencySelect");
  const closeCurrence = document.querySelector("#closeCurrency");
  const openCurrence = document.querySelectorAll(".currence");

  const currencyDropDown = document.querySelector(".currency-dropdown");

  const res = await fetch(
    "https://api.print.io/api/v/5/source/api/countries/?recipeid=f255af6f-9614-4fe2-aa8b-1b77b936d9d6"
  );
  const data = await res.json();
  data.Countries.forEach((orderData) => {
    const languageElement = document.createElement("option");
    languageElement.value = orderData.Name;
    languageElement.textContent = orderData.Name;
    languageElement.classList.add("bg-white");
    fetchCurrencySelect.appendChild(languageElement);
    console.log(languageElement);
  });

  openCurrence.forEach((currence) => {
    currence.addEventListener("click", function () {
      currencyDropDown.classList.remove("hidden");
    });
  });

  closeCurrence.addEventListener("click", function () {
    currencyDropDown.classList.add("hidden");
  });
}
fetchCurrency();
