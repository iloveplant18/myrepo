import Header from "./partials/Header.jsx";
import Footer from "./partials/footer/Footer.jsx";
import Banner from "./partials/Banner.jsx";

function AppLayout({ children, bannerText }) {
  return (
    <>
      <Header />
      {bannerText && <Banner title={bannerText} />}
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;
