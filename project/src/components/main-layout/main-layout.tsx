import Footer from '../footer/footer';
import Header from '../header/header';

type MainLayoutProps = {
  children: JSX.Element,
}

function MainLayout({children}: MainLayoutProps): JSX.Element {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}

export default MainLayout;
