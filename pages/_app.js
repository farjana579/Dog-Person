import Footer from "../components/Footer/footer";
import Navigation from "../components/Navigation/Navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation></Navigation>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
