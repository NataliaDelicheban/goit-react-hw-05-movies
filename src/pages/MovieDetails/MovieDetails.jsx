import { useState, useEffect } from "react";
import { Link, Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "shared/Api/fetchApi";
import no_poster from "../../images/no-poster.jpg";
import css from "../MovieDetails/MovieDetails.module.css";


const MovieDetails = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });
    const { id } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(location.state.from);
    const location = useLocation();
    const from = location.state?.from || '/movies';

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));
                
                const data = await fetchMovieDetails(id);
                setState(prevState => ({
                        ...prevState,
                        items: [...prevState.items, data],
                }));
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }));
            } finally {
                setState(prevState => {
                    return {
                        ...prevState,
                        loading: false,
                    };
                });
            }
        };
        getMovieDetails();
    }, [id]);

    const { items } = state;
        
    return (
        <div className={css.wrapper}>
            <button className={css.btn} onClick={goBack}>Go back</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <img
                            width="400px"
                            src={
                                item.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                                    : no_poster
                            }
                            alt={item.title}
                        />
                        <h2>{item.title}</h2>
                        <p className={css.score}>User score: {Math.round((item.vote_average / 10) * 100)}%</p>
                        <h3>Overview</h3>
                        <p className={css.overview}>{item.overview}</p>
                        <h3>Genres</h3>
                        <p className={css.genres}>
                            {' '}
                            {item.genres.map(item => item.name).join(', ')}
                        </p>
                    </li>
                ))}
            </ul>
            <Link className={css.link} state={{ from }} to={`/movies/${id}/cast`}>Cast</Link>
            <Link className={css.link} state={{ from }} to={`/movies/${id}/reviews`}>Reviews</Link>
            <Outlet />
        </div>
    );
};

export default MovieDetails;