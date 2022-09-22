/**
    DOM events
    1. Attribute event
    2. Assign event using the element node

    - oninput: (get value) theo khi có bất kì sự thay đổi nào
    - onchange: (get value) khi out out focus
    - onkeydown: (get value) khi keyboard down
    - preventDefaut: ngăn chặn hành vi mặc định của thẻ html
    - stopPropagation: 
 */

/**
 * Event listener
 */

// var h1Elements = document.querySelectorAll("h1");
// for (var i = 0; i < h1Elements.length; i++) {
//   h1Elements[i].onclick = function (e) {
//     console.log(e);
//   };
// }

// var element = document.querySelector('span[title="hi"]');
// console.log(element);

// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeyup = function (e) {
//   console.log(e);
// };

// inputElement.onchange = function (e) {
//   console.log(e.target);
// };

// document.onkeyup = function (e) {
//   console.log(e.which);
//   switch (e.which) {
//     case 27:
//       console.log("Exit!!!");
//       break;
//     case 13:
//       console.log("Send");
//   }
// };

// var aElements = document.links;
// console.log(aElements);

// for (var i = 0; i < aElements.length; i++) {
//   aElements[i].onclick = function (e) {
//     if (!e.target.href.startsWith("https://fullstack.edu.vn/"))
//       e.preventDefault();
//   };
// }

// var ulElements=document.querySelector('ul');
// ulElements.onmousedown = function(e) {
//   e.preventDefault();
// };

// ulElements.onclick = function(e){
//   console.log(e.target);
// }

const btn = document.querySelector("button");
console.log(btn);
function viec1() {
  console.log("Viec 1");
  console.log("Viec 2");
}


btn.addEventListener('click', viec1)
btn.addEventListener('click',function(){
  console.log('viec3')
})
