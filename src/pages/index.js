import AboutUs from "@/components/AboutUs";
import Baner from "@/components/Baner";
import Newsletter from "@/components/Newsletter";
import PopularDishes from "@/components/PopularDishes";
import Recently from "@/components/Recently";

export default function Home() {
  return (
    <>
      <Baner />
      <AboutUs />
      <PopularDishes />
      <Recently />
      <Newsletter />
    </>
  );
}
