const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const imgContainer = document.querySelector(".images");
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("laod", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

const loadImages = async function () {
  try {
    // load ing 1
    let img = await createImage("img/am.jpg");
    console.log("Image 1 load");
    await wait(2);
    img.style.display = "none";
    // load image 2
    img = await createImage("img/amt1.jpg");
    console.log("Image 3 load");
    await wait(2);
    img.style.display = "none";
    // Load image 3
    img = await createImage("img/asl2.jpg");
    console.log("Image 3 load");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.log(err);
  }
};
loadImages();
