import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';

const Home = () => {
  const [topics, setTopics] = useState([])
  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/quiz')
      .then(res => res.json())
      .then(data => setTopics(data.data))
    }, [])

  return (
    <div>
      <Header></Header>
      <div className="mx-14 topics grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {topics.map(t=><Topic key={t.id} topic={t}></Topic>)}
      </div>

    </div>
  );
};

export default Home;