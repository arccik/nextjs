import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/Coctail.module.css";

export async function getStaticProps(props) {
  try {
    const response = await fetch(
      "http://localhost:3000/api/coctails?search=vodka"
    ).then((data) => data.json());
    return {
      props: {
        coctails: response,
      },
    };
  } catch (error) {
    console.log(error);
    return { props: { coctails: false } };
  }
}

export function getStaticPath() {
  return {
    paths: [
      {
        params: { search: "vodka" },
      },
      {
        params: { search: "gin" },
      },
    ],
    fallback: false,
  };
}

const Coctails = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Link href="/">Back to home </Link>
      <h1>Coctails</h1>
      {props.coctails.drinks.map((drink) => (
        <div className={styles.card} key={drink.idDrink}>
          <Image
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            width={200}
            height={200}
            layout="responsive"
          />
          <div className={styles.container}>
            <h2>
              <b>{drink.strDrink}</b>
            </h2>
            <div className={styles.grid}>
              <p>{drink.strCategory}</p>
              <p>Glass: {drink.strGlass}</p>
              <p>{drink.strInstructions}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Coctails;
