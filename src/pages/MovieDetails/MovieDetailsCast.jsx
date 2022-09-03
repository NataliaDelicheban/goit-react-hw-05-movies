import { useState, useEffect } from "react";
import { fetchMovieCast } from "shared/Api/fetchApi";
import { useParams } from "react-router-dom";
import no_poster from "../../images/no-poster.jpg";
import css from "../MovieDetails/MovieDetailsCast.module.css";

const MovieDetailsCast = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    const { id } = useParams();

    useEffect(() => {
        const getMovieCast = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));
                
                const data = await fetchMovieCast(id);
                setState(prevState => ({
                    ...prevState,
                    items: data.cast,
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

        getMovieCast();
    }, [setState, id]);

    const { items } = state;
    
    return (
        <div>
            <ul className={css.list}>
                {items.map(item => (
                    <li className={css.item} key={item.id}>
                        <img className={css.img}
                            width="150px"
                            src={
                                item.profile_path
                                    ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                                    : no_poster
                            }
                            alt={item.name}
                        />
                        <p className={css.name}>{item.name}</p>
                        <p className={css.character}>Character: {item.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieDetailsCast;