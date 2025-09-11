"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../../../public/iconicimages/1 (2).jpg'
import img2 from '../../../public/iconicimages/10.jpg'
import img3 from '../../../public/iconicimages/2 (2).jpg'
import img4 from '../../../public/iconicimages/4.jpg'
import img5 from '../../../public/iconicimages/5.jpg'
import img6 from '../../../public/iconicimages/6 (2).jpg'
import img7 from '../../../public/iconicimages/7 (2).jpg'
import img8 from '../../../public/iconicimages/8 (2).jpg'
import img9 from '../../../public/iconicimages/9.jpg'

// --- Helper: Icon Components ---
const XIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ChevronLeftIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);


// --- Data Structure and Mock Data ---
interface GalleryItem {
  id: number;
  imageUrl: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
    { id: 1, imageUrl: img1.src, category: "interior" },
    { id: 2, imageUrl: img2.src, category: "exterior" },
    { id: 3, imageUrl: img3.src, category: "furniture" },
    { id: 4, imageUrl: img4.src, category: "interior" },
    { id: 5, imageUrl: img5.src, category: "furniture" },
    { id: 6, imageUrl: img6.src, category: "exterior" },
    { id: 7, imageUrl: img7.src, category: "interior" },
    { id: 8, imageUrl: img8.src, category: "exterior" },
];


// --- Main Gallery Component ---
const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const categories = ['all', 'interior', 'exterior', 'furniture'];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredItems.length);
  };

  const handlePrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
  };
  
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredItems]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
        >
          Our Design Gallery
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Explore our collection of stunning designs and inspirational spaces.
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-16">
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${selectedCategory === category ? 'bg-black text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                <motion.div layoutId={item.imageUrl} className="aspect-[3/4]">
                   <img src={item.imageUrl} alt="" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"/>
                </motion.div>
                {/* Image title on hover has been removed */}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
          >
            <button onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }} className="absolute top-5 right-5 text-white/80 hover:text-white transition z-50">
                <XIcon className="w-8 h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); handlePrevious(); }} className="absolute left-3 sm:left-10 text-white/80 hover:text-white transition z-50 bg-black/20 rounded-full p-2">
                <ChevronLeftIcon className="w-8 h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="absolute right-3 sm:right-10 text-white/80 hover:text-white transition z-50 bg-black/20 rounded-full p-2">
                <ChevronRightIcon className="w-8 h-8" />
            </button>
            
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedIndex}
                    layoutId={filteredItems[selectedIndex].imageUrl}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img src={filteredItems[selectedIndex].imageUrl} alt="Enlarged view" className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"/>
                </motion.div>
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;