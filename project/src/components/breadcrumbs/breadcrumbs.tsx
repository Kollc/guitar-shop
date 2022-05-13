import { Link } from 'react-router-dom';

type BreadcrumbsProps = {
  guitarName?: string,
}

function Breadcrumbs({guitarName}: BreadcrumbsProps): JSX.Element {
  return (
    <ul className="breadcrumbs page-content__breadcrumbs">
      <li className="breadcrumbs__item">
        <Link className="link" to="/">Главная</Link>
      </li>
      <li className="breadcrumbs__item">
        <Link className="link" to="/">Каталог</Link>
      </li>
      {
        guitarName
      &&
        <li className="breadcrumbs__item">
          <Link className="link" to="">{guitarName}</Link>
        </li>
      }
    </ul>
  );
}

export default Breadcrumbs;
