import { Link } from 'react-router-dom';

export const Card = ({ movie }) => {
  return (
    <div className='max-w-sm border border-gray-200 rounded-lg shadow m-5'>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
          className='rounded-t-lg'
          alt={movie.title}
        />
      </Link>
      <div className='font-bold text-xl p-3 pb-0'>{movie.title}</div>
      <div className='p-3'>{movie.release_date}</div>
      <div className='px-3 pb-3'>{movie.overview}</div>
    </div>
  );
};
