import Head from "next/head";
import Banner from "../components/banner/Banner";
import styles from "../styles/Home.module.css";
import Card from "../components/card/Card";
import { fetchCoffeeStores } from "../lib/coffee-store";

export async function getStaticProps() {
  const coffeeStores = await fetchCoffeeStores();
  return {
    props: {
      coffeeStores,
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
                  key={store.fsq_id}
                  name={store.name}
                  imgUrl={
                    store.imgUrl ||
                    "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                  }
                  href={`/coffee-store/${store.fsq_id}`}
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
