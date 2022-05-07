import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { COUNT_SHOW_GUITARS_IN_PAGE, FIRST_PAGE_INDEX } from '../../consts';
import { useAppSelector } from '../../hooks/hooks';
import { getCountGuitars } from '../../store/guitars-process/selector';
import { getNumberArrayByCount } from '../../utils/utils';

type PaginationProps = {
  currentPage: number,
}

function Pagination({currentPage = 1}: PaginationProps): JSX.Element {
  const [pages, setPages] = useState<number[]>([]);
  const countGuitars = useAppSelector(getCountGuitars);

  useEffect(() => {
    const pageCount = Math.ceil(countGuitars/COUNT_SHOW_GUITARS_IN_PAGE);
    const pagesNumberList: number[] = getNumberArrayByCount(pageCount);

    setPages(pagesNumberList);
  }, [countGuitars]);

  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">
        {
          currentPage > FIRST_PAGE_INDEX
        &&
          <li className="pagination__page pagination__page--prev" id="prev">
            <Link to={`/catalog/page/${currentPage - 1}`} className="link pagination__page-link">Назад</Link>
          </li>
        }
        {pages.map((page) => (
          <li className={`pagination__page ${currentPage === page && 'pagination__page--active'}`} key={page}>
            <Link to={`/catalog/page/${page}`} className="link pagination__page-link" href={'/'}>{page}</Link>
          </li>
        ))}
        {
          currentPage !== pages.length
        &&
          <li className="pagination__page pagination__page--next" id="next">
            <Link to={`/catalog/page/${currentPage + 1}`} className="link pagination__page-link">Далее</Link>
          </li>
        }
      </ul>
    </div>
  );
}

export default Pagination;
