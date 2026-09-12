const posts = [...document.querySelectorAll(".random")];
const randomButton = document.querySelector("#shuffle");
const count = 5; // 表示人数

function shuffle() {
  posts.forEach((post) => post.classList.add("hidden"));

  posts
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
    .forEach((post) => post.classList.remove("hidden"));
}

randomButton.addEventListener("click", async () => {
  if (randomButton.disabled) return;

  randomButton.disabled = true;

  const animation = randomButton.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(180deg)" }],
    {
      duration: 200,
      easing: "ease-out",
    },
  );

  await animation.finished;

  shuffle();
  randomButton.disabled = false;
});

shuffle();
