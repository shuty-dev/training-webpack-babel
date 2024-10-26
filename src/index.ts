import myRandom from "./random";
import greet from "./greet";

window.document.getElementById("btn")?.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 10);
  window.document.getElementById("counter")!.innerText = myRandom().toString();
});

greet(1);
