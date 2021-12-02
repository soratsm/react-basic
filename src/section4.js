/**
 * モダンjavascriptの機能に触れる
 */

/**
 * ★21.分割代入
 */
// const myProfile1 = {
//   name: "abc",
//   age: 30
// };
// const message1 = `名前は${myProfile1.name}です。年齢は${myProfile1.age}です。`;
// console.log(message1);

// // これだと長いので下記方法を使う
// const { name, age } = myProfile1;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// // 配列も同じ
// const myProfile2=['def',30]
// const message3 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
// console.log(message3);

// // 配列は順番が大事
// const [ name, age ] = myProfile2;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * ★23.スプレット構文
 */
// 配列の展開
// const arr1=[1,2]
// console.log(arr1)
// console.log(...arr1)
// const sumFunc =(num1,num2)=> console.log(num1+num2)
// sumFunc(arr1[0],arr1[1])
// sumFunc(...arr1)

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1)
// console.log(num2)
// console.log(arr3)

// 配列のコピー、結合
// コピーを『=』で行うと参照渡しになるので下記方法を使う
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * ★24.mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "鈴木"];
// // 従来の方法
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }

// // mapを使用(リターンされた結果に基づいて新たな配列を生成する)
// const nameArr１ = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr１);

// // mapを使用(forループの代わりに使用)
// // indexは2番目のパラメータに持っているのでそれを使用できる（使用しない場合は第一引数のみで呼び出す）
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// // filterを使用（ある条件に一致したものだけ取り出して新たな配列を生成する）
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

/**
 * ★25.三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 60));

/**
 * ★26.論理演算子の本当の意味を知ろう
 */
// // 『||』は左側がfalseの時に右側を返す
// const num1 = null;
// const fee1 = num1 || "金額が未設定です";
// console.log(fee1);

// // 『&&』は左側がtrueの時に右側を返す
// const num2 = 100;
// const fee2 = num2 && "なにか設定してください";
// console.log(fee2);
