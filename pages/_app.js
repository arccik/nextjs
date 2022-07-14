import "../styles/globals.css";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Footer>
      <Component {...pageProps} />
    </Footer>
  );
}

export default MyApp;
