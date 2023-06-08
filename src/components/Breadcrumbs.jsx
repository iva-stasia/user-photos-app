import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
  const { pathname } = useLocation();

  const pathParts = pathname.split('/').filter((crumb) => crumb !== '');
  let currentLink = '';

  function getCrumbs(pathParts) {
    const crumbs = [];
    let curCrumb = '';
    let curId = '';

    pathParts.forEach((part) => {
      if (isNaN(part)) {
        curCrumb = part;
      } else {
        curId = part;
      }

      if (curCrumb && curId) {
        currentLink += `/${curCrumb}/${curId}`;

        crumbs.push(
          <div key={curCrumb} className="crumb">
            <Link to={currentLink}>{curCrumb}</Link>
          </div>
        );

        curCrumb = '';
        curId = '';
      }
    });

    return crumbs;
  }

  const crumbs = getCrumbs(pathParts);

  return <div className="breadcrumbs">{crumbs}</div>;
}
