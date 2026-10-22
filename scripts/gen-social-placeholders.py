"""为 social/post-01..03 生成 3 张 SVG 占位，与站点暖色基调一致。
原始三张手机截图（PNG）已在之前的反复 cp / sips 中丢失；这里补回占位。
"""
import os
from pathlib import Path

OUT = Path("/Users/megalomaniac/Desktop/portfolio-site/assets/images/social")
OUT.mkdir(parents=True, exist_ok=True)

# 三张占位 — 对应：小红书 Megalomaniac / 公众号亿点点心思 / 剧评
ITEMS = [
    ("post-01.svg", "post-01",
     "Megalomaniac",
     "书评 · 第 03 期",
     "在开始写之前，先把书翻到了最后一页。其实我通常不会这么做，但那天鬼使神差。后来我才明白，那是一个想要被谁认出来的人在做的最后一件事。"),
    ("post-02.svg", "post-02",
     "亿点点心思",
     "剧评 · 追完结记",
     "这五部剧花了三个月才追完。追完之后我写下了五篇不同的感受 —— 但其中最久的那一篇拖了四个月才动笔，最快的那一篇是在飞机上 45 分钟敲完的。"),
    ("post-03.svg", "post-03",
     "Megalomaniac",
     "今日读书笔记",
     "最近在读的几本都没读完 —— 但每一本都留下一句话。一句话够我想三天，三天够我再写五句。写下来的比读完的多。"),
]

W, H = 720, 900
for fname, _, handle, title, body in ITEMS:
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="bg-{fname[:-4]}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FBF8F3"/>
      <stop offset="100%" stop-color="#FAEBD2"/>
    </linearGradient>
  </defs>
  <rect width="{W}" height="{H}" fill="url(#bg-{fname[:-4]})"/>
  <rect width="{W}" height="80" fill="#FFFFFF" opacity="0.7"/>
  <circle cx="56" cy="40" r="20" fill="#7B5CD6"/>
  <text x="100" y="34" font-family="-apple-system, sans-serif" font-size="20" fill="#1F1B17" font-weight="600">{handle}</text>
  <text x="100" y="58" font-family="-apple-system, sans-serif" font-size="13" fill="#847C72">截图示意 · 原始手机截图已丢失</text>
  <text x="60" y="220" font-family="Georgia, serif" font-size="44" fill="#1F1B17" font-weight="500">{title}</text>
  <rect x="60" y="280" width="{W-120}" height="3" fill="#E8A957"/>
'''
    # Body lines (simple wrap by char count)
    line_y = 360
    cur = ""
    line_no = 0
    for ch in body:
        cur += ch
        if len(cur) >= 14 or ch in "。；，":
            svg += f'<text x="60" y="{line_y + line_no*52}" font-family="Georgia, serif" font-size="22" fill="#4A443D">{cur.strip()}</text>\n'
            line_no += 1
            cur = ""
            if line_no >= 4:
                break
    if cur and line_no < 4:
        svg += f'<text x="60" y="{line_y + line_no*52}" font-family="Georgia, serif" font-size="22" fill="#4A443D">{cur.strip()}</text>\n'

    svg += f'''  <line x1="60" y1="{H-160}" x2="{W-60}" y2="{H-160}" stroke="#E8E0D2" stroke-width="1"/>
  <text x="60" y="{H-110}" font-family="-apple-system, sans-serif" font-size="18" fill="#847C72">♡ 点赞 · 评论 · 收藏</text>
  <text x="{W//2}" y="{H-50}" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="14" fill="#B5AC9F">来自 小红书 / 公众号 · 详见右侧链接</text>
</svg>
'''
    (OUT / fname).write_text(svg, encoding="utf-8")
    print(f"wrote {fname}  ({len(svg):,} B)")
