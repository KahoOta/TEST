// ### 9. for文と条件式の組み合わせ3

// 20 ~ 50までの数字の中で2で割ったら奇数となる数字のみを出力してください
console.log("----- 20 ~ 50までの数字の中で2で割ったら奇数となる数字 -----")
for (let i = 20; i <= 50; i++) {
    const half = i / 2;
    if (Number.isInteger(half) && half % 2 !== 0) {
        console.log(i);
    }
}

// ### 10. for文と条件式の組み合わせ4

// 20 ~ 50までの数字の中で2で割ったら奇数となる数字の個数を出力してください
console.log("----- 20 ~ 50までの数字の中で2で割ったら奇数となる数字の個数 -----")
let count = 0;
for (let i = 20; i <= 50; i++) {
    const half = i / 2;
    if (Number.isInteger(half) && half % 2 !== 0) {
        count++;
    }
}
console.log(count);

// ### 11. for文を使用した計算

// 1000未満の「3かつ7の倍数」は何個あるか　個数を出力してください
console.log("----- 1000未満の「3かつ7の倍数」の個数 -----")
count = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 && i % 7 === 0) {
        count++;
    }
}
console.log(count);

// ### 12. for文を使用した計算2

// 1000未満の「3かつ7の倍数」の5番目に大きい数を出力してください
console.log("----- 1000未満の「3かつ7の倍数」の5番目に大きい数 -----");
count = 0;
for (let i = 999; i >= 0; i--) {
    if (i % 3 === 0 && i % 7 === 0) {
        count++;
        if (count === 5) {
            console.log(i);
            break;
        }
    }
}