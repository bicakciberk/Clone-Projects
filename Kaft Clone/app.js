// let isFirst = false;
// let up = false;

// document.addEventListener("scroll", function () {
//   const height = window.scrollY;
//   // console.log(height, window.innerHeight / 2, isFirst);
//   document.addEventListener("wheel", function (e) {
//     // console.log(e.deltaY);
//     up = e.deltaY >= 0;
//   });

//   if (
//     window.innerHeight / 2 + 1 <= window.scrollY <= window.innerHeight &&
//     isFirst == true
//   ) {
//     window.scrollTo(0, window.innerHeight);
//     isFirst = true;
//   }
//   if (window.scrollY <= window.innerHeight / 2) {
//     isFirst = false;
//     console.log("sa");
//   }
//   if (window.scrollY >= window.innerHeight && isFirst == true && up == true) {
//     window.scrollTo(0, 0);
//   } else if (
//     window.scrollY >= window.innerHeight &&
//     isFirst == true &&
//     up == false
//   ) {
//     window.scrollTo(0, window.innerHeight * 2);
//   }
// });
