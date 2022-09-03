import { useState, useEffect } from "react";
import { fetchSearchMovie } from "shared/Api/fetchApi";
import { useSearchParams } from "react-router-dom";
import Loader from "components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MovieSearchForm from "components/MovieSearchForm/MovieSearchForm";
import MoviesList from "components/MoviesList/MoviesList";

const Movies = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    useEffect(() => {
        const getSearchMovie = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                }));
                const data = await fetchSearchMovie(query);
                if (data.total_result === 0) {
                    setState({ error: toast.info(`No results for ${query}`) });
                }
                setState(prevState => ({
                    ...prevState,
                    items: data.results,
                }));
            } catch (error) {
                setState(toast.error('Something went wrong...'));
            } finally {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                }));
            }
        };

        if (query) {
            getSearchMovie()
        }
    }, [query]);

    const changeSearch = ({ query }) => {
        setSearchParams({query});
    }

    const { items, loading } = state;

    return (
        <div>
            <ToastContainer autoClose={1500} position="top-center" closeOnClick />
            <MovieSearchForm onSubmit={changeSearch} />
            {items.length > 0 && <MoviesList items={items} />}
            {loading && <Loader/>}
        </div>
    )
}

export default Movies;