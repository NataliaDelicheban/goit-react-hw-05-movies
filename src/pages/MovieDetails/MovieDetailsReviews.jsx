import { useState, useEffect } from "react";
import { fetchMovieReviews } from "shared/Api/fetchApi";
import { useParams } from "react-router-dom";
import Reviews from "components/Reviews/Reviews";
import css from "../MovieDetails/MovieDetailsReviews.module.css";

const MovieDetailsReviews = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });
    const { id } = useParams();

    useEffect(() => {
        const getMovieReviews = async () => {
            try {
            setState(prevState => ({
                ...prevState,
                loading: true,
                error: null,
            }));
                
                const data = await fetchMovieReviews(id);
                setState(prevState => ({
                        ...prevState,
                        items: data.results,
                }))
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

        getMovieReviews();
    }, [setState, id]);

    const { items } = state;
    
    const reviews = items.length > 0 ? (<Reviews items={items} />) : (
        <p className={css.message}>Not reviews for this movie, sorry...</p>
    );

    return <div>{reviews}</div>;
}

export default MovieDetailsReviews;