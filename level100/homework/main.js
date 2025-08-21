import React from "react";
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Newspaper, Home as HomeIcon, Info, ArrowLeft, Calendar, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const CATEGORIES = [
  { id: "politics", name: "პოლიტიკა" },
  { id: "economy", name: "ეკონომიკა" },
  { id: "society", name: "საზოგადოება" },
  { id: "sport", name: "სპორტი" },
  { id: "tech", name: "ტექნოლოგიები" },
  { id: "culture", name: "კულტურა" },
];

const ARTICLES = [
  {
    slug: "tbilisi-transport-reform",
    title: "თბილისში საზოგადოებრივი ტრანსპორტის რეფორმა იწყება",
    date: "2025-08-19",
    category: "society",
    excerpt: "მერია აცხადებს, რომ ახალი ავტობუსების მარშრუტები და ინტეგრირებული ბილეთის სისტემა ეტაპობრივად ამოქმედდება.",
    content: "თბილისის მერიის ინფორმაციით, მომდევნო თვეებში იგეგმება ავტობუსების პარკის განახლება, მარშრუტების გადამუშავება და ინტეგრირებული ბილეთის სისტემის ამოქმედება. პროექტი მიზნად ისახავს მგზავრობის დროის შემცირებას და ჰაერის ხარისხის გაუმჯობესებას.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "georgian-startup-funding",
    title: "ქართული სტარტაპი 5 მილიონი დოლარის ინვესტიციას იზიდავს",
    date: "2025-08-18",
    category: "tech",
    excerpt: "ფინტექ სტარტაპმა საერთაშორისო ვენჩურული ფონდისგან Series A რაუნდი დააფიქსირა.",
    content: "ფინტექ მიმართულების ქართულმა სტარტაპმა წარმატებით დახურა Series A საინვესტიციო რაუნდი. კომპანიამ აღნიშნა, რომ ახალი კაპიტალი განვითრებისა და საგარეო ბაზრებზე გასვლისთვის იქნება გამოყენებული.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "national-team-win",
    title: "საქართველოს ნაკრებმა მნიშვნელოვანი გამარჯვება მოიპოვა",
    date: "2025-08-17",
    category: "sport",
    excerpt: "ფეხბურთელებმა სტუმრად 2:1 გაიმარჯვეს და სატურნირო ცხრილში დაწინაურდნენ.",
    content: "მატჩის 78-ე წუთზე გატანილი გოლი გადამწყვეტი აღმოჩნდა. მთავარი მწვრთნელის თქმით, გუნდი მომდევნო შეხვედრას ოპტიმისტურად ხვდება.",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "inflation-slows",
    title: "ინფლაციის ტემპი მცირდება — სტატისტიკის ეროვნული სამსახური",
    date: "2025-08-15",
    category: "economy",
    excerpt: "ივლისთან შედარებით, წლიური ინფლაციის მაჩვენებელი შემცირდა და მიზნობრივ დიაპაზონშია.",
    content: "საქსტატის ანგარიშის მიხედვით, საკვები პროდუქტებისა და საწვავის ფასების შემცირებამ საერთო ინფლაციაზე დადებითი გავლენა მოახდინა.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "opera-festival",
    title: "თბილისის ოპერის ფესტივალი იწყება",
    date: "2025-08-14",
    category: "culture",
    excerpt: "ფესტივალი მოიცავს საერთაშორისო არტისტებსა და სპეციალურ წარმოდგენებს ღია ცის ქვეშ.",
    content: "ორღძისა და თანამედროვე ოპერის წარმოდგენები, მასტერკლასები და ლექციები — ორგანიზატორები მრავალფეროვან პროგრამას ჰპირდებიან მაყურებელს.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "parliament-session",
    title: "პარლამენტში საგაზაფხულო სესია დაიხურა",
    date: "2025-08-12",
    category: "politics",
    excerpt: "დეპუტატებმა რამდენიმე საკანონმდებლო ინიციატივა დაამტკიცეს, დიალოგი გაგრძელდება შემოდგომაზე.",
    content: "დასკვნით სხდომაზე განხილული იყო ბიუჯეტთან დაკავშირებული ცვლილებები და ადმინისტრაციული რეფორმები.",
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=1600&auto=format&fit=crop",
  },
];

const formatDate = (iso) => new Date(iso).toLocaleDateString("ka-GE", { year: "numeric", month: "long", day: "numeric" });

const useQuery = () => new URLSearchParams(useLocation().search);

function Shell({ children }) {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 group">
            <Newspaper className="w-6 h-6" />
            <span className="font-bold text-xl group-hover:opacity-80 transition">ახალი ამბები</span>
          </Link>
          <nav className="ml-auto hidden md:flex items-center gap-4">
            {CATEGORIES.map((c) => (
              <Link key={c.id} to={`/კატეგორია/${c.id}`} className={`px-3 py-1 rounded-full text-sm hover:bg-slate-100 ${location.pathname.includes(c.id) ? "bg-slate-900 text-white" : ""}`}>
                {c.name}
              </Link>
            ))}
            <Link to="/ჩვენსშესახებ" className="px-3 py-1 text-sm hover:underline flex items-center gap-2">
              <Info className="w-4 h-4"/> ჩვენს შესახებ
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        {children}
      </main>

      <footer className="border-t py-8 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Georgian News • ყველა უფლება დაცულია</p>
          <div className="flex items-center gap-4">
            <Link className="hover:underline" to="/კონტაქტი">კონტაქტი</Link>
            <Link className="hover:underline" to="/დახმარება">დახმარება</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SearchBar() {
  const navigate = useNavigate();
  const [q, setQ] = React.useState("");
  return (
    <div className="flex items-center gap-2 w-full">
      <Input
        placeholder="ძებნა სტატიებში…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && navigate(`/ძიება?q=${encodeURIComponent(q)}`)}
        className="h-11"
      />
      <Button onClick={() => navigate(`/ძიება?q=${encodeURIComponent(q)}`)} className="h-11">
        <Search className="w-4 h-4 mr-2"/> მოძებნა
      </Button>
    </div>
  );
}

function ArticleCard({ a }) {
  return (
    <motion.div layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <Card className="overflow-hidden shadow-sm hover:shadow-md transition">
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img src={a.image} alt={a.title} className="w-full h-full object-cover"/>
        </div>
        <CardHeader>
          <CardTitle className="text-lg leading-snug">
            <Link to={`/სტატია/${a.slug}`} className="hover:underline">{a.title}</Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600 space-y-2">
          <p className="line-clamp-2">{a.excerpt}</p>
          <div className="flex items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3"/> {formatDate(a.date)}</span>
            <span className="inline-flex items-center gap-1"><Tag className="w-3 h-3"/> {CATEGORIES.find(c=>c.id===a.category)?.name}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Link to={`/სტატია/${a.slug}`} className="text-sm hover:underline">წაიკითხე სრულად →</Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

function Home() {
  const latest = [...ARTICLES].sort((a,b)=>b.date.localeCompare(a.date));
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <HomeIcon className="w-6 h-6"/>
        <h1 className="text-2xl font-bold">მთავარი გვერდი</h1>
      </div>
      <SearchBar />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {latest.map((a) => (
            <ArticleCard key={a.slug} a={a} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Category() {
  const { id } = useParams();
  const filtered = ARTICLES.filter((a) => a.category === id);
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Tag className="w-5 h-5"/>
        <h1 className="text-2xl font-bold">{CATEGORIES.find((c)=>c.id===id)?.name}</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((a) => (
          <ArticleCard key={a.slug} a={a} />
        ))}
      </div>
    </div>
  );
}

function Article() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const a = ARTICLES.find((x) => x.slug === slug);
  if (!a) return <p>სტატია ვერ მოიძებნა</p>;
  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={() => navigate(-1)} className="flex items-center gap-2">
        <ArrowLeft className="w-4 h-4"/> უკან დაბრუნება
      </Button>
      <h1 className="text-3xl font-bold leading-snug">{a.title}</h1>
      <div className="flex items-center gap-4 text-sm text-slate-600">
        <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4"/> {formatDate(a.date)}</span>
        <span className="inline-flex items-center gap-1"><Tag className="w-4 h-4"/> {CATEGORIES.find(c=>c.id===a.category)?.name}</span>
      </div>
      <img src={a.image} alt={a.title} className="w-full rounded-xl"/>
      <p className="text-lg leading-relaxed">{a.content}</p>
    </div>
  );
}

function SearchResults() {
  const q = useQuery().get("q")?.toLowerCase() || "";
  const results = ARTICLES.filter((a) => a.title.toLowerCase().includes(q) || a.content.toLowerCase().includes(q));
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">ძებნის შედეგები: {q}</h1>
      {results.length === 0 ? <p>არაფერი მოიძებნა</p> : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((a) => <ArticleCard key={a.slug} a={a}/>) }
        </div>
      )}
    </div>
  );
}

function About() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-2xl font-bold mb-4">ჩვენს შესახებ</h1>
      <p>ეს არის დემო ვერსია ქართული სიახლეების ვებ-აპლიკაციისთვის, რომელიც შექმნილია React Router-ით.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/კატეგორია/:id" element={<Category/>}/>
          <Route path="/სტატია/:slug" element={<Article/>}/>
          <Route path="/ძიება" element={<SearchResults/>}/>
          <Route path="/ჩვენსშესახებ" element={<About/>}/>
        </Routes>
      </Shell>
    </BrowserRouter>
  );
}