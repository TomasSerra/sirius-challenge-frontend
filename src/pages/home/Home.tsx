import React from 'react'
import GenreCard from '@/components/ui/cards/genre/GenreCard';
import Sidebar from '@/components/layout/sidebar/Sidebar';

const Home = () => {
  return (
    <div>
      <Sidebar>
        <GenreCard text="Action" imageUrl="" />
        <GenreCard text="Adventure" imageUrl="" />
        <GenreCard text="RPG" imageUrl="" />
        <GenreCard text="Strategy" imageUrl="" />
        <GenreCard text="Simulation" imageUrl="" />
        <GenreCard text="Sports" imageUrl="" />
        <GenreCard text="Puzzle" imageUrl="" />
        <GenreCard text="Idle" imageUrl="" />
        <GenreCard text="Casual" imageUrl="" />
        <GenreCard text="Arcade" imageUrl="" />
        <GenreCard text="Racing" imageUrl="" />
        <GenreCard text="Horror" imageUrl="" />
      </Sidebar>
    </div>
  )
}

export default Home