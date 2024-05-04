// components/ThumbnailCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowTopRight } from 'components/atoms/Iconset';
import style from './ThumbnailCard.module.scss';

const ThumbnailCard = ({ movie, className }) => {
  const cloudinaryUrl = `https://res.cloudinary.com/dzl9moz06/image/upload/c_scale,w_300/movie-cat/movies/${movie.landscapeImage}`;

  return (
    <Link to={`/movie/${movie._id}`} className={`${style.container} ${className}`}>
      <div className={style.header}>
        <h2 className={style.heading}>View Details</h2>
        <div className={`${style.icon} ${style._allowCascade}`}>
          <ArrowTopRight />
        </div>
      </div>
      <img className={style.image} src={cloudinaryUrl} alt={movie.title} />
      <div className={style.details}>
        <p className={style.title}>{movie.title}</p>
        <p className={style.date}>{new Date(movie.releaseDate).toLocaleDateString()}</p>
      </div>
    </Link>
  );
};

export default ThumbnailCard;