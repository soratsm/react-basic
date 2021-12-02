import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // button（完了）生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromList(completeButton.parentNode, "incomplete-list");

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // li生成
    const li = document.createElement("li");
    li.innerText = text;

    // button（戻す）生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      deleteFromList(backButton.parentNode, "complete-list");
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // addTargetの中に各要素を格納
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了のリストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button（削除）生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromList(deleteButton.parentNode, "incomplete-list");
  });

  // divの中に各要素を格納
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const deleteFromList = (target, listName) => {
  // 押されたボタンの親タグ(div)を未完了リストから削除
  document.getElementById(listName).removeChild(target);
};
