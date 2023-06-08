import { useLoaderData } from 'react-router-dom';
import UserCard from '../components/UserCard';

export async function loader() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const json = await response.json();

  const users = json.map((user) => {
    return {
      ...user,
      avatar: `https://api.dicebear.com/6.x/big-ears/svg?seed=${user.username}`,
    };
  });

  return users;
}

export default function UserList() {
  const users = useLoaderData();

  return (
    <div className='cards-container'>
      {users.map(({ avatar, name, id }) => (
        <UserCard key={id} avatar={avatar} name={name} id={id} />
      ))}
    </div>
  );
}
