import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // alert(inputText);

  addIncomplateList(inputText);
};

// 未完了のToDoに追加するメソッド
const addIncomplateList = (text) => {
  // liタグ作成
  const li = document.createElement("li");

  // pタグ作成
  const p = document.createElement("p");
  p.innerText = text;

  // divタグ作成
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);

  // button（完了）タグ作成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    // pタグのテキスト取得
    const text = complateButton.parentNode.firstElementChild.innerText;
    // console.log(text);

    // 完了ボタンを押したら完了したToDoへの移動処理
    const complateTarget = complateButton.closest("li");

    // 未完了ToDoの削除
    document.getElementById("incomplate-list").removeChild(complateTarget);

    // pタグ作成
    const compP = document.createElement("p");
    compP.innerText = text;

    // buttonタグ作成
    const appendButton = document.createElement("button");
    appendButton.innerText = "戻す";

    // 戻すボタンのイベント作成
    appendButton.addEventListener("click", () => {
      // 完了したToDoの削除
      const deleteTarget = appendButton.closest("li");
      // console.log(deleteTarget);
      // console.log(document.getElementById("complate-list"));
      document.getElementById("complate-list").removeChild(deleteTarget);

      // テキスト取得
      const returnText = appendButton.parentNode.firstChild.innerText;
      addIncomplateList(returnText);
    });

    const appendTarget = complateButton.parentNode;
    appendTarget.textContent = null;
    // deleteTarget.removeChild(deleteComplateButton);
    appendTarget.appendChild(compP);
    appendTarget.appendChild(appendButton);

    // liタグ作成
    const appendli = document.createElement("li");
    appendli.appendChild(appendTarget);

    // console.log(appendli);

    // 完了したToDoに要素を追加
    document.getElementById("complate-list").appendChild(appendli);
  });

  // button（削除）タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）の削除処理
    const deleteTarget = deleteButton.parentNode.parentNode;
    // console.log(deleteTarget);
    document.getElementById("incomplate-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);
  // console.log(div);

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  // console.log(li);

  document.getElementById("incomplate-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
