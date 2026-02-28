import { motion, useScroll, useTransform } from "motion/react";
import {
  ShoppingBag,
  Search,
  Menu,
  ChevronRight,
  ChevronLeft,
  Droplets,
  Wind,
  Leaf,
  Flame,
  Flower2,
  Apple,
  ArrowRight
} from "lucide-react";
import { useRef } from "react";

const perfumes = [
  { id: 1, name: "Azure Mist", brand: "Aura Luxe", price: "$120", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Midnight Bloom", brand: "Zara Tobacco", price: "$85", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Crystal Rain", brand: "Essence", price: "$150", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800" },
];

const categories = [
  { name: "Aquatic", icon: <Droplets className="w-8 h-8" />, color: "bg-blue-100" },
  { name: "Citrus", icon: <Wind className="w-8 h-8 text-orange-500" />, color: "bg-orange-50" },
  { name: "Aromatic", icon: <Leaf className="w-8 h-8 text-emerald-500" />, color: "bg-emerald-50" },
  { name: "Woody", icon: <Flame className="w-8 h-8 text-amber-700" />, color: "bg-amber-50" },
  { name: "Floral", icon: <Flower2 className="w-8 h-8 text-pink-500" />, color: "bg-pink-50" },
  { name: "Fruity", icon: <Apple className="w-8 h-8 text-red-500" />, color: "bg-red-50" },
];

const genders = [
  { id: "him", title: "FOR HIM", sub: "Bold, woody, and sophisticated", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" },
  { id: "her", title: "FOR HER", sub: "Elegant, floral, and radiant", img: "https://images.unsplash.com/photo-1485872299829-c673f5194813?auto=format&fit=crop&q=80&w=800" },
  { id: "unisex", title: "UNISEX", sub: "Balanced, unique, and versatile", img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800" },
];

export default function Home2() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div ref={containerRef} className="bg-hazy-blue-50 text-hazy-blue-950 antialiased selection:bg-hazy-blue-200 min-h-screen font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between glass">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-hazy-blue-600 rounded-full flex items-center justify-center">
            <Droplets className="text-white w-5 h-5" />
          </div>
          <span className="font-serif font-bold text-xl tracking-tight">Aura Mist</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-hazy-blue-600 transition-colors">Collection</a>
          <a href="#" className="hover:text-hazy-blue-600 transition-colors">New Arrivals</a>
          <a href="#" className="hover:text-hazy-blue-600 transition-colors">Fragrance Finder</a>
          <a href="#" className="hover:text-hazy-blue-600 transition-colors">About</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-white/20 rounded-full transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-hazy-blue-600 text-white text-[10px] flex items-center justify-center rounded-full">2</span>
          </button>
          <button className="md:hidden p-2 hover:bg-white/20 rounded-full transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-screen flex items-center px-6 md:px-20 pt-20 hazy-gradient overflow-hidden"
      >
        <div className="relative z-10 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-serif leading-tight mb-6"
          >
            Perfume 0123<br />
            <span className="text-hazy-blue-600 italic">Azure Tobacco</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-hazy-blue-800/70 mb-10 max-w-md"
          >
            A mysterious blend of cool aquatic notes and warm, hazy tobacco.
            The essence of a misty morning in the Mediterranean.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-hazy-blue-950 text-white rounded-full font-medium hover:bg-hazy-blue-800 transition-all hazy-glow">
              Buy Now
            </button>
            <button className="px-8 py-4 border border-hazy-blue-950/20 rounded-full font-medium hover:bg-white/30 transition-all">
              Shop All
            </button>
          </motion.div>
        </div>

        {/* Floating Bottle Image */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: -5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute right-[-10%] md:right-[5%] top-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-auto pointer-events-none"
        >
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800"
            alt="Perfume Bottle"
            className="w-full h-full object-contain drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-hazy-blue-400/20 blur-[100px] -z-10 rounded-full"></div>
        </motion.div>
      </motion.section>

      {/* Best Picks */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-serif mb-2">Best picks</h2>
          <div className="w-20 h-1 bg-hazy-blue-600"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {perfumes.map((perfume, index) => (
            <motion.div
              key={perfume.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-4 bg-hazy-blue-50">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hazy-blue-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <button className="w-full py-3 bg-white text-hazy-blue-950 rounded-xl font-medium">
                    Quick View
                  </button>
                </div>
              </div>
              <h3 className="font-serif text-xl mb-1">{perfume.name}</h3>
              <p className="text-sm text-hazy-blue-600 font-medium mb-1">{perfume.brand}</p>
              <p className="font-medium">{perfume.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shop by Famous Perfumes */}
      <section className="py-24 bg-hazy-blue-950 text-white overflow-hidden">
        <div className="px-6 md:px-20 mb-12 flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif mb-2">Shop by famous perfumes</h2>
            <p className="text-hazy-blue-300">Curated selections from world-renowned houses</p>
          </motion.div>
          <div className="flex gap-4">
            <button className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex gap-8 px-6 md:px-20 overflow-x-auto no-scrollbar pb-8">
          {[1, 2, 3, 4, 5].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.02 }}
              className="min-w-[300px] bg-white/5 rounded-3xl p-6 border border-white/10"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-white/5">
                <img
                  src={`https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=800&sig=${item}`}
                  alt="Famous Perfume"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Signature No. {item}</h3>
              <p className="text-sm text-hazy-blue-300 mb-4">A timeless classic with notes of bergamot and cedar.</p>
              <div className="flex items-center justify-between">
                <span className="font-bold">$180</span>
                <button className="text-sm font-medium flex items-center gap-1 hover:text-hazy-blue-300 transition-colors">
                  Details <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fragrance Families */}
      <section className="py-24 px-6 md:px-20 bg-hazy-blue-50">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif mb-4"
          >
            Explore Fragrance Families
          </motion.h2>
          <p className="text-hazy-blue-800/60">Find your perfect scent profile</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`flex flex-col items-center justify-center p-8 rounded-3xl ${cat.color} cursor-pointer transition-shadow hover:shadow-xl`}
            >
              <div className="mb-4 p-4 bg-white rounded-2xl shadow-sm">
                {cat.icon}
              </div>
              <span className="font-medium text-hazy-blue-900">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shop by Gender */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="mb-12">
          <h2 className="text-4xl font-serif mb-2 uppercase tracking-widest">Shop by <span className="text-hazy-blue-600">Gender</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
          {genders.map((gender) => (
            <motion.div
              key={gender.id}
              whileHover={{ flex: 1.2 }}
              className="relative group overflow-hidden rounded-3xl flex-1 transition-all duration-500 cursor-pointer"
            >
              <img
                src={gender.img}
                alt={gender.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hazy-blue-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div>
                  <h3 className="text-3xl font-serif text-white mb-2">{gender.title}</h3>
                  <p className="text-white/60 text-sm">{gender.sub}</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform">
                  <ArrowRight className="w-6 h-6 text-hazy-blue-950" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hazy-blue-950 text-white py-20 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-hazy-blue-600 rounded-full flex items-center justify-center">
                <Droplets className="text-white w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight">Aura Mist</span>
            </div>
            <p className="text-hazy-blue-300 max-w-sm mb-8">
              Crafting sensory journeys through the art of fine perfumery.
              Discover your signature scent in our curated collection.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'TW', 'LI'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-hazy-blue-950 transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-hazy-blue-300">
              <li><a href="#" className="hover:text-white transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Sets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-hazy-blue-300">
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-hazy-blue-400">
          <p>© 2024 Aura Mist Luxury Perfumery. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
