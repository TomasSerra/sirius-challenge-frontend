import Sidebar from "@/components/layout/sidebar/Sidebar";
import styles from "./Home.module.scss";
import BannerCarousel from "@/components/ui/banner/carousel/BannerCarousel";
import GameCardsPaginate from "@/components/layout/paginate/GameCardsPaginate";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GenreInfo } from "@/types/genresInfo";
import { getGenres } from "@/utils/DataMapper";

const Home = () => {
  const { genre } = useParams();
  const [genres, setGenres] = useState<GenreInfo[]>([]);
  const [loadingGenres, setLoadingGenres] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search") || "";

  const getGenreName = (): string => {
    return genre
      ? genre.replace(/-/g, " ").charAt(0).toUpperCase() +
          genre.replace(/-/g, " ").slice(1)
      : "";
  };

  const genreName = getGenreName();

  const fetchGenres = async () => {
    getGenres()
      .then((response) => {
        setGenres(response);
        setLoadingGenres(false);
      })
      .catch((error) => {
        console.error("Error fetching genres:", error);
        setLoadingGenres(false);
      });
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <>
      <Sidebar genres={genres} loading={loadingGenres} />
      <div className={styles["home-container"]}>
        {!genre && !query && (
          <section>
            <BannerCarousel />
          </section>
        )}
        <section>
          {genre ? (
            <h1>{genreName}</h1>
          ) : query ? (
            <h1>Search Results for: "{query}"</h1>
          ) : (
            <h1>All Games</h1>
          )}
          <GameCardsPaginate genres={genres} genre={genre} search={query} />
        </section>
      </div>
    </>
  );
};

export default Home;
