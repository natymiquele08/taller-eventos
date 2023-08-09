const div = document.getElementById("boton");
const btn = document.getElementById("btn");

div.addEventListener("click", function () {
  alert("hola soy div");
});

btn.addEventListener("click", function (e){
  e.stopPropagation();
  alert("Hola");
});
















  









