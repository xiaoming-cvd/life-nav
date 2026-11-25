// ============================================================
// 目标岗位能力画像 · 缺口分析
// 数据来源示例：招聘 JD 公开信息（把 source 换成你自己的整理）
// 每个维度：市场要求 vs 我的现状 → 缺口 = 该补的
// 原则：事实记录 + 最小行动，不打分羞辱自己
//
// ⚠️ 当前内容是虚构示例，请替换为你的真实目标岗位与真实记录。
// ============================================================

export interface GapDimension {
  id: string
  name: string
  /** 市场要求摘要（来自 JD 高频关键词） */
  marketRequirement: string
  /** 市场要求熟练度 1-5 */
  requiredLevel: number
  /** 我当前的熟练度 1-5（基于实证，不是感觉） */
  currentLevel: number
  /** 支撑当前水平判断的能力原子 */
  relatedAtomIds: string[]
  /** 当前事实记录 */
  fact: string
  /** 下一个最小行动 */
  nextAction: string
  /** 优先级：high 直接影响求职 / mid 加分项 / low 可以等 */
  priority: 'high' | 'mid' | 'low'
}

export const PROFILE_META = {
  targetRole: '示例：产品经理（应届 → 1-3 年）',
  targetCity: '按你的偏好填写，如「一线城市」',
  source: '把这里换成你自己的 JD 整理来源与日期',
  updatedAt: '20XX-XX',
}

export const GAP_DIMENSIONS: GapDimension[] = [
  {
    id: 'docs',
    name: '文档与表达',
    marketRequirement:
      'JD 高频要求：能写清晰的需求文档、会议纪要，把结论讲给不同角色听。',
    requiredLevel: 4,
    currentLevel: 3,
    relatedAtomIds: ['structured-expression'],
    fact: '示例：有过课程作业的完整报告经历，但没有真实业务场景的文档产出。',
    nextAction: '示例：把一个练手项目的过程写成一篇 PRD 式文档，找一位前辈点评。',
    priority: 'high',
  },
  {
    id: 'data',
    name: '数据分析',
    marketRequirement:
      '初筛关键词：SQL / 数据看板 / 漏斗分析；笔试常考基础取数与指标计算。',
    requiredLevel: 4,
    currentLevel: 2,
    relatedAtomIds: ['data-basic'],
    fact: '示例：会基础图表和简单统计，没系统学过 SQL。',
    nextAction: '示例：每天 30 分钟 × 2 周，刷完 SELECT-WHERE-JOIN-GROUP BY 四件套。',
    priority: 'high',
  },
  {
    id: 'user-research',
    name: '用户研究常识',
    marketRequirement:
      '「了解用户访谈 / 问卷设计者优先」；面试会问如何验证一个需求是否真实。',
    requiredLevel: 3,
    currentLevel: 1,
    relatedAtomIds: ['info-retrieval'],
    fact: '示例：没做过正经访谈，但检索与验证方法可以迁移过来。',
    nextAction: '示例：对身边 5 个目标用户做一次轻量访谈，整理出 3 条反直觉发现。',
    priority: 'mid',
  },
  {
    id: 'pm',
    name: '项目推进',
    marketRequirement:
      '「能独立推进跨角色协作」；日常就是排期、对齐、收尾、复盘。',
    requiredLevel: 4,
    currentLevel: 3,
    relatedAtomIds: ['pm-cycle', 'reliability'],
    fact: '示例：有小组项目的统筹经历，有始有终，这是真实优势。',
    nextAction: '示例：把这段经历整理成一个 STAR 故事，放进简历素材库。',
    priority: 'mid',
  },
  {
    id: 'tools',
    name: '工具链（原型 / 看板）',
    marketRequirement:
      '「熟悉 Figma / Axure 优先」；多数 JD 的加分项而非门槛。',
    requiredLevel: 3,
    currentLevel: 1,
    relatedAtomIds: [],
    fact: '示例：零接触。JD 用词是「优先」——加分项，不着急。',
    nextAction: '示例：等主线任务空档，用一周照教程复刻一个常见 App 的首页原型。',
    priority: 'low',
  },
  {
    id: 'soft',
    name: '软素质（责任 / 协作 / 抗压）',
    marketRequirement:
      '每条 JD 都写：责任心强、跨部门协作、抗压能力、执行力。',
    requiredLevel: 4,
    currentLevel: 4,
    relatedAtomIds: ['reliability', 'parallel-lines'],
    fact: '示例：多线并行无烂尾、承诺必收尾——有完整实证链，这是真实优势而非自评。',
    nextAction: '示例：把每个软素质配一个 STAR 故事，写进简历素材库。',
    priority: 'mid',
  },
]

// ---------- 派生 ----------

export type GapStatus = 'gap' | 'edge' | 'ok'

export function gapStatus(d: GapDimension): GapStatus {
  const diff = d.requiredLevel - d.currentLevel
  if (diff >= 2) return 'gap'
  if (diff === 1) return 'edge'
  return 'ok'
}

export const GAP_STATUS_META: Record<
  GapStatus,
  { label: string; color: string }
> = {
  gap: { label: '硬缺口', color: '#d97a6a' },
  edge: { label: '差一点', color: '#e8a04c' },
  ok: { label: '已达标/优势', color: '#7fb4a8' },
}

export function gapSummary() {
  const list = GAP_DIMENSIONS.map((d) => ({ d, s: gapStatus(d) }))
  return {
    gap: list.filter((x) => x.s === 'gap').length,
    edge: list.filter((x) => x.s === 'edge').length,
    ok: list.filter((x) => x.s === 'ok').length,
    highPriorityOpen: list.filter(
      (x) => x.s !== 'ok' && x.d.priority === 'high'
    ).length,
  }
}
