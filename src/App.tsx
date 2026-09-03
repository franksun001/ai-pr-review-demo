/**
 * Talk landing page — 15-minute Brown Bag.
 *
 * INTENTIONAL QUALITY DEBT:
 * - Four sections paste the same `.topic-card` markup.
 * - Do not extract a shared component until the talk has shown the PR review.
 */

import "./App.css";

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
        {/* --- duplicated card block #1 --- */}
        <section className='section' id='why'>
          <h2>1. 为什么要做</h2>
          <p className='section-intro'>人的 review 时间有限，不该花在「这段写了三遍」上。</p>
          <div className='topic-card'>
            <div className='topic-card__badge'>为什么</div>
            <h3 className='topic-card__title'>把浅层问题挡在前面</h3>
            <p className='topic-card__body'>
              复制粘贴、命名混乱、和现有页面不一致——这些适合机器先标出来。人去看支付、权限、产品对不对。
            </p>
            <ul className='topic-card__list'>
              <li>重复的 UI 和逻辑</li>
              <li>和仓库其余写法打架</li>
              <li>一眼能看出来的低质量</li>
            </ul>
          </div>
        </section>

        {/* --- duplicated card block #2 --- */}
        <section className='section' id='where'>
          <h2>2. 放在哪一层</h2>
          <p className='section-intro'>写代码时的助手，和挂在 PR 上的审查，不是同一件事。</p>
          <div className='topic-card'>
            <div className='topic-card__badge'>分层</div>
            <h3 className='topic-card__title'>PR 是团队的检查点</h3>
            <p className='topic-card__body'>
              编辑器里的建议只有自己看得见。PR 上的审查每次都会跑，开 PR 的人、同事、leader
              都能看到，也留得住。
            </p>
            <ul className='topic-card__list'>
              <li>对一次改动说话，不是对整仓空谈</li>
              <li>结果钉在 PR 上，能回头对</li>
              <li>和「能不能编过」的检查分开，各管一层</li>
            </ul>
          </div>
        </section>

        {/* --- duplicated card block #3 --- */}
        <section className='section' id='how'>
          <h2>3. 现场怎么走</h2>
          <p className='section-intro'>开一条带重复结构的 PR，看审查会不会指出该抽公共组件。</p>
          <div className='topic-card'>
            <div className='topic-card__badge'>流程</div>
            <h3 className='topic-card__title'>改 → 开 PR → 看建议</h3>
            <p className='topic-card__body'>
              评论通常落在这次新改的位置上；判断「是不是又复制了一份」，靠的是同一文件里已有的结构。
            </p>
            <ul className='topic-card__list'>
              <li>看它标的是质量，还是无关紧要的格式</li>
              <li>建议是否具体：抽什么、放哪、带哪些参数</li>
              <li>同意就按建议改；不同意就关掉这条</li>
            </ul>
          </div>
        </section>

        {/* --- duplicated card block #4 --- */}
        <section className='section' id='limit'>
          <h2>4. 到哪为止</h2>
          <p className='section-intro'>这是第一道分流，不是最后签字。</p>
          <div className='topic-card'>
            <div className='topic-card__badge'>边界</div>
            <h3 className='topic-card__title'>浅的交给机器，深的留给人</h3>
            <p className='topic-card__body'>
              文案、样式、结构重复，可以很快扫过。涉及钱、数据和权限，必须人看。合不合并，责任也在人。
            </p>
            <ul className='topic-card__list'>
              <li>能做：第一轮质量和结构</li>
              <li>能配：检查都过了再考虑加快合并</li>
              <li>不能替：业务对不对、该不该上线</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className='footer'>
        <p>15 分钟：为什么 → 放哪一层 → 现场走一遍 → 边界。</p>
      </footer>
    </div>
  );
}
