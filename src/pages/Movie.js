import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Movie = () => {
  const [movie, setMovie] = useState({});
  const movieParams = useParams();

  useEffect(() => {
    const getMovieData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieParams.id}?api_key=954a2ba02b61f9f81dad2f8ed9af607c`
      );
      const data = await res.json();

      setMovie(data);
    };

    getMovieData();
  }, [movieParams.id]);

  return (
    <div className='flex justify-around items-start p-10'>
      <div className='max-w-sm'>
        <img
          src={`https://image.tmdb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
          className='rounded-lg'
          alt={movie.title}
        />
      </div>
      <div className='max-w-2xl'>
        <div className='font-bold text-3xl'>{movie.title}</div>
        <div className='pt-4 text-xl'>{movie.overview}</div>
        <div className='my-6'>
          {movie.genres &&
            movie.genres.map((genere) => {
              return (
                <span className='border p-2 mr-4 rounded-md'>
                  {genere.name}
                </span>
              );
            })}
        </div>
        <ul className='space-y-4'>
          <li>Tagline: {movie.tagline}</li>
          <li>Runtime: {movie.runtime} min.</li>
          <li>Budget: {movie.budget}</li>
          <li>Revenue: {movie.revenue}</li>
          <li>
            Score: {Math.round(movie.vote_average * 10) / 10} based on{' '}
            {movie.vote_count} reviews
          </li>
          <li>Release Date: {movie.release_date}</li>
          <li>
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}/`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600'
            >
              IMDB page
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
