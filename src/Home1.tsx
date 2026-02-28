/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { ShoppingBag, Search, Menu, ArrowRight, Instagram, Twitter, Facebook, Star, Heart, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const FragranceCard = ({ name, price, category, image, delay }: { name: string, price: string, category: string, image: string, delay: number, key?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="aspect-[3/4] overflow-hidden bg-zinc-100 rounded-2xl relative">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 right-4">
        <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-zinc-900 hover:bg-white transition-colors" aria-label={`Add ${name} to wishlist`}>
          <Heart size={18} />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/60 to-transparent">
        <button className="w-full py-3 bg-white text-zinc-900 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-secondary transition-colors">
          <ShoppingBag size={18} />
          Add to Bag
        </button>
      </div>
    </div>
    <div className="mt-4 flex justify-between items-start">
      <div>
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-display mb-1">{category}</p>
        <h3 className="font-serif text-xl group-hover:text-primary transition-colors">{name}</h3>
      </div>
      <p className="font-display font-medium text-lg">{price}</p>
    </div>
  </motion.div>
);

export default function Home1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const fragrances = [
    { name: "Midnight Bloom", price: "$185", category: "Floral", image: "https://picsum.photos/seed/perfume1/600/800" },
    { name: "Velvet Oud", price: "$240", category: "Woody", image: "https://picsum.photos/seed/perfume2/600/800" },
    { name: "Citrus Azure", price: "$160", category: "Fresh", image: "https://picsum.photos/seed/perfume3/600/800" },
    { name: "Amber Silk", price: "$210", category: "Oriental", image: "https://picsum.photos/seed/perfume4/600/800" },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-secondary selection:text-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="flex items-center gap-8">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:opacity-70 transition-opacity" aria-label="Toggle Menu">
            <Menu size={24} />
          </button>
          <div className="hidden md:flex gap-6 text-xs uppercase tracking-widest font-display">
            <a href="#" className="hover:text-secondary transition-colors">Shop</a>
            <a href="#" className="hover:text-secondary transition-colors">Collections</a>
            <a href="#" className="hover:text-secondary transition-colors">About</a>
          </div>
        </div>

        <a href="/" className="absolute left-1/2 -translate-x-1/2 text-2xl font-serif italic tracking-tighter">
          L'Essence
        </a>

        <div className="flex items-center gap-6">
          <button className="hover:opacity-70 transition-opacity" aria-label="Search"><Search size={20} /></button>
          <button className="relative hover:opacity-70 transition-opacity" aria-label="Shopping Bag">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-secondary text-zinc-900 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-zinc-950 z-40 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-white font-serif text-3xl">
          <a href="#" className="hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Shop</a>
          <a href="#" className="hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Collections</a>
          <a href="#" className="hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Our Story</a>
          <a href="#" className="hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </div>

      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
        <motion.div
          style={{ opacity, scale, y }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/hero-perfume-back.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-zinc-950" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-secondary font-display uppercase tracking-[0.4em] text-xs mb-6"
          >
            The Art of Fragrance
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white font-serif text-6xl md:text-9xl leading-[0.9] mb-8"
          >
            Elegance <br />
            <span className="italic text-secondary">Defined</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button className="px-10 py-4 bg-primary text-white rounded-full font-display uppercase tracking-widest text-sm hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2">
              Explore Collection <ArrowRight size={16} />
            </button>
            <button className="px-10 py-4 border border-white/30 text-white rounded-full font-display uppercase tracking-widest text-sm hover:bg-white hover:text-zinc-900 transition-all">
              Our Story
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-display">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                Curated <br />
                <span className="text-primary italic">Masterpieces</span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed">
                Discover our signature scents, meticulously crafted with the rarest ingredients from around the globe. Each bottle tells a unique story of passion and precision.
              </p>
            </div>
            <button className="group flex items-center gap-2 text-zinc-900 font-display uppercase tracking-widest text-sm border-b border-zinc-200 pb-2 hover:border-primary transition-colors">
              View All Products <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
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
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary rounded-3xl -z-10 hidden md:block" />
              <div className="absolute top-1/2 -right-20 translate-y-[-50%] p-8 glass rounded-2xl max-w-xs hidden lg:block">
                <Star className="text-secondary mb-4" fill="currentColor" />
                <p className="text-white text-sm italic font-serif leading-relaxed">
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
              <p className="text-primary font-display uppercase tracking-widest text-xs mb-6">Our Craftsmanship</p>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
                A Legacy of <br />
                <span className="italic">Pure Essence</span>
              </h2>
              <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
                <p>
                  Since 1924, L'Essence has been at the forefront of high perfumery. We believe that a fragrance is more than just a scent—it's an invisible garment that defines your presence.
                </p>
                <p>
                  Our master perfumers spend years perfecting each blend, sourcing sustainable botanicals from the Grasse region of France to the misty mountains of India.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-serif text-zinc-900 mb-1">100%</p>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 font-display">Natural Ingredients</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-zinc-900 mb-1">48h+</p>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 font-display">Long Lasting</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-6 bg-primary text-white text-center">
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
              <button className="px-10 py-4 bg-secondary text-zinc-900 rounded-full font-display uppercase tracking-widest text-sm font-bold hover:scale-105 transition-transform">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1">
              <a href="/" className="text-3xl font-serif italic tracking-tighter mb-8 block">
                L'Essence
              </a>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                Crafting timeless fragrances for those who seek the extraordinary. Elevating the everyday through the power of scent.
              </p>
            </div>

            <div>
              <h4 className="font-display uppercase tracking-widest text-xs mb-8 text-secondary">Shop</h4>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">All Fragrances</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discovery Sets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Home Scenting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display uppercase tracking-widest text-xs mb-8 text-secondary">Support</h4>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display uppercase tracking-widest text-xs mb-8 text-secondary">Follow Us</h4>
              <div className="flex gap-6">
                <a href="#" className="text-zinc-400 hover:text-white transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-[10px] uppercase tracking-widest font-display">
            <p>© 2024 L'Essence Perfumery. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
