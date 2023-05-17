import "./Movie.css";
import PropTypes from "prop-types";
function Movie({
  Title: title,
  imdbID: id,
  Year: year,
  Type: type,
  Poster: poster,
}) {
  return (
    <div className="card" id={id}>
      <div className="card-image waves-effect waves-block waves-light">
        {poster === "N/A" ? (
          <img
            className="card-activator"
            src={"https://via.placeholder.com/300x423.png?text=" + title}
            alt={title}
          />
        ) : (
          <img className="card-activator" src={poster} alt={title} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  Title: PropTypes.string,
  imdbID: PropTypes.string,
  Year: PropTypes.string,
  Type: PropTypes.string,
  Poster: PropTypes.string,
};

export { Movie };
