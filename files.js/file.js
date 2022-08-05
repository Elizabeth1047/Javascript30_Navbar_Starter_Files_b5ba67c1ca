let hambuger=document.getElementById("ham");
let lists = document.getElementById("mobile");
let product = document.getElementById("subchild");
let child = document.getElementById("navchild");
hambuger.addEventListener("click", (eve) => {
  lists.classList.toggle("reveal");
});
product.addEventListener("click", (eve) => {
  child.classList.toggle("reval");
});
