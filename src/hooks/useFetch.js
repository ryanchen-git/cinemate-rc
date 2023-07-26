import { useEffect, useState } from 'react';

export const useFetch = (apiPath, keyword) => {
  const [data, setData] = useState([]);
  let url = '';

  if (apiPath === 'search') {
    url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=954a2ba02b61f9f81dad2f8ed9af607c`;
  } else {
    url = `https://api.themoviedb.org/3/movie/${apiPath}?api_key=954a2ba02b61f9f81dad2f8ed9af607c`;
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json.results);
    };
    fetchData();
  }, [url]);

  return data;
};
