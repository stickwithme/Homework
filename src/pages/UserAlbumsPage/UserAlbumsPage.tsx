import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { mockAlbums } from '../../lib/mocks/albums.mock';
import { AlbumsList } from '../../widgets/AlbumsList/AlbumsList';

export const UserAlbumsPage: FC = () => {
  const { userId } = useParams();
  const uid = Number(userId);
  const albums = useMemo(() => mockAlbums.filter(a => a.userId === uid), [uid]);
  return (
    <section>
      <h2>Albums of user #{uid}</h2>
      <AlbumsList albums={albums} />
    </section>
  );
};
