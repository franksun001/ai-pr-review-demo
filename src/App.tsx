/**
 * Talk landing page for the Brown Bag demo.
 *
 * Topic cards share a reusable component while each section retains its own content.
 */

import './App.css'

type TopicCardProps = {
  badge: string
  title: string
  body: string
  items: string[]
}

function TopicCard({ badge, title, body, items }: TopicCardProps) {
  return (
    <div className="topic-card">
      <div className="topic-card__badge">{badge}</div>
      <h3 className="topic-card__title">{title}</h3>
      <p className="topic-card__body">{body}</p>
      <ul className="topic-card__list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

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
        <section className="section" id="problem">
          <h2>1. 痛点</h2>
          <p className="section-intro">
            Leader 的 review 时间，经常耗在格式、复制粘贴的 UI、明显的结构问题上，而不是业务风险和产品判断。
          </p>
          <TopicCard
            badge="痛点"
            title="Review 带宽不够"
            body="每个 PR 都等人看。很多评论其实是「这段粘了三遍，抽个组件吧」，而不是架构或合规问题。"
            items={['多个区块重复同一段 JSX', '和仓库其余代码的写法不一致', '本可以先由 bot 指出的 nitpick']}
          />
        </section>

        <section className="section" id="demo">
          <h2>2. 演示什么</h2>
          <p className="section-intro">
            本页故意把同一套卡片布局重复了三次。开一个再粘第四份的 PR，AI reviewer 应该能指出 DRY 问题。
          </p>
          <TopicCard
            badge="流程"
            title="PR → AI Review"
            body="推分支、开 PR，让 Claude Code Action（或 CodeRabbit / Greptile）在行内给出具体重构建议——不只是「LGTM」或 lint 噪音。"
            items={['标出重复的 UI / 逻辑', '建议组件名和文件路径', '除非影响可读性，否则跳过格式 nitpick']}
          />
        </section>

        <section className="section" id="limits">
          <h2>3. 边界</h2>
          <p className="section-intro">
            AI review 是分流，不是签字。支付、患者数据、权限相关改动，最终仍要人负责合并。
          </p>
          <TopicCard
            badge="边界"
            title="最终还是人决定"
            body="Bot 可以建议抽组件，但决定不了「值不值得抽象」、HIPAA/PII 是否适用、产品行为对不对。"
            items={['低风险 PR：看 AI 摘要 + CI，大约 30 秒扫一眼', '高风险 PR：人重点看 AI 标红处 + 业务逻辑', '同一模型又写又审，容易有共同盲区']}
          />
        </section>

        <section className="section" id="qa">
          <h2>4. 答疑</h2>
          <p className="section-intro">
            现场常见问题：工具怎么选、要不要付费、能不能替代 leader review。这块卡片也是复制粘贴上来的。
          </p>
          <TopicCard
            badge="答疑"
            title="听众会问什么"
            body="公开仓库可用 CodeRabbit 免费档演示；私有仓库和 Anthropic API 才可能收费。AI 做第一轮分流，高风险改动仍要人签字。"
            items={['免费 demo：Public 仓库 + CodeRabbit', '付费选项：Anthropic / Copilot / Greptile', '不能替代：业务判断与合规签字']}
          />
        </section>

        <section className="section checklist" id="checklist">
          <h2>5. 落地清单</h2>
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
