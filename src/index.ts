import "./scss/style.scss";

import myRandom from "./random";
import greet from "./greet";
import { fetchData, fetchMultiData } from "./promise";
import { getImage } from "./get_image";

// import "@/images";

const doc = window.document;

doc.getElementById("btn")?.addEventListener("click", () => {
  doc.getElementById("counter")!.innerText = myRandom().toString();
});

greet(1);

// Promiseを使ってデータ取得を実行
fetchData().then((data): void => {
  // データ取得後の追加処理
  if (data === null) return;

  console.log("取得したデータ:", data);
  doc.getElementById("title")!.innerText = data.title;
});

fetchMultiData().then((data): void => {
  // データ取得後の追加処理
  console.log("取得したデータ:", data);
  if (data === null) return;

  doc.getElementById("post")!.innerText = data.post.title;
  doc.getElementById("comment")!.innerText = data.comment.name;
  doc.getElementById("album")!.innerText = data.album.title;
});

getImage(2);
