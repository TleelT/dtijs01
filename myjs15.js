// Object ใชักับตัวแปรทำให้ตัวแปร 1 ตัวเก็บได้มากกว่า 1 ข้อมูล
// เพียงแต่ว่า แต่ละข้อมูลจะมี key กำกับ และมองเห็น
// object ธรรมดา
let person = {
  name: "Kanokwan",
  age: 20,
  gender: "male",
};
 
// object ใน array
let student = [
  { id: 1111, name: "Sombat", gpa: 3.5 },
  { id: 2222, name: "Nattapong", gpa: 3.6 },
  { id: 3333, name: "Kanokwan", gpa: 3.7 },
  { id: 4444, name: "Nattapong", gpa: 3.8 },
];
 
// เข้าถึงทุกข้อมูล ของ object ใน array
student.map((item, index) => {
  console.log(`ID: ${item.id}`);
  console.log(`NAME: ${item.name}`);
  console.log(`GPA: ${item.gpa}`);
  console.log("------------------------");
});
 
//----------------------
student.map(function (item, index) {
  console.log(`ID: ${item.id}`);
  console.log(`NAME: ${item.name}`);
  console.log(`GPA: ${item.gpa}`);
  console.log("------------------------");
});