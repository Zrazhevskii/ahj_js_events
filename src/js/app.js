const goblin = Array.from(document.querySelectorAll(".game-box"));
const len = goblin.length;
const numr = () => Math.floor(Math.random() * len);

setInterval(game, 1000);

function game() {
  goblin.forEach((item) => {
    if (item.className == "game-box goblin") {
      item.classList.remove("goblin");
    }
  });
  goblin[numr()].classList.add("goblin");
}
