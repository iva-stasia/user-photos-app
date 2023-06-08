import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${params.albumId}`
    );
    const photos = await response.json();

    return photos;
  } catch (error) {
    console.log(error);
  }
}

export default function AlbumList() {
  const photos = useLoaderData();

  return (
    <div className="photos-container">
      {photos.map(({ thumbnailUrl, id }) => (
        <img key={id} src={thumbnailUrl} alt="" />
      ))}
    </div>
  );
}
