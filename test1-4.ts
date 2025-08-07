// ### 13. `while`ループと条件式

// `while`ループを使用して、1から100までの数字を順に出力しますが、6と10の両方で割り切れる数字が見つかったらループを停止してください。 
// ループが停止する直前に出力された最後の数字を表示してください。

{
    let num = 1;
    while (num <= 100) {
        if (num % 6 === 0 && num % 10 === 0) {
            break;
        }
        console.log(num);
        num++;
    }
    console.log("ループが停止する直前の数字", num - 1);

}


// ### 14. `do-while`ループと条件

// `do-while`ループを使用して、10から50までの偶数の合計を計算し、その結果を出力してください。

{
    let num = 10;
    let sum = 0;
    do {
        if (num % 2 === 0) {
            sum += num;
        }
        num++;
    } while (num <= 50)
    console.log("10から50までの偶数の合計", sum);
}

// ### 15. switch文

// 整数型の２つの変数を宣言してください。

// 上記で宣言した２つの変数の内、
// 1つ目を2つ目で引いた数字が偶数、奇数、0で
// 「偶数です」「奇数です」「0です」と表示させるような条件式を書いてください。
{
    let num1 = 8;
    let num2 = 2;
    let difference = num1 - num2;

    switch (true) {
        case difference === 0:
            console.log("0です");
            break;
        case difference % 2 === 0:
            console.log("偶数です");
            break;
        default:
            console.log("奇数です");
    }
}


// ※なお差がマイナスになる場合は考慮しなくてOKです。