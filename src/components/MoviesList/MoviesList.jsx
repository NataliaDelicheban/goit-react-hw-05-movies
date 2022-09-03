import { Link, useLocation } from "react-router-dom";
import no_poster from "../../images/no-poster.jpg";
import css from './MoviesList.module.css';

const MoviesList = ({ items }) => {
    const location = useLocation();
    const elements = items.map(({ id, title, poster_path }) =>
    (<li key={id} className={css.item}>
        <Link className={css.movie} state={{ from: location }} to={`/movies/${id}`}>
            <img width="200px" src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : no_poster} alt={title} />
            <p>{title}</p>
        </Link>
    </li>));
    return <ul className={css.list}>{elements}</ul>
};
export default MoviesList;

MoviesList.defaultProps = {
    items: [],
};