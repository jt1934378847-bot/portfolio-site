#!/usr/bin/env python3
"""
gen-placeholders.py — 为画廊 (16 张) 和 自媒体 (8 张) 生成 SVG 占位图
   - 暖色调一致
   - 每张图案不同，但视觉风格统一
   - 后期可被真实图片直接覆盖（同名替换即可）
"""
import random
import os

random.seed(42)

# —— 调色板（与站点 tokens 对齐）
PALETTES = [
    {"bg": "#FBF8F3", "fg": "#1F1B17", "warm": "#E8A957"},
    {"bg": "#F3EEE4", "fg": "#4A443D", "warm": "#7B5CD6"},
    {"bg": "#FAEBD2", "fg": "#1F1B17", "warm": "#7B5CD6"},
    {"bg": "#EFE7FB", "fg": "#5A3FB0", "warm": "#E8A957"},
    {"bg": "#25201B", "fg": "#F4EFE6", "warm": "#E8A957"},
    {"bg": "#E8A957", "fg": "#1F1B17", "warm": "#FBF8F3"},
    {"bg": "#FBF8F3", "fg": "#7B5CD6", "warm": "#E8A957"},
]

OUT = "/Users/megalomaniac/Desktop/portfolio-site/assets/images/gallery"
os.makedirs(OUT, exist_ok=True)


def abstract(idx, size):
    p = PALETTES[idx % len(PALETTES)]
    W, H = size
    parts = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid slice">',
             f'<rect width="{W}" height="{H}" fill="{p["bg"]}"/>']

    kind = idx % 5
    if kind == 0:
        for _ in range(6):
            cx = random.randint(0, W)
            cy = random.randint(0, H)
            r = random.randint(40, 120)
            parts.append(
                f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="{p["warm"]}" stroke-width="2" opacity="0.55"/>'
            )
        for _ in range(3):
            x1 = random.randint(0, W)
            y1 = random.randint(0, H)
            x2 = random.randint(0, W)
            y2 = random.randint(0, H)
            parts.append(
                f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{p["fg"]}" stroke-width="1.5" opacity="0.3"/>'
            )

    elif kind == 1:
        for _ in range(5):
            x = random.randint(0, W - 120)
            y = random.randint(0, H - 120)
            w = random.randint(60, 180)
            h = random.randint(40, 140)
            parts.append(
                f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{p["warm"]}" opacity="{random.uniform(0.2, 0.55):.2f}"/>'
            )

    elif kind == 2:
        parts.append(
            f'<circle cx="{W // 2}" cy="{H // 2}" r="{min(W, H) // 3}" fill="{p["warm"]}" opacity="0.85"/>'
        )
        parts.append(
            f'<circle cx="{W // 2 + 30}" cy="{H // 2 - 20}" r="{min(W, H) // 4}" fill="none" stroke="{p["fg"]}" stroke-width="2"/>'
        )

    elif kind == 3:
        texts = ["速写", "SCENE", "i", "II", "OBJET", " ", "声 音"]
        t = random.choice(texts)
        fs = random.randint(48, 96)
        parts.append(
            f'<text x="50%" y="55%" font-family="Georgia, serif" font-size="{fs}" '
            f'fill="{p["fg"]}" text-anchor="middle" font-weight="500" '
            f'opacity="0.85">{t}</text>'
        )

    else:
        for _ in range(4):
            cx = random.randint(0, W)
            cy = random.randint(0, H)
            r = random.randint(40, 200)
            start = random.randint(0, 360)
            end = start + random.randint(60, 240)
            parts.append(
                f'<path d="M {cx},{cy} m -r,{r} a r,r 0 1,0 {2*r},0" '
                f'transform="rotate({start} {cx} {cy})" '
                f'fill="none" stroke="{p["warm"]}" stroke-width="3" opacity="0.6"/>'
            )

    parts.append("</svg>")
    return "\n".join(parts)


def social(idx):
    p = PALETTES[idx % len(PALETTES)]
    W, H = 720, 900
    texts = [
        "书评 · 第 03 期",
        "剧评 · 追完结记",
        "今日读书笔记",
        "训练营周记 02",
        "出版实习 day 14",
        "今日句子",
        "研究生开学",
        "推荐一本旧书",
    ]
    sub = [
        "小红书 · Megalomaniac",
        "公众号 · 亿点点心思",
        "小红书",
        "公众号",
        "笔记应用",
        "公众号",
        "朋友圈整理",
        "读书 APP",
    ]
    title = texts[idx]
    s = sub[idx]

    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid slice">',
        f'<rect width="{W}" height="{H}" fill="{p["bg"]}"/>',
        f'<rect x="0" y="0" width="{W}" height="80" fill="rgba(255,255,255,0.5)"/>',
        f'<circle cx="56" cy="40" r="20" fill="{p["warm"]}"/>',
        f'<text x="100" y="34" font-family="-apple-system" font-size="20" fill="{p["fg"]}" font-weight="600">Megalomaniac</text>',
        f'<text x="100" y="58" font-family="-apple-system" font-size="13" fill="{p["fg"]}" opacity="0.6">{s}</text>',
        f'<text x="60" y="220" font-family="Georgia, serif" font-size="48" fill="{p["fg"]}" font-weight="500">{title}</text>',
        f'<rect x="60" y="280" width="{W - 120}" height="4" fill="{p["warm"]}"/>',
    ]
    for i, line in enumerate([
        "在开始写之前，先把书翻到了最后一页。",
        "其实我通常不会这么做，但那天鬼使神差。",
        "后来我才明白，那是一个想要被谁认出来的人",
        "在做的最后一件事。",
    ]):
        parts.append(
            f'<text x="60" y="{350 + i * 50}" font-family="Georgia, serif" font-size="22" fill="{p["fg"]}" opacity="0.85">{line}</text>'
        )
    parts += [
        f'<line x1="60" y1="{H - 160}" x2="{W - 60}" y2="{H - 160}" stroke="{p["fg"]}" stroke-width="1" opacity="0.2"/>',
        f'<text x="60" y="{H - 110}" font-family="-apple-system" font-size="18" fill="{p["fg"]}" opacity="0.6">♡ 1.2k</text>',
        f'<text x="180" y="{H - 110}" font-family="-apple-system" font-size="18" fill="{p["fg"]}" opacity="0.6">★ 234</text>',
        f'<text x="300" y="{H - 110}" font-family="-apple-system" font-size="18" fill="{p["fg"]}" opacity="0.6">↗ 89</text>',
        f'<text x="{W // 2}" y="{H - 50}" text-anchor="middle" font-family="-apple-system" font-size="14" fill="{p["fg"]}" opacity="0.4">截图示意 · 实际内容请至公众号 / 小红书查看</text>',
    ]
    parts.append("</svg>")
    return "\n".join(parts)


labels = [f"drawing-{i:02d}" for i in range(1, 12)] + [
    "comic-01", "design-01", "design-02", "drawing-extra-01", "drawing-extra-02"
]
for i, name in enumerate(labels):
    fp = os.path.join(OUT, f"{name}.svg")
    with open(fp, "w", encoding="utf-8") as f:
        f.write(abstract(i, (800, 800)))

SOCIAL_OUT = "/Users/megalomaniac/Desktop/portfolio-site/assets/images/social"
os.makedirs(SOCIAL_OUT, exist_ok=True)
for i in range(1, 9):
    fp = os.path.join(SOCIAL_OUT, f"post-{i:02d}.svg")
    with open(fp, "w", encoding="utf-8") as f:
        f.write(social(i - 1))

print("Done.")
