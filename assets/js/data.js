/* =========================================================================
 * data.js — 站点所有列表型内容统一在此维护，新增作品只需追加条目
 * 数据与渲染分离，便于后续替换为 fetch 或扩展
 * ========================================================================= */

window.SITE_DATA = (() => {
  /* ========== 联系 ========== */
  const contact = {
    name: "汤军军",
    email: "1934378847@qq.com",
    phone: "18817134052",
    phoneNote: "同微信",
    github: "https://github.com/jt1934378847-bot",
    githubHandle: "@jt1934378847-bot",
    xhs: "Megalomaniac",
    xhsNumber: "667132593",
    wechatPublic: "亿点点心思",
    wechatPublicStatus: "因个人原因已停止运营",
  };

  /* ========== 关于我 / 个人简介 ========== */
  const about = {
    photo: "assets/images/hero/about.jpg",
    lede:
      "出版在读硕士，常练笔、偶作画，近期热衷于用 AI 探索有趣且有意义的创造。",
    paragraphs: [
      "我的路径不算笔直：本科攻读物流管理，研究生转向出版。跨界学习凝练的相同点是——信息如何抵达人。",
      "围绕出版展开的研究与实践：曾跟随导师参与无障碍出版等课题，毕业论文聚焦少儿出版品牌建设；在读期间参与组织过三联市集，走访过中国出版集团，并在 BIBF 及《编辑之友》座谈会中担任志愿者；先后在高教社、北科社积累了长期的线上线下实习经验，并在小红书平台多次完成图书 repo 与资源置换。业余时间，我既是泛文娱领域的深度体验者（阅读、观影、游戏、逛展），也是行动派——今年尝试借助 AI 工具赋能创作，尝试完成游戏开发、外语阅读工具构建及剧本可视化等落地项目。",
      "骨子里带着一种把事情稳稳做完的执着与责任感（INFJ / 九型 6 号忠诚者）。当前正保持着论文撰写、日常阅读与日语学习的节奏，同时也已开启求职投递，为明年的工作全力准备（意向城市：全国，不设限）。",
      "谢谢你愿意花时间了解我。",
    ],
    quote: "在有限意义域里寻找无限答案。",
  };

  /* ========== 精选作品（首页卡片） ========== */
  // url 可省略：没有独立详情页的条目会渲染成不可点击的卡片，避免死链。
  const featuredWorks = [
    {
      title: "《Co-Reader》",
      tag: "线上项目",
      cover: "assets/images/projects/co-reader.svg",
      alt: "《Co-Reader》双语阅读器产品预览图",
      desc: "AI 赋能·数智创新创客训练营作品，获校级团队二等奖。集成多模型接口的双语阅读器，四人团队、本人为负责人。",
      role: "负责人 / 设计与开发",
      year: "2026.08",
      url: "works/co-reader.html",
      tags: ["AI", "Web App", "阅读器"],
    },
    {
      title: "《青石之下》",
      tag: "线上项目",
      cover: "assets/images/projects/under-the-bluestone.svg",
      alt: "《青石之下》校园霸凌主题推理文字游戏封面",
      desc: "莉莉丝高校游戏创作大赛参赛作品。校园霸凌主题推理文字游戏，负责剧情架构与程序实现，三人团队。",
      role: "剧情架构 / 程序实现",
      year: "2026.04",
      url: "works/under-the-bluestone.html",
      tags: ["文字冒险", "游戏", "GitHub Pages"],
    },
    {
      title: "《行深智能无人车》商业策划",
      tag: "竞赛作品",
      cover: "assets/images/projects/cmau-cover.jpg",
      alt: "CMAU 全国大学生市场研究与商业策划大赛项目书封面",
      desc: "CMAU 全国大学生市场研究与商业策划大赛企业命题项目。52 页项目书，覆盖 PEST 宏观分析、高校用户问卷与访谈、商业策划方案。团队「深藏blue」3 人。",
      role: "团队成员",
      year: "2022.08",
      tags: ["市场研究", "商业策划", "PEST"],
    },
    {
      title: "视觉作品",
      tag: "绘画与设计",
      cover: "assets/images/projects/poster-01.jpg",
      alt: "本人设计的海报系列缩略图",
      desc: "这些年的海报设计、书封与速写、四格漫画。不成体系，但都是想说的话。",
      role: "设计与绘画",
      year: "2024 – 2026",
      url: "#gallery",
      tags: ["海报", "书封", "速写", "漫画"],
    },
  ];

  /* ========== 技能分组（只列技能，证书另见 certs） ========== */
  const skills = [
    {
      title: "出版与内容",
      items: ["选题策划", "编辑校对", "营销文案", "学术研究", "无障碍出版"],
    },
    {
      title: "设计与视觉",
      items: ["海报设计", "书封设计", "手绘 / 速写", "信息图", "Adobe 套件（基础）"],
    },
    {
      title: "技术 / 开发",
      items: ["HTML / CSS / JavaScript", "VS Code + AI 协作", "Git / GitHub Pages", "Node 脚本", "提示词工程"],
    },
    {
      title: "语言",
      items: ["普通话二级甲等", "英语六级 · 481", "日语 N2 备考中"],
    },
    {
      title: "通用",
      items: ["信息检索", "数据分析", "办公自动化", "MS Office / WPS"],
    },
  ];

  /* ========== 证书与荣誉 ========== */
  // src：有扫描件时指向 cert 图；缺失时降级为纯文字卡片。
  // 含身份证号的扫描件已打码后再上图；含他人身份证号的实习证明不上站。
  const certs = [
    {
      title: "出版专业技术人员执业资格（初级）",
      meta: "2025 · 全国统考",
      kind: "职业资格",
      src: "assets/images/certs/cert-pub.jpg",
    },
    {
      title: "会计专业技术资格（初级）",
      meta: "2022.08 · 人社部 / 财政部",
      kind: "职业资格",
      src: "assets/images/certs/cert-accounting.jpg",
    },
    {
      title: "全国计算机等级考试二级（MS Office）",
      meta: "2021 · 教育部",
      kind: "技术资格",
      src: "assets/images/certs/cert-comp.jpg",
    },
    {
      title: "市场分析研究员 · LEVEL I",
      meta: "2022.07 · 中国高等院校市场学研究会",
      kind: "职业资格",
      src: "assets/images/certs/cert-market-analyst.jpg",
    },
    {
      title: "「AI 赋能·数智创新」创客训练营 · 团队二等奖",
      meta: "2026.08 · Co-Reader",
      kind: "竞赛",
      src: "assets/images/certs/cert-maker-team.jpg",
    },
    {
      title: "CMAU 市场研究与商业策划大赛 · 校内选拔赛一等奖",
      meta: "2022.09 · 深藏blue",
      kind: "竞赛",
      src: "assets/images/certs/cert-cmau-school.jpg",
    },
    {
      title: "CMAU 市场研究与商业策划大赛 · 预选赛一等奖",
      meta: "2022 · 深藏blue",
      kind: "竞赛",
      src: "assets/images/certs/cert-cmau-prelim.jpg",
    },
    {
      title: "CMAU 市场研究与商业策划大赛 · 分赛区三等奖",
      meta: "2022 · 深藏blue",
      kind: "竞赛",
      src: "assets/images/certs/cert-cmau-region-3rd.jpg",
    },
    {
      title: "湖南工商大学第八届「互联网+」创新创业大赛 · 校级二等奖",
      meta: "2022.09 · 丹楹刻桷",
      kind: "竞赛",
      src: "assets/images/certs/cert-internet-plus.jpg",
    },
    {
      title: "莉莉丝游戏 2026 高校游戏创作大赛 · 参赛证明",
      meta: "2026.05 · Lilith Games",
      kind: "竞赛",
      src: "assets/images/certs/cert-lilith.jpg",
    },
    {
      title: "「AI 赋能·数智创新」创客训练营 · 结业证书",
      meta: "2026.08",
      kind: "培训",
      src: "assets/images/certs/cert-maker-completion.jpg",
    },
    {
      title: "超级简历 × 实习僧「超级运营官」· 新媒体运营实习生",
      meta: "2021.07 · 长沙",
      kind: "实践",
      src: "assets/images/certs/cert-superresume.jpg",
    },
    {
      title: "校级三好学生",
      meta: "2020 – 2021",
      kind: "荣誉",
      src: "assets/images/certs/cert-honors.jpg",
    },
    {
      title: "优秀青年志愿者",
      meta: "2020 – 2021",
      kind: "荣誉",
      src: "assets/images/certs/cert-volunteer.jpg",
    },
    {
      title: "普通话二级甲等",
      meta: "2021",
      kind: "语言",
      src: "assets/images/certs/cert-mandarin.jpg",
    },
    {
      title: "大学英语六级 · 481 分",
      meta: "2026.6",
      kind: "语言",
      src: "assets/images/certs/cert-cet6.jpg",
    },
  ];

  /* ========== 志愿服务证明 ========== */
  // 支教记录表含学生与家长个人信息，上图前已逐项打码（保留志愿者本人姓名与电话）。
  const serviceCerts = [
    {
      title: "北京国际图书博览会（BIBF）· 志愿者服务证明",
      meta: "2025.06 · 第三十一届图博会",
      kind: "志愿",
      src: "assets/images/volunteer/vol-bibf.jpg",
    },
    {
      title: "有道纵横杯少儿棋王赛 · 志愿服务证明",
      meta: "2024.01 · 专业志愿者 10 小时",
      kind: "志愿",
      src: "assets/images/volunteer/vol-youdao.jpg",
    },
    {
      title: "湖南工商大学青协 · 结对支教记录表",
      meta: "2020.11 – 2021.01 · 长华社区雷锋号志愿者工作站",
      kind: "志愿",
      src: "assets/images/volunteer/vol-teach-a.jpg",
    },
    {
      title: "湖南工商大学青协 · 结对支教记录表",
      meta: "2021.03 – 2021.06 · 家长评语与盖章",
      kind: "志愿",
      src: "assets/images/volunteer/vol-teach-b.jpg",
    },
  ];

  /* ========== 经历时间线 ========== */
  const timeline = [
    {
      year: "2026 – 至今",
      title: "北京科学技术出版社 · 出版部实习生",
      role: "实习生",
      desc: [
        "协助印制老师完成数码印刷图书、重印图书的发印工作，整理印制单、合同等出版项目文档并归档。",
        "辅助纸张材料老师完成发票登订，整理材料出库单；辅助质检老师登记与收发样书，完成成本归集等印制结账工作。",
        "对接 20+ 家印厂，跟进图书发印进度与问题反馈，协调各方保障印制流程推进。",
      ],
    },
    {
      year: "2025.08 – 2026.07",
      title: "高等教育出版社 · 语料库数据标注与质检项目",
      role: "标注员 / 质检员",
      desc: [
        "参与视频字幕标注（中英文及多领域），按上下游反馈修改并完成交付。",
        "参与视频字幕质检，持续半年、每 1–2 周一轮。",
      ],
    },
    {
      year: "2026.04 – 2026.08",
      title: "莉莉丝高校游戏创作大赛《青石之下》",
      role: "剧情架构 / 程序实现",
      desc: [
        "校园霸凌主题推理文字游戏，三人团队。本人负责剧情架构与程序整体把控。",
        "完成 Mac / Windows 可执行软件包；设计「笔记本系统」自定义难度机制；基于 GitHub 完成网页化部署。",
      ],
    },
    {
      year: "2026.08",
      title: "「AI 赋能·数智创新」创客训练营《Co-Reader》",
      role: "负责人 / 设计与开发",
      desc: [
        "四人团队，本人为负责人，负责策划、设计、开发、测试与维护。",
        "构建生词本、高亮笔记、阅读统计与心流仪表盘；集成 OpenAI、DeepSeek、Moonshot 等多模型。",
        "获校级团队二等奖；产出 100+ 点赞评论与 50+ 后台用户使用数据。",
      ],
    },
    {
      year: "2024.09 – 至今",
      title: "北京印刷学院 · 出版学院硕士",
      role: "硕士研究生 · 数字出版",
      desc: [
        "前 60% 排名，三等奖学金。主修出版学概论、数字出版产品设计与开发、社会学研究方法、新媒体创意与营销等。",
        "参与《第二届出版教育国际论坛会议论文集》《国内外无障碍出版发展现状调查》等项目。",
        "参与第 31 届 BIBF、第十届「学宪法」、「时光讲堂」腾讯 AI 向善长者等志愿活动。",
      ],
    },
    {
      year: "2024.02",
      title: "长沙米米集市科技有限公司 · 采购助理实习生",
      role: "实习生",
      desc: ["和供应商洽谈平台合作，累计转化合作伙伴 5+。"],
    },
    {
      year: "2022.11 – 2023.03",
      title: "湖南工商大学 · 导师助理",
      role: "导师助理",
      desc: [
        "组织组会，协助导师开展教学工作；拍摄记录、撰写会议纪要，为同学答疑解惑。",
        "组织组会 3 场、撰写纪要 3 份，覆盖学生 8 名。",
      ],
    },
    {
      year: "2021.07",
      title: "超级简历 · 超级运营官",
      role: "社群运营 / 新媒体运营",
      desc: [
        "21 天线上项目，项目录取率约 70%、毕业率约 50%。",
        "独立运营小红书新号，通过内容策划与引流实现涨粉至 50 人；同步覆盖微信公众号 50 人。",
        "策划活动，完成海报等运营物料。",
      ],
    },
    {
      year: "2021.08 – 2021.09",
      title: "湖南高顿教育 · 市场运营实习生",
      role: "实习生",
      desc: ["在高校社群筛选目标用户，推动课程咨询与转化，累计转化 3–4 名意向用户。"],
    },
    {
      year: "2021.10 – 2021.12",
      title: "湖南工商大学青年志愿者协会 · 组策部",
      role: "组策部成员",
      desc: [
        "对接校青协各部门工作，撰写活动策划案，组织活动顺利开展。",
        "参与为期一年的青协结对支教活动，获校级「优秀志愿者」。",
      ],
    },
    {
      year: "2020.09 – 2024.06",
      title: "湖南工商大学 · 本科",
      role: "物流管理",
      desc: [
        "前 30% 排名，主修线性代数、概率论与数理统计、微观经济学、会计学、管理学、统计学、经济法、物联网管理概论等。",
        "校级三等奖学金、三好学生。",
      ],
    },
  ];

  /* ========== 写作条目（统一数据源）==========
   * 设计：A 组先去重，组名按体裁，不再用「课程作业」塞所有副本；
   *        发表/未发表做成 badge，标题不再写「几篇」；
   *        缺篇名 / 缺链接的占位为「(待补)」，绝不编造。
   * 字段：
   *   id          - 稳定 slug，用于锚点
   *   groupId     - 所属分组（与 writingGroupsMeta.id 对应）
   *   title       - 条目标题（合集可去掉「几篇」字样）
   *   badge       - 状态徽章文字
   *   status      - 状态 key：media / xhs / unpub / course（对应筛选器）
   *   platform    - 平台：纸媒 / 小红书 / 公众号 / 未发表 / 课程作业
   *   period      - 时间段
   *   excerpt     - 一句话摘要（≤ 40 字）
   *   body        - 全文 / 节选段落数组（可空）
   *   works       - 合集条目（每篇 { name, genre }），可含待补
   *   links       - 外链（无就空数组）
   *   order       - 同组内排序
   */

const writingGroupsMeta = [
    { id: "media",  label: "纸媒发表", order: 1 },
    { id: "review", label: "评论节选", order: 2 },
    { id: "other",  label: "其他创作", order: 3 },
  ];

  const statusFilters = [
    { id: "all",   label: "全部" },
    { id: "media", label: "纸媒" },
    { id: "xhs",   label: "小红书" },
    { id: "unpub", label: "未发表" },
  ];

  const writingItems = [
    // ① 纸媒发表
    {
      id: "hubei",
      groupId: "media",
      title: "延长的青春",
      badge: "纸媒发表",
      status: "media",
      platform: "《湖北招生考试》第 1 期「青春风铃」",
      excerpt: "高考因疫情延到了七月，那一年的青春也因此被拉长了一点。",
      body: [
        "我一直以为，18 岁之前的是青春，高中时光是青春最绚烂之时。",
        "大家都说我们这一届不一般，不一般的艰难，不一般的坚强。因疫情影响，原定的六月高考延迟到了七月，意即我们高中青春岁月也将被夏日余晖渲染延长。",
        "挺开心的就是，让我在延长的青春里能和自己喜欢和喜欢自己的人在一起更久。",
        "「军军不要难过了，毕竟我们最宝贵的财富是我们剩下的日子而不是逝去的……」一次线上考试没考好，班长大大私聊道。",
        "他是一个温暖的人，会特别敏感班上同学的情绪波动然后进行疏解。在管理班级的时候，会为班上得了荣耀而兴奋地和身边人击掌，也会因个别同学的不服顶撞而黯然落泪，但不得不说，他是我们见过最好的班长。",
      ],
      works: [],
      links: [],
      order: 1,
    },

    // ② 评论（小红书）
    {
      id: "book-reviews",
      groupId: "review",
      title: "书评",
      badge: "小红书",
      status: "xhs",
      platform: "书评 · 4 篇",
      excerpt: "",
      body: [],
      works: [
        {
          name: "《剧院》",
          note: "海飞 · 资源置换",
          excerpt: "这是《剧院》的开场白，简练有效地交代了时间、地点、人物，并且预示了冲突。不过整本书看下来，陈东村好像才是那个改变最少的人，更多是在揭示和推动其他角色的故事线。",
        },
        {
          name: "《然后，化成海上的泡沫》",
          note: "叶真中显 · 社会派推理",
          excerpt: "叶真中显老师的文风永远是流畅、舒适、朴实无华的，虽有点碎碎念但显真实，能把故事讲清楚的同时，不会像某些同类型书籍那样说教味十足。",
        },
        {
          name: "《恐龙的移动轨迹》",
          note: "爆文",
          excerpt: "第一次被新书塑封的推介语吸引——「比友谊更进一步，比相爱更轻盈，比陪伴更深，比分手更漫长。我们这种关系，有名字吗？」不想剧透。是我来来回回翻看、且一直在自省的书。",
        },
        {
          name: "《我需要女性主义吗？》",
          note: "（德）朱莉安娜·弗里塞",
          excerpt: "全书共 14 章，每章一个主题，可以不用按顺序阅读。讲述很简单直接——封底两句推荐语已经解答了它的立意：「是女性主义的思考手册」「也是超级实用的行动指南」。",
        },
      ],
      links: [],
      order: 1,
    },
    {
      id: "drama-reviews",
      groupId: "review",
      title: "剧评",
      badge: "小红书",
      status: "xhs",
      platform: "剧评 · 5 篇",
      excerpt: "",
      body: [],
      works: [
        {
          name: "《显微镜下的大明》",
          note: "首映资源置换 · 剧组看后流泪致谢",
          excerpt: "虽然是新人新剧组新话剧，虽然位置坐到了剧院后排，虽然已习惯看一个半小时的剧却告知有两小时，但我还是认认真真地看到了最后。",
        },
        {
          name: "《又一道光芒》",
          note: "发布后被导演主动联系，后互关",
          excerpt: "国话先锋剧场最近的青年创作导演扶持计划的几部作品都挺不错的。当时决定来看，除了国话和田院的背书，还因为注意到是女导演执导，以两位女性角色的联结展开故事，且题材关注视障群体。",
        },
        {
          name: "《恋爱契科夫》",
          note: "资源置换",
          excerpt: "波波娃对爱情的理解前期掺杂了不必要的精神枷锁和世俗矛盾。斯米尔诺夫戴上熊头玩偶呆呆站着的时候真的很像蠢熊，也像公主童话里的野兽。",
        },
        {
          name: "《嫌疑人福尔摩斯》",
          note: "",
          excerpt: "在音乐厅地下一层专门设置了贝克街主题长廊——免费实景解密，狠狠代入侦探、享受解密的快乐。还有演职人员的数字交互人像，对没做前情了解的朋友看剧很友好。",
        },
        {
          name: "《朱莉小姐》",
          note: "资源置换",
          excerpt: "记得演出前 30 分钟到，可以领取明信片、盖章、抽扭蛋，朱莉小姐在演出前也有话说——「舞会见」。记得穿裙子，朱莉小姐是真的会「三心二意」地跟你聊天，沉浸体验拉满。",
        },
      ],
      links: [],
      order: 2,
    },
    {
      id: "film-reviews",
      groupId: "review",
      title: "影评",
      badge: "小红书",
      status: "xhs",
      platform: "影评 · 4 篇",
      excerpt: "",
      body: [],
      works: [
        {
          name: "《深海》",
          note: "",
          excerpt: "看之前未点进预告和露骨影评，之后亦不打算。仅凭个人所看作些许感触、思考。在电影片头、署编剧导演名前，画面就已定格深海——代替了片名的直给，但也很容易代入情景。",
        },
        {
          name: "《好东西》",
          note: "",
          excerpt: "周末总是会莫名其妙变得满满当当。比如在决定周日去看《好东西》后，又突然收到学校有赠票可以免费看剧的消息。",
        },
        {
          name: "《荒野机器人》",
          note: "改编自彼德·布朗同名小说",
          excerpt: "迷失的罗斯询问芬克如果来不及的话怎么办，他不知道，于是选择了逃跑。独立的狐狸遇见萝斯他们后，小心翼翼地保护着朋友和自己——他们之间荒野的故事治愈的不止是彼此，还有银幕外的我们。",
        },
        {
          name: "《狂野时代》",
          note: "",
          excerpt: "有一天，我捡到了一张泛黄的纸条。上面应该写着什么，4 7 8……大概是某人来不及销毁的遗书。如果是这个时代的话，那就不奇怪了。",
        },
      ],
      links: [],
      order: 3,
    },

    // ③ 随笔与读书笔记（未发表）
    {
      id: "charlie",
      groupId: "other",
      title: "写给查理的信",
      badge: "未发表",
      status: "unpub",
      platform: "读书笔记",
      excerpt: "读《献给阿尔吉侬的花束》之后，替查理写给从前自己的信。",
      body: [
        "在看了您的第一篇日记 / 报告后，我了解到您的身体状况了。虽然我学习到的生物学知识还不足以支持我理解这件事——32 岁的低能成人能变聪明。但我猜您还没变聪明，不然应该会改正自己写的错别字，以及出现的断句问题。原谅我这么说，查理，您应该不会介意的吧。",
        "斯特劳斯医生是您的主治医生吗？我真想见见这位抱有远大志向的医生，如果他不是江湖骗子的话。",
        "接下来我会去信给日记里提到的唐纳面包店和毕克明学院的低能成人中心（但愿您没有写错字，但愿邮局不再为难我），询问您是否还在那做工和上课，期望能得到肯定答复。总感觉这本日记很重要，不管是作为记录本身还是证据。",
        "你好。突然感觉「你」会比「您」更亲切。",
      ],
      works: [],
      links: [],
      order: 1,
    },
    {
      id: "hp-essay",
      groupId: "other",
      title: "《哈利·波特》电影后",
      badge: "未发表",
      status: "unpub",
      platform: "观影随笔",
      excerpt: "收到拉文克劳院录取通知书的那天晚上，麻瓜都睡了，我还没睡。",
      body: [
        "晚上麻瓜应该都睡觉了就……记录一下。",
        "前段时间收到拉文克劳院的录取通知书。",
        "毕竟本科分院帽把我分到赫奇帕奇来着，然后就觉得肩上担子变重了，又开始暗暗发誓要好好努力了（不对劲）。",
        "虽然很想念赫奇帕奇的朋友们就是了。",
      ],
      works: [],
      links: [],
      order: 2,
    },

    // ④ 虚构创作（未发表）
    {
      id: "xin",
      groupId: "other",
      title: "心尖上的物件",
      badge: "未发表",
      status: "unpub",
      platform: "短篇",
      excerpt: "从小到大最讨厌开家长会——和一场迟到了很久的相认。",
      body: [
        "从小到大，我最讨厌开家长会。",
        "走进拐角的老人，顿了顿脚步，农村朴素的花衣服，以及脚上那双年代感十足的布鞋，与周围的一切都不太搭衬。她探出头来张望着那个不熟悉的班级，眯着眼睛，小心翼翼。阳光斜斜打在老人脸上，也丝毫没有减少几分沧桑。",
        "女孩心中一沉，满怀的期待化为无形的泡沫，无影无踪，卑微到山崖底部的那颗勉强跳动着的心，冷漠，凄清。再一瞥去，老人已不知何时消失在了拐角处。",
        "老人迈着缓缓的脚步走向女孩，一口乡音，亲切，却又能使得周围的空气变得尴尬。女孩低着头从老人身边擦过，没有对白。一刻后，女孩又再次回到老人身边，把老人竖立着的、放在课桌上的她的书包拿过。",
      ],
      works: [],
      links: [],
      order: 1,
    },
    {
      id: "cat",
      groupId: "other",
      title: "窥探女孩的猫",
      badge: "未发表",
      status: "unpub",
      platform: "短篇",
      excerpt: "跟随一个女孩六年的猫，某天决定离开了。",
      body: [
        "「我想我应该离开了，呆猫。」",
        "毕竟我跟随那女孩已经六年了。",
        "不知是什么东西笨重地与金属相撞，发出尖锐刺耳的声音，我心中一紧，停住匆匆步伐，望向门隙里的人。这群小屁孩，也敢和可敬可爱的老师叫板。",
        "教室里并无战争，却留有硝烟的味道。胖女人并不和善，更像是战到最后的将士，没有胆怯，没有退缩，凶狠的眼神死死盯着周围的每个生物，反使得他们不敢轻举妄动。",
      ],
      works: [],
      links: [],
      order: 2,
    },
    {
      id: "frog",
      groupId: "other",
      title: "井底之蛙（改写）",
      badge: "未发表",
      status: "unpub",
      platform: "短篇 · 改写",
      excerpt: "旧寓言的新写法——那个一直抬头看天的动作，也许是小青蛙自己选的。",
      body: [
        "一只小青蛙长年住在一口枯井里，它最喜欢做的事情就是抬头看天，其实也不算天，顶多算是一片白一片蓝一片黑的晕染更迭。",
        "偶尔会有其他小动物的拜访，但它们也只是停留在枯井旁边陪小青蛙聊聊天，等到太阳落山，等到开始下雨，就会零零散散离开。",
        "有一天，井口上飞来一只蜻蜓，在和小青蛙接触的短暂时间里，它觉得井底的小青蛙很可爱，想带它走。",
        "小蜻蜓问：「小青蛙，你愿意和我一起走吗？」",
        "小青蛙怔住了，第一次听到想带它离开这种话。",
      ],
      works: [],
      links: [],
      order: 3,
    },
    {
      id: "liangrenshe",
      groupId: "other",
      title: "《量人蛇》",
      badge: "未发表",
      status: "unpub",
      platform: "剧本 · 分镜",
      excerpt: "东方奇幻短片：梦中循环遇见一条爱跟人比高低的妖怪。",
      url: "../works/liangrenshe.html",
      body: [
        "量人蛇是一种喜欢和人比试的妖怪。选题为梦中循环遇量人蛇比高的怪诞题材，东方奇幻类。",
        "时长 2–3 分钟左右，分五幕依序分别生成视频。已有两张角色设定参考图。",
        "序幕 · 立蛇。场景：梦境。一青年站在画面中央，脚边青色影子蠕动。一条青褐斑驳的蛇缓缓挺立而起，关节轻微舒展，蛇身一点点拔高，最终比青年高出半个头，居高临下俯视着他。",
        "第一循环 · 吓呆失语。量人蛇（吐着信子，语气幽幽，冰冷发问）：「你说……咱俩谁高？」",
      ],
      works: [],
      links: [],
      order: 5,
    },
  ];

  /* 兼容旧字段名（首页预览仍用 writingGroups）—— 由 render 层聚合 */
  const writingGroups = writingGroupsMeta.map((g) => ({
    group: g.label,
    items: writingItems
      .filter((it) => it.groupId === g.id)
      .sort((a, b) => a.order - b.order)
      .map((it) => ({
        title: it.title,
        meta: it.platform,
        excerpt: it.excerpt,
        url: `writing/index.html#${it.id}`,
      })),
  }));

  /* ========== 视觉作品（画廊）========== */
  const gallery = [
    { src: "assets/images/gallery/drawing-01.jpg",  alt: "画 1",  size: "tall",   caption: "速写 · 2024" },
    { src: "assets/images/gallery/drawing-02.jpg",  alt: "画 2",  size: "square", caption: "速写 · 2025" },
    { src: "assets/images/gallery/drawing-03.jpg",  alt: "画 3",  size: "small",  caption: "速写 · 2024" },
    { src: "assets/images/gallery/drawing-04.jpg",  alt: "画 4",  size: "wide",   caption: "速写 · 2025" },
    { src: "assets/images/gallery/drawing-05.jpg",  alt: "画 5",  size: "tall",   caption: "速写 · 2025" },
    { src: "assets/images/gallery/drawing-06.jpg",  alt: "画 6",  size: "square", caption: "速写 · 2026" },
    { src: "assets/images/gallery/drawing-07.jpg",  alt: "画 7",  size: "small",  caption: "速写 · 2024" },
    { src: "assets/images/gallery/drawing-08.jpg",  alt: "画 8",  size: "tall",   caption: "速写 · 2025" },
    { src: "assets/images/gallery/drawing-09.jpg",  alt: "画 9",  size: "wide",   caption: "速写 · 2026" },
    { src: "assets/images/gallery/drawing-10.jpg",  alt: "画 10", size: "square", caption: "速写 · 2025" },
    { src: "assets/images/gallery/drawing-11.jpg",  alt: "画 11", size: "small",  caption: "速写 · 2026" },
    { src: "assets/images/gallery/comic-01.jpg",    alt: "四格漫画", size: "wide",   caption: "四格漫画 · 2024" },
    { src: "assets/images/gallery/design-01.jpg",   alt: "书封设计", size: "tall",  caption: "书封设计 · 2025" },
    { src: "assets/images/gallery/design-02.jpg",   alt: "书封设计草稿", size: "square", caption: "书封设计草稿 · 2025" },
    { src: "assets/images/projects/poster-01.jpg",  alt: "海报临摹 1", size: "tall", caption: "海报临摹 · 2026" },
    { src: "assets/images/projects/poster-02.jpg",  alt: "海报临摹 2", size: "tall", caption: "海报临摹 · 2026" },
  ];

  /* ========== 自媒体与运营 ========== */
  const social = [
    {
      src: "assets/images/social/post-01.jpg",
      alt: "公众号亿点点心思文章推送截图",
      caption: "公众号 · 亿点点心思",
      url: "#",
    },
    {
      src: "assets/images/social/post-02.jpg",
      alt: "公众号亿点点心思主页截图",
      caption: "公众号 · 亿点点心思",
      url: "#",
    },
    {
      src: "assets/images/social/post-03.jpg",
      alt: "公众号亿点点心思主页另一视角",
      caption: "公众号 · 亿点点心思",
      url: "#",
    },
    {
      src: "assets/images/social/post-04.jpg",
      alt: "公众号影评推文截图",
      caption: "影评 · 公众号",
      url: "#",
    },
    {
      src: "assets/images/social/xhs-home.jpg",
      alt: "小红书主页 Megalomaniac，125 粉丝 · 5239 获赞与收藏",
      caption: "小红书主页 · Megalomaniac · 125 粉丝 · 5239 获赞与收藏",
      url: "https://xhslink.cn/o/90cUq6Ve3BG",
    },
    {
      src: "assets/images/social/xhs-note-1.jpg",
      alt: "书评笔记《韩国文学的未来——金和珍》，1519 赞 · 862 收藏",
      caption: "书评 ·《韩国文学的未来——金和珍》· 1519 赞 / 862 收藏",
      url: "https://xhslink.cn/o/90cUq6Ve3BG",
    },
    {
      src: "assets/images/social/xhs-note-2.jpg",
      alt: "话剧观剧记录《舞台》，767 赞 · 467 评论",
      caption: "观剧记录 · 话剧《舞台》· 767 赞 / 467 评论",
      url: "https://xhslink.cn/o/90cUq6Ve3BG",
    },
    {
      src: "assets/images/social/xhs-note-3.jpg",
      alt: "话剧观剧记录《朱莉小姐》，54 赞 · 15 收藏",
      caption: "观剧记录 ·《朱莉小姐》的票夹 · 54 赞 / 15 收藏",
      url: "https://xhslink.cn/o/90cUq6Ve3BG",
    },
    {
      src: "assets/images/social/xhs-note-4.jpg",
      alt: "追番笔记《七海》，58 赞 · 11 收藏",
      caption: "追番笔记 ·《七海》· 58 赞 / 11 收藏",
      url: "https://xhslink.cn/o/90cUq6Ve3BG",
    },
    {
      src: "assets/images/social/xhs-note-5.jpg",
      alt: "项目手记《青石之下》，26 赞 · 11 评论",
      caption: "项目手记 ·《青石之下》· 26 赞 / 11 评论",
      url: "https://xhslink.cn/o/90cUq6Ve3BG",
    },
    {
      src: "assets/images/social/xhs-note-6.jpg",
      alt: "工具推介笔记：Co-Reader 与青石之下，70 赞 · 83 收藏",
      caption: "工具推介 · Co-Reader /《青石之下》· 70 赞 / 83 收藏",
      url: "https://xhslink.cn/o/90cUq6Ve3BG",
    },
    {
      src: "assets/images/social/xhs-note-7.jpg",
      alt: "逛展笔记：宫崎骏与吉卜力的世界 长沙站",
      caption: "逛展 · 宫崎骏与吉卜力的世界（长沙站）",
      url: "https://xhslink.cn/o/90cUq6Ve3BG",
    },
  ];

  return {
    contact,
    about,
    featuredWorks,
    skills,
    certs,
    serviceCerts,
    timeline,
    writingGroups,
    writingGroupsMeta,
    writingItems,
    statusFilters,
    gallery,
    social,
  };
})();
