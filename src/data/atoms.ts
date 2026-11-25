// ============================================================
// 能力原子库 · 数据层
// 一个「能力原子」= 最小可迁移的能力单元：
//   抽象定义（它到底是什么）+ 实证场景（我在哪真的用过）
//   + 可迁移方向 + 与其他原子的连接
// 三层分类：专业壁垒（护城河）/ 个人品牌（外表谈吐）/ 个人品质（软实力）
// 学习新东西时先查这里：能映射的原子直接复用，
// 映射不上的才新建——避免能力冗余。
//
// ⚠️ 当前内容是虚构示例（证据均标注「示例」），使用前请整库替换为你自己的真实记录。
// ============================================================

export type AtomStatus = 'core' | 'active' | 'weak' | 'pruned'
export type AtomLayer = 'moat' | 'brand' | 'quality'

export const LAYER_META: Record<
  AtomLayer,
  { label: string; color: string; desc: string }
> = {
  moat: {
    label: '专业壁垒',
    color: '#7fb4a8',
    desc: '技术与独特思考方式——别人拿不走的护城河',
  },
  brand: {
    label: '个人品牌',
    color: '#e8a04c',
    desc: '外表与谈吐——别人第一眼看到的',
  },
  quality: {
    label: '个人品质',
    color: '#c98bb0',
    desc: '责任、条理、同理心——长期相处的信任来源',
  },
}

export interface AbilityAtom {
  id: string
  name: string
  domain: Domain
  layer: AtomLayer
  /** 抽象化定义：剥掉具体场景后，这个能力的本质动作 */
  abstraction: string
  /** 实证：我在哪些真实场景里用过它 */
  evidence: string[]
  /** 可迁移方向：这些场景可以直接调用它 */
  transferableTo: string[]
  /** 关键词，用于「学习接入」时的自动映射 */
  keywords: string[]
  /** 与其他原子的连接（id） */
  connections: string[]
  /** 熟练度 1-5 */
  level: number
  status: AtomStatus
}

export type Domain =
  | '项目落地'
  | '研究与分析'
  | '表达与叙事'
  | '工具与技术'
  | '语言与商务'
  | '认知与自我'

export const DOMAINS: Domain[] = [
  '项目落地',
  '研究与分析',
  '表达与叙事',
  '工具与技术',
  '语言与商务',
  '认知与自我',
]

export const DOMAIN_COLORS: Record<Domain, string> = {
  项目落地: '#e8a04c',
  研究与分析: '#7fb4a8',
  表达与叙事: '#c98bb0',
  工具与技术: '#8fa8d8',
  语言与商务: '#d8c86a',
  认知与自我: '#9d8fd8',
}

export const ATOMS: AbilityAtom[] = [
  {
    id: 'transfer-meta',
    name: '能力迁移元技能',
    domain: '认知与自我',
    layer: 'moat',
    abstraction:
      '学任何新东西的第一步不是学，是映射：先查已有原子能覆盖多少，缺口单独补，与主线无连接的一律不碰。',
    evidence: ['示例：本网站即此技能的外化——能力原子化的具象产物'],
    transferableTo: ['一切新学习', '跨领域转轨', '备考任何体系化考试'],
    keywords: ['学习', '迁移', '新东西', '能力', '元技能', '复盘'],
    connections: ['info-retrieval', 'ai-collab', 'self-review'],
    level: 4,
    status: 'core',
  },
  {
    id: 'self-review',
    name: '定期复盘',
    domain: '认知与自我',
    layer: 'quality',
    abstraction:
      '固定周期回看目标与行动的距离：哪些有效、哪些是自嗨、哪些该砍。复盘只记录事实，不评判人格。',
    evidence: ['示例：每月一次周记式复盘，连续坚持 6 个月'],
    transferableTo: ['调整学习计划', '职业方向校准', '情绪管理'],
    keywords: ['复盘', '总结', '反思', '日记', '校准'],
    connections: ['transfer-meta', 'structured-comms'],
    level: 4,
    status: 'core',
  },
  {
    id: 'reliability',
    name: '靠谱交付（有始有终）',
    domain: '项目落地',
    layer: 'quality',
    abstraction:
      '接下的承诺一定收尾。烂尾是信任的唯一杀手，有始有终是所有协作的底层货币。',
    evidence: ['示例：独立负责一次社团活动，从筹备到落地全流程跟完'],
    transferableTo: ['任何被托付的事', '团队中的核心成员信誉', '长周期目标'],
    keywords: ['责任', '靠谱', '执行力', '交付', '收尾'],
    connections: ['pm-cycle', 'parallel-lines'],
    level: 4,
    status: 'core',
  },
  {
    id: 'parallel-lines',
    name: '多线并行管理',
    domain: '项目落地',
    layer: 'quality',
    abstraction:
      '同时推多条线也不乱：每条线有清单、有节奏点、有优先级，知道哪条可以砍、哪条不能断。',
    evidence: ['示例：学业 + 实习 + 兴趣三线并行一学期，无烂尾'],
    transferableTo: ['多项目并行', '备考多科目', '工作与生活平衡'],
    keywords: ['条理', '计划', '并行', '时间管理', '清单'],
    connections: ['reliability', 'pm-cycle'],
    level: 3,
    status: 'active',
  },
  {
    id: 'pm-cycle',
    name: '全流程项目统筹',
    domain: '项目落地',
    layer: 'moat',
    abstraction:
      '把模糊目标拆成阶段→任务→责任人→截止时间，用节奏点维持推进，收尾必须复盘归档。',
    evidence: ['示例：一次课程大作业担任组长，拆任务、定检查点、按时交付'],
    transferableTo: ['活动统筹', '备考计划', '任何多人协作'],
    keywords: ['项目', '管理', '统筹', '协作', '计划', '活动'],
    connections: ['structured-expression', 'reliability'],
    level: 3,
    status: 'active',
  },
  {
    id: 'info-retrieval',
    name: '信息检索与验证',
    domain: '研究与分析',
    layer: 'moat',
    abstraction:
      '把一个大问题拆成可检索的子问题，选对来源、交叉验证，再组装回整体。判断永远自己出。',
    evidence: ['示例：为一个选题完成一次多来源交叉验证的桌面调研'],
    transferableTo: ['论文写作', '选校择业调研', '供应商尽调'],
    keywords: ['检索', '信息', '搜索', '资料', '论文', '尽调'],
    connections: ['transfer-meta', 'data-basic'],
    level: 3,
    status: 'core',
  },
  {
    id: 'data-basic',
    name: '数据分析基础',
    domain: '研究与分析',
    layer: 'moat',
    abstraction:
      '清洗→整理→图表→一句话结论。标准是「够用、服务决策」，不追求炫技。',
    evidence: ['示例：一次课程作业的数据处理与可视化'],
    transferableTo: ['运营/财务分析', '报告撰写', '面试案例题'],
    keywords: ['数据', '分析', '图表', 'excel', '统计'],
    connections: ['info-retrieval', 'ai-collab'],
    level: 2,
    status: 'active',
  },
  {
    id: 'structured-expression',
    name: '结构化表达',
    domain: '表达与叙事',
    layer: 'brand',
    abstraction:
      '一页只讲一个观点：结论先行→证据分层→视觉引导。先搭骨架再填肉——这是谈吐的底层结构。',
    evidence: ['示例：一次课堂展示拿到高分，讲稿按「结论-证据-行动」组织'],
    transferableTo: ['商务写作', '面试', '课堂展示', '汇报'],
    keywords: ['表达', 'ppt', '演讲', '写作', '展示', '面试', '汇报'],
    connections: ['pm-cycle', 'story-video'],
    level: 3,
    status: 'active',
  },
  {
    id: 'story-video',
    name: '视频叙事制作',
    domain: '表达与叙事',
    layer: 'brand',
    abstraction:
      '脚本→素材→节奏→导出的流水线思维；模板和流程一旦建好就批量复用。',
    evidence: ['示例：独立完成一条 3 分钟的科普短视频'],
    transferableTo: ['自媒体内容', '课程作业', '产品演示'],
    keywords: ['视频', '叙事', '剪辑', '内容', '自媒体'],
    connections: ['structured-expression', 'ai-collab'],
    level: 2,
    status: 'active',
  },
  {
    id: 'ai-collab',
    name: 'AI 协作与指令工程',
    domain: '工具与技术',
    layer: 'moat',
    abstraction:
      '把目标翻译成 AI 可执行的分解指令，验收输出、迭代指令——是「指挥」，不是「代劳」，更不是「全信」。',
    evidence: ['示例：用 AI 辅助完成一次资料整理 + 初稿写作，人工验收后定稿'],
    transferableTo: ['所有知识工作', '代码与数据处理', '写作与翻译'],
    keywords: ['ai', '提示词', '人工智能', 'gpt', '工具', '效率'],
    connections: ['data-basic', 'transfer-meta', 'story-video'],
    level: 3,
    status: 'core',
  },
  {
    id: 'language-app',
    name: '外语应用',
    domain: '语言与商务',
    layer: 'brand',
    abstraction:
      '把语言从「考试科目」升级为工具：听说读写围绕真实场景练，而不是围绕题库练。',
    evidence: ['示例：一次双语展示 / 与外教无障碍交流 20 分钟'],
    transferableTo: ['外企面试', '国际业务沟通', '文献阅读'],
    keywords: ['英语', '外语', '口语', '翻译', '面试', '阅读'],
    connections: ['structured-expression'],
    level: 3,
    status: 'active',
  },
  {
    id: 'exam-tricks',
    name: '应试套路库',
    domain: '研究与分析',
    layer: 'moat',
    abstraction:
      '某类考试的题型套路与答题模板。靠重复形成肌肉记忆，但不与深度理解抢时间。',
    evidence: ['示例：某资格考试备考中，正确率从 50% 提升到 80%'],
    transferableTo: ['同类考试', '限时答题场景'],
    keywords: ['考试', '刷题', '备考', '真题', '应试'],
    connections: ['transfer-meta'],
    level: 2,
    status: 'weak',
  },
  {
    id: 'legacy-path',
    name: '已砍路径知识（示例）',
    domain: '项目落地',
    layer: 'moat',
    abstraction:
      '曾经认真投入、后来判定与主线无关的知识储备。保留记录只为防止它借新机会回流。',
    evidence: ['示例：方向调整时主动弃用的旧路径，2024-XX 裁定砍掉'],
    transferableTo: [],
    keywords: ['旧方向', '弃用'],
    connections: [],
    level: 1,
    status: 'pruned',
  },
]

// ---------- 派生工具 ----------

export function degree(atom: AbilityAtom): number {
  return atom.connections.length
}

export function atomById(id: string): AbilityAtom | undefined {
  return ATOMS.find((a) => a.id === id)
}

export const STATUS_META: Record<AtomStatus, { label: string; color: string; desc: string }> = {
  core: { label: '核心', color: '#e8a04c', desc: '高连接度，所有迁移从这里出发' },
  active: { label: '活跃', color: '#7fb4a8', desc: '正在使用或成长中' },
  weak: { label: '弱连接', color: '#8a8578', desc: '连接少，观察：强化、降级或砍掉' },
  pruned: { label: '已砍', color: '#5a564d', desc: '已判定为冗余，防止回流' },
}

// ---------- 学习接入：课题 → 迁移分析 ----------

export interface MatchResult {
  atom: AbilityAtom
  score: number
  reason: string
}

export function matchAtoms(topic: string): MatchResult[] {
  const t = topic.toLowerCase()
  const results: MatchResult[] = []
  for (const atom of ATOMS) {
    if (atom.status === 'pruned') continue
    let score = 0
    const hits: string[] = []
    for (const kw of atom.keywords) {
      if (t.includes(kw.toLowerCase())) {
        score += kw.length >= 3 ? 2 : 1
        hits.push(kw)
      }
    }
    // 可迁移方向的匹配
    for (const dir of atom.transferableTo) {
      if (t.includes(dir)) {
        score += 2
        hits.push(dir)
      }
    }
    if (score > 0) results.push({ atom, score, reason: hits.slice(0, 3).join(' · ') })
  }
  return results.sort((a, b) => b.score - a.score)
}

export const DOMAIN_GAP: Record<Domain, string> = {
  项目落地: '该领域的流程与协同规则（和谁、按什么节奏、交付什么）',
  研究与分析: '该领域的指标体系与验证方法（什么算数、什么不算）',
  表达与叙事: '该领域的语料与案例积累（内行怎么说话、怎么呈现）',
  工具与技术: '该领域的专用工具链（先够用，再求精）',
  语言与商务: '该领域的术语体系与商业惯例',
  认知与自我: '',
}

export interface LearnPlan {
  reusable: MatchResult[]
  gaps: { domain: Domain; text: string }[]
  skip: AbilityAtom[]
}

export function buildLearnPlan(topic: string): LearnPlan {
  const reusable = matchAtoms(topic)
  const covered = new Set(reusable.map((r) => r.atom.domain))
  const gaps = DOMAINS.filter((d) => !covered.has(d) && DOMAIN_GAP[d])
    .slice(0, 3)
    .map((d) => ({ domain: d, text: DOMAIN_GAP[d] }))
  const related = new Set(reusable.map((r) => r.atom.id))
  const skip = ATOMS.filter(
    (a) =>
      (a.status === 'pruned' || (a.status === 'weak' && degree(a) <= 1)) &&
      !related.has(a.id)
  )
  return { reusable, gaps, skip }
}
