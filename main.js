let displayImg = document.getElementById("display-img");
let thumbnailsImg = document.querySelectorAll("img.thumbnail-img");

for (let index = 0; index < thumbnailsImg.length; index++) {
  thumbnailsImg[index].addEventListener("click", () => {
    displayImg.src = thumbnailsImg[index].src;
  });
}
