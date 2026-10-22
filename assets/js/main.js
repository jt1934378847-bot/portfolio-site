/* =========================================================================
 * main.js — 入场动画、深色模式、复制邮箱、回到顶部、当前年份
 * ========================================================================= */

(function () {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  document.querySelectorAll("[data-copy-email]").forEach((el) => {
    el.addEventListener("click", async (e) => {
      e.preventDefault();
      const email = el.getAttribute("data-copy-email") ||
                    el.getAttribute("data-email") ||
                    "1934378847@qq.com";
      try {
        await navigator.clipboard.writeText(email);
      } catch (_) {
        const t = document.createElement("textarea");
        t.value = email;
        document.body.appendChild(t);
        t.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(t);
      }
      const original = el.textContent;
      el.classList.add("is-copied");
      el.textContent = "已复制 ✓";
      setTimeout(() => {
        el.classList.remove("is-copied");
        el.textContent = original;
      }, 1600);
    });
  });

  document.querySelectorAll("[data-totop]").forEach((el) => {
    el.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") {
    root.setAttribute("data-theme", stored);
  }

  const currentTheme = () =>
    root.getAttribute("data-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const paintToggle = (btn) => {
    const dark = currentTheme() === "dark";
    btn.setAttribute("aria-pressed", String(dark));
    btn.textContent = dark ? "☀" : "☾";
  };

  // 初始也要画一次，否则刷新后图标和实际主题对不上
  document.querySelectorAll("[data-theme-toggle]").forEach(paintToggle);

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      paintToggle(btn);
    });
  });
})();
