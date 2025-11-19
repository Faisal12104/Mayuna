import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default DefaultLayout;