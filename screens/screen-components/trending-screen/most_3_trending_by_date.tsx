import { useState, useEffect } from "react";

const most_3_trending_by_date = (animeSeries, date) => {
  const currentDate = date ? new Date(date).getDate() : new Date().getDate();
  const currentDateTrending = animeSeries.filter((serie) => {
    if (currentDate === new Date(serie.createdAt).getDate()) {
      return serie;
    }
  });

  const [first, setFirst] = useState({
    title: 'Loading...',
    total_votes: 0,
    body: 'Loading...',
    url: 'https://loading.io/asset/668421',
  });
  const [second, setSecond] = useState({
    title: 'Loading...',
    total_votes: 0,
    body: 'Loading...',
    url: 'https://loading.io/asset/668421',
  });
  const [third, setThird] = useState({
    title: 'Loading...',
    total_votes: 0,
    body: 'Loading...',
    url: 'https://loading.io/asset/668421',
  });

  useEffect(() => {
    const sortedSeries = [...currentDateTrending].sort((a, b) => b.total_votes - a.total_votes);
    if (sortedSeries[0]) setFirst(sortedSeries[0]);
    if (sortedSeries[1]) setSecond(sortedSeries[1]);
    if (sortedSeries[2]) setThird(sortedSeries[2]);
  }, [animeSeries]);

  return { first, second, third };
};

export default most_3_trending_by_date;
