"use client";

import { useRef, useState, useEffect } from "react";
import { SearchIcon } from "lucide-react";
import TextFadeIn from "../animations/TextFadeIn";
import Image, { StaticImageData } from "next/image";
import { images } from "@/services";

type Destination = {
  name: string;
  code: string;
  price: string;
  source: StaticImageData;
};

const COUNTRIES: Destination[] = [
  { name: "Switzerland", code: "ch", price: "From €3.99", source: images.ch },
  { name: "Germany", code: "de", price: "From €3.99", source: images.de },
  { name: "Italy", code: "it", price: "From €3.99", source: images.it },
  { name: "Austria", code: "at", price: "From €3.99", source: images.at },
  { name: "Netherlands", code: "nl", price: "From €3.99", source: images.nl },
  {
    name: "United Kingdom",
    code: "gb",
    price: "From €3.99",
    source: images.gb,
  },
];

const REGIONS: Destination[] = [
  { name: "Europe", code: "eu", price: "From €5.99", source: images.ch },
  { name: "Asia", code: "as", price: "From €4.99", source: images.de },
  { name: "Balkans", code: "bl", price: "From €6.99", source: images.it },
];

export default function Destinations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"Countries" | "Regions">("Countries");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Mark hydration complete
  useEffect(() => {
    setIsClient(true);
  }, []);

  const data = activeTab === "Countries" ? COUNTRIES : REGIONS;

  // Filter based on search
  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Determine which items to show
  const visibleItems = isClient
    ? showAll || search
      ? filtered
      : filtered.slice(0, 6)
    : filtered.slice(0, 6); // server and first client render always first 6 items

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setShowAll(false);
    setLoading(true);
    setTimeout(() => setLoading(false), 600);
  };

  const handleTabChange = (tab: "Countries" | "Regions") => {
    setActiveTab(tab);
    setSearch("");
    setShowAll(false);
  };

  return (
    <div id="pricing" className="py-14 font-inter">
      <div className="containerX mx-auto text-center">
        <div className="flex justify-center items-center w-full mx-auto">
          <TextFadeIn
            text="Discover our more than 200+ destinations"
            className="text-2xl md:text-5xl max-w-2xl lg:text-[48px] font-[700] !leading-[1.2] lg:justify-center text-text-850 tracking-wide mb-6"
          />
        </div>

        {/* Search Input */}
        <div className="relative flex items-center max-w-2xl mx-auto mb-6 py-2 lg:py-3 pl-4 lg:pl-6 pr-2 lg:pr-3 rounded-xl border border-neutral-400">
          <span className="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                stroke="#F91632"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 12H22.5"
                stroke="#F91632"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 2C15.0013 4.73835 16.4228 8.29203 16.5 12C16.4228 15.708 15.0013 19.2616 12.5 22C9.99872 19.2616 8.57725 15.708 8.5 12C8.57725 8.29203 9.99872 4.73835 12.5 2V2Z"
                stroke="#F91632"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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
            className={`bg-secondary-600 text-white ml-2 py-2 lg:py-3 pr-2 lg:pr-3 pl-3 lg:pl-5 rounded-[9px] text-sm lg:text-lg font-normal flex items-center gap-4 transition-opacity ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span>Search</span>
            <SearchIcon className="h-4 lg:h-6 w-4 lg:w-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="my-8 lg:my-12">
          <div className="mb-4 text-xl md:text-2xl xl:text-4xl font-semibold text-text-850">
            Choose your destination
          </div>
        </div>

        {/* Destination Cards */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {visibleItems.map((item) => (
            <div
              key={item.code}
              className="border p-4 lg:p-6 rounded-xl bg-white hover:shadow-md transition-all cursor-pointer animate-fadeInUp"
            >
              <div className="flex flex-col gap-4 lg:gap-6">
                {activeTab === "Countries" && (
                  <div className="w-7 lg:w-9 h-7 lg:h-9 flex items-center justify-center overflow-hidden rounded-full">
                    <Image
                      src={item.source}
                      alt={`${item.name} flag`}
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex justify-between items-end">
                  <div className="text-start">
                    <p className="font-semibold text-base:text-lg">{item.name}</p>
                    <p className="text-xs lg:text-sm text-gray-500">{item.price}</p>
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M8.29498 16.59L12.875 12L8.29498 7.41L9.70498 6L15.705 12L9.70498 18L8.29498 16.59Z"
                        fill="#BDBDBD"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
