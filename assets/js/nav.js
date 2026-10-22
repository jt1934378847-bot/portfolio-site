/* =========================================================================
 * nav.js — 顶部导航：滚动高亮、抽屉菜单、固定背景色切换
 * ========================================================================= */

(function () {
  const nav = document.querySelector(".nav");
  const links = document.querySelectorAll(".nav__link[href^='#']");
  const sections = Array.from(links)
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean)
    .sort((a, b) => a.offsetTop - b.offsetTop); // 按 DOM 真实位置升序
  const burger = document.querySelector(".nav__burger");
  const menu = document.querySelector(".nav__menu");

  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 40);

    const y = window.scrollY + 120;
    let active = null;
    for (const sec of sections) {
      if (sec.offsetTop <= y) active = sec;
    }
    links.forEach((l) => {
      l.classList.toggle("is-active", active && l.getAttribute("href") === "#" + active.id);
    });

    const totop = document.querySelector(".totop");
    if (totop) totop.classList.toggle("is-visible", window.scrollY > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (burger && menu) {
    burger.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open);
    });
    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        menu.classList.remove("is-open");
        burger.setAttribute("aria-expanded", false);
      });
    });
  }
})();
