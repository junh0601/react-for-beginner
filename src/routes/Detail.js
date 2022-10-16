import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((data) => data.json())
      .then((json) => {
        setMovie(json.data.movie);
        setLoading(false);
        console.log(json);
      });
  }, []);
  return (
    <div>
      <Link to="/movie">뒤로가기</Link>
      <h1>FakeFlix</h1>
      <div>
        {loading ? (
          "loading....."
        ) : (
          <div>
            <article>
              <header>
                <h1>{movie.title}</h1>
              </header>
              <div>
                <center>
                  <img src={movie.medium_cover_image} alt={movie.title} />
                </center>
              </div>
              <ul>
                <li>연도 : {movie.year}</li>
                <li>rating : {movie.rating}</li>
                <li>길이 : {movie.runtime}분</li>
                <a href={movie.url}>더보기</a>
              </ul>
              <footer>{movie.description_full}</footer>
            </article>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
