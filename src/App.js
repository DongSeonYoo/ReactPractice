import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const url =
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch(url);
    const movie = await res.json();

    setMovies(movie.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image}></img>
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
