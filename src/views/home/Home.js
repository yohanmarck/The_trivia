import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({ categories }) => (
  <section className={'home-container'}>
    <h1 className={'title'}>Homepage</h1>
    {categories.length > 0 && (
      <section className={'home-link'}>
        {categories.map(category => (
          <Link className={'cat-link'} to={`/categories/${category.id}`} key={category.id}>
            {category.title}
          </Link>
        ))}
      </section>
    )}
  </section>
);

Home.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      clues_count: PropTypes.number
    }),
  ),
}

export default Home;