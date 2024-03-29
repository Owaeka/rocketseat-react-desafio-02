import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleSelectedGenreId(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar 
        handleClickButton={handleSelectedGenreId}
        selectedGenreId={selectedGenreId}
      />

      <Content 
        selectedGenreId={selectedGenreId}
      />
    </div>
  )
}