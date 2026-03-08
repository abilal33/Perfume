import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar, Footer, BackgroundEffects, PRODUCTS } from './Home3';
import { ArrowLeft } from 'lucide-react';

export default function CategoryPage() {
    const { categoryId } = useParams<{ categoryId: string }>();
    // Safely grab the corresponding mock data array parameter based on URL string
    const category = categoryId?.toUpperCase() || 'MEN';

    const categoryProducts = PRODUCTS.filter(p => p.category === category).slice(0, 3);

    // Scroll to the top when navigating between pages
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [categoryId]);

    return (
        <div className="min-h-screen relative flex flex-col bg-white">
            <BackgroundEffects />
            <Navbar />

            <main className="flex-1 px-8 max-w-7xl mx-auto w-full relative z-10 pt-40 pb-24">
                <Link to="/" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-bold text-zinc-500 hover:text-primary transition-colors mb-16">
                    <ArrowLeft className="w-4 h-4" /> Back to Collection
                </Link>

                <div className="text-center mb-24">
                    <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] uppercase mb-6">{category} Fragrances</h1>
                    <div className="w-20 h-0.5 bg-primary mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <AnimatePresence mode="wait">
                        {categoryProducts.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
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
                                <h4 className="text-lg tracking-[0.1em] font-medium mb-1">{product.name}</h4>
                                <p className="text-zinc-500 text-sm italic mb-4">{product.tagline}</p>
                                <div className="flex items-center gap-4">
                                    <span className="text-primary font-bold text-lg">{product.price}</span>
                                    <span className="text-zinc-400 line-through text-sm">{product.originalPrice}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </main>

            <Footer />
        </div>
    );
}
