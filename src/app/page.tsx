import { HeroSection } from "@/components/sections/home/heroSection";
import { BlogSection } from "@/components/sections/home/blogSection";
import Produtos from "@/components/sections/home/produtos";
import SobreNos from "@/components/sections/home/sobrenos";
import InstagramSection from "@/components/sections/home/instagram";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Produtos />
      <SobreNos />
      <BlogSection />
      <InstagramSection />
    </>
  );
}
