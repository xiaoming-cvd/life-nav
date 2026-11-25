import { Link } from 'react-router'
import {
  ArrowRight,
  Compass,
  GitFork,
  MapPin,
  Radar,
  ScrollText,
  Target,
} from 'lucide-react'
import { ATOMS, LAYER_META, type AtomLayer } from '../data/atoms'
import { gapSummary } from '../data/profile'
import { DECISIONS } from '../data/decisions'

// 人生主干：职业线里程碑（示例时间轴，请替换成你自己的）
const TRUNK = [
  {
    time: '现在',
    title: '当前阶段（示例）',
    desc: '把这里换成你当前的主线任务与检验场',
    current: true,
  },
  {
    time: '6 个月后',
    title: '第一个里程碑（示例）',
    desc: '一门技能达标 / 一次考试 / 一个项目交付',
    current: false,
  },
  {
    time: '1 年后',
    title: '阶段跃迁（示例）',
    desc: '换岗 / 升学 / 转型——以决策日志里的终裁为准',
    current: false,
  },
  {
    time: '3 年后',
    title: '站稳一个位置（示例）',
    desc: '在某个方向上拥有可验证的作品与信誉',
    current: false,
  },
  {
    time: '5 年后',
    title: '拥有自己的标签（示例）',
    desc: '别人提起某个问题，第一个想到你',
    current: false,
  },
  {
    time: '10 年后',
    title: '选择权（示例）',
    desc: '拥有对不想做的事说「不」的底气',
    current: false,
  },
]

export default function Dashboard() {
  const summary = gapSummary()
  const decisions = DECISIONS.length
  const layerCount = (l: AtomLayer) => ATOMS.filter((a) => a.layer === l).length
  const minActions = summary.gap + summary.edge

  const stats = [
    { icon: Radar, label: '能力原子', value: ATOMS.length, tone: '#e8a04c', to: '/atoms' },
    { icon: Target, label: '待补缺口', value: summary.gap + summary.edge, tone: '#d97a6a', to: '/gap' },
    { icon: ScrollText, label: '已记录决策', value: decisions, tone: '#7fb4a8', to: '/decisions' },
    { icon: Compass, label: '本月最小行动', value: minActions, tone: '#c98bb0', to: '/gap' },
  ]

  return (
    <div className="fade-up space-y-12">
      {/* Hero */}
      <section className="space-y-5">
        <p className="text-sm tracking-[0.3em] text-primary/80">
          LIFE NAVIGATION SYSTEM
        </p>
        <h1 className="font-display max-w-3xl text-4xl leading-snug sm:text-5xl">
          站在岔路口时，
          <br />
          看得见<span className="text-primary">去向</span>、<span className="text-primary">手里有什么</span>、<span className="text-primary">还差什么</span>。
        </h1>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          这不是主页，是我的私人导航系统：职业主干走到哪里、做过哪些终裁、能力三层（专业壁垒 / 个人品牌 / 个人品质）各有什么、离目标岗位还差多远——
          <span className="text-foreground">所有影响人生抉择的东西，都存档在这里，随时可查、可审计。</span>
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <Link
            to={s.to}
            key={s.label}
            className="card-hover rounded-xl border border-border bg-card/60 p-5"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <s.icon size={15} style={{ color: s.tone }} />
              <span className="text-xs">{s.label}</span>
            </div>
            <p className="font-display mt-3 text-4xl" style={{ color: s.tone }}>
              {s.value}
            </p>
          </Link>
        ))}
      </section>

      <div className="grid gap-10 lg:grid-cols-5">
        {/* 人生主干 */}
        <section className="lg:col-span-3">
          <h2 className="font-display mb-5 text-xl">职业主干 · 我在哪</h2>
          <div className="relative space-y-0 pl-6">
            {/* 竖线 */}
            <span className="absolute bottom-5 left-[9px] top-2 w-px bg-border" />
            {TRUNK.map((n) => (
              <div key={n.time} className="relative pb-7 last:pb-0">
                <span
                  className={`absolute -left-6 top-1.5 h-3 w-3 rounded-full border-2 ${
                    n.current
                      ? 'border-primary bg-primary shadow-[0_0_12px_hsl(36_88%_62%/0.7)]'
                      : 'border-border bg-background'
                  }`}
                />
                <p
                  className={`text-xs tracking-wide ${
                    n.current ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {n.time}
                  {n.current && ' ← 当前位置'}
                </p>
                <h3 className="mt-1 font-medium">{n.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {n.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 已裁定岔枝 + 三层能力 */}
        <section className="space-y-8 lg:col-span-2">
          <div>
            <h2 className="font-display mb-4 text-xl">已裁定的岔枝</h2>
            <div className="space-y-3">
              {DECISIONS.map((d) => (
                <Link
                  key={d.id}
                  to="/decisions"
                  className="card-hover block rounded-xl border border-border bg-card/60 p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <GitFork size={11} className="text-primary/70" />
                      {d.branch}
                    </span>
                    <span className="text-[11px] text-muted-foreground">{d.date}</span>
                  </div>
                  <h3 className="mt-2 text-sm font-medium leading-snug">
                    {d.title}
                  </h3>
                  <p className="mt-2 inline-flex items-center gap-1 text-xs text-primary">
                    查看当时理由与反悔条件 <ArrowRight size={12} />
                  </p>
                </Link>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              只有做过终裁的岔枝才挂在这里——没想清楚的不硬画，想清楚了必存档。
            </p>
          </div>

          <div>
            <h2 className="font-display mb-4 text-xl">能力三层分布</h2>
            <div className="space-y-3">
              {(Object.keys(LAYER_META) as AtomLayer[]).map((l) => {
                const meta = LAYER_META[l]
                const n = layerCount(l)
                return (
                  <div key={l}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm" style={{ color: meta.color }}>
                        {meta.label}
                      </span>
                      <span className="text-xs text-muted-foreground">{n} 个</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(n / ATOMS.length) * 100}%`,
                          backgroundColor: meta.color,
                        }}
                      />
                    </div>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      {meta.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>

      {/* 当前聚焦 */}
      <section className="rounded-2xl border border-primary/25 bg-primary/5 p-7">
        <h2 className="flex items-center gap-2 font-display text-xl">
          <MapPin size={18} className="text-primary" /> 当前聚焦 · 本季度
        </h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {[
            {
              t: '主线（示例）',
              d: '把当前最重要的一件事写在这里，只写一件。它应该和决策日志里最近一条终裁一致。',
            },
            {
              t: '检验场（示例）',
              d: '近期有没有一个公开/半公开的场景能检验能力？比赛、展示、投稿、实战项目——写在这里，到期必须产出。',
            },
            {
              t: '缺口突击（示例）',
              d: '从缺口分析页挑一个「硬缺口 + 高优先级」，写下最小行动和截止时间。详见缺口分析页。',
            },
          ].map((x) => (
            <div key={x.t} className="space-y-2">
              <h3 className="font-medium">{x.t}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {x.d}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-primary/20 pt-5">
          <Link
            to="/gap"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            去看完整缺口分析 <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
