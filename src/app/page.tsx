import Header from "./components/Header";
import Footer from "./components/Footer";
import RankingSection from "./components/RankingSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-[#111] text-gray-800 dark:text-gray-100">
      <Header />
      <RankingSection />
      <Footer />
    </div>
  );
}