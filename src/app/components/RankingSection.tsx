export default function RankingSection() {
  const year = 2025;

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
    { device: "Google Pixel 9 Pro", score: 82 }
  ];

  const rankColors = ["bg-yellow-400", "bg-gray-300", "bg-orange-400"];

  return (
    <section className="w-full max-w-3xl px-4">
      <h2 className="text-2xl font-semibold mb-8 text-center tracking-tight border-b pb-2 border-gray-300 dark:border-gray-700">
        Smartphone Rankings ({year})
      </h2>

      <div className="flex flex-col gap-3">
        {rankings.map((item, index) => {
          const isTop3 = index < 3;
          const rankColor = isTop3 ? rankColors[index] : "bg-gray-200 dark:bg-gray-800";

          return (
            <div
              key={item.device}
              className="flex items-center justify-between px-5 py-4 rounded-xl bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-700 hover:scale-[1.01] transition-transform duration-300 group"
            >
              {/* Left: Rank Badge + Device Name */}
              <div className="flex items-center gap-4">
                <div
                  className={`text-sm sm:text-base font-semibold px-3 py-1 rounded-full text-black dark:text-white ${rankColor}`}
                >
                  #{index + 1}
                </div>
                <div className="text-base sm:text-lg font-medium text-gray-900 dark:text-white group-hover:underline">
                  {item.device}
                </div>
              </div>

              {/* Right: Score Badge */}
              <div className="text-sm sm:text-base font-semibold px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300">
                {item.score}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}