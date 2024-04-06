import { getSession } from "next-auth/react";
import { NextPageContext } from "next";
import Navbar from "@/components/navbar";
import Billboard from "@/components/billboard";
import AnimeList from "@/components/animeList";
import useMovies from "@/hooks/useAnimeList";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "@/components/infoModal";
import useInfoModal from "@/hooks/useinfoModal";
import Footer from "@/components/footer";

export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);

  if(!session)
  {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { data: anime = [] } = useMovies();
  const { data: favorites = []} = useFavorites();
  const {isOpen, closeModal} = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div>
        <AnimeList title="Trending Now" data={anime}/>
        <AnimeList title="My List" data={favorites}/>
      </div>
      <Footer />
    </>
  );
}
