import { Link } from 'react-router-dom';

type BreadcrumbsProps = {
  pageName?: string,
  addClassName?: string,
}

function Breadcrumbs({pageName, addClassName}: BreadcrumbsProps): JSX.Element {
  return (
    <ul className={`breadcrumbs page-content__breadcrumbs ${addClassName}`}>
      <li className="breadcrumbs__item">
        <Link className="link" to="/">Главная</Link>
      </li>
      <li className="breadcrumbs__item">
        <Link className="link" to="/">Каталог</Link>
      </li>
      {
        pageName
      &&
        <li className="breadcrumbs__item">
          <Link className="link" to="">{pageName}</Link>
        </li>
      }
    </ul>
  );
}

export default Breadcrumbs;
