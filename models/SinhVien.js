function SinhVien() {
  this.maSinhVien = "";
  this.tenSinhVien = "";
}

const arr = [1, 2, 3, 4];
const domain = { url: "https://api.com" };

export { arr, SinhVien, domain };

//export default: mỗi file chỉ thực hiện được một lệnh
export default SinhVien;
