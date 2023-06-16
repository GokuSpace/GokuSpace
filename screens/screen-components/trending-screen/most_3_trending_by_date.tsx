import { useState, useEffect } from "react";

const most_3_trending_by_date = (animeSeries, date) => {
  const currentDate = date ? new Date(date).getDate() : new Date().getDate();
  const currentDateTrending = animeSeries.filter((serie) => {
    return currentDate === new Date(serie.createdAt).getDate();
  });

  const sortArray = (arr) =>{
    return arr.sort((a, b) => b.title !== a.title && b.total_votes - a.total_votes);
  }

  const [first, setFirst] = useState({
    title: 'Loading...',
    total_votes: 0,
    body: 'Loading...',
    url: './assets/Bean Eaterpx.gif',
  });
  const [second, setSecond] = useState({
    title: 'Loading...',
    total_votes: 0,
    body: 'Loading...',
    url: './assets/Bean Eaterpx.gif',
  });
  const [third, setThird] = useState({
    title: 'Loading...',
    total_votes: 0,
    body: 'Loading...',
    url: './assets/Bean Eaterpx.gif',
  });

  useEffect(() => {
    const todaySeries = [...currentDateTrending];

    const sortedSeries = sortArray(todaySeries);
    setFirst(sortedSeries[0] || first);
    setSecond(sortedSeries[1] || second);
    setThird(sortedSeries[2] || third);
  }, [currentDateTrending]);


  return { first, second, third };
};

export default most_3_trending_by_date;
