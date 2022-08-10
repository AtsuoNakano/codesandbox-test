import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

//オブジェクトの分割代入
const profile = {
  name: "atsuo",
  age: 32
};
const { name, age } = profile;
const msg = `こんにちわ${name}です年齢${age}です。`;
console.log(msg);

//配列の分割代入
const asagohan = ["おこめ", "味噌汁"];
const [menu1, menu2] = asagohan;
const msg2 = `今日の朝ご飯は${menu1}と、${menu2}です。`;
console.log(msg2);

const array = [1, 2, 3];
console.log(array);
console.log(...array);

const sum = (num1, num2, num3) => {
  return num1 + num2 + num3;
};
//console.log(sum(array[0], array[1], array[2]));
console.log(sum(...array));

const array2 = [1, 2, 3, 4, 5];
const [array2Num1, array2Num2, ...array3] = array2;
console.log(array2Num1);
console.log(array2Num2);
console.log(array3);

//配列のコピー、結合
const array4 = [10, 20];
const array5 = [30, 40];
const array6 = [...array4];
console.log(array6);
const array7 = [...array4, ...array5];
console.log(array7);

//=でコピーしてしまうと参照元が同じになるので、必ずスプレッド構文を使ってコピーをする
//=ではコピー元（例ではarray4）に影響してしまう
const array8 = array4;
array8[0] = 100;
console.log(array4);
console.log(array8);

//mapメソッドやfilterメソッドを使った配列の処理
//mapとは与えられた関数を全ての要素に対して呼び出して、新しい配列を作るものです。
//mapやfilterを使うと従来のfor文をほぼ使わなくて済むらしい
//for文の場合
const names = ["taro", "hanako", "自分"];
const numArr = [1, 2, 3, 4];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//mapで配列を出力（returnされた結果に基づいて新しい配列を生成する）
const useMap = numArr.map((num) => {
  return num * 2;
});
console.log(useMap);

//mapで配列の中身を順番に一つずつ処理（配列をループして処理）
//indexで配列内の添字を取得できる
names.map((name, index) => {
  console.log(`${index + 1}番目の${name}です。`);
});

numArr.map((num) => {
  console.log(num);
});

//名前の配列で、自分以外の名前に「さん」を付ける
const sanDuke = names.map((name) => {
  if (name === "自分") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(sanDuke);

//filter
//return文に条件式を書いてそれを返す
const useFilter = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(useFilter);

//三項演算子
const sankoEnzanshi = 1 < 0 ? "トゥルー" : "フォルス";
console.log(sankoEnzanshi);

const sankoNum = "2000";
console.log(sankoNum.toLocaleString());
const numCheck =
  typeof sankoNum === "number"
    ? sankoNum.toLocaleString()
    : "数値入力して下さい";
console.log(numCheck);

const sankoNumSum = (num1, num2) => {
  return num1 + num2 >= 100 ? "100以上" : "100以下";
};
console.log(sankoNumSum(10, 90));

//論理演算子の本当の意味
//厳密には&&で同じ、||でorという意味では無い
// enzanORには||の左側がfalsyなら右側が入る、左側がtruthyなら左側が入る
let isNull = null;
const enzanOR = isNull || "金額未設定";
console.log(enzanOR);

// enzanANDには&&の左側がfalsyなら左側が入る、左側がtruthyなら右側が入る
//inNull = 100;
const enzanAND = isNull && "アンパサンド";
console.log(enzanAND);
