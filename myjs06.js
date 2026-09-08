// Control statement คือ คำสั่งที่ใช้ควบคุมการทำงานของโปรแกรมให้เป็นไปตามเงื่อนไขหรือวนซ้ำ

// Conditional statement (คำสั่งเงื่อนไข)
// if, if-else, if-else-if, switch

// 1. if
let score = 75;
if (score >= 50) {
    console.log("Passed!");
}
console.log('---------------------------');

// 2. if-else
let age = 18;
if (age >= 20) {
    console.log("Adult");
} else {
    console.log("Minor");
}
console.log('---------------------------');

// 3. if-else-if
let points = 80;
if (points >= 80) {
    console.log("Grade A");
} else if (points >= 70) {
    console.log("Grade B");
} else if (points >= 60) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}
console.log('---------------------------');

// 4. switch
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Color is Yellow");
        break;
    case "Tuesday":
        console.log("Color is Pink");
        break;
    default:
        console.log("Other day");
}
console.log('---------------------------');

// Loop / Iterative / Repeat statement (คำสั่งวนซ้ำ)
// for, while, do-while

// 1. for
for (let i = 1; i <= 3; i++) {
    console.log(`For loop round: ${i}`);
}
console.log('---------------------------');

// 2. while
let count = 1;
while (count <= 3) {
    console.log(`While loop round: ${count}`);
    count++;
}
console.log('---------------------------');

// 3. do-while
let num = 1;
do {
    console.log(`Do-while loop round: ${num}`);
    num++;
} while (num <= 3);
console.log('---------------------------');

// break, continue

// break (หยุดการทำงานของลูปทันที)
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(`Break i = ${i}`);
}
console.log('---------------------------');

// continue (ข้ามการทำงานในรอบนั้นๆ ไปรอบถัดไป)
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(`Continue i = ${i}`);
}