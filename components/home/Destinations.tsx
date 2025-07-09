'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextFadeIn from '../animations/TextFadeIn';
import ReactCountryFlag from 'react-world-flags';
import { SearchIcon } from 'lucide-react';

type Destination = {
  name: string;
  code: string;
  price: string;
};

const COUNTRIES: Destination[] = [
  { name: 'USA', code: 'us', price: 'From $8.99' },
  { name: 'Turkey', code: 'tr', price: 'From $8.99' },
  { name: 'Bangladesh', code: 'bd', price: 'From $3.99' },
  { name: 'Bosnia and Herzegovina', code: 'ba', price: 'From $3.99' },
  { name: 'Australia', code: 'au', price: 'From $3.99' },
  { name: 'Germany', code: 'de', price: 'From $3.99' },
];

const REGIONS: Destination[] = [
  { name: 'Europe', code: 'eu', price: 'From $5.99' },
  { name: 'Asia', code: 'as', price: 'From $4.99' },
  { name: 'North America', code: 'na', price: 'From $6.99' },
];

gsap.registerPlugin(ScrollTrigger);

export default function Destinations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'Countries' | 'Regions'>('Countries');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const data = activeTab === 'Countries' ? COUNTRIES : REGIONS;

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const visibleItems = showAll || search ? filtered : filtered.slice(0, 6);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards: HTMLElement[] = Array.from(containerRef.current.children) as HTMLElement[];
    gsap.set(cards, { opacity: 0, y: 50 });
    cards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      });
    });
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [visibleItems]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setShowAll(false);
    setLoading(true);
    setTimeout(() => setLoading(false), 600);
  };

  const handleTabChange = (tab: 'Countries' | 'Regions') => {
    setActiveTab(tab);
    setSearch('');
    setShowAll(false);
  };

  return (
    <section id="pricing" className="py-14 font-inter">
      <div className="containerX mx-auto text-center">
        <div className="flex justify-center items-center w-full mx-auto">
          <TextFadeIn
            text="Discover our more than 200+ destinations"
            className="text-2xl md:text-5xl max-w-2xl lg:text-[48px] font-[700] !leading-[1.2] text-text-850 tracking-wide mb-6"
          />
        </div>
        
        {/* Search Input */}
        <div className="relative flex items-center max-w-2xl mx-auto mb-6 py-2 lg:py-3 pl-4 lg:pl-6 pr-2 lg:pr-3 rounded-2xl border border-neutral-400">
          <span className='mr-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="#F91632" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2.5 12H22.5" stroke="#F91632" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.5 2C15.0013 4.73835 16.4228 8.29203 16.5 12C16.4228 15.708 15.0013 19.2616 12.5 22C9.99872 19.2616 8.57725 15.708 8.5 12C8.57725 8.29203 9.99872 4.73835 12.5 2V2Z" stroke="#F91632" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Where are you travelling?"
            className="border-none focus:ring-none focus:outline-none w-full text-sm lg:text-base"
          />
          <button
            type="button"
            disabled={loading}
            className={`bg-secondary-600 text-white ml-2 py-2 lg:py-3 pr-2 lg:pr-3 pl-3 lg:pl-5 rounded-xl text-sm lg:text-lg font-normal flex items-center gap-4 transition-opacity ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span>Search</span>
            <SearchIcon className="h-4 lg:h-6 w-4 lg:w-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className='my-8 lg:my-12'>
          <div className='mb-4 text-xl md:text-2xl xl:text-4xl font-semibold text-text-850'>Choose your destination</div>
          <div className="flex justify-center gap-4">
            <button
              className={`px-4 lg:px-6 py-2 h-11 lg:h-auto lg:py-3 text-sm lg:text-base rounded-xl ${activeTab === 'Countries' ? 'bg-main-600 text-white font-semibold' : 'bg-white text-main-600 border border-main-600 font-medium'}`}
              onClick={() => handleTabChange('Countries')}
            >
              Countries
            </button>
            <button
              className={`px-4 lg:px-6 py-2 h-11 lg:h-auto lg:py-3 text-sm lg:text-base rounded-xl ${activeTab === 'Regions' ? 'bg-main-600 text-white font-semibold' : 'bg-white text-main-600 border border-main-600 font-medium'}`}
              onClick={() => handleTabChange('Regions')}
            >
              Regions
            </button>
          </div>
        </div>

        {/* Destination Cards */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleItems.map((item) => (
            <div
              key={`${activeTab}-${item.code}`}
              className="border p-4 lg:p-6 rounded-xl bg-white hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex flex-col gap-4 lg:gap-6">
                {activeTab === 'Countries' && (
                  <ReactCountryFlag
                    code={item.code.toLowerCase()}
                    className="w-7 lg:w-9 h-7 lg:h-9"
                    style={{ objectFit: 'cover', borderRadius: '100%' }}
                    alt={`Flag of ${item.name}`}
                  />
                )}
                <div className='flex justify-between items-end'>
                  <div className='text-start'>
                    <h4 className="font-semibold text-base:text-lg">{item.name}</h4>
                    <p className="text-xs lg:text-sm text-gray-500">{item.price}</p>
                  </div>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8.29498 16.59L12.875 12L8.29498 7.41L9.70498 6L15.705 12L9.70498 18L8.29498 16.59Z" fill="#BDBDBD" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowAll(true)}
          className="text-sm lg:text-base mt-8 lg:mt-12 px-6 py-3 rounded-xl bg-black text-white font-semibold"
          disabled={showAll || filtered.length <= 6}
        >
          {showAll ? 'All Destinations Shown' : 'View All Destinations'}
        </button>
      </div>
    </section>
  );
}