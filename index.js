// //------------------------ARROW FUNCTION-------------------------------
// // Arrow function không hỗ trợ hoisting, không hỗ trợ ngữ cảnh, không có ngữ cảnh this
// // Arrow function thường được dùng cho định nghĩa một hàm (không dùng để khai báo prototype (class) hoặc phương thức)

// let showMessage = (mess) => {
//   console.log(mess);
// };
// showMessage();

// //---------------------------Ngữ cảnh this--------------------------
// /*
// this: mặc định trỏ về window
// this: trong đối tượng sẽ là đối tượng đó
// this: trong prototype (function) thì this chính là function đó

// ==> đối với hàm thì sử dụng arrowFunction để không làm thay đổi ngữ cảnh (context) this.
// ==> this sẽ tính theo ngữ cảnh gần nhất, nếu không có sẽ báo lỗi (chỉnh     <script *type="module"* src="./index.js"></script>)
// */

// console.log(this);
// window.document.title = "abc";
// console.log("chiều dài", window.innerWidth);
// console.log("chiều rộng", window.innerHeight);

// const hocVien = {
//   maHocVien: "01",
//   tenHocVien: "Nguyen Van Teo",
//   hienThiThongTin: function () {
//     console.log("Ma hoc vien:", this.maHocVien);
//     console.log("Ten hoc vien:", this.tenHocVien);
//   },
// };
// hocVien.hienThiThongTin();

// //--------------------------Exercise------------------------------------
// /**
//  * Dựa vảo mảng màu in ra các button tương đương tại div#color
//  * Xây dựng xử lý cho các button đó khi người dùng click vào thì màu sắc của button thay đổi
//  */

// let arrColor = ["red", "green", "blue", "orange", "purple", "yellow", "pink"];

// //CÁCH 1: TẠO HTML BUTTON
// // const renderButton = () => {
// //   //input: arrColor

// //   //output <btn>...</btn> stringHTML
// //   let html = "";
// //   //process
// //   for (let index = 0; index < arrColor.length; index++) {
// //     //mỗi lần duyệt lấy ra 1 màu
// //     let color = arrColor[index];
// //     let button = `<button onclick="changeColor('${color}')" class="btn text-white m-2" style="background-color:${color};">${color}</button>`;
// //     //Nối button vào chuỗi output
// //     html += button;
// //   }
// //   //in chuỗi ra giao diện
// //   document.querySelector("#color").innerHTML = html;
// // };
// // window.changeColor = (color) => {
// //     document.querySelector('#home').style.color = color;
// // }

// //CÁCH 2: Tạo button = DOM (document.createElement)
// const renderButtonElement = () => {
//   for (let index = 0; index < arrColor.length; index++) {
//     let color = arrColor[index];
//     //duyệt qua 1 màu để tạo 1 button
//     let btn = document.createElement("button"); //=> tạo ra 1 thẻ chưa có trên giao diện <button></button>
//     btn.id = `btn-${color}`; //<button id="btn-color"></button>
//     btn.innerHTML = color; // <button id="btn-color">color</button>
//     btn.className = "btn text-white m-2"; // <button id="btn-color" class="btn text-white m-2">color</button>
//     btn.style.backgroundColor = color;
//     btn.onclick = function () {
//       document.querySelector("#home").style.color = color;
//     };
//     document.querySelector("#color").appendChild(btn); //đưa vào làm thẻ con của div#color
//   }
// };

// window.onload = function () {
//   // renderButton();
//   renderButtonElement();
// };

// //-----------------------------Default params----------------------
// /*
// Default params: cho phép thiết lập giá trị mặc định cho tham số, nếu người dùng gọi hàm không truyền giá trị thì hàm sẽ lấy giá trị mặc định
// */
// let getUserInfo = (name = "Mi", age = 18) => {
//   if (age > 0 && age < 30) {
//     console.log(name + " con tre " + name + " muon di choi");
//   }
// };
// getUserInfo();

// //-------------------------------Rest params--------------------------------------
// /**
//  * restParam: cho phép hàm nhận nhiều tham số không giới hạn dưới dạng array. Ký hiệu là: ...ten_bien
//  */

// const renderListPet = (...restPet) => {
//   restPet.forEach((pet, index) => {
//     console.log(pet);
//   });
// };
// renderListPet("fish");

// function tinhTong(...restTong) {
//   switch (restTong.length) {
//     case 2:
//       {
//         console.log(restTong[0] + restTong[1]);
//       }
//       break;
//     case 3:
//       {
//         console.log(restTong[0] + restTong[1] + restTong[2]);
//       }
//       break;
//     default: {
//       console.log("tham so khong hop le");
//     }
//   }
// }
// tinhTong(12, 14, 15);
// tinhTong(1, 2, 3, 4);

// //--------------------------------spread operator----------------------------
// // spread operator: dùng để sao chép giá trị của object và array trên object và array mới
// var object1 = { id: 5 };
// var object2 = { ...object1 };
// object2.id = 10;
// console.log(object1);
// console.log(object2);

// //---------------------------------------Destructuring-----------------------------------
// let hocVienObject = {
//   maHocVien: "01",
//   tenHocVien: "Nguyen Van A",
//   thongTinHocVien: {
//     soDienThoai: "00934810234",
//     diaChi: "123 Cu Lao",
//   },
// };
// let { maHocVien, tenHocVien } = hocVienObject;
// let { soDienThoai } = hocVienObject.thongTinHocVien;

// console.log(
//   `Hello ${tenHocVien} - ma so: ${maHocVien} - so dien thoai: ${soDienThoai}`
// );

// //tuple
// let [maSV, tenSV, hienThi] = [
//   1,
//   "Nguyen Van Teo",
//   function () {
//     console.log("hello Teo");
//   },
// ];
// console.log("maSV", maSV);
// console.log("tenSV", tenSV);
// hienThi();

// //----------------------------------Object Literal------------------------------
// //cho phép lấy tên biến làm tên thuộc tính, giá trị biến làm giá trị thuộc tính khi khai báo object
// let productId = 1;
// let productName = "iphone";
// let productPrice = "1000";
// let showInfo = function () {
//   console.log("info");
// };
// let pro = {
//   productId,
//   productName,
//   productPrice,
//   showInfo,
// };
// pro.showInfo();

// //----------------------------------Dynamic Key------------------------------------

// let tenThuocTinh = "mã sản phẩm";
// let sanPham = {
//   [tenThuocTinh]: "01",
// };
// console.log(sanPham);
// console.log(sanPham[tenThuocTinh]);

// //-----------------------for of-----------------------------------------------
// let arrProduct = [
//   { id: 1, name: "Product1", price: "1000" },
//   { id: 2, name: "Product2", price: "2000" },
//   { id: 3, name: "Product3", price: "3000" },
// ];
// for (let pro of arrProduct) {
//   console.log(pro);
// }
// //------------------------------for in-------------------------------------------
// for (let index in arrProduct) {
//   console.log(arrProduct[index]);
// }

// //----------------------------bải tập 2--------------------------------------
// document.querySelector("#formNhanVien").onsubmit = function (e) {
//   //cản sự kiện reload browser
//   e.preventDefault();
//   console.log(123);

//   let arrInput = document.querySelectorAll(
//     "#formNhanVien input, #formNhanVien select"
//   );
//   let nhanVien = {}; // dynamic object
//   for (let input of arrInput) {
//     let { id, value } = input;
//     nhanVien[id] = value;
//   }
//   console.log(nhanVien);
//   //Hiển thị dữ liệu
//   let html = "";
//   for (let key in nhanVien) {
//     html += `<tr>
//     <th>${key}</th>
//     <th>${nhanVien[key]}</th>
//     </tr>`;
//   }
//   document.querySelector("#tblNhanVien").innerHTML = html;
// };
// // ---------------callback function-------------------------------
// callback function là function đóng vai trò là tham số được gọi trong function khác
function main(callback) {
  document.querySelector("#content").innerHTML = callback("cybersoft");
}
// function renderSectionRadius(title) {
//   return `<section class="bg-dark text-white p-5" style="border-radius:5px">${title}</section>`;
// }
main((title) => {
  return `<section class="bg-warning text-white p-3" style="border-radius:5px">${title}</section>`;
});

import { SinhVien, arr } from "./models/SinhVien.js";
//export default khi import thì có thể rename nhưng không có dấu ngoặc nhọn
import SinhVienABC from "./models/SinhVien.js";

let sv = new SinhVien();
console.log(sv);
