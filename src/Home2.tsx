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
  ArrowRight,
  Heart,
  Star
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const FragranceCard = ({ name, price, category, image, delay }: { name: string, price: string, category: string, image: string, delay: number, key?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="aspect-[3/4] overflow-hidden bg-hazy-blue-50 rounded-2xl relative">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 right-4">
        <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-hazy-blue-950 hover:bg-white transition-colors" aria-label={`Add ${name} to wishlist`}>
          <Heart size={18} />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-hazy-blue-950/60 to-transparent">
        <button className="w-full py-3 bg-white text-hazy-blue-950 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-hazy-blue-50 transition-colors">
          <ShoppingBag size={18} />
          Add to Bag
        </button>
      </div>
    </div>
    <div className="mt-4 flex justify-between items-start">
      <div>
        <p className="text-xs uppercase tracking-widest text-secondary font-display mb-1">{category}</p>
        <h3 className="font-serif text-xl group-hover:text-secondary transition-colors text-hazy-blue-950">{name}</h3>
      </div>
      <p className="font-display font-medium text-lg text-hazy-blue-950">{price}</p>
    </div>
  </motion.div>
);

const fragrances = [
  { name: "Midnight Bloom", price: "$185", category: "Floral", image: "https://picsum.photos/seed/perfume1/600/800" },
  { name: "Velvet Oud", price: "$240", category: "Woody", image: "https://picsum.photos/seed/perfume2/600/800" },
  { name: "Citrus Azure", price: "$160", category: "Fresh", image: "https://picsum.photos/seed/perfume3/600/800" },
  { name: "Amber Silk", price: "$210", category: "Oriental", image: "https://picsum.photos/seed/perfume4/600/800" },
];

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

const famousPerfumes = [
  { id: 1, name: "Baccarat Rouge 540", brand: "Maison Francis Kurkdjian", price: "$325", notes: "Jasmine, Saffron, Cedarwood, Ambergris", image: "https://images.unsplash.com/photo-1616406432452-07bc5938753d?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Aventus", brand: "Creed", price: "$495", notes: "Pineapple, Birch, Musk, Oak Moss", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Santal 33", brand: "Le Labo", price: "$310", notes: "Sandalwood, Cardamom, Leather", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Oud Wood", brand: "Tom Ford", price: "$295", notes: "Rare Oud, Sandalwood, Rose Wood", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Lost Cherry", brand: "Tom Ford", price: "$390", notes: "Black Cherry, Tonka Bean, Almond", image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=800" },
];

export default function Home2() {
  const containerRef = useRef(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    // Initial check and resize listener
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="bg-hazy-blue-50 text-hazy-blue-950 antialiased selection:bg-hazy-blue-200 min-h-screen font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between glass">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
            <Droplets className="text-white w-5 h-5" />
          </div>
          <span className="font-serif font-bold text-xl tracking-tight">Aura Mist</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-secondary transition-colors">Collection</a>
          <a href="#" className="hover:text-secondary transition-colors">New Arrivals</a>
          <a href="#" className="hover:text-secondary transition-colors">Fragrance Finder</a>
          <a href="#" className="hover:text-secondary transition-colors">About</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-white/20 rounded-full transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-secondary text-white text-[10px] flex items-center justify-center rounded-full">2</span>
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
            <span className="text-secondary italic">Azure Tobacco</span>
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
          <div className="w-20 h-1 bg-secondary"></div>
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
              <p className="text-sm text-secondary font-medium mb-1">{perfume.brand}</p>
              <p className="font-medium">{perfume.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Curated Masterpieces */}
      <section className="py-24 px-6 md:px-20 bg-hazy-blue-50/50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl font-serif mb-4">
              Curated <br />
              <span className="text-secondary italic">Masterpieces</span>
            </h2>
            <p className="text-hazy-blue-800/70 text-lg leading-relaxed">
              Discover our signature scents, meticulously crafted with the rarest ingredients from around the globe. Each bottle tells a unique story of passion and precision.
            </p>
          </motion.div>
          <button className="group flex items-center gap-2 text-hazy-blue-950 font-display uppercase tracking-widest text-sm border-b border-hazy-blue-200 pb-2 hover:border-secondary transition-colors">
            View All Products <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fragrances.map((f, i) => (
            <FragranceCard
              key={f.name}
              name={f.name}
              price={f.price}
              category={f.category}
              image={f.image}
              delay={i * 0.1}
            />
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
        </div>

        <div className="relative group/slider">
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-2 md:left-6 top-[40%] -translate-y-1/2 z-10 p-4 bg-hazy-blue-950/80 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-hazy-blue-950 transition-all cursor-pointer shadow-2xl opacity-0 group-hover/slider:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-2 md:right-6 top-[40%] -translate-y-1/2 z-10 p-4 bg-hazy-blue-950/80 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-hazy-blue-950 transition-all cursor-pointer shadow-2xl opacity-0 group-hover/slider:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div
            ref={sliderRef}
            onScroll={checkScroll}
            className="flex gap-8 px-6 md:px-20 overflow-x-auto no-scrollbar pb-8 scroll-smooth snap-x"
          >
            {famousPerfumes.map((perfume) => (
              <motion.div
                key={perfume.id}
                whileHover={{ scale: 1.02 }}
                className="min-w-[300px] bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-white/30 transition-all cursor-pointer snap-start relative group"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-hazy-blue-900/50 relative">
                  <img
                    src={perfume.image}
                    alt={perfume.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hazy-blue-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <button className="w-full py-3 bg-white text-hazy-blue-950 rounded-xl font-medium font-sans">
                      View Details
                    </button>
                  </div>
                </div>
                <p className="font-display text-xs uppercase tracking-widest text-hazy-blue-400 mb-2">{perfume.brand}</p>
                <h3 className="text-2xl font-serif mb-2 text-white">{perfume.name}</h3>
                <p className="text-sm text-hazy-blue-300/80 mb-6 italic leading-relaxed">
                  {perfume.notes}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-serif text-xl border-b border-hazy-blue-400/30 text-hazy-blue-50 pb-1">{perfume.price}</span>
                  <button className="text-sm font-medium flex items-center gap-1 text-hazy-blue-300 hover:text-white transition-colors group/btn">
                    Explore <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
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

      {/* Story Section */}
      <section className="py-24 px-6 md:px-20 bg-hazy-blue-950 text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/craft/800/1000"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-hazy-blue-800 rounded-3xl -z-10 hidden md:block" />
            <div className="absolute top-1/2 -right-20 translate-y-[-50%] p-8 bg-white/10 backdrop-blur-md rounded-2xl max-w-xs hidden lg:block border border-white/20">
              <Star className="text-hazy-blue-300 mb-4" fill="currentColor" />
              <p className="text-hazy-blue-100 text-sm italic font-serif leading-relaxed">
                "The most intimate way to share a secret is through the scent you leave behind."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-hazy-blue-400 font-display uppercase tracking-widest text-xs mb-6">Our Craftsmanship</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              A Legacy of <br />
              <span className="italic text-hazy-blue-300">Pure Essence</span>
            </h2>
            <div className="space-y-6 text-hazy-blue-200 text-lg leading-relaxed">
              <p>
                Since 1924, L'Essence has been at the forefront of high perfumery. We believe that a fragrance is more than just a scent—it's an invisible garment that defines your presence.
              </p>
              <p>
                Our master perfumers spend years perfecting each blend, sourcing sustainable botanicals from the Grasse region of France to the misty mountains of India.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-serif text-white mb-1">100%</p>
                <p className="text-xs uppercase tracking-widest text-hazy-blue-400 font-display">Natural Ingredients</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-white mb-1">48h+</p>
                <p className="text-xs uppercase tracking-widest text-hazy-blue-400 font-display">Long Lasting</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shop by Gender */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="mb-12">
          <h2 className="text-4xl font-serif mb-2 uppercase tracking-widest">Shop by <span className="text-secondary">Gender</span></h2>
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

      {/* Newsletter */}
      <section className="py-32 px-6 bg-hazy-blue-950 text-white text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8">Join the Inner Circle</h2>
            <p className="text-white/70 text-lg mb-12 font-display tracking-wide">
              Subscribe to receive exclusive access to new launches, private events, and the art of scent.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all"
              />
              <button className="px-10 py-4 bg-secondary text-white rounded-full font-display uppercase tracking-widest text-sm font-bold hover:scale-105 transition-transform">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hazy-blue-950 text-white py-20 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
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
