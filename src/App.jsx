/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColorfulMsg from "./components/ColorfulMsg";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [showFlag, setShowFlag] = useState(false);

  const onClickCountup = () => {
    setNum(num + 1);
  };

  const onClickTextShowHide = () => {
    setShowFlag(!showFlag);
  };

  useEffect(() => {
    console.log("useeffect");
    // 条件に当てはまるときだけ呼び出し、レンダリングする
    if (num > 0) {
      if (num % 3 === 0) {
        showFlag || setShowFlag(true);
        // ||は左辺がfalseなら右辺を呼ぶ
      } else {
        showFlag && setShowFlag(false);
        // &&は左辺がtrueなら右辺を呼ぶ
      }
    }
  }, [num]);
  //useEffectの第二引数に変化があった場合のみ、useEffectの処理が実行される

  // アンチパターン
  // if (num % 3 === 0) {
  //   setShowFlag(true);
  // } else {
  //   setShowFlag(false);
  // }

  return (
    <>
      {/* <h1 style={{ color: "red" }}>こにちわ</h1> */}
      <ColorfulMsg color="blue">お元気ですか?</ColorfulMsg>
      <ColorfulMsg color="pink">元気どす</ColorfulMsg>
      <button onClick={onClickCountup}>カウントアップ</button>
      <button onClick={onClickTextShowHide}>show/hidden</button>
      <p>{num}</p>
      {showFlag && <p>3の倍数のときだけテキストが表示されています。</p>}
      {/* trueなら表示（右辺）、falseなら非表示（左辺） */}
    </>
  );
};

export default App;
