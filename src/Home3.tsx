import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, Menu, X, ArrowRight, ChevronLeft, ChevronRight, Droplets, Recycle, Leaf, Sparkles } from 'lucide-react';
import { cn } from './lib/utils';
import { Link } from 'react-router-dom';

// --- Types ---
export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice: string;
  image: string;
  category: 'MEN' | 'WOMEN' | 'UNISEX';
}

// --- Mock Data ---
const HERO_SLIDES = [
  {
    id: 1,
    title: "AURA",
    tagline: "Not Just A Scent. A Presence.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=2000",
    color: "#0033ff"
  },
  {
    id: 2,
    title: "ESSENCE",
    tagline: "The Soul of Modern Luxury.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=2000",
    color: "#FFCC00"
  },
  {
    id: 3,
    title: "VELVET",
    tagline: "Wrapped in Timeless Elegance.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=2000",
    color: "#0033ff"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Midnight Fix",
    tagline: "The Dark Bloom",
    price: "Rs. 979.00",
    originalPrice: "Rs. 999.00",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600",
    category: 'MEN'
  },
  {
    id: '2',
    name: "Siren Luxe",
    tagline: "The Dual Flame",
    price: "Rs. 979.00",
    originalPrice: "Rs. 999.00",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600",
    category: 'MEN'
  },
  {
    id: '3',
    name: "Flora di Luce",
    tagline: "Blissful Awakening",
    price: "Rs. 979.00",
    originalPrice: "Rs. 999.00",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600",
    category: 'MEN'
  },
  {
    id: '4',
    name: "Rose Velvet",
    tagline: "Floral Whisper",
    price: "Rs. 1,200.00",
    originalPrice: "Rs. 1,500.00",
    image: "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&q=80&w=600",
    category: 'WOMEN'
  },
  {
    id: '5',
    name: "Amber Gold",
    tagline: "Golden Hour",
    price: "Rs. 1,100.00",
    originalPrice: "Rs. 1,300.00",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600",
    category: 'WOMEN'
  },
  {
    id: '6',
    name: "Ocean Mist",
    tagline: "Breezy Escape",
    price: "Rs. 850.00",
    originalPrice: "Rs. 950.00",
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=600",
    category: 'UNISEX'
  }
];

// --- Components ---

export const BackgroundEffects = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Soft Animated Gradient */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        x: [0, 50, 0],
        y: [0, -50, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.2, 0.4, 0.2],
        x: [0, -50, 0],
        y: [0, 50, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/5 rounded-full blur-[120px]"
    />

    {/* Light Beam Texture */}
    <div className="absolute inset-0 opacity-10">
      <motion.div
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="h-full w-1/4 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
      />
    </div>

    {/* Particle Drift */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: Math.random() * 0.5
        }}
        animate={{
          y: [null, Math.random() * -100],
          x: [null, (Math.random() - 0.5) * 50],
          opacity: [null, 0]
        }}
        transition={{
          duration: 5 + Math.random() * 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-1 h-1 bg-primary/20 rounded-full"
      />
    ))}
  </div>
);

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-8 flex items-center justify-between",
      isScrolled ? "bg-white/80 backdrop-blur-lg border-b border-zinc-100 py-4" : "bg-transparent"
    )}>
      <div className="flex items-center gap-8">
        <Menu className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
        <div className="hidden md:flex items-center gap-6 text-[11px] font-medium tracking-[0.2em] uppercase">
          <a href="#" className="hover:text-primary transition-colors">Collections</a>
          <a href="#" className="hover:text-primary transition-colors">Fragrances</a>
          <a href="/about" className="hover:text-primary transition-colors">About</a>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-2xl font-light tracking-[0.4em] uppercase">AURA</h1>
      </div>

      <div className="flex items-center gap-6">
        <Search className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
        <div className="relative cursor-pointer group">
          <ShoppingBag className="w-5 h-5 group-hover:text-primary transition-colors" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-primary text-white text-[8px] flex items-center justify-center rounded-full">2</span>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/10 z-10" />
          <img
            src={HERO_SLIDES[currentSlide].image}
            alt={HERO_SLIDES[currentSlide].title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-[12vw] md:text-[8vw] font-light tracking-[0.5em] text-white uppercase mb-4"
            >
              {HERO_SLIDES[currentSlide].title}
            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-white/80 text-lg md:text-xl tracking-[0.2em] font-light mb-12"
            >
              {HERO_SLIDES[currentSlide].tagline}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button className="px-10 py-4 bg-white text-zinc-900 text-xs tracking-[0.2em] uppercase font-medium hover:bg-primary hover:text-white transition-all duration-500 rounded-full shadow-xl">
                Shop Now
              </button>
              <button className="px-10 py-4 border border-white/30 text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-500 rounded-full">
                Explore Collection
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Carousel Controls */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={cn(
              "w-12 h-0.5 transition-all duration-500",
              currentSlide === i ? "bg-white" : "bg-white/30"
            )}
          />
        ))}
      </div>
    </section>
  );
};

const BrandStatement = () => (
  <section className="relative py-32 px-8 overflow-hidden">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-primary text-[10px] tracking-[0.4em] uppercase font-semibold mb-6">Our Philosophy</p>
        <h2 className="text-4xl md:text-6xl font-light tracking-[0.2em] uppercase mb-8 leading-tight">
          Not Just A Scent. <br /> <span className="text-primary">A Presence.</span>
        </h2>
        <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          At AURA, we don't believe perfume is only about smelling good. We believe fragrance should feel personal, intentional, and unforgettable. Each bottle is a masterpiece of olfactory art.
        </p>
      </motion.div>
    </div>

    {/* Grid Shimmer Effect */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
      <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  </section>
);

const TrendingProducts = () => {
  const [activeTab, setActiveTab] = useState<'MEN' | 'WOMEN' | 'UNISEX'>('MEN');

  const filteredProducts = PRODUCTS.filter(p => p.category === activeTab).slice(0, 3);

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-3xl font-light tracking-[0.3em] uppercase mb-2">Trending Products</h2>
          <div className="w-20 h-0.5 bg-primary" />
        </div>
        <div className="flex gap-8 text-[11px] tracking-[0.2em] uppercase font-medium">
          {(['MEN', 'WOMEN', 'UNISEX'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "relative pb-2 transition-colors",
                activeTab === tab ? "text-primary" : "text-zinc-400 hover:text-zinc-600"
              )}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Category Card */}
        <Link to={`/category/${activeTab.toLowerCase()}`} className="lg:col-span-4 block">
          <motion.div
            key={activeTab} // Enforce re-animation on tab switch
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="relative h-[600px] overflow-hidden group rounded-2xl cursor-pointer"
          >
            <img
              src={
                activeTab === 'MEN' ? "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800" :
                  activeTab === 'WOMEN' ? "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800" :
                    "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800"
              }
              alt={activeTab}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-12 left-12 text-white">
              <h3 className="text-4xl font-light tracking-[0.2em] uppercase mb-4">{activeTab}</h3>
              <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase font-semibold group/btn">
                See all products <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
              </div>
            </div>
            <div className="absolute inset-0 border border-white/0 group-hover:border-primary/30 transition-all duration-500 rounded-2xl" />
          </motion.div>
        </Link>

        {/* Product Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] bg-zinc-50 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0)] group-hover:shadow-[inset_0_0_40px_rgba(0,51,255,0.1)] transition-all duration-500" />
                </div>
                <h4 className="text-sm tracking-[0.1em] font-medium mb-1">{product.name}</h4>
                <p className="text-zinc-400 text-xs italic mb-3">{product.tagline}</p>
                <div className="flex items-center gap-3">
                  <span className="text-primary font-semibold">{product.price}</span>
                  <span className="text-zinc-300 line-through text-xs">{product.originalPrice}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ProductHighlight = () => (
  <section className="py-32 bg-zinc-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-20">
        <p className="text-primary text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">Craftsmanship</p>
        <h2 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase">Clean. Conscious. Created with Care.</h2>
      </div>

      <div className="relative aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden mb-20 group">
        <img
          src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1200"
          alt="Lifestyle"
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { icon: Droplets, title: "Refillable Design", desc: "Designed with refillable options coming soon" },
          { icon: Recycle, title: "Recyclable Glass", desc: "Bottled in recyclable glass with FSC-certified packaging" },
          { icon: Leaf, title: "Vegan & Cruelty Free", desc: "100% vegan and never tested on animals" },
          { icon: Sparkles, title: "Natural Extracts", desc: "Crafted with high-quality natural absolutes" }
        ].map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:shadow-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <feature.icon className="w-6 h-6 transition-transform group-hover:scale-110 group-hover:rotate-12" />
            </div>
            <h5 className="text-xs tracking-[0.2em] uppercase font-bold mb-2">{feature.title}</h5>
            <p className="text-zinc-400 text-[10px] leading-relaxed max-w-[180px]">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-white py-20 px-8 border-t border-zinc-100">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1 md:col-span-1">
        <h2 className="text-2xl font-light tracking-[0.4em] uppercase mb-8">AURA</h2>
        <p className="text-zinc-400 text-xs leading-relaxed max-w-xs">
          Redefining luxury through the art of scent. Join us in our journey to create presence.
        </p>
      </div>
      <div>
        <h6 className="text-[10px] tracking-[0.3em] uppercase font-bold mb-6">Shop</h6>
        <ul className="space-y-4 text-xs text-zinc-500">
          <li><a href="#" className="hover:text-primary transition-colors">Men's Collection</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Women's Collection</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Unisex Fragrances</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Gift Sets</a></li>
        </ul>
      </div>
      <div>
        <h6 className="text-[10px] tracking-[0.3em] uppercase font-bold mb-6">Support</h6>
        <ul className="space-y-4 text-xs text-zinc-500">
          <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h6 className="text-[10px] tracking-[0.3em] uppercase font-bold mb-6">Newsletter</h6>
        <p className="text-zinc-400 text-xs mb-6">Subscribe to receive updates and exclusive offers.</p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email address"
            className="bg-zinc-50 border border-zinc-200 px-4 py-3 text-xs w-full focus:outline-none focus:border-primary transition-colors"
          />
          <button className="bg-primary text-white px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-primary/90 transition-colors">
            Join
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6 text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
      <p>© 2026 AURA Fragrances. All rights reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-primary transition-colors">Instagram</a>
        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
        <a href="#" className="hover:text-primary transition-colors">Facebook</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen relative">
      <BackgroundEffects />
      <Navbar />

      <main>
        <Hero />
        <BrandStatement />
        <TrendingProducts />
        <ProductHighlight />

        {/* Testimonial Section */}
        <section className="py-32 px-8 text-center bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => <Sparkles key={i} className="w-4 h-4 text-accent fill-accent" />)}
            </div>
            <p className="text-2xl md:text-3xl font-light italic text-zinc-600 mb-8 leading-relaxed">
              "Aura has completely changed how I perceive luxury. The scents are not just fragrances; they are memories captured in a bottle."
            </p>
            <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-primary">Loved by 5000+ Customers</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
