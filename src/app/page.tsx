"use client";

import {
  Sprout,
  CloudSun,
  Bot,
  TrendingUp,
  Leaf,
  Users,
  Store,
  ArrowRight,
  Play,
  ShieldCheck,
  Sparkles,
  Zap,
  ScanLine,
  Sun,
  BarChart3,
  MessageCircle,
  Wheat,
} from "lucide-react";
import Image from "next/image";
import heroFarmer from "@/assets/hero-farmer.jpg";
import fieldAerial from "@/assets/field-aerial.jpg";
import farmer1 from "@/assets/farmer-1.jpg";
import farmer2 from "@/assets/farmer-2.jpg";
import farmer3 from "@/assets/farmer-3.jpg";
import { Logo } from "@/components/site/Logo";
import { Nav } from "@/components/site/Nav";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { Language } from "@/locales/translations";

const features = [
  {
    icon: ScanLine,
    titleKey: "diseaseTitle",
    descKey: "diseaseDesc",
    href: "https://sanjeevani-ai-frontend.vercel.app/",
  },
  {
    icon: BarChart3,
    titleKey: "yieldTitle",
    descKey: "yieldDesc",
  },
  {
    icon: CloudSun,
    titleKey: "weatherTitle",
    descKey: "weatherDesc",
  },
  {
    icon: Bot,
    titleKey: "assistantTitle",
    descKey: "assistantDesc",
  },
  {
    icon: TrendingUp,
    titleKey: "marketTitle",
    descKey: "marketDesc",
  },
  {
    icon: Leaf,
    titleKey: "cropTitle",
    descKey: "cropDesc",
    href: "https://best-crop-recomender.vercel.app/",
  },
  {
    icon: Users,
    titleKey: "networkTitle",
    descKey: "networkDesc",
  },
  {
    icon: Store,
    titleKey: "storeTitle",
    descKey: "storeDesc",
  },
];

const stats = [
  { labelKey: "decisions", value: 96, suffix: "%" },
  { labelKey: "productivity", value: 42, suffix: "%" },
  { labelKey: "risks", value: 60, suffix: "%" },
  { labelKey: "health", value: 8, suffix: "/10" },
  { labelKey: "access", value: 3, suffix: "x" },
  { labelKey: "income", value: 35, suffix: "%" },
];

const stories = [
  {
    img: farmer1,
    name: "Ramesh K.",
    key: "ramesh",
  },
  {
    img: farmer2,
    name: "Maria S.",
    key: "maria",
  },
  {
    img: farmer3,
    name: "Joaquín R.",
    key: "joaquin",
  },
];

export default function Page() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}

function PageContent() {
  return (
    <main id="top" className="relative min-h-screen overflow-hidden">
      <Nav />
      <Hero />
      <TrustStrip />
      <Features />
      <WhyStats />
      <Ecosystem />
      <ProductMockup />
      <Stories />
      <Vision />
      <CTA />
      <Footer />
    </main>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  const { lang, setLang, t } = useLanguage();

  return (
    <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, oklch(0.62 0.17 145 / 0.35), transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        {/* LEFT */}
        <div className="relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-blue)]" />
              {t("hero.tagline")}
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {t("hero.title1")} <br />
              {t("hero.title2")} <span className="text-gradient-brand">{t("hero.title3")}</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              {t("hero.desc")}
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow-green transition-transform hover:-translate-y-0.5"
              >
                {t("hero.getStarted")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={500}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[color:var(--brand-green)]" />{" "}
                {t("hero.privacy")}
              </span>
              <span className="inline-flex items-center gap-2">
                <Zap className="h-4 w-4 text-[color:var(--brand-gold)]" /> {t("hero.realtime")}
              </span>
              <span className="inline-flex items-center gap-2">
                <Wheat className="h-4 w-4 text-[color:var(--brand-green)]" />{" "}
                {t("hero.farmerFirst")}
              </span>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — farmer + floating cards */}
        <div className="relative">
          <Reveal delay={200}>
            <div className="relative mx-auto aspect-[5/6] w-full max-w-xl">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-brand opacity-30 blur-3xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-elevated">
                <Image
                  src={heroFarmer}
                  alt="Farmer with AI insights"
                  className="h-full w-full object-cover"
                  placeholder="blur"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* floating cards */}
              <FloatCard
                className="absolute -left-6 top-10 w-56 animate-float"
                icon={<CloudSun className="h-4 w-4 text-[color:var(--brand-blue)]" />}
                title={t("hero.cards.weather")}
                value={t("hero.cards.weatherVal")}
                sub={t("hero.cards.weatherSub")}
              />
              <FloatCard
                className="absolute -right-4 top-32 w-60 animate-float [animation-delay:1s]"
                icon={<ScanLine className="h-4 w-4 text-[color:var(--brand-green)]" />}
                title={t("hero.cards.leaf")}
                value={t("hero.cards.leafVal")}
                sub={t("hero.cards.leafSub")}
              />
              <FloatCard
                className="absolute -right-2 bottom-16 w-56 animate-float [animation-delay:2s]"
                icon={<TrendingUp className="h-4 w-4 text-[color:var(--brand-gold)]" />}
                title={t("hero.cards.mandi")}
                value={t("hero.cards.mandiVal")}
                sub={t("hero.cards.mandiSub")}
              />
              <FloatCard
                className="absolute -left-4 bottom-6 w-52 animate-float [animation-delay:1.5s]"
                icon={<BarChart3 className="h-4 w-4 text-[color:var(--brand-blue)]" />}
                title={t("hero.cards.yield")}
                value={t("hero.cards.yieldVal")}
                sub={t("hero.cards.yieldSub")}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FloatCard({
  className = "",
  icon,
  title,
  value,
  sub,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  value: string;
  sub: string;
}) {
  return (
    <div className={`glass-strong rounded-2xl p-3.5 shadow-elevated ${className}`}>
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground">
        {icon}
        {title}
      </div>
      <div className="mt-1.5 text-base font-semibold">{value}</div>
      <div className="text-xs text-muted-foreground">{sub}</div>
    </div>
  );
}

/* ───────────────────────── TRUST STRIP ───────────────────────── */
function TrustStrip() {
  const { t } = useLanguage();
  const items = [
    "AgriTech Alliance",
    "FarmGov",
    "GreenSeed Co.",
    "Mandi Network",
    "AquaIrrigate",
    "SoilLab",
  ];
  return (
    <section className="border-y border-white/5 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 text-sm text-muted-foreground">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
          {t("trustStrip.trustedBy")}
        </span>
        {items.map((i) => (
          <span key={i} className="font-display font-medium text-foreground/70">
            {i}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── FEATURES ───────────────────────── */
function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand-blue)]">
              {t("features.cap")}
            </span>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">{t("features.title")}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{t("features.desc")}</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const CardElement = f.href ? "a" : "article";
            return (
              <Reveal key={f.titleKey} delay={i * 70}>
                <CardElement
                  href={f.href}
                  target={f.href ? "_blank" : undefined}
                  rel={f.href ? "noopener noreferrer" : undefined}
                  className={`group relative block h-full overflow-hidden rounded-2xl glass p-6 transition-all ${
                    f.href
                      ? "hover:-translate-y-1 hover:border-white/20 hover:shadow-glow-green cursor-pointer"
                      : "hover:-translate-y-1 hover:border-white/20 hover:shadow-glow-green"
                  }`}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow-green">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{t(`features.list.${f.titleKey}`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`features.list.${f.descKey}`)}
                  </p>
                </CardElement>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── WHY / STATS ───────────────────────── */
function WhyStats() {
  const { t } = useLanguage();

  return (
    <section className="relative py-28">
      <div className="absolute inset-0 -z-10 opacity-30">
        <Image
          src={fieldAerial}
          alt="Aerial view of farm field"
          fill
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-background/85" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand-gold)]">
              {t("stats.why")}
            </span>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">{t("stats.title")}</h2>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.labelKey} delay={i * 80}>
              <div className="rounded-2xl glass-strong p-8 text-center">
                <div className="font-display text-5xl font-semibold text-gradient-brand sm:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm uppercase tracking-wider text-muted-foreground">
                  {t(`stats.list.${s.labelKey}`)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── ECOSYSTEM ───────────────────────── */
function Ecosystem() {
  const { t } = useLanguage();

  const nodes = [
    { icon: ScanLine, labelKey: "ecosystem.nodes.disease" },
    { icon: CloudSun, labelKey: "ecosystem.nodes.weather" },
    { icon: BarChart3, labelKey: "ecosystem.nodes.yield" },
    { icon: TrendingUp, labelKey: "ecosystem.nodes.market" },
    { icon: Bot, labelKey: "ecosystem.nodes.chat" },
    { icon: Store, labelKey: "ecosystem.nodes.buyer" },
  ];

  return (
    <section id="ecosystem" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand-blue)]">
              {t("ecosystem.title")}
            </span>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">{t("ecosystem.subtitle")}</h2>
          </div>
        </Reveal>

        <div className="relative mt-20">
          {/* core */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -m-6 rounded-full bg-gradient-brand opacity-30 blur-2xl animate-pulse-glow" />
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-brand shadow-glow-blue">
                <Logo className="h-14 w-14" />
              </div>
              <div className="mt-3 text-center text-sm font-medium">HarvestWayAI</div>
            </div>
          </div>

          {/* nodes grid */}
          <div className="relative mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {/* SVG connectors */}
            <svg
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-12 mx-auto hidden h-12 w-full max-w-5xl lg:block"
              viewBox="0 0 1000 60"
              preserveAspectRatio="none"
            >
              {[80, 250, 420, 580, 750, 920].map((x, i) => (
                <line
                  key={i}
                  x1="500"
                  y1="0"
                  x2={x}
                  y2="60"
                  stroke="url(#hwLine)"
                  strokeWidth="1.5"
                  className="animate-dash"
                />
              ))}
              <defs>
                <linearGradient id="hwLine" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#1E8E3E" />
                  <stop offset="100%" stopColor="#00C2FF" />
                </linearGradient>
              </defs>
            </svg>

            {nodes.map((n, i) => (
              <Reveal key={n.labelKey} delay={i * 80}>
                <div className="flex flex-col items-center gap-3 rounded-2xl glass p-5 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                    <n.icon className="h-5 w-5 text-[color:var(--brand-blue)]" />
                  </div>
                  <div className="text-sm font-medium">{t(n.labelKey)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PRODUCT MOCKUP ───────────────────────── */
function ProductMockup() {
  const { t } = useLanguage();

  const screens = [
    {
      titlePath: "product.screens.disease",
      icon: ScanLine,
      color: "from-emerald-500/90 to-teal-500/90",
      content: <DiseaseScreen />,
    },
    {
      titlePath: "product.screens.weather",
      icon: Sun,
      color: "from-sky-500/90 to-cyan-500/90",
      content: <WeatherScreen />,
    },
    {
      titlePath: "product.screens.chat",
      icon: MessageCircle,
      color: "from-blue-500/90 to-indigo-500/90",
      content: <ChatScreen />,
    },
    {
      titlePath: "product.screens.market",
      icon: TrendingUp,
      color: "from-amber-500/90 to-orange-500/90",
      content: <MarketScreen />,
    },
    {
      titlePath: "product.screens.crop",
      icon: Sprout,
      color: "from-lime-500/90 to-emerald-500/90",
      content: <CropScreen />,
    },
  ];

  return (
    <section id="product" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand-green)]">
              {t("product.tag")}
            </span>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">{t("product.title")}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{t("product.desc")}</p>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-wrap items-end justify-center gap-8">
          {screens.map((s, i) => (
            <Reveal key={s.titlePath} delay={i * 100}>
              <Phone label={t(s.titlePath)} Icon={s.icon}>
                {s.content}
              </Phone>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

interface PhoneProps {
  children: React.ReactNode;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}

function Phone({ children, label, Icon }: PhoneProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[520px] w-[260px] rounded-[2.5rem] border border-white/10 bg-[#0a1410] p-3 shadow-elevated">
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#0D3B24] to-[#08110c]">
          <div className="flex items-center justify-between px-4 pt-6 text-[10px] text-white/60">
            <span>9:41</span>
            <span>HarvestWayAI</span>
          </div>
          <div className="px-4 pt-4">{children}</div>
        </div>
      </div>
      <div className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
        <Icon className="h-4 w-4 text-[color:var(--brand-blue)]" />
        {label}
      </div>
    </div>
  );
}

function DiseaseScreen() {
  const { t } = useLanguage();

  return (
    <div className="space-y-3">
      <div className="rounded-xl bg-white/5 p-3">
        <div className="flex h-28 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-700 to-emerald-900">
          <Leaf className="h-10 w-10 text-emerald-200/80" />
        </div>
      </div>
      <div className="rounded-xl bg-white/5 p-3">
        <div className="text-[11px] uppercase tracking-wider text-white/50">
          {t("product.screens.diseaseContent.diagnosis")}
        </div>
        <div className="mt-1 text-sm font-semibold text-white">
          {t("product.screens.diseaseContent.lateBlight")}
        </div>
      </div>
      <div className="rounded-xl bg-emerald-500/15 p-3">
        <div className="text-[11px] uppercase tracking-wider text-emerald-300">
          {t("product.screens.diseaseContent.recommend")}
        </div>
        <div className="mt-1 text-sm font-medium text-white">
          {t("product.screens.diseaseContent.mancozeb")}
        </div>
      </div>
    </div>
  );
}

function WeatherScreen() {
  const { t } = useLanguage();

  return (
    <div className="space-y-3">
      <div className="rounded-xl bg-white/5 p-4 text-center">
        <Sun className="mx-auto h-10 w-10 text-amber-300" />
        <div className="mt-2 text-3xl font-semibold text-white">
          {t("product.screens.weatherContent.temp")}
        </div>
        <div className="text-xs text-white/60">{t("product.screens.weatherContent.desc")}</div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["mon", "tue", "wed"].map((d) => (
          <div key={d} className="rounded-lg bg-white/5 p-2 text-center text-[11px] text-white/70">
            <div>{t(`product.screens.weatherContent.${d}`)}</div>
            <div className="text-white">29°</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-sky-500/15 p-3 text-xs text-sky-100">
        {t("product.screens.weatherContent.delay")}
      </div>
    </div>
  );
}

function ChatScreen() {
  const { t } = useLanguage();

  return (
    <div className="space-y-2">
      <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-emerald-500/30 px-3 py-2 text-xs text-white">
        {t("product.screens.chatContent.q")}
      </div>
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-3 py-2 text-xs text-white/90">
        {t("product.screens.chatContent.a")}
      </div>
      <div className="ml-auto max-w-[70%] rounded-2xl rounded-tr-sm bg-emerald-500/30 px-3 py-2 text-xs text-white">
        {t("product.screens.chatContent.thanks")}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs text-white/50">
        <Bot className="h-3.5 w-3.5" /> {t("product.screens.chatContent.ask")}
      </div>
    </div>
  );
}

function MarketScreen() {
  const { t } = useLanguage();

  return (
    <div className="space-y-3">
      <div className="rounded-xl bg-white/5 p-3">
        <div className="text-[11px] uppercase tracking-wider text-white/50">
          {t("product.screens.marketContent.wheat")}
        </div>
        <div className="mt-1 flex items-end justify-between">
          <div className="text-2xl font-semibold text-white">
            {t("product.screens.marketContent.price")}
          </div>
          <div className="text-xs text-amber-300">{t("product.screens.marketContent.pct")}</div>
        </div>
        <svg viewBox="0 0 100 30" className="mt-2 h-12 w-full">
          <polyline
            fill="none"
            stroke="#F4B400"
            strokeWidth="1.5"
            points="0,22 10,18 20,20 30,14 40,16 50,10 60,12 70,7 80,9 90,5 100,3"
          />
        </svg>
      </div>
      <div className="rounded-xl bg-amber-500/15 p-3 text-xs text-amber-100">
        {t("product.screens.marketContent.window")}
      </div>
    </div>
  );
}

function CropScreen() {
  const { t } = useLanguage();

  const crops = [
    { id: "maize", s: 94 },
    { id: "soybean", s: 88 },
    { id: "cotton", s: 71 },
    { id: "sorghum", s: 64 },
  ];

  return (
    <div className="space-y-2">
      {crops.map((r) => (
        <div key={r.id} className="rounded-xl bg-white/5 p-3">
          <div className="flex items-center justify-between text-xs text-white">
            <span>{t(`product.screens.cropContent.${r.id}`)}</span>
            <span className="text-emerald-300">{t(`product.screens.cropContent.${r.id}Fit`)}</span>
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
            <div className="h-full rounded-full bg-gradient-brand" style={{ width: `${r.s}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ───────────────────────── STORIES ───────────────────────── */
function Stories() {
  const { t } = useLanguage();

  return (
    <section id="stories" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand-gold)]">
              {t("stories.tag")}
            </span>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">{t("stories.title")}</h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 100}>
              <article className="overflow-hidden rounded-2xl glass-strong">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    placeholder="blur"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-4">
                    <span className="inline-flex rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {t(`stories.list.${s.key}.yield`)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-base font-semibold">{s.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t(`stories.list.${s.key}.region`)}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    “{t(`stories.list.${s.key}.note`)}”
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── VISION ───────────────────────── */
function Vision() {
  const { t } = useLanguage();

  return (
    <section id="vision" className="relative py-32">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand-blue)]">
            {t("vision.tag")}
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
            {t("vision.title")}
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {t("vision.desc")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA ───────────────────────── */
function CTA() {
  const { t } = useLanguage();

  return (
    <section id="cta" className="relative px-6 pb-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 p-10 sm:p-16">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-primary)" }} />
        <div className="absolute inset-0 -z-10 opacity-30">
          <Image
            src={fieldAerial}
            alt="Field background"
            fill
            sizes="100vw"
            className="object-cover opacity-30 mix-blend-overlay"
            placeholder="blur"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-background/30" />
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">{t("cta.title")}</h2>
            <p className="mt-5 max-w-xl text-lg text-white/85">{t("cta.desc")}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--brand-green-dark)] transition-transform hover:-translate-y-0.5"
              >
                {t("cta.demo")}
              </a>
              <a
                href="#"
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                {t("cta.partner")}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */
function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Logo className="h-9 w-9" />
            <span className="font-display text-lg font-semibold">
              Harvest<span className="text-gradient-brand">Way</span>AI
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{t("footer.desc")}</p>
        </div>
        <FooterCol
          title={t("footer.product")}
          items={[
            t("footer.links.features"),
            t("footer.links.mobileApp"),
            t("footer.links.aiAssistant"),
            t("footer.links.marketplace"),
          ]}
        />
        <FooterCol
          title={t("footer.company")}
          items={[
            t("footer.links.about"),
            t("footer.links.vision"),
            t("footer.links.partners"),
            t("footer.links.careers"),
          ]}
        />
        <div>
          <div className="text-sm font-semibold">{t("footer.contact")}</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>hello@harvestway.ai</li>
            <li>+1 (415) 555-0140</li>
            <li className="flex items-center gap-3 pt-2">
              {["X", "in", "IG", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full glass text-xs"
                >
                  {s}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/5 px-6 pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} HarvestWayAI. All rights reserved.
      </div>
    </footer>
  );
}

interface FooterColProps {
  title: string;
  items: string[];
}

function FooterCol({ title, items }: FooterColProps) {
  return (
    <div>
      <div className="text-sm font-semibold">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="transition-colors hover:text-foreground">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
