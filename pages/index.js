import Head from "next/head";
import Banner from "../components/banner/Banner";
import styles from "../styles/Home.module.css";
import Card from "../components/card/Card";
import coffeeStoresData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores: coffeeStoresData,
    },
  };
}

export default function Home(props) {
  const handleOnButtonBtnClick = () => {
    console.log("Clicked");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Shop Finder</title>
        <meta name="description" content="Discover your Local Coffee Shops" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View Stores Nearby"
          handleOnClick={handleOnButtonBtnClick}
        />
        {props.coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>London Stores</h2>

            <div className={styles.cardLayout}>
              {props.coffeeStores.map((store, i) => (
                <Card
                  key={store.id}
                  name={store.name}
                  imgUrl={store.imgUrl}
                  href={`/coffee-store/${store.id}`}
                  className={styles.card}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
