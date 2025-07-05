import Header from "./components/Header";
import Footer from "./components/Footer";
import SmartphoneRanking from "./components/SmartphoneRanking";
import TabletRanking from "./components/TabletRanking";
import LaptopRanking from "./components/LaptopRanking";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-[#111] text-gray-800 dark:text-gray-100">
      <Header />

      <div className="flex flex-col gap-20 w-full items-center">
        <SmartphoneRanking />
        <TabletRanking />
        <LaptopRanking />
      </div>

      <Footer />
    </div>
  );
}