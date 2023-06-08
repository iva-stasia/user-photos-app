import { Outlet, Link, useNavigation } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Root() {
  const {state} = useNavigation();

  return (
    <>
      <nav className="nav-list">
        <Link to={'/'} className="users-btn">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/sf-regular-filled/48/666666/home.png"
            alt="home"
          />
        </Link>
        <Breadcrumbs />
      </nav>
      <div className={state === 'loading' ? 'loading' : ''}>
        {state === 'loading' && <div className="loader"></div>}
        <Outlet />
      </div>
    </>
  );
}
