/*--------------------------- Lab 15.1 ------------------*/
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement("img");
    imgEl.src = imgPath;

    // bắt sự kiện load ảnh
    imgEl.addEventListener("load", function () {
      imgEl.classList.add("images");
      //Ảnh load xong thì thêm imgEl vào Dom
      document.body.appendChild(imgEl);
      // gọi hàm resolve khi thành coog ==> và trả về kết quả là imgEl1
      resolve(imgEl);
    });
    imgEl.addEventListener("error", function () {
      // gọi hàm reject khi gặp lỗi ==> trả về 1 lỗi
      reject(new Error("Đã bị lỗi!"));
    });
  });
}
// Hình ảnh trong thư mục img. Kiếm tra trình xử lý lỗi bằng cách dùng đường dẫn ảnh sai. Đặt tốc độ mạng thành “Fast 3G” trong tab Network, nếu không thì hình ảnh sẽ tải quá nhanh.
// let currentImg;
// createImage(`img/am.jpg`)
//   // imgEl đucợ trả về từ resolve
//   .then((imgEl) => {
//     currentImg = imgEl;
//     console.log("img 1");
//     // wait(2) là 1 promise
//     return wait(2); // hiển thị sau 2 giây sẽ trả về một promise khác để hiển thị ảnh
//   })
//   .then(() => {
//     // ẩn img 1
//     currentImg.style.display = "none";
//     // tạo và hiển thị ảnh số hai
//     return createImage("img/amt1.jpg");
//   })
//   .then((imgEl) => {
//     currentImg = imgEl;
//     console.log("img 2");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//   })
//   .then(() => {
//     // ẩn img 1
//     currentImg.style.display = "none";
//     // tạo và hiển thị ảnh số hai
//     return createImage("img/asl2.jpg");
//   })
//   .then((imgEl) => {
//     currentImg = imgEl;
//     console.log("img 3");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//   })

//   // bắt lôi, nếu có bất kì lỗi nào ở trên thì sẽ nhảy đến catch để bắt lỗi và sử lý bỏ qua các .then() tiếp theo.
//   .catch((err) => console.error(err));

/*------------------------ Lab 15.2 -----------------------*/

async function loadNPause() {
  try {
    // img 1
    const imgEl = await createImage(`img/am.jpg`);
    await wait(2);
    imgEl.style.display = "none";

    // img 2
    const imgEl2 = await createImage(`img/amt1.jpg`);
    await wait(2);
    imgEl2.style.display = "none";
    // img 3
    const imgEl3 = await createImage(`img/asl2.jpg`);
    await wait(2);
    imgEl3.style.display = "none";
    // Bắt lỗi, nếu trong try có lỗi thì catch sẽ được chạy và bắt lỗi.
  } catch (err) {
    console.error(err);
  }
}
loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    //
    //
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
};

loadAll(["img/am.jpg", "img/amt1.jpg", "img/asl2.jpg"]);
