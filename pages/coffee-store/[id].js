import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import styles from "../../styles/Coffee-store.module.css";
import { fetchCoffeeStores } from "../../lib/coffee-store";

export async function getStaticProps({ params }) {
  const coffeeStores = await fetchCoffeeStores();
  return {
    props: {
      coffeeStore: coffeeStores.find((v) => v.fsq_id == params.id),
    },
  };
}

export async function getStaticPaths() {
  const coffeeStores = await fetchCoffeeStores();
  const paths = coffeeStores.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.fsq_id.toString(),
      },
    };
  });
  return { paths, fallback: true };
}

const CoffeeStore = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const { name, location, imgUrl } = props.coffeeStore;

  const handleUpvoteButton = () => {
    console.log("Handle Vote");
  };
  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.linkWrapper}>
            <Link href="/">
              <div className={styles.redFire}>x</div>
            </Link>
          </div>
          <div className={styles.card}>
            <section className={styles.photo}>
              <Image
                src={
                  imgUrl ||
                  "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                }
                width={360}
                height={216}
              />
            </section>
            <section className={styles.main}>
              <div className={styles.mainContainer}>
                <div className={styles.header}>
                  <span className={styles.spanHead}>{name}</span>
                </div>
                <div className={styles.aboutFood}>
                  <p className={styles.pLight}>{location.address}</p>
                </div>
                {location.neighborhood && (
                  <div className={styles.features}>
                    <span className={styles.spanLight}>
                      {location.neighborhood}
                    </span>
                  </div>
                )}
              </div>
              <div className={styles.btn}>
                <button onClick={handleUpvoteButton}>Up Vote! </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;
