import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="space-y-8">
      <Navbar />
      <Hero />
      <Introduction />
      <Footer />
    </div>
  );
}
