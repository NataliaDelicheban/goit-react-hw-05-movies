import { useState, useEffect } from "react";
import { fetchTrending } from "shared/Api/fetchApi";
import MoviesList from "components/MoviesList/MoviesList";
import Loader from "components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import css from './Home.module.css';

const Home = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    useEffect(() => {
        const getTrending = async () => {
            try {
            setState(prevState => ({
                ...prevState,
                loading: true,
                error: null,
            }));
                
                const data = await fetchTrending();
                setState(prevState => {
                    return {
                        ...prevState,
                        items: [...prevState.items, ...data.results],
                    };
                });
            } catch (error) {
                setState(toast.error('Something went wrong...'))        
            } finally {
                setState(prevState => {
                    return {
                        ...prevState,
                        loading: false,
                    };
                });
            }
        };
        getTrending();
    }, []);

    const { items, loading} = state;

    return (
        <div>
            <ToastContainer autoClose={1500} position="top-center" closeOnClick />
            <h2 className={css.title}>The most popular movies for today</h2>
            {items.length > 0 && <MoviesList items={items} />}
            {loading && <Loader />}
        </div>
    );
}

export default Home;






// const Home = () => {
//     return (
//         <div>
//             <h2>Popular movies</h2>
//             <MoviesList/>
//         </div>
//     )
// }

// export default Home;