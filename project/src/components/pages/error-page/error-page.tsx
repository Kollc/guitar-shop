import { Link } from 'react-router-dom';
import MainLayout from '../../main-layout/main-layout';

function ErrorPage(): JSX.Element {
  return (
    <MainLayout>
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger page-not-found__title">404 Page Not Found</h1>
          <Link className='button button--red-border button--big' to={'/'}>Вернуться на главную страницу</Link>
        </div>
      </main>
    </MainLayout>
  );
}

export default ErrorPage;
