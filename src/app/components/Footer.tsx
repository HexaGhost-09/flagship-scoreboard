export default function Footer() {
  const currentYear = new Date().getFullYear();
  const startYear = 2025;
  const yearDisplay = currentYear > startYear ? `${startYear}–${currentYear}` : `${startYear}`;

  return (
    <footer className="w-full mt-24 border-t border-gray-200 dark:border-gray-800 pt-6 pb-10 text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="max-w-screen-md mx-auto px-4 flex flex-col items-center gap-2">
        <p className="tracking-wide font-medium">
          © {yearDisplay} <span className="text-purple-500 font-semibold">Flagship Scoreboard</span>
        </p>
        <p className="text-xs opacity-75">
          Built for clarity. Crafted with performance.
        </p>
      </div>
    </footer>
  );
}