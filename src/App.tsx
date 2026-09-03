import { TopicSection } from "./components/TopicSection";
import "./App.css";

export default function App() {
  return (
    <div className='page'>
      <header className='hero'>
        <p className='eyebrow'>技术分享</p>
        <h1>CodeRabbit</h1>
        <p className='lede'>
          GitHub Pull Request 上的 AI 代码审查。开 PR 后自动评论，全组可见，并可按指令提交修复。
        </p>
      </header>

      <main>
        <TopicSection
          id='what'
          heading='1. 它是什么'
          intro='CodeRabbit 是独立的 AI Code Review 产品，以 GitHub App 的形式接到仓库上。'
          badge='产品'
          cardTitle='用途与优势'
          body='每次有人打开或更新 Pull Request，它会阅读改动并留下审查意见：重复代码、可维护性、潜在缺陷。审查结果写在 PR 上，作者、同事和 reviewer 都能看到。'
          items={[
            "相对编辑器内的 AI：结果留在 GitHub，不依赖个人本地环境",
            "相对 lint / CI：能提结构与质量建议，例如抽取公共组件",
            "公开仓库可免费用于演示；私有仓库完整能力通常需要试用或付费",
          ]}
        />

        <TopicSection
          id='install'
          heading='2. 如何接入仓库'
          intro='在 GitHub 上安装 CodeRabbit App，并授权目标仓库。'
          badge='接入'
          cardTitle='Settings → GitHub Apps'
          body='打开 github.com/apps/coderabbitai，选择 Install 或 Configure。账号选个人或组织，Repository access 勾选具体仓库后保存。也可从仓库 Settings → Integrations / GitHub Apps 进入同一配置。'
          items={[
            "只授权需要审查的仓库即可，不必勾选全部",
            "授权完成后，到 app.coderabbit.ai 确认仓库已出现在列表中",
            "与仓库 Secrets、GitHub Actions 工作流不是同一套配置",
          ]}
        />

        <TopicSection
          id='config'
          heading='3. 项目里放什么'
          intro='不写配置也能审查。加入文件是为了统一语言和审查重点。'
          badge='配置'
          cardTitle='根目录配置与目录范围规则'
          body='.coderabbit.yaml 必须保留在仓库根目录，用于控制审查行为：语言、是否自动审、关注可维护性与重复实现、减少格式类评论。AGENTS.md 可被发现于任意目录；其中的规则只适用于所在目录及其所有子目录，审查和自动修复时可以一并参考。'
          items={[
            ".coderabbit.yaml：必须保留在仓库根目录，定义审查范围与风格",
            "AGENTS.md：可位于任意目录；只约束所在目录及其子目录的技术栈、习惯与禁止事项",
            ".github/workflows/ci.yml：lint 与 build，与 AI 评论相互独立",
          ]}
        />

        <TopicSection
          id='pr'
          heading='4. 开 PR 之后'
          intro='默认 auto-review 配置下，对已授权仓库创建面向默认分支的非 Draft Pull Request，审查会自动开始；reviews.auto_review 也可按目标分支、标签、作者或标题禁用或筛选审查。'
          badge='审查'
          cardTitle='Conversation 里会出现什么'
          body='数分钟内，coderabbitai 会发布摘要，并在 Files changed 中对具体行留言。摘要说明改了什么；带严重级别的行内评论才是需要处理的建议。页面下方的 CI 表示编译是否通过，与 AI 建议是否被采纳无关。'
          items={[
            "Walkthrough：变更说明",
            "行内评论：问题位置、原因、建议改法",
            "Pre-merge checks：CodeRabbit 自带的附加打分，默认不阻止合并",
          ]}
        />

        <TopicSection
          id='commands'
          heading='5. 评论里常用指令'
          intro='在 PR 的 Comment 框中 @你的 CodeRabbit 安装显示的服务账号句柄（例如 @coderabbitai），即可触发后续动作。'
          badge='指令'
          cardTitle='审查之后怎么处理'
          body='同意建议并希望由它改代码：在 Conversation 底部输入 @实际服务账号句柄 autofix，点击 Comment。只处理某一条时，在该条回复里发送同一指令。只有成功处理符合条件的未解决审查线程时，当前分支才会新增提交；遇到冲突、限流或没有适用线程时可能不会产生提交，提交命令后请查看回复或状态。'
          items={[
            "@实际服务账号句柄 review：再次审查最新提交",
            "@实际服务账号句柄 autofix：处理未解决的审查建议",
            "Resolve conversation：修复或决定不处理后，将该讨论标记为已解决；在回复中说明理由",
          ]}
        />
      </main>

      <footer className='footer'>
        <p>产品说明 → 接入 → 配置 → 开 PR → 评论指令。</p>
      </footer>
    </div>
  );
}
