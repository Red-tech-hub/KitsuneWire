import React from 'react';

import AnimeCard from '@/components/animeCard';
import { isEmpty } from 'lodash';

interface AnimeListProps {
    data: Record<string, any>[];
    title: string;
}

const AnimeList: React.FC<AnimeListProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((Anime) => (
            <AnimeCard key={Anime.id} data={Anime} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnimeList;