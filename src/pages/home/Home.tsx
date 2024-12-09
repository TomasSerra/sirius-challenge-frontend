import Sidebar from "@/components/layout/sidebar/Sidebar";
import styles from "./Home.module.scss";
import BannerCarousel from "@/components/ui/banner/carousel/BannerCarousel";
import GameCardsPaginate from "@/components/layout/paginate/GameCardsPaginate";
import { useParams, useSearchParams } from "react-router-dom";

const Home = () => {
  const { genre } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search") || "";

  return (
    <>
      <Sidebar />
      <div className={styles["home-container"]}>
        {!genre && !query && (
          <section>
            <BannerCarousel />
          </section>
        )}
        <section>
          {genre ? (
            <h1>{genre}</h1>
          ) : query ? (
            <h1>Search Results for: "{query}"</h1>
          ) : (
            <h1>All Games</h1>
          )}
          <GameCardsPaginate genre={genre} search={query} />
        </section>
      </div>
    </>
  );
};

export default Home;
