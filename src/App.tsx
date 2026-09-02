/**
 * Talk landing page for the Brown Bag demo.
 *
 * INTENTIONAL QUALITY DEBT (for AI PR review demo):
 * - Problem / Demo / Limits each paste nearly identical "topic card" markup.
 * - An AI reviewer should suggest extracting a shared TopicCard component.
 * Do NOT remove this duplication until after you have shown the review comments.
 */

import './App.css'

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">技术分享 · 15 分钟</p>
        <h1>AI PR Review</h1>
        <p className="lede">
          不是单纯找 bug 的扫描器，而是 PR 的第一道质量审查：标出重复代码、组件化机会和低质量写法，再交给人看。
        </p>
        <p className="meta">
          演示仓库 · 故意留下 DRY 问题 · 看 AI 会不会建议抽成公共组件
        </p>
      </header>

      <main>
        {/* --- duplicated card block #1 (Problem) --- */}
        <section className="section" id="problem">
          <h2>1. 痛点</h2>
          <p className="section-intro">
            Leader 的 review 时间，经常耗在格式、复制粘贴的 UI、明显的结构问题上，而不是业务风险和产品判断。
          </p>
          <div className="topic-card">
            <div className="topic-card__badge">痛点</div>
            <h3 className="topic-card__title">Review 带宽不够</h3>
            <p className="topic-card__body">
              每个 PR 都等人看。很多评论其实是「这段粘了三遍，抽个组件吧」，而不是架构或合规问题。
            </p>
            <ul className="topic-card__list">
              <li>多个区块重复同一段 JSX</li>
              <li>和仓库其余代码的写法不一致</li>
              <li>本可以先由 bot 指出的 nitpick</li>
            </ul>
          </div>
        </section>

        {/* --- duplicated card block #2 (Demo) --- */}
        <section className="section" id="demo">
          <h2>2. 演示什么</h2>
          <p className="section-intro">
            本页故意把同一套卡片布局重复了三次。开一个再粘第四份的 PR，AI reviewer 应该能指出 DRY 问题。
          </p>
          <div className="topic-card">
            <div className="topic-card__badge">流程</div>
            <h3 className="topic-card__title">PR → AI Review</h3>
            <p className="topic-card__body">
              推分支、开 PR，让 Claude Code Action（或 CodeRabbit / Greptile）在行内给出具体重构建议——不只是
              「LGTM」或 lint 噪音。
            </p>
            <ul className="topic-card__list">
              <li>标出重复的 UI / 逻辑</li>
              <li>建议组件名和文件路径</li>
              <li>除非影响可读性，否则跳过格式 nitpick</li>
            </ul>
          </div>
        </section>

        {/* --- duplicated card block #3 (Limits) --- */}
        <section className="section" id="limits">
          <h2>3. 边界</h2>
          <p className="section-intro">
            AI review 是分流，不是签字。支付、患者数据、权限相关改动，最终仍要人负责合并。
          </p>
          <div className="topic-card">
            <div className="topic-card__badge">边界</div>
            <h3 className="topic-card__title">最终还是人决定</h3>
            <p className="topic-card__body">
              Bot 可以建议抽组件，但决定不了「值不值得抽象」、HIPAA/PII 是否适用、产品行为对不对。
            </p>
            <ul className="topic-card__list">
              <li>低风险 PR：看 AI 摘要 + CI，大约 30 秒扫一眼</li>
              <li>高风险 PR：人重点看 AI 标红处 + 业务逻辑</li>
              <li>同一模型又写又审，容易有共同盲区</li>
            </ul>
          </div>
        </section>

        <section className="section checklist" id="checklist">
          <h2>4. 落地清单</h2>
          <ol>
            <li>先在非核心仓库装一个 AI reviewer</li>
            <li>写一份简短的 AGENTS.md，让建议贴合你们的写法</li>
            <li>调 prompt：质量与 DRY 优先，格式 nitpick 关掉</li>
            <li>CI 必须绿；高风险路径仍要人工批准</li>
            <li>永远不要让 bot 自己 approve 并 merge 自己的 PR</li>
          </ol>
        </section>
      </main>

      <footer className="footer">
        <p>
          故意重复的代码在 <code>src/App.tsx</code>。演示步骤见 <code>README.md</code>。
        </p>
      </footer>
    </div>
  )
}
