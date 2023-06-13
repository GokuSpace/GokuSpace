import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useInfiniteFetch<T>(
  endpoint: string,
  params,
  count = 2,
) {
  const [data, setData] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(endpoint, {
        params: {
          ...params,
          count,
          page: currentPage,
        },
      });
      const newData = res.data;
      if (newData.length === 0) {
        setHasMoreData(false);
      } else {
        setData((prevData) => [...prevData, ...res.data]);
        setCurrentPage((prevPage) => prevPage + 1);
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  console.log('data', data);

  const loadMoreData = () => {
    if (!isLoading && hasMoreData && data.length >= count) {
      getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading, loadMoreData };
}
