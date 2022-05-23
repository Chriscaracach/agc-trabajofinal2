//Obtenemos las imágenes y el display donde vamos a mostrar la imagen mas grande
let displayImg = document.getElementById("display-img");
let thumbnailsImg = document.querySelectorAll("img.thumbnail-img");

//con un bucle for iteramos por todas las imagenes
for (let index = 0; index < thumbnailsImg.length; index++) {
  //Les agregamos un evento que se accione cuando se le haga un click
  thumbnailsImg[index].addEventListener("click", () => {
    //El evento cambia el atributo src del display por el src de la imagen clickeada
    displayImg.src = thumbnailsImg[index].src;
  });
}
