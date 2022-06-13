import './Movie.css';

function Movie (props) {
  const {
    Title : title,
    imdbID: id,
    Year:  year,
    Type: type,
    Poster: poster
  } = props.movie;

  return (
    <div className="col s6 m3">
      <div className="card" id={id}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={poster} alt={title} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{title}</span>
          <p>{year} <span className="right">{type}</span></p>
        </div>
      </div>
    </div>
  );
}
export {Movie};
