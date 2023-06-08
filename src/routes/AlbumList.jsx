import { useLoaderData } from 'react-router-dom';
import AlbumCard from '../components/AlbumCard';

export async function loader({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${params.userId}`
  );
  const json = await response.json();

  const albums = json.map((album) => {
    return {
      ...album,
      cover: `https://api.dicebear.com/6.x/shapes/svg?seed=${album.id}`,
    };
  });
  return albums;
}

export default function AlbumList() {
  const albums = useLoaderData();

  return (
    <div className="albums-container">
      {albums.map(({ cover, title, id }) => (
        <AlbumCard key={id} cover={cover} title={title} id={id} />
      ))}
    </div>
  );
}
