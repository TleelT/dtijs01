let myArray01 = [10, 20, 30, 40, 50];

// 1. for loop
for (let i = 0; i < myArray01.length; i++) {
    console.log(myArray01[i] * 10);
}

// 2. forEach
myArray01.forEach((value, index) => {
    console.log(value * 10, ` Index: ${index}`);
});

// 3. for-of
for (let value of myArray01) {
    console.log(value * 10);
}

// 4. map (ส่งคืน Array ใหม่)
let newArray = myArray01.map((value, index) => {
    return value * 10;
});
console.log(newArray);
