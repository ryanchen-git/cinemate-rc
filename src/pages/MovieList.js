import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';

export const MovieList = ({ apiPath }) => {
  const movieParams = useParams();
  const movies = useFetch(apiPath, movieParams.name);

  return (
    <section className='max-w-7x1 mx-auto py-4'>
      <div className='flex justify-start flex-wrap'>
        {movies.length === 0 && (
          <div className='p-5'>
            <span>No movies found for {movieParams.name}</span>
          </div>
        )}
        {movies.length > 0 &&
          movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
      </div>
    </section>
  );
};
