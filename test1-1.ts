// ### 1. 基本的な変数の宣言

// 以下の指定された条件に合うように、変数をTypeScriptで宣言し、値を代入してください。

// - 整数（number型） `number`: 5
let number: number = 5;
// - 文字列（string型） `text`: "test"
let text: string = "test";
// - 論理型（boolean型） `flag`: true
let flag: boolean = true;
// - null型 `test`: null
let test: null = null;

// ### 2. 基本的な計算

// 整数型（number）の2つの変数を宣言してください。2つの変数を使って次の計算を行い、それぞれの結果を出力してください。
let num1: number = 8;
let num2: number = 2;
// - 足し算
let sum;
sum = num1 + num2;
console.log(sum);

// - 引き算
let difference;
difference = num1 - num2;
console.log(difference);

// - 掛け算
let product;
product = num1 * num2;
console.log(product);

// - 割り算
let quotient;
quotient = num1 / num2;
console.log(quotient);

// - 割り算の余り
let remainder;
remainder = num1 % num2;
console.log(remainder);


// ### 3. 条件式とboolean(論理型)について

// 初期値が`false`である論理型（boolean）の変数を宣言してください。
let isEven: boolean = false;

// 問題2で宣言した2つの整数を足した結果が偶数であれば、論理型の変数に`true`を代入してください。
if (sum % 2 === 0) {
    isEven = true;
}

// ### 4. 条件式

// 設問3のboolean型の変数を使用し、偶数か奇数かを判定する条件式を作成し、次のように出力してください。

// - 偶数なら「偶数です」と表示
if (isEven === true) {
    console.log("偶数です");
} else {
    console.log("奇数です");
}
// - 奇数なら「奇数です」と表示
