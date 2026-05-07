import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft, MessageSquare, Star, ShieldCheck, Fuel, Snowflake, Sun, Cloud, Filter } from "lucide-react";

interface Tyre {
  id: number;
  brand: string;
  model: string;
  price: number;
  currency: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  category: "summer" | "winter" | "all-season";
  tags: string[];
  rating: number;
  vehicle: string;
  specs: { label: string; value: string }[];
}

const tyres: Tyre[] = [
  {
    id: 1,
    brand: "Continental",
    model: "EcoContact 6",
    price: 79.99,
    currency: "£",
    shortDesc: "Fuel-efficient summer tyre designed for long-lasting performance.",
    longDesc:
      "The Continental EcoContact 6 offers advanced fuel efficiency and precision handling. Its unique rubber compound ensures extended tread life and excellent grip on dry and wet roads. Ideal for compact and mid-sized vehicles.",
    image: "/tyre-continental-ecocontact6.png",
    category: "summer",
    tags: ["Fuel Efficient", "Low Noise", "Long Life"],
    rating: 4.7,
    vehicle: "Car / Compact",
    specs: [
      { label: "Season", value: "Summer" },
      { label: "Fuel Efficiency", value: "A" },
      { label: "Wet Grip", value: "B" },
      { label: "Noise", value: "68 dB" },
    ],
  },
  {
    id: 2,
    brand: "Michelin",
    model: "Pilot Sport 4",
    price: 119.99,
    currency: "£",
    shortDesc: "High-performance tyre for sports cars and sedans.",
    longDesc:
      "The Michelin Pilot Sport 4 delivers outstanding steering precision and control at high speeds. It adapts continuously to the road for optimum grip and enhanced braking, especially in wet conditions. Perfect for sporty drivers who demand performance and safety.",
    image: "/tyre-michelin-pilotsp4.png",
    category: "summer",
    tags: ["High Performance", "Wet Grip", "Sports"],
    rating: 4.9,
    vehicle: "Sports / Sedan",
    specs: [
      { label: "Season", value: "Summer" },
      { label: "Fuel Efficiency", value: "B" },
      { label: "Wet Grip", value: "A" },
      { label: "Noise", value: "71 dB" },
    ],
  },
  {
    id: 3,
    brand: "Pirelli",
    model: "Scorpion Verde All Season",
    price: 105.50,
    currency: "£",
    shortDesc: "Versatile tyre for SUVs offering eco-friendliness and performance.",
    longDesc:
      "Designed for modern SUVs, the Scorpion Verde All Season combines comfort, fuel efficiency, and reduced road noise. It's ideal for year-round driving without compromising on safety or handling on wet or dry surfaces.",
    image: "/tyre-pirelli-scorpion.png",
    category: "all-season",
    tags: ["All Season", "SUV", "Eco Friendly"],
    rating: 4.6,
    vehicle: "SUV / Crossover",
    specs: [
      { label: "Season", value: "All Season" },
      { label: "Fuel Efficiency", value: "B" },
      { label: "Wet Grip", value: "B" },
      { label: "Noise", value: "70 dB" },
    ],
  },
  {
    id: 4,
    brand: "Goodyear",
    model: "UltraGrip Performance+",
    price: 92.00,
    currency: "£",
    shortDesc: "Reliable winter tyre with enhanced snow traction.",
    longDesc:
      "The Goodyear UltraGrip Performance+ features improved braking distance and grip in icy and snowy conditions. It uses advanced tread technology to provide confidence and safety in extreme winter weather. Recommended for cold climates and seasonal changes.",
    image: "/tyre-goodyear-ultragrip.png",
    category: "winter",
    tags: ["Winter", "Snow Grip", "Ice Braking"],
    rating: 4.8,
    vehicle: "Car / Estate",
    specs: [
      { label: "Season", value: "Winter" },
      { label: "Fuel Efficiency", value: "C" },
      { label: "Wet Grip", value: "A" },
      { label: "Noise", value: "69 dB" },
    ],
  },
  {
    id: 5,
    brand: "Bridgestone",
    model: "Turanza T005",
    price: 87.50,
    currency: "£",
    shortDesc: "Premium touring tyre delivering comfort and confident wet braking.",
    longDesc:
      "The Bridgestone Turanza T005 is engineered for drivers who value a smooth, quiet ride without compromising on safety. Its Enliten technology reduces rolling resistance while the Advanced Tread Compound provides exceptional wet braking performance. Ideal for touring and everyday driving across European roads.",
    image: "/tyre-bridgestone-turanza.png",
    category: "summer",
    tags: ["Touring", "Quiet Ride", "Wet Braking"],
    rating: 4.6,
    vehicle: "Car / Touring",
    specs: [
      { label: "Season", value: "Summer" },
      { label: "Fuel Efficiency", value: "A" },
      { label: "Wet Grip", value: "A" },
      { label: "Noise", value: "67 dB" },
    ],
  },
  {
    id: 6,
    brand: "Dunlop",
    model: "Sport BluResponse",
    price: 74.99,
    currency: "£",
    shortDesc: "Sporty summer tyre with excellent wet handling and low rolling resistance.",
    longDesc:
      "The Dunlop Sport BluResponse combines sporty performance with eco-conscious engineering. Its Multi-Radius Profile ensures even contact with the road for predictable handling, while the advanced tread compound delivers reliable stopping power in wet conditions. Great value for performance-focused drivers.",
    image: "/tyre-dunlop-bluresponse.png",
    category: "summer",
    tags: ["Budget Friendly", "Sporty", "Eco"],
    rating: 4.4,
    vehicle: "Car / Hatchback",
    specs: [
      { label: "Season", value: "Summer" },
      { label: "Fuel Efficiency", value: "B" },
      { label: "Wet Grip", value: "A" },
      { label: "Noise", value: "70 dB" },
    ],
  },
  {
    id: 7,
    brand: "Nokian",
    model: "Hakkapeliitta 10",
    price: 134.00,
    currency: "£",
    shortDesc: "World-class studded winter tyre built for extreme Nordic conditions.",
    longDesc:
      "The Nokian Hakkapeliitta 10 is the pinnacle of winter tyre engineering, developed and tested in Finland's harshest conditions. Its grip studs provide unmatched traction on black ice and hard-packed snow. The eco-friendly rubber compound maintains flexibility in temperatures as low as -40°C, making it the top choice for drivers in Finland, Scandinavia, and northern Europe.",
    image: "/tyre-nokian-hakka.png",
    category: "winter",
    tags: ["Studded", "Nordic", "Extreme Winter"],
    rating: 5.0,
    vehicle: "Car / SUV",
    specs: [
      { label: "Season", value: "Winter (Studded)" },
      { label: "Fuel Efficiency", value: "E" },
      { label: "Wet Grip", value: "B" },
      { label: "Noise", value: "73 dB" },
    ],
  },
  {
    id: 8,
    brand: "Yokohama",
    model: "BluEarth-ES ES32",
    price: 68.00,
    currency: "£",
    shortDesc: "Eco-friendly summer tyre with low rolling resistance and reliable grip.",
    longDesc:
      "The Yokohama BluEarth-ES ES32 is designed for environmentally conscious drivers seeking fuel savings without sacrificing safety. Its silica-rich compound provides excellent grip on wet surfaces and reduces CO2 emissions. A smart choice for compact cars and city driving across the UK and Europe.",
    image: "/tyre-yokohama-bluearth.png",
    category: "summer",
    tags: ["Eco", "City Driving", "Low Emissions"],
    rating: 4.3,
    vehicle: "Car / City",
    specs: [
      { label: "Season", value: "Summer" },
      { label: "Fuel Efficiency", value: "A" },
      { label: "Wet Grip", value: "B" },
      { label: "Noise", value: "66 dB" },
    ],
  },
];

const categoryIcons = {
  summer: <Sun className="w-4 h-4" />,
  winter: <Snowflake className="w-4 h-4" />,
  "all-season": <Cloud className="w-4 h-4" />,
};

const categoryLabels = {
  summer: "Summer",
  winter: "Winter",
  "all-season": "All Season",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3.5 h-3.5 ${s <= Math.round(rating) ? "fill-primary text-primary" : "text-muted-foreground"}`}
        />
      ))}
      <span className="text-xs text-muted-foreground ml-1">{rating.toFixed(1)}</span>
    </span>
  );
}

function TyreCard({ tyre, onClick }: { tyre: Tyre; onClick: () => void }) {
  return (
    <motion.article
      variants={fadeUp}
      layout
      className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/60 transition-colors duration-300 flex flex-col cursor-pointer"
      onClick={onClick}
      itemScope
      itemType="https://schema.org/Product"
      aria-label={`${tyre.brand} ${tyre.model} — ${tyre.currency}${tyre.price}`}
    >
      <div className="relative overflow-hidden bg-background">
        <img
          src={tyre.image}
          alt={`${tyre.brand} ${tyre.model} — ${categoryLabels[tyre.category]} tyre, ${tyre.vehicle}`}
          className="w-full aspect-square object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width="400"
          height="400"
          itemProp="image"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
              tyre.category === "winter"
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : tyre.category === "all-season"
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-primary/20 text-primary border border-primary/30"
            }`}
          >
            {categoryIcons[tyre.category]}
            {categoryLabels[tyre.category]}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1" itemProp="brand">
          {tyre.brand}
        </p>
        <h3 className="text-lg font-black mb-1 group-hover:text-primary transition-colors" itemProp="name">
          {tyre.model}
        </h3>
        <StarRating rating={tyre.rating} />
        <p className="text-sm text-muted-foreground mt-3 mb-4 leading-relaxed flex-1" itemProp="description">
          {tyre.shortDesc}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tyre.tags.map((tag) => (
            <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full border border-border">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <p className="text-2xl font-black text-primary" itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <span itemProp="priceCurrency" content="GBP" />
            <span itemProp="price" content={tyre.price.toString()}>
              {tyre.currency}{tyre.price.toFixed(2)}
            </span>
          </p>
          <a
            href={`https://wa.me/447350329728?text=Hi%20GoMach%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(tyre.brand + " " + tyre.model)}%20tyre.%20Could%20you%20provide%20more%20details%3F`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
            aria-label={`Enquire about ${tyre.brand} ${tyre.model} on WhatsApp`}
          >
            <MessageSquare className="w-4 h-4" />
            Enquire
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function TyreModal({ tyre, onClose }: { tyre: Tyre; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${tyre.brand} ${tyre.model} details`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="bg-card border border-border rounded-2xl max-w-2xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2">
          <div className="bg-background flex items-center justify-center p-8">
            <img
              src={tyre.image}
              alt={`${tyre.brand} ${tyre.model} — detailed view`}
              className="w-full max-w-[220px] aspect-square object-contain"
              width="400"
              height="400"
            />
          </div>
          <div className="p-6 flex flex-col">
            <button
              onClick={onClose}
              className="self-end text-muted-foreground hover:text-foreground mb-4 text-sm"
              aria-label="Close product details"
            >
              ✕ Close
            </button>
            <span
              className={`self-start inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold mb-3 ${
                tyre.category === "winter"
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  : tyre.category === "all-season"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-primary/20 text-primary border border-primary/30"
              }`}
            >
              {categoryIcons[tyre.category]}
              {categoryLabels[tyre.category]}
            </span>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">{tyre.brand}</p>
            <h2 className="text-2xl font-black mb-2">{tyre.model}</h2>
            <StarRating rating={tyre.rating} />
            <p className="text-sm text-muted-foreground mt-4 mb-4 leading-relaxed">{tyre.longDesc}</p>

            <div className="grid grid-cols-2 gap-2 mb-5">
              {tyre.specs.map((s) => (
                <div key={s.label} className="bg-background rounded-lg p-2.5 border border-border">
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="text-sm font-bold">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {tyre.tags.map((tag) => (
                <span key={tag} className="text-xs bg-muted px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between">
              <p className="text-3xl font-black text-primary">
                {tyre.currency}{tyre.price.toFixed(2)}
              </p>
              <a
                href={`https://wa.me/447350329728?text=Hi%20GoMach%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(tyre.brand + " " + tyre.model)}%20tyre.%20Could%20you%20provide%20more%20details%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Catalogue() {
  const [filter, setFilter] = useState<"all" | "summer" | "winter" | "all-season">("all");
  const [selected, setSelected] = useState<Tyre | null>(null);
  const [sort, setSort] = useState<"default" | "price-asc" | "price-desc" | "rating">("default");

  const filtered = tyres
    .filter((t) => filter === "all" || t.category === filter)
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return a.id - b.id;
    });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border py-4" aria-label="Catalogue navigation">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            aria-label="Back to GoMach home"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-black text-xl">
              Go<span className="text-primary">Mach</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="text-sm text-muted-foreground hidden sm:block">All tyres include EU label ratings</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-24 pb-12 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="text-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
              <div className="w-8 h-1 bg-primary" />
              Tyre Catalogue
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-black mb-4">
              Premium Tyres.<br />
              <span className="text-primary">Every Season.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-2xl">
              Sourced from Europe's leading manufacturers and delivered across the UK, Ireland, Germany, and Finland. Click any tyre to view full details and enquire via WhatsApp.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border py-4">
        <div className="container mx-auto px-4 md:px-6 flex flex-wrap items-center gap-3 justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
            {(["all", "summer", "winter", "all-season"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  filter === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-muted text-muted-foreground border-border hover:border-primary/50"
                }`}
                aria-pressed={filter === cat}
              >
                {cat !== "all" && categoryIcons[cat]}
                {cat === "all" ? "All Tyres" : categoryLabels[cat]}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="bg-muted border border-border rounded-lg px-3 py-1.5 text-sm text-foreground focus:outline-none focus:border-primary"
            aria-label="Sort tyres"
          >
            <option value="default">Default order</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <main className="container mx-auto px-4 md:px-6 py-12">
        <p className="text-sm text-muted-foreground mb-6">
          Showing <strong className="text-foreground">{filtered.length}</strong> tyre{filtered.length !== 1 ? "s" : ""}
          {filter !== "all" ? ` — ${categoryLabels[filter]}` : ""}
        </p>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <AnimatePresence>
            {filtered.map((tyre) => (
              <TyreCard key={tyre.id} tyre={tyre} onClick={() => setSelected(tyre)} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            <p className="text-lg">No tyres found for this filter.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
          <Fuel className="w-10 h-10 text-primary mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-3xl font-black mb-3">Need a specific size or brand?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our catalogue is updated regularly. If you don't see the tyre you need, contact us directly — we source across Europe and can likely get what you're after.
          </p>
          <a
            href="https://wa.me/447350329728?text=Hi%20GoMach%2C%20I%20need%20help%20finding%20a%20specific%20tyre.%20Can%20you%20help%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-lg"
          >
            <MessageSquare className="w-5 h-5" />
            Chat with Us on WhatsApp
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>© 2025 GoMach. All prices shown are per tyre, excluding fitting and VAT. Subject to availability.</p>
        <Link href="/" className="text-primary hover:underline mt-2 inline-block">
          ← Return to GoMach Home
        </Link>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/447350329728"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with GoMach on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-50" aria-hidden="true" />
        <MessageSquare className="w-8 h-8 relative z-10" aria-hidden="true" />
      </a>

      {/* Product Modal */}
      <AnimatePresence>
        {selected && <TyreModal tyre={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
