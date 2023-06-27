import GenreCard from "../components/Cards/GenreCard";

const genres = [
  {
    "name": "аниме",
    "slug": "anime"
  },
  {
    "name": "биография",
    "slug": "biography"
  },
  {
    "name": "боевик",
    "slug": "action"
  },
  {
    "name": "вестерн",
    "slug": "western"
  },
  {
    "name": "военный",
    "slug": "war"
  },
  {
    "name": "детектив",
    "slug": "detective"
  },
  {
    "name": "детский",
    "slug": "children"
  },
  {
    "name": "для взрослых",
    "slug": "adult"
  },
  {
    "name": "документальный",
    "slug": "documentary"
  },
  {
    "name": "драма",
    "slug": "drama"
  },
  {
    "name": "игра",
    "slug": "game"
  },
  {
    "name": "история",
    "slug": "history"
  },
  {
    "name": "комедия",
    "slug": "comedy"
  },
  {
    "name": "концерт",
    "slug": "concert"
  },
  {
    "name": "короткометражка",
    "slug": "short-film"
  },
  {
    "name": "криминал",
    "slug": "crime"
  },
  {
    "name": "мелодрама",
    "slug": "melodrama"
  },
  {
    "name": "музыка",
    "slug": "music"
  },
  {
    "name": "мультфильм",
    "slug": "animation"
  },
  {
    "name": "мюзикл",
    "slug": "musical"
  },
  {
    "name": "новости",
    "slug": "news"
  },
  {
    "name": "приключения",
    "slug": "adventure"
  },
  {
    "name": "реальное ТВ",
    "slug": "reality-tv"
  },
  {
    "name": "семейный",
    "slug": "family"
  },
  {
    "name": "спорт",
    "slug": "sport"
  },
  {
    "name": "ток-шоу",
    "slug": "talk-show"
  },
  {
    "name": "триллер",
    "slug": "thriller"
  },
  {
    "name": "ужасы",
    "slug": "horror"
  },
  {
    "name": "фантастика",
    "slug": "science-fiction"
  },
  {
    "name": "фильм-нуар",
    "slug": "film-noir"
  },
  {
    "name": "фэнтези",
    "slug": "fantasy"
  },
  {
    "name": "церемония",
    "slug": "ceremony"
  }
];

const HomePage = () => {


  return (
    <div className="w-[1030px] bg-white">
      <h1>HomePage</h1>
      {genres.map((genre) => (
        <GenreCard key={genre.slug} genre={genre} />
      ))}
    </div>
  );
};

export default HomePage;