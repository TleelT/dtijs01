function test01(x, y) {
    console.log(x);
    y();
}

function test02(a, b, c) {
    let data = a + c(20);
    console.log(data);
    b(11, 22, 33);
}

// ------------------------------------

test01(555, () => {
    console.log("Wow wow wow");
});

test02(
    100,
    (x, y, z) => { // ใส่ => เพิ่มตรงนี้
        console.log(x + y + z);
    },
    function (m) {
        return m * 5;
    }
);