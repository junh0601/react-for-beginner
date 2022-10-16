import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year ")
      .then((data) => data.json())
      .then((json) => {
        setMovie(json.data.movies);
        console.log(movie);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Link to="/">뒤로가기</Link>
      <h1>FakeFlix</h1>
      <div>
        {loading ? (
          "Loading...."
        ) : (
          <ul>
            {movie.map((item) => (
              <article key={item.id}>
                <header>
                  <Link to={`/movie/${item.id}`}>{item.title_long}</Link>
                </header>

                <center>
                  <img src={item.medium_cover_image} alt="" />
                </center>
                <footer>
                  <small>{item.summary.length > 250 ? item.summary.slice(0, 250) + "..." : item.summary}</small>
                </footer>
              </article>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Movie;
