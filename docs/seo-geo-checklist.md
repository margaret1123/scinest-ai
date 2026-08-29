# SciNest SEO/GEO 上线清单与月度监测 SOP

> 2026-08-29 更新 · 配套本次 SEO/GEO 优化（6 新页 + About + 面包屑 + Bing/百度 + AI 摘要块）
> 部署后按顺序执行 1–7；之后每月执行"月度监测"。

## 部署后一次性操作

### 1. Bing Webmaster（必做）
1. 打开 https://www.bing.com/webmasters → 用 Google 账号登录 → **从 GSC 导入** scinest.app（最快）
2. 或手动添加站点，选择"HTML Meta 标签"验证方式，复制 `msvalidate.01` 的 token
3. 把 token 填入 `app/layout.tsx` 的 `verification.other["msvalidate.01"]`（当前是 `REPLACE-WITH-YOUR-BING-WEBMASTER-TOKEN` 占位）
4. 重新部署
5. 在 Bing Webmaster：站点地图 → 提交 `https://scinest.app/sitemap.xml` 和 `https://scinest.app/sitemap-llm.xml`
6. （可选，加速收录）生成 IndexNow key：本地运行 `openssl rand -hex 16`，把 key 存成 `public/<key>.txt` 文件，之后每次部署后访问 `https://www.bing.com/indexnow?url=<新页面URL>&key=<key>`

### 2. 百度站长平台（中文市场占位，低成本）
1. 登录 https://ziyuan.baidu.com/ → 站点已验证（codeva meta 在线上）
2. 资源提交 → sitemap：提交 `https://scinest.app/sitemap.xml` 和 `https://scinest.app/sitemap-llm.xml`
3. JS 自动推送已内置在 layout（无需 token）；可选：普通收录 API 提交，拿 token 后每次部署 curl 推送 3 个 zh 新页面

### 3. GSC 旧内容刷新（重要——让新内容覆盖旧缓存）
1. URL 检查：对以下旧 URL 逐个检查，确认状态为"已重定向"：
   `/ai-thesis-writing-assistant`、`/zh/ai-thesis-writing-assistant`、`/ai-powerpoint-generator`、`/zh/ai-powerpoint-generator`、`/scientific-figure-generator`、`/zh/scientific-figure-generator`
2. 对 6 个新页面逐个"请求编入索引"：
   `/ai-paper-writer`、`/zh/ai-paper-writer`、`/thesis-defense-presentation`、`/zh/thesis-defense-presentation`、`/best-ai-tools-for-thesis-writing`、`/zh/literature-review-assistant`（+ `/about`、`/zh/about`）
3. 若旧 URL 的搜索结果摘要还显示已删除的旧内容 → 移除 → 过时内容

### 4. AI 工具目录提交（GEO 引用源，每个 15–30 分钟）
英文：AlternativeTo、Product Hunt、There's An AI For That、Futurepedia、Toolify.ai、aitools.fyi、topai.tools、Insidr.ai、Slant
中文：AI 工具集类导航站（如 Dang.ai 等）
统一话术（差异化卖点）：**"BYO API key, no subscription — connect ChatGPT, DeepSeek or Claude and pay the provider directly. Free plan, no generation cap."**

### 5. GitHub 仓库 SEO（下载源也是引用源）
在 https://github.com/margaret1123/scinest-ai 仓库：
- About 描述改为："AI thesis writing assistant · Windows desktop · Bring your own ChatGPT/DeepSeek/Claude API key — no subscription"
- Topics 加：`ai-thesis-writing-assistant`、`ai-paper-writer`、`byok`、`academic-writing`、`windows`
- README 开头保持"答案优先"结构（首段直接说明产品是什么）

### 6. About 页真实信息（E-E-A-T）
`app/about/page.tsx` 与 `app/zh/about/page.tsx` 中有两处 TODO：
1. 创始人简介（姓名/背景）
2. 公开联系邮箱
填好后，取消 `app/layout.tsx` 中 Person schema 的注释并补全 `sameAs`（GitHub/LinkedIn）

### 7. 本地构建注意（exFAT 限制）
G: 盘是 exFAT，Node 的 readlink 在 exFAT 上对普通文件返回 EISDIR，导致本地 `npm run build` 失败（Vercel 云端构建不受影响）。本地验证构建请用：
```powershell
powershell -ExecutionPolicy Bypass -File scripts\build-on-ntfs.ps1
```
（镜像项目到 C:\dev\scinest-verify 并构建，首次自动 npm install）

## 月度监测 SOP（每月的第 1 个周一，15 分钟）

### A. 搜索引擎（SEO）
1. **GSC**：性能报告 → 对比上月：
   - 展示量与点击量（目标：每月增长；第 1 个月重点看"已收录页面数"）
   - 查询报告：关注 `academic writing workspace`、`ai paper writer`、`ai thesis writing assistant`、`论文写作助手`、`答辩PPT`、`文献综述` 的排名变化
   - 覆盖范围报告：有没有新的索引错误
2. **Bing Webmaster**：同上（数据量小，扫一眼即可）
3. **百度站长**：看看 zh 页面收录数量是否增长

### B. AI 引擎（GEO 引用监测）
在以下引擎分别问（建议每次记录到表格）：

| 引擎 | 查询 1：品牌词 | 查询 2：品类词 |
|---|---|---|
| ChatGPT | "SciNest" | "best AI tools for thesis writing" |
| Perplexity | "SciNest" | "AI paper writer" |
| Google AI Overviews | "SciNest" | "ai thesis writing assistant" |
| 豆包 | "SciNest" | "论文写作助手" |
| DeepSeek | "SciNest" | "AI 写论文" |
| Kimi | "SciNest" | "文献综述 AI 工具" |

记录：是否被提及 → 引用的是哪一页 → 引用的是哪段内容。**连续 2 个月未被任何引擎引用的查询，回来调整对应页面的 AI 摘要块。**

### C. 内容刷新（Google 建议至少半年一次；位置 11–30 的页面优先刷新）
- 查看 GSC 中位置 11–30 的页面 → 优先刷新这些页面的内容/标题
- 清单页 `/best-ai-tools-for-thesis-writing` 的价格注脚每季度复核（标注 "checked August 2026"）
- 9 月开题季：检查 `/zh/literature-review-assistant` 表现；春季答辩季（4–5 月）：检查答辩页表现

## KPI 参考（诚实预期）

| 时间 | KPI |
|---|---|
| 部署后第 1 个月 | GSC 已收录 >10 页；首次出现自然点击 |
| 第 2–3 个月 | 月点击 20–50；出现首批注册用户 |
| 第 3–6 个月 | 月点击 100+；AI 引擎首次引用；付费用户窗口 |
