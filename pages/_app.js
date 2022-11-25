import Footer from "../components/Home/footer";
import Navigation from "../components/Home/Navigation";
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
