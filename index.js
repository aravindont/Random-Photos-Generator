const imageContainerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  let newImagesNum = 10;
  addNewImages(newImagesNum);
});

function addNewImages(newImages) {
  for (let i = 0; i < newImages; i++) {
    const imgEl = document.createElement("img");
    imgEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.floor(Math.random() * 2000)
    )}`;
    imageContainerEl.appendChild(imgEl);
  }
}
