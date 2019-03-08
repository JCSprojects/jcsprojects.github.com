//Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

//Despues recorrerlos

links.forEach(function(link){



//Agregar un evento click a cada uno de ellos
  link.addEventListener("click",function(ev){
    ev.preventDefault();
    let content = document.querySelector('.content');

    // Quitarle las clase de animacion que ya tiene
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");


    //Agregar clases para animar su salida fadeOutUp
    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    setTimeout(function(){
      location.href="/";
    },600);
    //setInterval

    return false;
  });
});
