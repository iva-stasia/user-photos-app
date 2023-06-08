import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserList, { loader as usersLoader } from './routes/UserList';
import AlbumList, { loader as albumsLoader } from './routes/AlbumList';
import Photos, { loader as photosLoader } from './routes/Photos';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <UserList />,
        loader: usersLoader,
      },
      {
        path: 'albums/:userId',
        element: <AlbumList />,
        loader: albumsLoader,
      },
      {
        path: 'albums/:userId/photos/:albumId',
        element: <Photos />,
        loader: photosLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
