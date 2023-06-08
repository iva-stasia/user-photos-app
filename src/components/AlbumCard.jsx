import { Link } from 'react-router-dom';

export default function UserCard({ cover, title, id }) {
  return (
    <div className="card">
      <img src={cover} className="cover" />
      <h2 className="title">{title}</h2>
      <Link to={`photos/${id}`} className="album-btn">
        Photos
      </Link>
    </div>
  );
}
