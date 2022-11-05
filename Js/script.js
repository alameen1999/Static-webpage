// When page loads, it will trigger the circle menu
// window.onload = function() {
//     var menuButton = document.getElementById("menu");
//     menuButton.click();
// };

// scrolling//
// document.getElementById('clickmap').addEventListener("click", myFunction);
// function myFunction() {
//     window.open("https://www.google.com/maps/place/Experion+Technologies+(I)+Private+Limited/@8.556562,76.8800819,17z/data=!3m1!4b1!4m6!3m5!1s0x3b05befae963353f:0x21e52a768e18dfd5!8m2!3d8.556562!4d76.8822759!16s%2Fg%2F1hm66vc8_");
// }
const mapclick=document.getElementById('clickmap')
mapclick.addEventListener("click",()=>{
    window.open("https://www.google.com/maps/place/Experion+Technologies+(I)+Private+Limited/@8.556562,76.8800819,17z/data=!3m1!4b1!4m6!3m5!1s0x3b05befae963353f:0x21e52a768e18dfd5!8m2!3d8.556562!4d76.8822759!16s%2Fg%2F1hm66vc8_");

});

const contentBox = document.querySelectorAll(".contentBox");
const lead = document.querySelector(".lead");


contentBox.forEach((box) => {
  box.addEventListener("mouseenter", (e) => {
    e.target.querySelector(".lead").classList.add("over");
   
  });

  box.addEventListener("mouseleave", (e) => {
    e.target.querySelector(".lead").classList.remove("over");
   
  });
});

    
