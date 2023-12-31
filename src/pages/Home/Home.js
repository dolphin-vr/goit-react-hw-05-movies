import { serviceGetTrends } from 'api';
import { Trends } from 'components/Trends/Trends';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [trends, setTrends] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const controllerRef = useRef();
  useEffect(() => {
   if (controllerRef.current) {
     controllerRef.current.abort();
   }
   controllerRef.current = new AbortController();

    async function getTrends() {
      try {
        setLoader(true);
        setError(false);
        const responce = await serviceGetTrends(controllerRef.current.signal);
        setTrends(responce.results);
      } catch (error) {
         if (error.code !== 'ERR_CANCELED') {setError(true)};
      } finally {
        setLoader(false);
      }
    }
    getTrends();

    return () => { controllerRef.current.abort() };
  }, []);

  return <div>
   {loader}
   {error}
   <h1>Trending today</h1>
   <Trends movies={trends} />
  </div>;
}
