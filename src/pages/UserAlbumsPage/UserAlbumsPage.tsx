import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetAlbumsQuery } from '../../entities/album/api/albumsApi';
import { AlbumsList } from '../../widgets/AlbumsList/AlbumsList';

export const UserAlbumsPage: FC = () => {
  const { id } = useParams();
  const uid = Number(id) || 0;
  const { data: albums = [] } = useGetAlbumsQuery(uid);
  return (
    <section>
      <h2>Albums of user #{uid}</h2>
      <AlbumsList albums={albums} />
    </section>
  );
};
