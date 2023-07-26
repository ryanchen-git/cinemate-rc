import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';

export const Header = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const activeClass = 'text-blue-600';

  function handleSubmit(e) {
    e.preventDefault();
    return navigate(`/search/${keyword}`);
  }

  return (
    <header className='flex justify-between items-center border-b p-2 px-4'>
      <Link to='' className='flex items-center gap-x-2'>
        <img src={Logo} alt='Cinemate Logo' className='w-12' />
        <span className='font-bold text-lg'>Cinemate</span>
      </Link>

      <div className='flex justify-center gap-x-6 font-semibold cursor-pointer'>
        <NavLink
          to=''
          className={({ isActive }) => (isActive ? activeClass : '')}
        >
          Home
        </NavLink>
        <NavLink
          to='/movie/upcoming'
          className={({ isActive }) => (isActive ? activeClass : '')}
        >
          Upcoming
        </NavLink>
        <NavLink
          to='/movie/popular'
          className={({ isActive }) => (isActive ? activeClass : '')}
        >
          Popular
        </NavLink>
        <NavLink
          to='/movie/top_rated'
          className={({ isActive }) => (isActive ? activeClass : '')}
        >
          Top Rated
        </NavLink>
      </div>

      <div className=''>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='keyword'
            className='border rounded-md h-9 p-2 bg-slate-50'
            placeholder='search...'
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
        </form>
      </div>
    </header>
  );
};
