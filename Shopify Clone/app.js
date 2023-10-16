function accordion() {
  const answers = document.querySelectorAll(".answer");
  const questions = document.querySelectorAll(".question");
  const acBtnWhite = document.querySelectorAll(".acBtnWhite");
  const acBtnBlack = document.querySelectorAll(".acBtnBlack");

  acBtnWhite.forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.style.display = "none";
      btn.nextElementSibling.style.display = "flex";

      btn.parentElement.parentElement.children[1].style.display = "block";
    });
  });

  acBtnBlack.forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.style.display = "none";
      btn.previousElementSibling.style.display = "flex";
      btn.parentElement.parentElement.children[1].style.display = "none";
    });
  });
}

accordion();

function topHeader() {
  let isHeaderHidden = false;
  const topHeader = document.querySelector("#topHeader");
  const closeBtn = document.querySelector("#closeBtn");

  window.addEventListener("scroll", function () {
    if (!isHeaderHidden && this.window.scrollY > 0) {
      topHeader.classList.remove("hidden");
    } else {
      topHeader.classList.add("hidden");
    }
  });

  closeBtn.addEventListener("click", function () {
    topHeader.classList.add("hidden");
    isHeaderHidden = true;
  });
}

window.addEventListener("load", topHeader);
