function swiper() {
  const catTitle = document.querySelector(".cat-title"); //img
  const swiper = document.querySelector(".swiper-slide-next"); //active slide
  const nav = document.querySelector("nav"); //nav logo
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
    swiper.children[1].style.color = "white";
  } else if (swiper.children[1].classList.contains("sweatshirts")) {
    catTitle.children[0].src =
      "https://www.kaft.com/resources-2.00.040/images/product/category/sweatshirt.webp";
  } else if (swiper.children[1].classList.contains("hoodies")) {
    catTitle.children[0].src =
      "https://www.kaft.com/resources-2.00.040/images/product/category/creative_hoodie.webp";
  } else if (swiper.children[1].classList.contains("beanies")) {
    catTitle.children[0].src =
      "https://www.kaft.com/resources-2.00.040/images/product/category/beanie.webp";
    swiper.children[1].style.color = "white";
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
}, 1000);
