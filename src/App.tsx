/**
 * Talk landing page — 15-minute Brown Bag.
 *
 * INTENTIONAL QUALITY DEBT:
 * - Four sections paste the same `.topic-card` markup.
 * - Do not extract a shared component until the talk has shown the PR review.
 */

import './App.css'

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">技术分享 · 15 分钟</p>
        <h1>PR 上的 AI Review</h1>
        <p className="lede">
          不是再推荐一个编辑器插件。是让每个 Pull Request 自动过第一道质量审查：重复代码、抽组件、低质量写法——leader 只审业务。
        </p>
        <p className="meta">
          主题不是 GitHub Action，也不是全自动合代码。演示仓库：故意复制卡片，看 PR 上的 bot 会不会叫停。
        </p>
      </header>

      <main>
        {/* --- duplicated card block #1 --- */}
        <section className="section" id="problem">
          <h2>0–2 分钟 · 痛点</h2>
          <p className="section-intro">
            Leader 每天看 PR，时间耗在「这段粘了三遍」上，而不是支付、权限、产品对不对。
          </p>
          <div className="topic-card">
            <div className="topic-card__badge">痛点</div>
            <h3 className="topic-card__title">Review 带宽不够</h3>
            <p className="topic-card__body">
              编辑器里的 AI 只帮到写代码的人。Leader 不会进每个人的 Cursor。他看的是 GitHub PR。
            </p>
            <ul className="topic-card__list">
              <li>复制粘贴的 UI / 逻辑</li>
              <li>和仓库其余写法不一致</li>
              <li>格式 nitpick 不该占人的时间</li>
            </ul>
          </div>
        </section>

        {/* --- duplicated card block #2 --- */}
        <section className="section" id="diff">
          <h2>2–4 分钟 · 和编辑器 AI 的差别</h2>
          <p className="section-intro">
            Cursor 能审你打开的文件。挂在 PR 上的 Review 是团队门禁：每个 PR 自动跑，全组看得见，留在 Conversation 里。
          </p>
          <div className="topic-card">
            <div className="topic-card__badge">差别</div>
            <h3 className="topic-card__title">个人助理 ≠ 团队门禁</h3>
            <p className="topic-card__body">
              本仓库用的是 CodeRabbit GitHub App，不是 Actions 里的付费模型。CI（lint / build）仍由{' '}
              <code>ci.yml</code> 跑。
            </p>
            <ul className="topic-card__list">
              <li>谁触发：你想起来才问 vs 每个 PR 自动</li>
              <li>谁看见：只有你 vs 开 PR 的人 + leader</li>
              <li>留下什么：聊天记录 vs 钉在 PR 上可追溯</li>
            </ul>
          </div>
        </section>

        {/* --- duplicated card block #3 --- */}
        <section className="section" id="demo">
          <h2>4–10 分钟 · 现场看这条 PR</h2>
          <p className="section-intro">
            打开 PR，指 CodeRabbit 的行内评论。它评在「这次新粘的卡片」上，但判断重复时看的是整份文件。
          </p>
          <div className="topic-card">
            <div className="topic-card__badge">演示</div>
            <h3 className="topic-card__title">质量建议，不是 lint</h3>
            <p className="topic-card__body">
              期望看到的是 Maintainability：同样的卡片结构不要继续复制，抽成共享组件。不同意可以 resolve；同意可以在 PR 里{' '}
              <code>@coderabbitai autofix</code>，不必把评论拷进 Cursor。
            </p>
            <ul className="topic-card__list">
              <li>投屏：PR Conversation + Files changed 行内评论</li>
              <li>顺带说：yaml 是拧方向，不是演戏剧本</li>
              <li>先别抽组件，让听众先看到 bot 的话</li>
            </ul>
          </div>
        </section>

        {/* --- duplicated card block #4 --- */}
        <section className="section" id="limits">
          <h2>10–13 分钟 · 边界</h2>
          <p className="section-intro">
            AI Review 是分流，不是签字。自动合可以配，但必须是 CI + 人定的规则，不是 bot 自己点 Approve。
          </p>
          <div className="topic-card">
            <div className="topic-card__badge">边界</div>
            <h3 className="topic-card__title">低风险可快，高风险必须人</h3>
            <p className="topic-card__body">
              文案、样式、重复结构：看 AI 摘要 + CI 绿，30 秒。支付、患者数据、权限：人看标红处和业务。同一模型又写又审会有盲区。
            </p>
            <ul className="topic-card__list">
              <li>能替代：第一轮结构 / DRY / 明显问题</li>
              <li>能配：CI 绿 + 无 blocking → GitHub auto-merge</li>
              <li>不能：业务对不对、合规、最终 merge 责任</li>
            </ul>
          </div>
        </section>

        <section className="section checklist" id="close">
          <h2>13–15 分钟 · 带走什么</h2>
          <ol>
            <li>主题：PR 质量门禁，不是推荐一个 Action，也不是无人合代码</li>
            <li>明天可试：非核心公开仓库装 CodeRabbit，开一个带重复的 PR</li>
            <li>拧方向：<code>.coderabbit.yaml</code> 写「盯 DRY，别 nitpick」，不必写死组件名</li>
            <li>改代码：PR 里 <code>@coderabbitai autofix</code>，或让 Cursor 按 PR 建议改</li>
            <li>下一步（今天不做）：低风险路径再接 auto-merge</li>
          </ol>
        </section>
      </main>

      <footer className="footer">
        <p>
          故意重复的四张卡片在 <code>src/App.tsx</code>。讲稿和演示步骤见 <code>README.md</code>。
        </p>
      </footer>
    </div>
  )
}
