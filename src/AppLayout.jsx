import Header from "./components/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Banner from "./components/Banner.jsx";

function AppLayout({ children, bannerText, cartCount }) {
  return (
    <>
      <Header cartCount={cartCount} />
      {bannerText && <Banner title={bannerText} />}
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;
