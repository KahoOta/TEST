// ### 16, 図形の表示

// 0 
// 00 
// 000

// この図形をfor文を使って出力してください。
for (let i = 1; i <= 3; i++) {
    let zero = "";
    for (let z = 1; z <= i; z++) {
        zero += "0";
    }
    console.log(zero);
 }

// ### 17, 図形の表示

// 0 
// 000 
// 00000

// この図形をfor文を使って出力してください。
for (let i = 1; i <= 5; i += 2) {
    let zero = "";
    for (let z = 1; z <= i; z++) {
        zero += "0";
    }
    console.log(zero);
}

// ### 18, 図形の表示

// 0 
// 000 
// 00000 
// 000 
// 0

// この図形をfor文を使って出力してください。

for (let i = 1; i <= 5; i += 2) {
    let zero = "";
    for (let z = 1; z <= i; z++) {
        zero += "0";
    }
    console.log(zero);
}

for (let i = 3; i >= 1; i -= 2) {
    let zero = "";
    for (let z = 1; z <= i; z++) {
        zero += "0";
    }
    console.log(zero);
}