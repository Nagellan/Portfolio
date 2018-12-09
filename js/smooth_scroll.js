window.onload=function() {
     document.getElementById("menu").childNodes.forEach(function(elem) {
          elem.addEventListener("click", function() {
               document.getElementById(elem.name).scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
     });
}