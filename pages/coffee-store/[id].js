import { useRouter } from "next/router";
import Link from "next/link";
import coffeeStoreData from "../../data/coffee-stores.json";
import Head from "next/head";

import styles from "../../styles/Coffee-store.module.css";
import Image from "next/image";

const CoffeeStore = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const { name, address, neighbourhood, imgUrl } = props.coffeeStore;

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
              <Image src={imgUrl} width={360} height={216} />
            </section>
            <section className={styles.main}>
              <div className={styles.mainContainer}>
                <div className={styles.header}>
                  <span className={styles.spanHead}>{name}</span>
                </div>
                <div className={styles.aboutFood}>
                  <p className={styles.pLight}>{address}</p>
                </div>
                <div className={styles.features}>
                  <span className={styles.spanLight}>{neighbourhood}</span>
                </div>
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

export function getStaticProps({ params }) {
  return {
    props: {
      coffeeStore: coffeeStoreData.find((v) => v.id == params.id),
    },
  };
}

export function getStaticPaths() {
  const paths = coffeeStoreData.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
    };
  });
  return { paths, fallback: true };
}
export default CoffeeStore;
