/* =========================================================================
 * render.js — 把 data.js 里的数据渲染到首页各模块
 *   - 顶部 about / 工作 / 技能 / 证书 / 时间线 / 写作 / 画廊 / 自媒体
 *   - 灯箱所需的 data-lightbox 由本文件装填
 * ========================================================================= */

(function () {
  const D = window.SITE_DATA;
  if (!D) return;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const tag = (t, attrs = {}, ...children) => {
    const el = document.createElement(t);
    for (const k in attrs) {
      if (k === "class") el.className = attrs[k];
      else if (k === "html") el.innerHTML = attrs[k];
      else el.setAttribute(k, attrs[k]);
    }
    for (const c of children) {
      if (c == null) continue;
      el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return el;
  };

  // ============ ============ ============ About
  function renderAbout() {
    const aboutGrid = $(".about__grid");
    if (!aboutGrid) return;
    const photo = $(".about__photo img", aboutGrid);
    if (photo && D.about.photo) {
      photo.setAttribute("src", D.about.photo);
      photo.setAttribute("alt", "汤军军");
    }
    const text = $(".about__text", aboutGrid);
    if (text) {
      const lede = $(".about__lede", text);
      if (lede) lede.textContent = D.about.lede;
      const ps = $(".about__paragraphs", text);
      if (ps) {
        ps.innerHTML = "";
        D.about.paragraphs.forEach((p) => ps.appendChild(tag("p", {}, p)));
      }
    }
  }

  // ============ ============ ============ Featured Works
  function renderFeatured() {
    const grid = $("[data-featured]");
    if (!grid) return;
    grid.innerHTML = "";
    D.featuredWorks.forEach((w) => {
      // 没有独立详情页的作品渲染成不可点击的卡片，避免 href="#" 死链
      const card = w.url
        ? tag("a", { class: "work-card reveal", href: w.url, "aria-label": w.title })
        : tag("div", { class: "work-card work-card--static reveal" });

      const cover = tag("div", { class: "work-card__cover" },
        tag("img", { src: w.cover, alt: w.alt, loading: "lazy", width: 600, height: 375 })
      );
      cover.appendChild(tag("span", { class: "work-card__cover-tag" }, w.tag));
      card.appendChild(cover);

      const body = tag("div", { class: "work-card__body" });
      body.appendChild(tag("h3", { class: "work-card__title" }, w.title));
      body.appendChild(tag("p", { class: "work-card__desc" }, w.desc));
      const meta = tag("div", { class: "work-card__meta" });
      meta.appendChild(tag("span", { class: "tag tag--accent" }, w.role));
      meta.appendChild(tag("span", { class: "tag" }, w.year));
      (w.tags || []).slice(0, 2).forEach((t) => meta.appendChild(tag("span", { class: "tag" }, t)));
      body.appendChild(meta);
      card.appendChild(body);

      grid.appendChild(card);
    });
    document.querySelectorAll(".reveal").forEach((el) => {
      if (!el.classList.contains("in")) {
        io.observe(el);
      }
    });
  }

  // ============ ============ ============ Skills
  function renderSkills() {
    const grid = $("[data-skills]");
    if (!grid) return;
    grid.innerHTML = "";
    D.skills.forEach((s) => {
      const block = tag("div", { class: "skill reveal" });
      block.appendChild(tag("div", { class: "skill__title" }, s.title));
      const list = tag("div", { class: "skill__list" });
      s.items.forEach((it) => list.appendChild(tag("span", { class: "tag" }, it)));
      block.appendChild(list);
      grid.appendChild(block);
    });
  }

  // ============ ============ ============ Certs
  function renderCertList(items, sel) {
    const grid = $(sel);
    if (!grid) return;
    grid.innerHTML = "";
    const lightboxable = [];
    items.forEach((c) => {
      const hasImg = !!c.src;
      const card = tag("div", { class: "cert reveal" });
      if (hasImg) {
        const idx = lightboxable.length;
        card.setAttribute("data-lightbox-target", idx);
        card.setAttribute("title", "点击查看大图");
        // lightbox.js 会对 [data-lightbox] 内的元素加 tabindex / role / aria-label；
        // img 元素需要先在卡片里
        card.appendChild(tag("img", {
          class: "cert__img",
          src: c.src,
          alt: c.title,
          loading: "lazy",
          width: 600,
          height: 400,
        }));
        const meta = tag("div", { class: "cert__body" });
        meta.appendChild(tag("div", { class: "cert__title" }, c.title));
        meta.appendChild(tag("div", { class: "cert__meta" }, c.meta));
        card.appendChild(meta);
        lightboxable.push({
          src: c.src,
          alt: c.title,
          caption: `${c.title} · ${c.meta}`,
        });
      } else {
        card.appendChild(tag("div", { class: "cert__icon" },
          c.kind === "语言" ? "Aa" :
          c.kind === "竞赛" ? "★" :
          c.kind === "培训" ? "✓" :
          c.kind === "荣誉" ? "✦" :
          c.kind === "技能" ? "◐" : "◍"
        ));
        const meta = tag("div", {});
        meta.appendChild(tag("div", { class: "cert__title" }, c.title));
        meta.appendChild(tag("div", { class: "cert__meta" }, c.meta));
        card.appendChild(meta);
      }
      grid.appendChild(card);
    });
    if (lightboxable.length) {
      grid.setAttribute("data-lightbox", JSON.stringify(lightboxable));
    }
  }

  function renderCerts() {
    renderCertList(D.certs, "[data-certs]");
  }

  function renderServiceCerts() {
    renderCertList(D.serviceCerts || [], "[data-service]");
  }

  // ============ ============ ============ Timeline
  function renderTimeline() {
    const list = $("[data-timeline]");
    if (!list) return;
    list.innerHTML = "";
    D.timeline.forEach((t) => {
      const e = tag("div", { class: "timeline__entry reveal" });
      e.appendChild(tag("div", { class: "timeline__when" }, t.year));
      e.appendChild(tag("div", { class: "timeline__title" }, t.title));
      e.appendChild(tag("div", { class: "timeline__role" }, t.role));
      const ul = tag("ul", { class: "timeline__desc" });
      (t.desc || []).forEach((d) => ul.appendChild(tag("li", {}, d)));
      e.appendChild(ul);
      list.appendChild(e);
    });
  }

  // ============ ============ ============ Writing list (首页内嵌简版)
  function renderWritingPreview() {
    const root = $("[data-writing-preview]");
    if (!root) return;
    root.innerHTML = "";
    D.writingGroups.slice(0, 3).forEach((g) => {
      const grp = tag("div", { class: "writing-list__group reveal" });
      grp.appendChild(tag("h3", { class: "writing-list__group-title" }, g.group));
      const inner = tag("div", { class: "writing-list" });
      g.items.slice(0, 3).forEach((it) => {
        const a = tag("a", { class: "writing-item", href: it.url });
        const main = tag("div", {});
        main.appendChild(tag("div", { class: "writing-item__title" }, it.title));
        main.appendChild(tag("div", { class: "writing-item__meta" }, it.meta));
        main.appendChild(tag("div", { class: "writing-item__summary" }, it.excerpt));
        a.appendChild(main);
        a.appendChild(tag("div", { class: "writing-item__arrow", "aria-hidden": "true" }, "→"));
        inner.appendChild(a);
      });
      grp.appendChild(inner);
      root.appendChild(grp);
    });
    const more = tag("div", { class: "section__head reveal", style: "margin-top:48px;align-items:center;text-align:center" });
    more.appendChild(tag("a", { class: "btn btn--ghost", href: "writing/index.html" }, "查看全部文字作品 →"));
    root.appendChild(more);
  }

  // ============ ============ ============ Gallery
  function renderGallery() {
    const grid = $("[data-gallery]");
    if (!grid) return;
    grid.innerHTML = "";
    D.gallery.forEach((g, i) => {
      const fig = tag("figure", {
        class: `gallery__item gallery__item--${g.size || "square"} reveal`,
        "data-lightbox-target": i,
      });
      fig.appendChild(tag("img", { src: g.src, alt: g.alt, loading: "lazy", width: 800, height: 800 }));
      fig.appendChild(tag("figcaption", {}, g.caption));
      grid.appendChild(fig);
    });
    grid.setAttribute("data-lightbox", JSON.stringify(D.gallery));
  }

  // ============ ============ ============ Social
  function renderSocial() {
    const grid = $("[data-social]");
    if (!grid) return;
    grid.innerHTML = "";
    D.social.forEach((s, i) => {
      const card = tag("div", {
        class: "social__item reveal",
        "data-lightbox-target": i,
      });
      card.appendChild(tag("img", { src: s.src, alt: s.alt, loading: "lazy", width: 480, height: 600 }));
      grid.appendChild(card);
    });
    grid.setAttribute("data-lightbox", JSON.stringify(D.social));
  }

  // ============ ============ ============ Writing page (独立写作页)
  function renderWritingPage() {
    const root = $("[data-writing-list]");
    if (!root) return;
    if (!D.writingItems || !D.writingGroupsMeta) return;

    const toolsBar = $("[data-writing-filter]");
    const emptyEl = $("[data-writing-empty]");

    // —— 渲染筛选条 ——
    if (toolsBar && D.statusFilters) {
      toolsBar.innerHTML = "";
      D.statusFilters.forEach((f) => {
        const chip = tag("button", {
          type: "button",
          class: "filter-chip",
          "data-filter": f.id,
          "aria-pressed": f.id === "all" ? "true" : "false",
        }, f.label);
        toolsBar.appendChild(chip);
      });
      toolsBar.addEventListener("click", (e) => {
        const c = e.target.closest(".filter-chip");
        if (!c) return;
        applyFilter(c.getAttribute("data-filter"));
      });
    }

    // —— 构建卡片 ——
    function buildWritingCard(it) {
      const hasWorks = Array.isArray(it.works) && it.works.length > 0;
      const hasBody  = Array.isArray(it.body) && it.body.length > 0;
      const article = tag("article", {
        class: "wc reveal",
        id: it.id,
        "data-status": it.status,
      });

      const head = tag("header", { class: "wc__head" });
      head.appendChild(tag("h3", { class: "wc__title" }, it.title));
      if (it.badge) {
        head.appendChild(tag("span", { class: `wc__badge wc__badge--${it.status}` }, it.badge));
      }
      article.appendChild(head);

      const metaBits = [it.platform].filter(Boolean);
      if (metaBits.length) article.appendChild(tag("p", { class: "wc__meta" }, metaBits.join(" · ")));

      if (it.excerpt) {
        article.appendChild(tag("p", { class: "wc__excerpt" }, it.excerpt));
      }

      // 有独立作品页的条目（如《量人蛇》）在摘要后给一个直达链接
      if (it.url) {
        article.appendChild(tag("a", { class: "wc__more", href: it.url }, "查看完整项目 →"));
      }

      // 正文与篇目直接呈现，不再用 details 折叠
      if (hasWorks) {
        const ul = tag("ul", { class: "wc__works" });
        it.works.forEach((w) => {
          const li = tag("li", { class: "wc__work" });
          const head = tag("div", { class: "wc__work-head" });
          head.appendChild(tag("span", { class: "wc__work-name" }, w.name));
          if (w.note) head.appendChild(tag("span", { class: "wc__work-note" }, w.note));
          li.appendChild(head);
          if (w.excerpt) li.appendChild(tag("p", { class: "wc__work-text" }, w.excerpt));
          ul.appendChild(li);
        });
        article.appendChild(ul);
      }
      if (hasBody) {
        const prose = tag("div", { class: "wc__prose prose" });
        it.body.forEach((p) => prose.appendChild(tag("p", {}, p)));
        article.appendChild(prose);
      }
      if (Array.isArray(it.links) && it.links.length) {
        const links = tag("div", { class: "wc__links" });
        it.links.forEach((l) => {
          links.appendChild(tag("a", {
            href: l.url,
            target: "_blank",
            rel: "noopener",
          }, l.label || l.url));
        });
        article.appendChild(links);
      }

      return article;
    }

    // —— 渲染分组 ——
    root.innerHTML = "";
    D.writingGroupsMeta.forEach((g) => {
      const items = D.writingItems
        .filter((it) => it.groupId === g.id)
        .sort((a, b) => a.order - b.order);
      if (!items.length) return;
      const section = tag("section", {
        class: "writing-group reveal",
        id: `group-${g.id}`,
        "data-groups": g.id,
      });
      const titleRow = tag("div", { class: "writing-group__row" });
      titleRow.appendChild(tag("h2", { class: "writing-group__title" }, g.label));
      titleRow.appendChild(tag("span", { class: "writing-group__count" }, String(items.length)));
      section.appendChild(titleRow);
      const list = tag("div", { class: "writing-item-list" });
      items.forEach((it) => list.appendChild(buildWritingCard(it)));
      section.appendChild(list);
      root.appendChild(section);
    });

    function applyFilter(filter) {
      if (toolsBar) {
        toolsBar.querySelectorAll(".filter-chip").forEach((c) => {
          c.setAttribute("aria-pressed", String(c.getAttribute("data-filter") === filter));
        });
      }
      let visibleCount = 0;
      document.querySelectorAll(".writing-item-list .wc").forEach((card) => {
        const match = filter === "all" || card.getAttribute("data-status") === filter;
        card.style.display = match ? "" : "none";
        if (match) visibleCount++;
      });
      document.querySelectorAll(".writing-group").forEach((g) => {
        const visibleCards = g.querySelectorAll(".wc:not([style*='display: none'])").length;
        g.style.display = visibleCards ? "" : "none";
        const countEl = g.querySelector(".writing-group__count");
        if (countEl) countEl.textContent = String(visibleCards);
      });
      if (emptyEl) emptyEl.style.display = visibleCount ? "none" : "";
    }

    // 空状态：当前 5 个筛选每个都有命中，因此这块平时不显示。
    // 保留是为了以后新增「只有某一状态」的内容时不必重写逻辑。
    applyFilter("all");
  }

  // ============ ============ ============ Init
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

  renderAbout();
  renderFeatured();
  renderSkills();
  renderCerts();
  renderServiceCerts();
  renderTimeline();
  renderWritingPreview();
  renderWritingPage();
  renderGallery();
  renderSocial();

  document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
})();
