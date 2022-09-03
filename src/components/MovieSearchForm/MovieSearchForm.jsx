import { useState } from "react";
import css from './MovieSearchForm.module.css'

const MovieSearchForm = ({ onSubmit }) => {
    const [state, setState] = useState({
        query: "",
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState({
            ...state,
            [name]: value,
        })
    };

    const handleSubmit = (e) => {
        e.preventdefault();
        onSubmit({ ...state });
        setState({
            query: "",
        })
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input className={css.input} name="query" value={state.query} onChange={handleChange} placeholder="Search movie" required />
            <button className={css.btn} type="submit">Search</button>
        </form>
    );
};

export default MovieSearchForm;