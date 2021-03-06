import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { COUNT_SHOW_GUITARS_IN_PAGE, FIRST_PAGE_INDEX } from '../../consts';
import { useAppSelector, useUpdateUrlWithParams } from '../../hooks/hooks';
import { getCountGuitars } from '../../store/guitars-process/selector';
import { getNumberArrayByCount } from '../../utils/utils';

type PaginationProps = {
  currentPage: number,
}

function Pagination({currentPage = 1}: PaginationProps): JSX.Element | null {
  const [pages, setPages] = useState<number[]>([]);
  const countGuitars = useAppSelector(getCountGuitars);
  const {queryParams} = useUpdateUrlWithParams();

  useEffect(() => {
    const pageCount = Math.ceil(countGuitars/COUNT_SHOW_GUITARS_IN_PAGE);
    const pagesNumberList: number[] = getNumberArrayByCount(pageCount);

    setPages(pagesNumberList);
  }, [countGuitars]);

  return (
    <div className="pagination page-content__pagination" data-testid='pagination'>
      <ul className="pagination__list">
        {
          currentPage > FIRST_PAGE_INDEX
        &&
          <li className="pagination__page pagination__page--prev" id="prev">
            <Link to={`/catalog/page/${currentPage - 1}/?${queryParams.toString()}`} className="link pagination__page-link" data-testid='page-back'>Назад</Link>
          </li>
        }
        {pages.map((page) => (
          <li data-testid={`page-${page}`} className={`pagination__page ${currentPage === page && 'pagination__page--active'}`} key={page}>
            <Link to={`/catalog/page/${page}/?${queryParams.toString()}`} className="link pagination__page-link" href={'/'}>{page}</Link>
          </li>
        ))}
        {
          currentPage !== pages.length
        &&
          <li className="pagination__page pagination__page--next" id="next">
            <Link to={`/catalog/page/${currentPage + 1}/?${queryParams.toString()}`} className="link pagination__page-link">Далее</Link>
          </li>
        }
      </ul>
    </div>
  );
}

export default Pagination;
