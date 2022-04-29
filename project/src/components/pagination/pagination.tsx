import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { COUNT_SHOW_GUITARS_IN_PAGE, FIRST_PAGE_INDEX } from '../../consts';
import { getNumberArrayByCount } from '../../utils/utils';

type PaginationProps = {
  countGuitars: number,
  currentPage: number,
  setCurrentPage: (page: number) => void,
}

function Pagination({countGuitars, setCurrentPage, currentPage}: PaginationProps): JSX.Element {
  const [pages, setPages] = useState<number[]>([]);
  const history = useHistory();

  useEffect(() => {
    const pageCount = Math.ceil(countGuitars/COUNT_SHOW_GUITARS_IN_PAGE);
    const pagesNumberList: number[] = getNumberArrayByCount(pageCount);

    setPages(pagesNumberList);
  }, [countGuitars]);

  const handleClickNextButton = () => {
    setCurrentPage(currentPage + 1);
    history.push(`/catalog/page_${currentPage + 1}`);
  };

  const handleClickBackButton = () => {
    setCurrentPage(currentPage - 1);
    history.push(`/catalog/page_${currentPage - 1}`);
  };

  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">
        {
          currentPage > FIRST_PAGE_INDEX
        &&
          <li className="pagination__page pagination__page--prev" id="prev">
            <a className="link pagination__page-link" onClick={handleClickBackButton}>Назад</a>
          </li>
        }
        {pages.map((page) => (
          <li className={`pagination__page ${currentPage === page && 'pagination__page--active'}`} key={page}>
            <Link to={`/catalog/page_${page}`} className="link pagination__page-link" href={'/'} onClick={() => setCurrentPage(page)}>{page}</Link>
          </li>
        ))}
        {
          currentPage !== pages.length
        &&
          <li className="pagination__page pagination__page--next" id="next">
            <a className="link pagination__page-link" onClick={handleClickNextButton}>Далее</a>
          </li>
        }
      </ul>
    </div>
  );
}

export default Pagination;
