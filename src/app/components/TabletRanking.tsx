
'use client';
import { useState } from "react";

export default function TabletRanking() {
  const year = 2025;
  const [showAll, setShowAll] = useState(false);

  const tablets = [
    { device: "Apple iPad Pro 13 (2024)", score: 3488 },
    { device: "Apple iPad Pro 11 (2024)", score: 3460 },
    { device: "Apple iPad Pro 12.9 (2022)", score: 2618 },
    { device: "Samsung Galaxy Tab S10 Ultra", score: 1902 },
    { device: "Vivo Pad 3 Pro", score: 1886 },
    { device: "Lenovo Legion Y700 (2025)", score: 1661 },
    { device: "OnePlus Pad 2", score: 1623 },
    { device: "Xiaomi Pad 7 Pro", score: 1057 },
    { device: "Google Pixel Tablet", score: 721 },
    { device: "Samsung Galaxy Tab S9 FE", score: 295 },
  ];

  const top3Backgrounds = [
    "bg-yellow-100/30 dark:bg-yellow-300/10",
    "bg-gray-200/30 dark:bg-gray-400/10",
    "bg-orange-100/30 dark:bg-orange-300/10",
  ];

  const badgeColors = ["bg-yellow-300", "bg-gray-300", "bg-orange-300"];
  const visible = showAll ? tablets : tablets.slice(0, 3);

  return (
    <section className="w-full max-w-3xl px-4">
      <h2 className="text-3xl font-bold mb-8 text-center tracking-tight border-b pb-2 border-gray-300 dark:border-gray-700">
        📟 Tablet ({year})
      </h2>

      <div className="space-y-4">
        {visible.map((item, index) => (
          <div
            key={item.device}
            className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
              index < 3 ? top3Backgrounds[index] : "bg-white/50 dark:bg-gray-800/50"
            } border-gray-200 dark:border-gray-700`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-gray-800 ${
                  index < 3 ? badgeColors[index] : "bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
                }`}
              >
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {item.device}
              </h3>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {item.score}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Score
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && tablets.length > 3 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            Show All {tablets.length} Devices
          </button>
        </div>
      )}

      {showAll && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(false)}
            className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            Show Top 3 Only
          </button>
        </div>
      )}
    </section>
  );
}
