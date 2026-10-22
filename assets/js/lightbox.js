/* =========================================================================
 * lightbox.js — 画廊 / 证书 / 自媒体截图统一灯箱
 *   · 点击放大
 *   · 键盘 ← / → / Esc / Space 操作
 *   · 支持循环导航
 * ========================================================================= */

(function () {
  const root = document.querySelector(".lightbox");
  if (!root) return;
  const imgEl = root.querySelector(".lightbox__img");
  const capEl = root.querySelector(".lightbox__caption");
  const prevBtn = root.querySelector(".lightbox__nav--prev");
  const nextBtn = root.querySelector(".lightbox__nav--next");
  const closeBtn = root.querySelector(".lightbox__close");

  let items = [];
  let idx = 0;
  let lastFocus = null;

  const open = (i, source) => {
    items = source;
    idx = i;
    show();
    lastFocus = document.activeElement;
    root.classList.add("is-open");
    root.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  };
  const close = () => {
    root.classList.remove("is-open");
    root.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  };
  const show = () => {
    const it = items[idx];
    if (!it) return;
    imgEl.src = it.src;
    imgEl.alt = it.alt || "";
    capEl.textContent = it.caption || it.alt || "";
  };
  const nav = (delta) => {
    if (!items.length) return;
    idx = (idx + delta + items.length) % items.length;
    show();
  };

  document.querySelectorAll("[data-lightbox]").forEach((group) => {
    const source = JSON.parse(group.getAttribute("data-lightbox") || "[]");
    group.querySelectorAll("[data-lightbox-target]").forEach((el) => {
      const i = parseInt(el.getAttribute("data-lightbox-target"), 10);
      el.addEventListener("click", (e) => {
        e.preventDefault();
        open(i, source);
      });
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open(i, source);
        }
      });
      el.setAttribute("tabindex", "0");
      el.setAttribute("role", "button");
      el.setAttribute("aria-label", "查看大图");
    });
  });

  prevBtn.addEventListener("click", () => nav(-1));
  nextBtn.addEventListener("click", () => nav(1));
  closeBtn.addEventListener("click", close);

  root.addEventListener("click", (e) => {
    if (e.target === root) close();
  });

  document.addEventListener("keydown", (e) => {
    if (!root.classList.contains("is-open")) return;
    if (e.key === "Escape") { close(); }
    else if (e.key === "ArrowLeft") { nav(-1); }
    else if (e.key === "ArrowRight") { nav(1); }
  });
})();
