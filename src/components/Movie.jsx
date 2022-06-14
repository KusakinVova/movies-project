import './Movie.css';

function Movie (props) {
  const {
    Title : title,
    imdbID: id,
    Year:  year,
    Type: type,
    Poster: poster
  } = props;

  return (
      <div className="card" id={id}>
        <div className="card-image waves-effect waves-block waves-light">
          {
            poster === 'N/A' ?
              <img className="card-activator" src={"https://via.placeholder.com/300x423.png?text="+ title} alt={title} />
            :
              <img className="card-activator" src={poster} alt={title} />
          }
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{title}</span>
          <p>{year} <span className="right">{type}</span></p>
        </div>
      </div>
  );
}
export {Movie};
