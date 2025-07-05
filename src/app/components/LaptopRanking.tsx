'use client';
import { useState } from "react";

export default function LaptopRanking() {
  const year = 2025;
  const [showAll, setShowAll] = useState(false);

  const laptops = [
    { device: "Apple MacBook Pro 14\" (M4, 2024)", score: 136 },
    { device: "Apple MacBook Pro 14\" (M3 Pro, 2023)", score: 135 },
    { device: "Apple MacBook Air 15\" (M2, 2023)", score: 135 },
    { device: "Microsoft Surface Laptop 13\" (2025)", score: 135 },
    { device: "Lenovo ThinkPad X9 Aura", score: 133 },
    { device: "Apple MacBook Air 13\" (2022)", score: 121 },
    { device: "HP Spectre X360 (2024)", score: 113 },
    { device: "Lenovo ThinkPad X1 Carbon Gen 12", score: 111 },
    { device: "Dell Latitude 9440 2-in-1", score: 103 },
    { device: "Acer Chromebook Spin 714", score: 101 },
  ];

  const top3Backgrounds = [
    "bg-yellow-100/30 dark:bg-yellow-300/10",
    "bg-gray-200/30 dark:bg-gray-400/10",
    "bg-orange-100/30 dark:bg-orange-300/10",
  ];

  const badgeColors = ["bg-yellow-300", "bg-gray-300", "bg-orange-300"];
  const visible = showAll ? laptops : laptops.slice(0, 3);

  return (
    <section className="w-full max-w-3xl px-4">
      <h2 className="text-3xl font-bold mb-8 text-center tracking-tight border-b pb-2 border-gray-300 dark:border-gray-700">
        💻 Laptop ({year})
      </h2>

      <div className="flex flex-col gap-4">
        {visible.map((item, index) => {
          const actualIndex = laptops.indexOf(item);
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
              <div className="flex items-center gap-4">
                <div className={`text-sm sm:text-base font-bold px-3 py-1 rounded-full text-gray-900 dark:text-white ${badgeColor}`}>
                  #{actualIndex + 1}
                </div>
                <div className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                  {item.device}
                </div>
              </div>

              <div className="text-sm sm:text-base font-semibold px-3 py-1 rounded-full 
                              bg-indigo-100 dark:bg-indigo-900 
                              text-indigo-700 dark:text-indigo-300">
                {item.score}
              </div>
            </div>
          );
        })}

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
'use client';
import { useState } from "react";

export default function LaptopRanking() {
  const year = 2025;
  const [showAll, setShowAll] = useState(false);

  const laptops = [
    { device: "MacBook Pro 16-inch M4 Max", score: 4250 },
    { device: "Dell XPS 17 (2025)", score: 3890 },
    { device: "ASUS ROG Zephyrus G16", score: 3820 },
    { device: "Lenovo ThinkPad X1 Carbon Gen 13", score: 3650 },
    { device: "Surface Laptop Studio 3", score: 3420 },
    { device: "HP Spectre x360 16", score: 3180 },
    { device: "Razer Blade 15 Advanced", score: 3050 },
    { device: "Acer Swift 5 (2025)", score: 2890 },
    { device: "MSI Creator Z17", score: 2750 },
    { device: "Framework Laptop 16", score: 2640 },
  ];

  const top3Backgrounds = [
    "bg-yellow-100/30 dark:bg-yellow-300/10",
    "bg-gray-200/30 dark:bg-gray-400/10",
    "bg-orange-100/30 dark:bg-orange-300/10",
  ];

  const badgeColors = ["bg-yellow-300", "bg-gray-300", "bg-orange-300"];
  const visible = showAll ? laptops : laptops.slice(0, 3);

  return (
    <section className="w-full max-w-3xl px-4">
      <h2 className="text-3xl font-bold mb-8 text-center tracking-tight border-b pb-2 border-gray-300 dark:border-gray-700">
        💻 Laptop ({year})
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

      {!showAll && laptops.length > 3 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            Show All {laptops.length} Devices
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
