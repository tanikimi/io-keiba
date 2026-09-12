document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    if (button.disabled) return;

    button.disabled = true;

    const img = button.querySelector("img");
    const originalSrc = img.src;
    const text = button.dataset.copy;

    try {
      await navigator.clipboard.writeText(text);

      img.src = "/icon/check.svg";

      setTimeout(() => {
        img.src = originalSrc;
        button.disabled = false;
      }, 1000);
    } catch (error) {
      button.disabled = false;
      console.error("コピーに失敗しました", error);
    }
  });
});
