const menuButton = document.getElementById("menu-button");
const menuIcon = document.getElementById("menu-icon");
const menuOverlay = document.getElementById("menu-overlay");

const searchButton = document.getElementById("search-button");
const searchIcon = document.getElementById("search-icon");
const searchOverlay = document.getElementById("search-overlay");

const main = document.querySelector("main");
const footer = document.querySelector("footer");

// メニュー
menuButton.addEventListener("click", () => {
  const isOpen = menuOverlay.classList.contains("hidden");

  // 検索を閉じる
  searchOverlay.classList.add("hidden");
  searchIcon.src = "/icon/search.svg";

  // メニューを開閉
  menuOverlay.classList.toggle("hidden", !isOpen);
  menuIcon.src = isOpen ? "/icon/x.svg" : "/icon/menu.svg";

  // 背景スクロール
  document.body.classList.toggle("overflow-hidden", isOpen);

  // 背景を操作不可にする
  main.toggleAttribute("inert", isOpen);
  footer.toggleAttribute("inert", isOpen);
});

// 検索
searchButton.addEventListener("click", () => {
  const isOpen = searchOverlay.classList.contains("hidden");

  // メニューを閉じる
  menuOverlay.classList.add("hidden");
  menuIcon.src = "/icon/menu.svg";

  // 検索を開閉
  searchOverlay.classList.toggle("hidden", !isOpen);
  searchIcon.src = isOpen ? "/icon/x.svg" : "/icon/search.svg";

  document.body.classList.toggle("overflow-hidden", isOpen);
  main.toggleAttribute("inert", isOpen);
  footer.toggleAttribute("inert", isOpen);

  // 検索を開いたらPagefindのinputにフォーカス
  if (isOpen) {
    document.querySelector(".pf-input-wrapper input")?.focus();
  }
});
