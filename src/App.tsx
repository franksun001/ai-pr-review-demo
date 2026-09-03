/**
 * Talk landing page — 15-minute Brown Bag.
 */

import "./App.css";

type TopicCardProps = {
  badge: string;
  title: string;
  body: string;
  items: string[];
};

function TopicCard({ badge, title, body, items }: TopicCardProps) {
  return (
    <div className='topic-card'>
      <div className='topic-card__badge'>{badge}</div>
      <h3 className='topic-card__title'>{title}</h3>
      <p className='topic-card__body'>{body}</p>
      <ul className='topic-card__list'>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div className='page'>
      <header className='hero'>
        <p className='eyebrow'>技术分享 · 15 分钟</p>
        <h1>PR 上的 AI Review</h1>
        <p className='lede'>
          每个 Pull Request 先过一道质量审查：重复、结构、明显的坏味道。人只审业务和风险。
        </p>
      </header>

      <main>
        <section className='section' id='why'>
          <h2>1. 为什么要做</h2>
          <p className='section-intro'>人的 review 时间有限，不该花在「这段写了三遍」上。</p>
          <TopicCard
            badge='为什么'
            title='把浅层问题挡在前面'
            body='复制粘贴、命名混乱、和现有页面不一致——这些适合机器先标出来。人去看支付、权限、产品对不对。'
            items={['重复的 UI 和逻辑', '和仓库其余写法打架', '一眼能看出来的低质量']}
          />
        </section>

        <section className='section' id='where'>
          <h2>2. 放在哪一层</h2>
          <p className='section-intro'>写代码时的助手，和挂在 PR 上的审查，不是同一件事。</p>
          <TopicCard
            badge='分层'
            title='PR 是团队的检查点'
            body='编辑器里的建议只有自己看得见。PR 上的审查每次都会跑，开 PR 的人、同事、leader 都能看到，也留得住。'
            items={['对一次改动说话，不是对整仓空谈', '结果钉在 PR 上，能回头对', '和「能不能编过」的检查分开，各管一层']}
          />
        </section>

        <section className='section' id='how'>
          <h2>3. 现场怎么走</h2>
          <p className='section-intro'>开一条带重复结构的 PR，看审查会不会指出该抽公共组件。</p>
          <TopicCard
            badge='流程'
            title='改 → 开 PR → 看建议'
            body='评论通常落在这次新改的位置上；判断「是不是又复制了一份」，靠的是同一文件里已有的结构。'
            items={['看它标的是质量，还是无关紧要的格式', '建议是否具体：抽什么、放哪、带哪些参数', '同意就按建议改；不同意就关掉这条']}
          />
        </section>

        <section className='section' id='limit'>
          <h2>4. 到哪为止</h2>
          <p className='section-intro'>这是第一道分流，不是最后签字。</p>
          <TopicCard
            badge='边界'
            title='浅的交给机器，深的留给人'
            body='文案、样式、结构重复，可以很快扫过。涉及钱、数据和权限，必须人看。合不合并，责任也在人。'
            items={['能做：第一轮质量和结构', '能配：检查都过了再考虑加快合并', '不能替：业务对不对、该不该上线']}
          />
        </section>

        <section className='section' id='takeaway'>
          <h2>5. 带走什么</h2>
          <p className='section-intro'>听完之后，只需要记住三件事。</p>
          <TopicCard
            badge='带走'
            title='明天就能试'
            body='先在一个不关键的仓库上开起来。看它会不会把浅层问题标出来，再决定人还要看哪些。'
            items={['浅层质量可以先交给机器', '业务和风险仍由人拍板', '合不合并，责任不交给工具']}
          />
        </section>
      </main>

      <footer className='footer'>
        <p>15 分钟：为什么 → 放哪一层 → 现场走一遍 → 边界 → 带走。</p>
      </footer>
    </div>
  );
}
