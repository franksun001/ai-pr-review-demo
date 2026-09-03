import { TopicSection } from "./components/TopicSection";
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
        <TopicSection
          id='why'
          heading='1. 为什么要做'
          intro='人的 review 时间有限，不该花在「这段写了三遍」上。'
          badge='为什么'
          cardTitle='把浅层问题挡在前面'
          body='复制粘贴、命名混乱、和现有页面不一致——这些适合机器先标出来。人去看支付、权限、产品对不对。'
          items={['重复的 UI 和逻辑', '和仓库其余写法打架', '一眼能看出来的低质量']}
        />
        <TopicSection
          id='where'
          heading='2. 放在哪一层'
          intro='写代码时的助手，和挂在 PR 上的审查，不是同一件事。'
          badge='分层'
          cardTitle='PR 是团队的检查点'
          body='编辑器里的建议只有自己看得见。PR 上的审查每次都会跑，开 PR 的人、同事、leader 都能看到，也留得住。'
          items={['对一次改动说话，不是对整仓空谈', '结果钉在 PR 上，能回头对', '和「能不能编过」的检查分开，各管一层']}
        />
        <TopicSection
          id='where-2'
          heading='3. 放在哪一层(2)'
          intro='写代码时的助手，和挂在 PR 上的审查，不是同一件事。'
          badge='分层'
          cardTitle='PR 是团队的检查点'
          body='编辑器里的建议只有自己看得见。PR 上的审查每次都会跑，开 PR 的人、同事、leader 都能看到，也留得住。'
          items={['对一次改动说话，不是对整仓空谈', '结果钉在 PR 上，能回头对', '和「能不能编过」的检查分开，各管一层']}
        />
      </main>

      <footer className='footer'>
        <p>15 分钟：为什么 → 放哪一层 → 现场走一遍 → 边界。</p>
      </footer>
    </div>
  );
}
