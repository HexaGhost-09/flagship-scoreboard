'use client';
import { useState } from "react";

export default function SmartphoneRanking() {
  const year = 2025;
  const [showAll, setShowAll] = useState(false);

  const rankings = [
    { device: "Xiaomi 15 Ultra", score: 95 },
    { device: "Oppo Find X8 Ultra", score: 95 },
    { device: "iPhone 16 Pro Max", score: 94 },
    { device: "Samsung Galaxy S25 Ultra", score: 93 },
    { device: "Vivo X200 Ultra", score: 93 },
    { device: "OnePlus 13", score: 92 },
    { device: "ROG Phone 9", score: 90 },
    { device: "Sony Xperia 1 VII", score: 90 },
    { device: "Motorola Razr 60 Ultra", score: 89 },
    { device: "Google Pixel 9 Pro", score: 82 },
  ];

  const top3Backgrounds = [
    "bg-yellow-100/30 dark:bg-yellow-300/10",
    "bg-gray-200/30 dark:bg-gray-400/10",
    "bg-orange-100/30 dark:bg-orange-300/10",
  ];

  const badgeColors = ["bg-yellow-300", "bg-gray-300", "bg-orange-300"];
  const visibleRankings = showAll ? rankings : rankings.slice(0, 3);

  return (
    <section className="w-full max-w-3xl px-4">
      <h2 className="text-3xl font-bold mb-8 text-center tracking-tight border-b pb-2 border-gray-300 dark:border-gray-700">
        📱 Smartphone ({year})
      </h2>

      <div className="flex flex-col gap-4">
        {visibleRankings.map((item, index) => {
          const actualIndex = rankings.indexOf(item);
          const isTop3 = actualIndex < 3;
          const badgeColor = isTop3 ? badgeColors[actualIndex] : "bg-white/20 dark:bg-white/10";
          const cardBackground = isTop3
            ? top3Backgrounds[actualIndex]
            : "bg-white/10 dark:bg-white/5";

          return (
            <div
              key={item.device}
              className={`flex items-center justify-between px-5 py-4 rounded-xl 
                          ${cardBackground} backdrop-blur-md 
                          border border-white/20 dark:border-white/10 
                          shadow-md hover:scale-[1.015] transition-transform`}
            >
              {/* Left: Rank + Device */}
              <div className="flex items-center gap-4">
                <div className={`text-sm sm:text-base font-bold px-3 py-1 rounded-full text-gray-900 dark:text-white ${badgeColor}`}>
                  #{actualIndex + 1}
                </div>
                <div className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                  {item.device}
                </div>
              </div>

              {/* Right: Score */}
              <div className="text-sm sm:text-base font-semibold px-3 py-1 rounded-full 
                              bg-indigo-100 dark:bg-indigo-900 
                              text-indigo-700 dark:text-indigo-300">
                {item.score}
              </div>
            </div>
          );
        })}

        {/* Liquid Glass Toggle Button */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 self-center px-6 py-2 text-sm font-medium rounded-xl 
                     bg-white/10 dark:bg-white/5 backdrop-blur-md 
                     border border-white/20 dark:border-white/10 
                     text-gray-900 dark:text-white 
                     shadow-[inset_0_0_0.5px_rgba(255,255,255,0.2)] 
                     hover:shadow-[0_0_10px_rgba(255,255,255,0.15)] 
                     transition-all duration-300"
        >
          {showAll ? "Show Less ▲" : "Show More ▼"}
        </button>
      </div>
    </section>
  );
}