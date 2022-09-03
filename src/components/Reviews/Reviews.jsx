import css from './Reviews.module.css';

const Reviews = ({ items }) => {
    const elements = items.map(({ id, author, content }) => (
        <li key={id}>
            <p className={css.author}>Author: {author}</p>
            <p className={css.content}>Content: {content}</p>
        </li>
    ));
    return <ul>{elements}</ul>;
};

export default Reviews;