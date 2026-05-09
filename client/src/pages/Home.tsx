/*
Contemporary Kodomo Modernism for Winters Chapel Kindergarten: warm cream/yellow, sky blue, soft green, real school photography, tactile paper-label motifs, gentle asymmetry, accessible hierarchy, and restrained parent-reassuring motion.
*/
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapView } from "@/components/Map";
import {
  Baby,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  GraduationCap,
  HeartHandshake,
  Languages,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";

type Lang = "en" | "ja" | "zh";

const realImages = {
  classPictures: "/manus-storage/20160627classpictures_54bea485.jpg",
  artProject: "/manus-storage/artprojectclassroom_4eb611c3.jpg",
  christmas: "/manus-storage/christmas01_2d68f610.jpg",
  japanFest: "/manus-storage/japanfest2005_b14ef741.jpg",
  lineup: "/manus-storage/lineupclassroom_3aa00aef.jpg",
  lunch: "/manus-storage/lunchtimeclassroom_11c17963.jpg",
  lunch2: "/manus-storage/lunchtimeclassroom2_fc6bd5c0.jpg",
  lunch3: "/manus-storage/lunchtimeclassroom3_6aa507c9.jpg",
  lunch4: "/manus-storage/lunchtimeclassroom4_ba8f19eb.jpg",
  playground: "/manus-storage/playground1_0f714785.jpeg",
  playtimeClassroom: "/manus-storage/playtimeclassroom_7e8c5b16.jpg",
  summer: "/manus-storage/summerschool2019_a8c7422c.jpg",
  teacherInside: "/manus-storage/teacher2023-9_444d1a93.jpg",
  teacherOutside: "/manus-storage/teacher2023_29f70a2e.jpg",
  exterior: "/manus-storage/wint1_d6b960d4.jpg",
  groupOutdoor: "/manus-storage/wint2_dcea68dd.jpg",
  xmasGroup: "/manus-storage/xmas_85a27b5b.jpeg",
  xmasStage: "/manus-storage/xmas2018_dfb230a0.jpg",
};

const generatedImages = {
  heroPaper: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/gC8Mw6gNLGqpSuD5hTbbMZ/wck_paper_sunrise_hero-dnYmiD8YTrsUSc6Pue9gef.webp",
  programPattern: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/gC8Mw6gNLGqpSuD5hTbbMZ/wck_program_cards_pattern-XzQARKmMsUiYeNSgV4kRWg.webp",
  eventRibbon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/gC8Mw6gNLGqpSuD5hTbbMZ/wck_event_calendar_ribbon-horQNNSZPhqsnoonaGVYy3.webp",
  trustBadge: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/gC8Mw6gNLGqpSuD5hTbbMZ/wck_language_trust_badge-cr4nQjLsuLurWf8e2UmPpg.webp",
};

const navIds = ["programs", "curriculum", "events", "quality", "classroom", "teachers", "contact"] as const;

const content = {
  en: {
    langLabel: "English",
    nav: ["Programs", "Curriculum", "Events", "Quality", "Classroom", "Teachers", "Contact"],
    eyebrow: "Sanctioned childcare in Doraville, Georgia",
    title: "WINTERS CHAPEL KINDERGARTEN & DAY CARE CENTER ウインタースチャペル幼稚園・保育園",
    subtitle: "Helps raise bilingual children in Atlanta, Ga.",
    intro: "A multicultural kindergarten and day care center where young children grow through Japanese and English language experiences, caring routines, and a safe, organized classroom environment.",
    enroll: "Enroll Now",
    call: "Call 770-394-3242",
    open: "Open Mon–Fri, 7:30 am – 6:30 pm",
    trust: ["Quality Rated certification", "Sanctioned by Georgia DECAL", "Japanese + English learning", "Diverse classrooms, caring teachers"],
    programsTitle: "Programs Offered",
    programsIntro: "Age-appropriate classes are intentionally sized so children can receive close attention, steady routines, and warm guidance.",
    contactRates: "Contact for rates",
    capacity: "Capacity",
    curriculumTitle: "Curriculum & Philosophy",
    curriculumText: "We are a multicultural kindergarten that educates children in both Japanese and English. Classes for 1- to 3-year-olds include English instruction by an American teacher and Japanese instruction by a Japanese teacher. The Pre-K class for 4-year-olds is taught entirely in English.",
    philosophyCards: [
      ["Bilingual foundation", "Children experience Japanese and English in caring classroom routines."],
      ["Creative curriculum", "Georgia Pre-K children learn through a wonderful Creative Curriculum."],
      ["Whole-child care", "Learning, play, meals, rest, and family communication are treated as one connected day."],
    ],
    eventsTitle: "Annual Events",
    eventsIntro: "The school year includes American and Japanese celebrations that help children experience community, culture, seasons, and friendship.",
    qualityTitle: "Quality & Credentials",
    qualityText: "Winters Chapel Kindergarten achieved Quality Rated certification from DECAL. Quality Rated is operated by the Georgia Department of Early Care and Learning, the state department responsible for meeting the early education and child care needs of Georgia’s children and families.",
    qualityQuote: "Through Quality Rating, we have made a commitment to achieve high standards in infant child care and preschool education.",
    classroomTitle: "Classroom & Play Spaces",
    classroomIntro: "Real photos from the center show classroom routines, art projects, lunch, group learning, and outdoor play.",
    teachersTitle: "Teachers",
    teachersIntro: "Families are welcomed by a caring multilingual team led by SHIRASAGI INTERNATIONAL CORPORATION and President Kunitoshi Arai.",
    galleryTitle: "Gallery",
    galleryIntro: "A glimpse of seasonal celebrations, Japan Fest, summer school, Christmas programs, outdoor moments, and class memories.",
    contactTitle: "Hours & Contact",
    contactIntro: "Visit or call the school office to ask about enrollment, openings, tuition, Georgia Pre-K, and after school care.",
    address: "4942 Winters Chapel Rd. Doraville, GA 30360",
    phone: "770-394-3242",
    email: "Email: Please contact the office for the current email address",
    holidays: "Holidays follow the school calendar and include major U.S. holidays, winter break, and event-specific closures.",
    footer: "SHIRASAGI INTERNATIONAL CORPORATION · President: Kunitoshi Arai",
  },
  ja: {
    langLabel: "日本語",
    nav: ["プログラム", "教育方針", "年間行事", "品質認証", "教室", "先生", "お問い合わせ"],
    eyebrow: "ジョージア州ドーラビルの認可保育施設",
    title: "ウインタースチャペル幼稚園・保育園 WINTERS CHAPEL KINDERGARTEN & DAY CARE CENTER",
    subtitle: "アトランタでバイリンガルの子どもたちを育みます。",
    intro: "日本語と英語の環境の中で、子どもたちが安心して成長できる多文化の幼稚園・保育園です。温かい保育、整った教室、日々の生活習慣を大切にしています。",
    enroll: "入園について相談する",
    call: "770-394-3242へ電話",
    open: "月〜金 7:30 am – 6:30 pm",
    trust: ["Quality Rated 認証", "Georgia DECAL 認可", "日本語＋英語の学び", "多様な教室と温かい先生"],
    programsTitle: "プログラム",
    programsIntro: "年齢に合ったクラス編成と定員で、一人ひとりに目が届く温かい保育を行います。",
    contactRates: "料金はお問い合わせください",
    capacity: "定員",
    curriculumTitle: "カリキュラム・教育方針",
    curriculumText: "当園は、日本語と英語の両方で子どもたちを育てる多文化の幼稚園です。1〜3歳児クラスでは、アメリカ人教師による英語指導と日本人教師による日本語指導を行います。4歳児のPre-Kクラスは英語で行われます。",
    philosophyCards: [
      ["バイリンガルの基礎", "日々の生活と遊びの中で日本語と英語に親しみます。"],
      ["Creative Curriculum", "Georgia Pre-KではCreative Curriculumを用いて学びます。"],
      ["子ども全体を育む保育", "学び・遊び・食事・休息・家庭との連携を大切にします。"],
    ],
    eventsTitle: "年間行事",
    eventsIntro: "アメリカと日本の行事を通して、季節、文化、友だちとのつながりを体験します。",
    qualityTitle: "品質・認証",
    qualityText: "ウインタースチャペル幼稚園は、Georgia Department of Early Care and Learning（DECAL）が運営するQuality Rated認証を取得しています。DECALはジョージア州の幼児教育と保育を担う州政府機関です。",
    qualityQuote: "Quality Ratingを通して、乳幼児保育と就学前教育における高い基準への取り組みを示しています。",
    classroomTitle: "教室・遊び場",
    classroomIntro: "実際の教室、制作活動、ランチ、集団活動、園庭での様子をご覧いただけます。",
    teachersTitle: "先生紹介",
    teachersIntro: "SHIRASAGI INTERNATIONAL CORPORATION、President Kunitoshi Araiのもと、温かい多言語チームがご家庭をお迎えします。",
    galleryTitle: "ギャラリー",
    galleryIntro: "季節の行事、Japan Fest、サマースクール、クリスマス会、園外活動、クラス写真の思い出です。",
    contactTitle: "時間・お問い合わせ",
    contactIntro: "入園、空き状況、料金、Georgia Pre-K、アフタースクールについては園までお問い合わせください。",
    address: "4942 Winters Chapel Rd. Doraville, GA 30360",
    phone: "770-394-3242",
    email: "Email: 現在のメールアドレスは園までお問い合わせください",
    holidays: "休園日は年間カレンダーに準じ、米国の主要祝日、冬休み、行事に伴う休園を含みます。",
    footer: "SHIRASAGI INTERNATIONAL CORPORATION · President: Kunitoshi Arai",
  },
  zh: {
    langLabel: "中文",
    nav: ["课程", "教育理念", "年度活动", "资质", "教室", "教师", "联系"],
    eyebrow: "佐治亚州 Doraville 的认可儿童保育中心",
    title: "WINTERS CHAPEL KINDERGARTEN & DAY CARE CENTER ウインタースチャペル幼稚園・保育園",
    subtitle: "在亚特兰大帮助孩子成长为双语儿童。",
    intro: "这是一所多文化幼儿园和日托中心，孩子们在日语与英语环境中，通过安全有序的课堂生活、温暖的照护和丰富的活动健康成长。",
    enroll: "咨询入学",
    call: "致电 770-394-3242",
    open: "周一至周五 7:30 am – 6:30 pm",
    trust: ["Quality Rated 认证", "Georgia DECAL 认可", "日语＋英语学习", "多元课堂与关爱教师"],
    programsTitle: "课程项目",
    programsIntro: "各年龄段课程设有合理班级容量，帮助孩子获得稳定作息、细致关注和温暖引导。",
    contactRates: "费用请联系咨询",
    capacity: "容量",
    curriculumTitle: "课程与教育理念",
    curriculumText: "我们是一所用日语和英语教育儿童的多文化幼儿园。1至3岁班级由美国教师进行英语教学，并由日本教师进行日语教学。4岁Pre-K班级完全以英语授课。",
    philosophyCards: [
      ["双语基础", "孩子在日常课堂生活中自然接触日语和英语。"],
      ["Creative Curriculum", "Georgia Pre-K 儿童使用 Creative Curriculum 进行学习。"],
      ["全人照护", "学习、游戏、餐食、休息和家庭沟通构成完整的一天。"],
    ],
    eventsTitle: "年度活动",
    eventsIntro: "美国与日本节日活动帮助孩子体验社区、文化、季节和友谊。",
    qualityTitle: "质量与资质",
    qualityText: "Winters Chapel Kindergarten 已获得 DECAL 的 Quality Rated 认证。Quality Rated 由 Georgia Department of Early Care and Learning 管理，该州政府部门负责佐治亚州儿童和家庭的早期教育及保育需求。",
    qualityQuote: "通过 Quality Rating，我们承诺在婴幼儿保育和学前教育中达到高标准。",
    classroomTitle: "教室与游戏空间",
    classroomIntro: "真实照片展示了中心的课堂常规、美术项目、午餐、集体学习和户外游戏。",
    teachersTitle: "教师团队",
    teachersIntro: "在 SHIRASAGI INTERNATIONAL CORPORATION 与 President Kunitoshi Arai 的带领下，温暖的多语言团队欢迎每一个家庭。",
    galleryTitle: "相册",
    galleryIntro: "这里记录了季节庆祝、Japan Fest、暑期课程、圣诞节目、户外活动和班级回忆。",
    contactTitle: "时间与联系",
    contactIntro: "欢迎致电学校办公室，咨询入学、名额、学费、Georgia Pre-K 和课后照护。",
    address: "4942 Winters Chapel Rd. Doraville, GA 30360",
    phone: "770-394-3242",
    email: "Email: 请联系办公室获取当前邮箱地址",
    holidays: "假期遵循学校日历，包括美国主要节假日、寒假及部分活动相关休园。",
    footer: "SHIRASAGI INTERNATIONAL CORPORATION · President: Kunitoshi Arai",
  },
} satisfies Record<Lang, Record<string, any>>;

const programs = [
  { icon: Baby, age: { en: "1–2 years old class", ja: "1〜2歳児クラス", zh: "1–2岁班" }, capacity: 8, note: { en: "Gentle routines, language exposure, early independence, and caring transitions.", ja: "生活リズム、言葉への親しみ、基本的な自立を温かく支えます。", zh: "温和作息、语言启蒙、早期独立能力和安心过渡。" } },
  { icon: HeartHandshake, age: { en: "2–3 years old class", ja: "2〜3歳児クラス", zh: "2–3岁班" }, capacity: 15, note: { en: "Growing social skills, stories, songs, art, and classroom participation.", ja: "友だちとの関わり、絵本、歌、制作、教室活動への参加を育みます。", zh: "发展社交能力、故事、歌曲、美术和课堂参与。" } },
  { icon: BookOpen, age: { en: "3–4 years old class", ja: "3〜4歳児クラス", zh: "3–4岁班" }, capacity: 19, note: { en: "Bilingual learning, group play, creative projects, and school readiness.", ja: "バイリンガルの学び、集団遊び、制作活動、就学前の準備を行います。", zh: "双语学习、集体游戏、创意项目和入学准备。" } },
  { icon: GraduationCap, age: { en: "Georgia Pre-Kindergarten class", ja: "Georgia Pre-Kindergarten クラス", zh: "Georgia Pre-K 幼儿班" }, capacity: 22, note: { en: "For 4–5 year olds. Tuition is free and children learn with Creative Curriculum.", ja: "4〜5歳児対象。授業料は無料で、Creative Curriculumを用いて学びます。", zh: "面向4–5岁儿童。免学费，使用 Creative Curriculum 学习。" } },
  { icon: Clock, age: { en: "After School Program", ja: "アフタースクール", zh: "课后照护" }, capacity: 22, note: { en: "Ages 5–12, 3:30 pm–6:30 pm, with care after the school day.", ja: "5〜12歳対象、3:30 pm–6:30 pm。放課後を安心して過ごせます。", zh: "面向5–12岁，3:30 pm–6:30 pm，提供课后照护。" } },
  { icon: Sparkles, age: { en: "Summer School Program", ja: "サマースクール", zh: "暑期课程" }, capacity: null, note: { en: "Seasonal activities, friendships, and continued learning during summer months.", ja: "夏の活動、友だちとの交流、継続的な学びを行います。", zh: "暑期活动、友谊和持续学习。" } },
];

const eventRows = [
  ["Sep", "レイバーデー · クラス写真撮影 · 秋まつり · Japan Fest"],
  ["Oct", "Halloween"],
  ["Nov", "Thanksgiving Party · Thanksgiving Day"],
  ["Dec", "Christmas Program · Christmas · Winter Break"],
  ["Jan", "New Year’s Day · お正月 · Dr. Martin Luther King Jr. Day"],
  ["Feb", "節分 · Valentine’s Day"],
  ["Mar", "ひな祭り · St. Patrick’s Day"],
  ["Apr", "Class Photos · Easter"],
  ["May", "こどもの日 · Class Observation · Memorial Day · Graduation"],
  ["Jun", "Summer School"],
  ["Jul", "Independence Day · 七夕祭り · Summer School"],
  ["Aug", "Summer School · すいか割り大会"],
];

const classroomPhotos = [
  [realImages.playtimeClassroom, "Playtime classroom and group learning"],
  [realImages.artProject, "Art project and creative expression"],
  [realImages.lunch2, "Lunchtime classroom routine"],
  [realImages.playground, "Outdoor playground and active play"],
];

const galleryPhotos = [
  [realImages.japanFest, "Japan Fest"],
  [realImages.christmas, "Christmas class celebration"],
  [realImages.xmasStage, "Christmas program"],
  [realImages.summer, "Summer school"],
  [realImages.groupOutdoor, "Outdoor group memory"],
  [realImages.classPictures, "Class picture memories"],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ReadableText({ text }: { text: string }) {
  const parts = text.split("&");
  return (
    <>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {part}
          {index < parts.length - 1 ? <span className="readable-ampersand" aria-label="and">&amp;</span> : null}
        </span>
      ))}
    </>
  );
}

function SchoolMap() {
  return (
    <MapView
      className="h-[360px] overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl"
      initialCenter={{ lat: 33.8909, lng: -84.2698 }}
      initialZoom={15}
      onMapReady={(map) => {
        const address = "4942 Winters Chapel Rd, Doraville, GA 30360";
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
          if (status === "OK" && results?.[0]?.geometry?.location) {
            map.setCenter(results[0].geometry.location);
            new window.google.maps.marker.AdvancedMarkerElement({
              map,
              position: results[0].geometry.location,
              title: "Winters Chapel Kindergarten & Day Care Center",
            });
          }
        });
      }}
    />
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];
  const structuredAddress = useMemo(() => t.address, [t.address]);

  return (
    <div className="min-h-screen bg-[#fff9ea] text-[#243129] antialiased">
      <header className="sticky top-0 z-50 border-b border-[#d7eec9]/80 bg-[#fff9ea]/90 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-3">
          <button onClick={() => scrollToId("home")} className="group flex items-center gap-3 text-left" aria-label="Go to home section">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8ca55] text-[#243129] shadow-[0_8px_0_#dbf0ff] transition group-hover:-translate-y-0.5">
              <Languages aria-hidden="true" />
            </span>
            <span>
              <span className="block max-w-[12rem] text-wrap font-display text-sm font-black leading-tight sm:max-w-none sm:text-lg">Winters Chapel ウインタースチャペル</span>
              <span className="block max-w-[12rem] text-wrap text-[0.62rem] font-bold uppercase leading-snug tracking-[0.12em] text-[#51725b] sm:max-w-none sm:text-xs sm:tracking-[0.22em]">Kindergarten <span className="readable-ampersand" aria-label="and">&amp;</span> Day Care 幼稚園・保育園</span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 2xl:flex" aria-label="Primary navigation">
            {navIds.map((id, index) => (
              <button key={id} onClick={() => scrollToId(id)} className="rounded-full px-4 py-2 text-sm font-bold text-[#405347] transition hover:bg-white hover:text-[#0d5b75] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d5b75]">
                {t.nav[index]}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-2 2xl:flex" aria-label="Language selector">
            {(["en", "ja", "zh"] as Lang[]).map((code) => (
              <button key={code} onClick={() => setLang(code)} className={`rounded-full border px-3 py-2 text-sm font-black transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d5b75] ${lang === code ? "border-[#0d5b75] bg-[#0d5b75] text-white shadow-lg" : "border-[#c6ddb9] bg-white text-[#405347] hover:border-[#0d5b75]"}`} aria-pressed={lang === code}>
                {content[code].langLabel}
              </button>
            ))}
          </div>

          <button className="rounded-full bg-white p-3 shadow-md 2xl:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Open navigation menu" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#d7eec9] bg-[#fff9ea] p-4 2xl:hidden">
            <div className="grid gap-2">
              {navIds.map((id, index) => (
                <button key={id} onClick={() => { scrollToId(id); setMenuOpen(false); }} className="rounded-2xl bg-white px-4 py-3 text-left font-bold shadow-sm">
                  {t.nav[index]}
                </button>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              {(["en", "ja", "zh"] as Lang[]).map((code) => (
                <button key={code} onClick={() => setLang(code)} className={`flex-1 rounded-full border px-3 py-2 text-sm font-black ${lang === code ? "border-[#0d5b75] bg-[#0d5b75] text-white" : "border-[#c6ddb9] bg-white text-[#405347]"}`}>
                  {content[code].langLabel}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative isolate overflow-hidden bg-[#fff9ea] py-12 md:py-20">
          <img src={generatedImages.heroPaper} alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70" />
          <div className="container grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full border border-[#c6ddb9] bg-white/80 px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-[#51725b] shadow-sm">{t.eyebrow}</p>
              <h1 className="text-balance break-words font-display text-3xl font-black leading-[1.06] tracking-[-0.035em] text-[#243129] sm:text-4xl md:text-6xl lg:text-7xl"><ReadableText text={t.title} /></h1>
              <p className="mt-5 font-display text-2xl font-bold text-[#0d5b75] md:text-3xl">{t.subtitle}</p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#405347]">{t.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" onClick={() => scrollToId("contact")} className="rounded-full bg-[#0d5b75] px-7 py-6 text-base font-black text-white shadow-xl shadow-[#0d5b75]/20 hover:bg-[#09495e]">
                  {t.enroll}
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full border-2 border-[#f8ca55] bg-white px-7 py-6 text-base font-black text-[#243129] hover:bg-[#fff0bd]">
                  <a href="tel:7703943242"><Phone className="mr-2 h-5 w-5" />{t.call}</a>
                </Button>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {t.trust.map((item: string) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/85 p-3 text-sm font-bold text-[#405347] shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#58895f]" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl pb-14 lg:max-w-none lg:pb-24">
              <div className="absolute -left-4 top-8 z-10 rounded-3xl bg-[#f8ca55] px-5 py-4 font-black text-[#243129] shadow-[0_12px_0_#d9efcb] md:-left-8">{t.open}</div>
              <img src={realImages.exterior} alt="Winters Chapel Kindergarten building exterior" className="aspect-[4/3] w-full rounded-[2.4rem] border-8 border-white object-cover shadow-2xl" />
              <div className="absolute -bottom-8 right-0 w-56 rounded-[2rem] border-8 border-white bg-white p-2 shadow-2xl sm:-right-3 md:-bottom-16 md:-right-6 md:w-72 lg:-bottom-20 lg:-right-8">
                <img src={realImages.artProject} alt="Children participating in a classroom art project" className="aspect-[4/3] rounded-[1.4rem] object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="relative overflow-hidden py-20">
          <img src={generatedImages.programPattern} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="container relative">
            <div className="mb-10 max-w-3xl">
              <p className="section-kicker">01 · {t.nav[0]}</p>
              <h2 className="section-title">{t.programsTitle}</h2>
              <p className="section-copy">{t.programsIntro}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {programs.map((program) => {
                const Icon = program.icon;
                return (
                  <Card key={program.age.en} className="group overflow-hidden rounded-[2rem] border-0 bg-white/90 shadow-xl shadow-[#58725f]/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#dff1ff] text-[#0d5b75] shadow-[0_6px_0_#fff0bd]">
                          <Icon aria-hidden="true" />
                        </div>
                        <div className="rounded-full bg-[#f8ca55]/25 px-4 py-2 text-sm font-black text-[#70591b]">
                          {program.capacity ? `${t.capacity}: ${program.capacity}` : t.contactRates}
                        </div>
                      </div>
                      <h3 className="mt-6 font-display text-2xl font-black text-[#243129]">{program.age[lang]}</h3>
                      <p className="mt-3 leading-7 text-[#526458]">{program.note[lang]}</p>
                      <p className="mt-5 inline-flex rounded-full bg-[#e8f5df] px-4 py-2 text-sm font-bold text-[#51725b]">{t.contactRates}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="curriculum" className="py-20">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative">
              <img src={realImages.lunch4} alt="Children learning together in a bright classroom" className="aspect-[4/5] w-full rounded-[2.5rem] border-8 border-white object-cover shadow-2xl" />
              <div className="absolute -bottom-6 -right-4 rounded-3xl bg-white p-5 shadow-xl md:-right-10">
                <Languages className="mb-2 h-8 w-8 text-[#0d5b75]" aria-hidden="true" />
                <p className="font-black text-[#243129]">Japanese + English</p>
              </div>
            </div>
            <div>
              <p className="section-kicker">02 · {t.nav[1]}</p>
              <h2 className="section-title"><ReadableText text={t.curriculumTitle} /></h2>
              <p className="section-copy">{t.curriculumText}</p>
              <div className="mt-8 grid gap-4">
                {t.philosophyCards.map((card: string[]) => {
                  const [title, body] = card;
                  return (
                    <div key={title} className="rounded-[1.8rem] border border-[#d7eec9] bg-white p-5 shadow-sm">
                      <h3 className="font-display text-xl font-black text-[#0d5b75]">{title}</h3>
                      <p className="mt-2 leading-7 text-[#526458]">{body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="overflow-hidden bg-[#eef8ff] py-20">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="section-kicker">03 · {t.nav[2]}</p>
                <h2 className="section-title">{t.eventsTitle}</h2>
                <p className="section-copy">{t.eventsIntro}</p>
              </div>
              <img src={generatedImages.eventRibbon} alt="Decorative seasonal calendar ribbon" className="rounded-[2rem] shadow-xl" />
            </div>
            <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {eventRows.map(([month, items]) => (
                <div key={month} className="flex gap-4 rounded-[1.6rem] bg-white p-4 shadow-sm">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f8ca55] font-display text-lg font-black text-[#243129]">{month}</div>
                  <p className="leading-7 text-[#405347]">{items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="quality" className="py-20">
          <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="section-kicker">04 · {t.nav[3]}</p>
              <h2 className="section-title"><ReadableText text={t.qualityTitle} /></h2>
              <p className="section-copy">{t.qualityText}</p>
              <blockquote className="mt-8 rounded-[2rem] border-l-8 border-[#f8ca55] bg-white p-6 font-display text-2xl font-bold leading-snug text-[#243129] shadow-xl">
                “{t.qualityQuote}”
              </blockquote>
            </div>
            <div className="relative mx-auto max-w-md">
              <img src={generatedImages.trustBadge} alt="Abstract multilingual quality and safety badge" className="rounded-[2.2rem] shadow-2xl" />
              <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-3xl bg-[#0d5b75] p-5 text-center text-white shadow-xl">
                <ShieldCheck className="mx-auto mb-2 h-8 w-8" aria-hidden="true" />
                <p className="font-black">Georgia Department of Early Care and Learning</p>
              </div>
            </div>
          </div>
        </section>

        <section id="classroom" className="bg-[#fff4c8] py-20">
          <div className="container">
            <div className="mb-10 max-w-3xl">
              <p className="section-kicker">05 · {t.nav[4]}</p>
              <h2 className="section-title"><ReadableText text={t.classroomTitle} /></h2>
              <p className="section-copy">{t.classroomIntro}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {classroomPhotos.map(([src, alt], index) => (
                <figure key={src} className={`group rounded-[2rem] bg-white p-3 shadow-xl transition hover:-translate-y-1 ${index % 2 ? "lg:mt-12" : ""}`}>
                  <img src={src} alt={alt} className="aspect-[4/5] w-full rounded-[1.4rem] object-cover" />
                  <figcaption className="px-2 py-4 text-sm font-bold text-[#405347]">{alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="teachers" className="py-20">
          <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="section-kicker">06 · {t.nav[5]}</p>
              <h2 className="section-title">{t.teachersTitle}</h2>
              <p className="section-copy">{t.teachersIntro}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] bg-white p-5 shadow-lg">
                  <Users className="mb-3 h-8 w-8 text-[#58895f]" aria-hidden="true" />
                  <p className="font-black text-[#243129]">President</p>
                  <p className="mt-1 text-[#526458]">Kunitoshi Arai</p>
                </div>
                <div className="rounded-[2rem] bg-white p-5 shadow-lg">
                  <HeartHandshake className="mb-3 h-8 w-8 text-[#0d5b75]" aria-hidden="true" />
                  <p className="font-black text-[#243129]">SHIRASAGI INTERNATIONAL CORPORATION</p>
                  <p className="mt-1 text-[#526458]">Professional childcare leadership</p>
                </div>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <img src={realImages.teacherInside} alt="Winters Chapel Kindergarten teachers indoors" className="rounded-[2.2rem] border-8 border-white object-cover shadow-2xl sm:mt-16" />
              <img src={realImages.teacherOutside} alt="Winters Chapel Kindergarten teachers outdoors" className="rounded-[2.2rem] border-8 border-white object-cover shadow-2xl" />
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-[#e8f5df] py-20">
          <div className="container">
            <div className="mb-10 max-w-3xl">
              <p className="section-kicker">07 · Gallery</p>
              <h2 className="section-title">{t.galleryTitle}</h2>
              <p className="section-copy">{t.galleryIntro}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {galleryPhotos.map(([src, alt], index) => (
                <figure key={src} className={`overflow-hidden rounded-[2rem] bg-white shadow-xl ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                  <img src={src} alt={alt} className="h-full min-h-64 w-full object-cover transition duration-500 hover:scale-105" />
                  <figcaption className="sr-only">{alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="section-kicker">08 · {t.nav[6]}</p>
              <h2 className="section-title"><ReadableText text={t.contactTitle} /></h2>
              <p className="section-copy">{t.contactIntro}</p>
              <div className="mt-8 grid gap-4">
                <a href="https://www.google.com/maps/search/?api=1&query=4942%20Winters%20Chapel%20Rd%20Doraville%20GA%2030360" className="contact-card" target="_blank" rel="noreferrer">
                  <MapPin aria-hidden="true" />
                  <span>{structuredAddress}</span>
                </a>
                <a href="tel:7703943242" className="contact-card">
                  <Phone aria-hidden="true" />
                  <span>{t.phone}</span>
                </a>
                <div className="contact-card">
                  <Clock aria-hidden="true" />
                  <span>{t.open}</span>
                </div>
                <div className="contact-card">
                  <CalendarDays aria-hidden="true" />
                  <span>{t.holidays}</span>
                </div>
                <div className="contact-card">
                  <BookOpen aria-hidden="true" />
                  <span>{t.email}</span>
                </div>
              </div>
            </div>
            <div>
              <SchoolMap />
              <div className="mt-5 rounded-[2rem] bg-white p-5 text-sm leading-7 text-[#526458] shadow-lg">
                <strong className="text-[#243129]"><ReadableText text="Winters Chapel Kindergarten & Day Care Center" /></strong><br />
                {t.footer}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d7eec9] bg-[#243129] py-10 text-white">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl font-black"><ReadableText text="Winters Chapel Kindergarten & Day Care Center" /></p>
            <p className="mt-2 text-white/75">{t.address} · {t.phone}</p>
          </div>
          <p className="text-sm text-white/70">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
