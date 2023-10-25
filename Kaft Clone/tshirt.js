function swiper() {
  const catTitle = document.querySelector(".cat-title"); //img
  let swiper = document.querySelector(".swiper-slide-next"); //active slide

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

  menuBtn.addEventListener("click", function () {
    sideMenu.style.transform = "translateX(0px)";
  });

  closeBtn.addEventListener("click", function () {
    sideMenu.style.transform = "translateX(-5000px)";
  });
}

sideBar();
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
    languageElement.className = "bg-white";
    fetchCurrencySelect.appendChild(languageElement);
    if (orderData.Name == "Turkey") {
      languageElement.selected = true;
    }
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

const updateBtn = document.querySelector("#updateBtn");

function updateNavText() {
  const fetchCurrencySelect = document.querySelector("#fetchCurrencySelect"); //html select element (for currency)
  const languageSelect = document.querySelector("#languageSelect"); //html select element (for language)
  const currencyDropDown = document.querySelector(".currency-dropdown"); //when i click currencyContent or languageContent, here is opening right in website
  const currencyContent = document.querySelector("#currencyContent"); //currency textContent in navbar
  const languageContent = document.querySelector("#languageContent"); //language textContent in navbar

  currencyDropDown.classList.add("hidden");

  currencyContent.textContent = fetchCurrencySelect.value;
  languageContent.textContent = languageSelect.value;
}

updateBtn.addEventListener("click", updateNavText);

const creativeTshirts = [
  {
    id: 1,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_fastfingers_23306_1200_1200.jpg?cacheID=1685437144000",
    imgBack:
      "https://www.kaft.com/static/images/cache/1200/tisort_fastfingers_23306_1200_1200.jpg?cacheID=1685437144000",
    price: 500,
    header: "Fast Fingers",
    type: "Regular - Ocean",
    tale: '"Spirit of the broken item, hear out! We fell to pieces but lets accept it, we had a great time."',
  },
  {
    id: 2,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_neuvex_21017_1200_1200.jpg?cacheID=1675926790000",
    price: 560,
    header: "Neuvex",
    type: "Relax - Tar",
    tale: '"Every day, from dawn to dusk, I surround the sky with cables and launch my satellittes of imagination."',
  },
  {
    id: 3,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_escapeflip_22991_1200_1200.jpg?cacheID=1679826691000",
    imgBack:
      "https://www.kaft.com/static/images/cache/1200/tisort_escapeflip_23295_1200_1200.jpg?cacheID=1685437144000",
    price: 500,
    header: "Escape Flip",
    type: "Regular - Off White",
    tale: '"Spirit of the borekn item, hear me out! We fell to pieces but lets accept it, we had a great time."',
  },
  {
    id: 4,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_kiux_21024_1200_1200.jpg?cacheID=1675926790000",
    price: 325,
    header: "Kiuix",
    tale: '"Every day, from dawn to dusk, I surround the sky with cables and launch my satellittes of imagination."',
    type: "Relax - Sulphur",
  },
  {
    id: 5,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_fastfingers_23306_1200_1200.jpg?cacheID=1685437144000",
    imgBack:
      "https://www.kaft.com/static/images/cache/1200/tisort_fastfingers_23306_1200_1200.jpg?cacheID=1685437144000",
    price: 500,
    header: "Fast Fingers",
    type: "Regular - Ocean",
    tale: '"Spirit of the broken item, hear out! We fell to pieces but lets accept it, we had a great time."',
  },
  {
    id: 6,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_neuvex_21017_1200_1200.jpg?cacheID=1675926790000",
    price: 560,
    header: "Neuvex",
    type: "Relax - Tar",
    tale: '"Every day, from dawn to dusk, I surround the sky with cables and launch my satellittes of imagination."',
  },
  {
    id: 7,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_escapeflip_22991_1200_1200.jpg?cacheID=1679826691000",
    imgBack:
      "https://www.kaft.com/static/images/cache/1200/tisort_escapeflip_23295_1200_1200.jpg?cacheID=1685437144000",
    price: 500,
    header: "Escape Flip",
    type: "Regular - Off White",
    tale: '"Spirit of the borekn item, hear me out! We fell to pieces but lets accept it, we had a great time."',
  },
  {
    id: 8,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_kiux_21024_1200_1200.jpg?cacheID=1675926790000",
    price: 325,
    header: "Kiuix",
    type: "Relax - Sulphur",
    tale: '"Every day, from dawn to dusk, I surround the sky with cables and launch my satellittes of imagination."',
  },
  {
    id: 9,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_fastfingers_23306_1200_1200.jpg?cacheID=1685437144000",
    imgBack:
      "https://www.kaft.com/static/images/cache/1200/tisort_fastfingers_23306_1200_1200.jpg?cacheID=1685437144000",
    price: 500,
    header: "Fast Fingers",
    type: "Regular - Ocean",
    tale: '"Spirit of the broken item, hear out! We fell to pieces but lets accept it, we had a great time."',
  },
  {
    id: 10,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_neuvex_21017_1200_1200.jpg?cacheID=1675926790000",
    price: 560,
    header: "Neuvex",
    type: "Relax - Tar",
    tale: '"Every day, from dawn to dusk, I surround the sky with cables and launch my satellittes of imagination."',
  },
  {
    id: 11,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_escapeflip_22991_1200_1200.jpg?cacheID=1679826691000",
    imgBack:
      "https://www.kaft.com/static/images/cache/1200/tisort_escapeflip_23295_1200_1200.jpg?cacheID=1685437144000",
    price: 500,
    header: "Escape Flip",
    type: "Regular - Off White",
    tale: '"Spirit of the borekn item, hear me out! We fell to pieces but lets accept it, we had a great time."',
  },
  {
    id: 12,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_kiux_21024_1200_1200.jpg?cacheID=1675926790000",
    price: 325,
    header: "Kiuix",
    type: "Relax - Sulphur",
    tale: '"Every day, from dawn to dusk, I surround the sky with cables and launch my satellittes of imagination."',
  },
  {
    id: 13,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_fastfingers_23306_1200_1200.jpg?cacheID=1685437144000",
    imgBack:
      "https://www.kaft.com/static/images/cache/1200/tisort_fastfingers_23306_1200_1200.jpg?cacheID=1685437144000",
    price: 500,
    header: "Fast Fingers",
    type: "Regular - Ocean",
    tale: '"Spirit of the broken item, hear out! We fell to pieces but lets accept it, we had a great time."',
  },
  {
    id: 14,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_neuvex_21017_1200_1200.jpg?cacheID=1675926790000",
    price: 560,
    header: "Neuvex",
    type: "Relax - Tar",
    tale: '"Every day, from dawn to dusk, I surround the sky with cables and launch my satellittes of imagination."',
  },
  {
    id: 15,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_escapeflip_22991_1200_1200.jpg?cacheID=1679826691000",
    imgBack:
      "https://www.kaft.com/static/images/cache/1200/tisort_escapeflip_23295_1200_1200.jpg?cacheID=1685437144000",
    price: 500,
    header: "Escape Flip",
    type: "Regular - Off White",
    tale: '"Spirit of the borekn item, hear me out! We fell to pieces but lets accept it, we had a great time."',
  },
  {
    id: 16,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_kiux_21024_1200_1200.jpg?cacheID=1675926790000",
    price: 325,
    header: "Kiuix",
    type: "Relax - Sulphur",
    tale: '"Every day, from dawn to dusk, I surround the sky with cables and launch my satellittes of imagination."',
  },
  {
    id: 17,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_fastfingers_23306_1200_1200.jpg?cacheID=1685437144000",
    imgBack:
      "https://www.kaft.com/static/images/cache/1200/tisort_fastfingers_23306_1200_1200.jpg?cacheID=1685437144000",
    price: 500,
    header: "Fast Fingers",
    type: "Regular - Ocean",
    tale: '"Spirit of the broken item, hear out! We fell to pieces but lets accept it, we had a great time."',
  },
  {
    id: 18,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_neuvex_21017_1200_1200.jpg?cacheID=1675926790000",
    price: 560,
    header: "Neuvex",
    type: "Relax - Tar",
    tale: '"Every day, from dawn to dusk, I surround the sky with cables and launch my satellittes of imagination."',
  },
  {
    id: 19,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_escapeflip_22991_1200_1200.jpg?cacheID=1679826691000",
    imgBack:
      "https://www.kaft.com/static/images/cache/1200/tisort_escapeflip_23295_1200_1200.jpg?cacheID=1685437144000",
    price: 500,
    header: "Escape Flip",
    type: "Regular - Off White",
    tale: '"Spirit of the borekn item, hear me out! We fell to pieces but lets accept it, we had a great time."',
  },
  {
    id: 20,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_kiux_21024_1200_1200.jpg?cacheID=1675926790000",
    price: 325,
    header: "Kiuix",
    type: "Relax - Sulphur",
    tale: '"Every day, from dawn to dusk, I surround the sky with cables and launch my satellittes of imagination."',
  },
  {
    id: 21,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_fastfingers_23306_1200_1200.jpg?cacheID=1685437144000",
    imgBack:
      "https://www.kaft.com/static/images/cache/1200/tisort_fastfingers_23306_1200_1200.jpg?cacheID=1685437144000",
    price: 500,
    header: "Fast Fingers",
    type: "Regular - Ocean",
    tale: '"Spirit of the broken item, hear out! We fell to pieces but lets accept it, we had a great time."',
  },
  {
    id: 22,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_neuvex_21017_1200_1200.jpg?cacheID=1675926790000",
    price: 560,
    header: "Neuvex",
    type: "Relax - Tar",
    tale: '"Every day, from dawn to dusk, I surround the sky with cables and launch my satellittes of imagination."',
  },
  {
    id: 23,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_escapeflip_22991_1200_1200.jpg?cacheID=1679826691000",
    imgBack:
      "https://www.kaft.com/static/images/cache/1200/tisort_escapeflip_23295_1200_1200.jpg?cacheID=1685437144000",
    price: 500,
    header: "Escape Flip",
    type: "Regular - Off White",
    tale: '"Spirit of the borekn item, hear me out! We fell to pieces but lets accept it, we had a great time."',
  },
  {
    id: 24,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_kiux_21024_1200_1200.jpg?cacheID=1675926790000",
    price: 325,
    header: "Kiuix",
    type: "Relax - Sulphur",
    tale: '"Every day, from dawn to dusk, I surround the sky with cables and launch my satellittes of imagination."',
  },
  {
    id: 25,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_fastfingers_23306_1200_1200.jpg?cacheID=1685437144000",
    imgBack:
      "https://www.kaft.com/static/images/cache/1200/tisort_fastfingers_23306_1200_1200.jpg?cacheID=1685437144000",
    price: 500,
    header: "Fast Fingers",
    type: "Regular - Ocean",
    tale: '"Spirit of the broken item, hear out! We fell to pieces but lets accept it, we had a great time."',
  },
  {
    id: 26,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_neuvex_21017_1200_1200.jpg?cacheID=1675926790000",
    price: 560,
    header: "Neuvex",
    type: "Relax - Tar",
    tale: '"Every day, from dawn to dusk, I surround the sky with cables and launch my satellittes of imagination."',
  },
  {
    id: 27,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_escapeflip_22991_1200_1200.jpg?cacheID=1679826691000",
    imgBack:
      "https://www.kaft.com/static/images/cache/1200/tisort_escapeflip_23295_1200_1200.jpg?cacheID=1685437144000",
    price: 500,
    header: "Escape Flip",
    type: "Regular - Off White",
    tale: '"Spirit of the borekn item, hear me out! We fell to pieces but lets accept it, we had a great time."',
  },
  {
    id: 28,
    imgFront:
      "https://www.kaft.com/static/images/cache/1200/tisort_kiux_21024_1200_1200.jpg?cacheID=1675926790000",
    price: 325,
    header: "Kiuix",
    type: "Relax - Sulphur",
    tale: '"Every day, from dawn to dusk, I surround the sky with cables and launch my satellittes of imagination."',
  },
];

function tshirt() {
  const tshirtsContainer = document.querySelector("#tshirts-container");
  const product = document.querySelector("#product");

  creativeTshirts.forEach((tshirt) => {
    const element = document.createElement("div");
    const top = document.createElement("div");
    const img = document.createElement("img");
    const bottom = document.createElement("div");
    const header = document.createElement("p");
    const type = document.createElement("p");
    const price = document.createElement("p");

    element.classList =
      "tshirt cursor-pointer max-w-330px mt-40px hover:text-green duration-500";
    top.classList = "top";
    bottom.classList = "bottom flex flex-col items-center justify-center";
    img.classList = "w-full";
    img.src = tshirt.imgFront;
    header.classList = "text-sm";
    header.textContent = tshirt.header;
    price.classList = "font-semibold";
    price.textContent = tshirt.price + " " + "TL";
    type.textContent = tshirt.type;
    type.classList = "text-paleGray opacity-0 duration-500";

    top.appendChild(img);
    bottom.appendChild(header);
    bottom.appendChild(price);
    element.appendChild(top);
    element.appendChild(bottom);
    bottom.appendChild(type);
    tshirtsContainer.appendChild(element);

    element.addEventListener("mouseover", function () {
      type.classList.remove("opacity-0");
    });
    element.addEventListener("mouseout", function () {
      type.classList.add("opacity-0");
    });
  });
  product.textContent = tshirtsContainer.children.length + " " + "product";
}
tshirt();
