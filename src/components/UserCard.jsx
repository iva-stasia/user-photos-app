import { Link } from 'react-router-dom';

export default function UserCard({ avatar, name, id }) {
  return (
    <div className="card">
      <img src={avatar} className="avatar" />
      <h2 className="username">{name}</h2>
      <Link to={`albums/${id}`} className="album-btn">
        Albums
      </Link>
    </div>
  );
}
