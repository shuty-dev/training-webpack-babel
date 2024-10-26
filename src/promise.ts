import { Post, Comment, Album } from "./types";
const axios = require("axios");

type MultiData = {
  post: Post;
  comment: Comment;
  album: Album;
};

// APIにアクセスする関数を定義
export async function fetchData(): Promise<Post | null> {
  // axiosでGETリクエストを送信し、Promiseを返す
  return axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      // 成功時の処理
      console.log("データ取得成功:", response.data);
      return response.data; // 次のthenにデータを渡す
    })
    .catch((error) => {
      // エラー時の処理
      console.error("データ取得エラー:", error);
      return null; // エラー時はnullを返す
    });
}

// 3つのAPIからデータを取得する関数
export async function fetchMultiData(): Promise<MultiData | null> {
  // 取得するAPIのURLを定義
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/comments/1",
    "https://jsonplaceholder.typicode.com/albums/1",
  ];

  try {
    // Promise.allを使って同時にリクエストを送信
    const [post, comment, album] = await Promise.all(
      urls.map((url) => axios.get(url))
    );

    // レスポンスデータを表示
    console.log("Post Data:", post.data);
    console.log("Comment Data:", comment.data);
    console.log("Album Data:", album.data);

    return { post: post.data, comment: comment.data, album: album.data };
  } catch (error) {
    // エラー時の処理
    console.error("Error fetching data:", error);
    return null;
  }
}
